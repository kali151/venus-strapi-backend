/**
 * welcome-page service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::welcome-page.welcome-page",
  ({ strapi }) => ({
    async getWelcomeData() {
      try {
        const welcomeData = await strapi.entityService.findMany(
          "api::welcome-page.welcome-page",
          {
            populate: ["backgroundImage"],
          }
        );

        return welcomeData;
      } catch (error) {
        console.error("Error fetching welcome data:", error);
        return null;
      }
    },

    async updateWelcomeData(data: any) {
      try {
        const updatedData = await strapi.entityService.update(
          "api::welcome-page.welcome-page",
          1,
          {
            data,
            populate: ["backgroundImage"],
          }
        );

        return updatedData;
      } catch (error) {
        console.error("Error updating welcome data:", error);
        throw error;
      }
    },
  })
);
