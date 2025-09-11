import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::special-offer.special-offer', ({ strapi }) => ({
  // Find all special offers with populated relations
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::special-offer.special-offer', {
      ...query,
      populate: {
        image: true,
        gallery: true,
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // Find one special offer by ID with populated relations
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::special-offer.special-offer', id, {
      ...query,
      populate: {
        image: true,
        gallery: true,
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // Get active offers only
  async findActive(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::special-offer.special-offer', {
      ...query,
      filters: {
        isActive: true,
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

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // Get featured offers
  async findFeatured(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::special-offer.special-offer', {
      ...query,
      filters: {
        isActive: true,
        isFeatured: true,
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

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
