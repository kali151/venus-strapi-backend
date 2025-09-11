import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::special-offer.special-offer', ({ strapi }) => ({
  // Get active offers with custom logic
  async getActiveOffers(filters = {}) {
    const offers = await strapi.entityService.findMany('api::special-offer.special-offer', {
      filters: {
        isActive: true,
        validTo: {
          $gte: new Date().toISOString(),
        },
        ...filters,
      },
      populate: {
        image: true,
        gallery: true,
      },
      sort: { priority: 'desc', createdAt: 'desc' },
    });

    return offers;
  },

  // Get offers by category
  async getOffersByCategory(category: string) {
    const offers = await strapi.entityService.findMany('api::special-offer.special-offer', {
      filters: {
        isActive: true,
        category: category,
        validTo: {
          $gte: new Date().toISOString(),
        },
      },
      populate: {
        image: true,
        gallery: true,
      },
      sort: { priority: 'desc', createdAt: 'desc' },
    });

    return offers;
  },

  // Check if offer is valid
  async isOfferValid(offerId: number) {
    const offer = await strapi.entityService.findOne('api::special-offer.special-offer', offerId);
    
    if (!offer || !offer.isActive) {
      return false;
    }

    const now = new Date();
    const validFrom = offer.validFrom ? new Date(offer.validFrom) : null;
    const validTo = offer.validTo ? new Date(offer.validTo) : null;

    if (validFrom && now < validFrom) {
      return false;
    }

    if (validTo && now > validTo) {
      return false;
    }

    return true;
  },
}));
