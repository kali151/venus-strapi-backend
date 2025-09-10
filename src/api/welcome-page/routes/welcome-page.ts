/**
 * welcome-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::welcome-page.welcome-page" as any,
  {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      },
      update: {
        auth: {
          scope: ["api::welcome-page.welcome-page.update"],
        },
      },
    },
  }
);
