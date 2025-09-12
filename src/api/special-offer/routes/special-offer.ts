export default {
  routes: [
    {
      method: "GET",
      path: "/special-offers",
      handler: "special-offer.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/special-offers/active",
      handler: "special-offer.findActive",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/special-offers/featured",
      handler: "special-offer.findFeatured",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/special-offers/:id",
      handler: "special-offer.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/special-offers",
      handler: "special-offer.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/special-offers/:id",
      handler: "special-offer.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/special-offers/:id",
      handler: "special-offer.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
