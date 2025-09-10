/**
 * welcome-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::welcome-page.welcome-page" as any,
  ({ strapi }) => ({
    async find(ctx) {
      try {
        const entity = await strapi.entityService.findMany(
          "api::welcome-page.welcome-page" as any,
          {
            populate: ["backgroundImage"],
          }
        );

        return { data: entity };
      } catch (err) {
        ctx.throw(500, err);
      }
    },

    async update(ctx) {
      try {
        const { data } = ctx.request.body;

        const entity = await strapi.entityService.update(
          "api::welcome-page.welcome-page" as any,
          1,
          {
            data,
            populate: ["backgroundImage"],
          }
        );

        return { data: entity };
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
