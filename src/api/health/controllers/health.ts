/**
 * health controller
 */

export default {
  async check(ctx) {
    try {
      // Sprawdź połączenie z bazą danych
      await strapi.db.connection.raw("SELECT 1");

      ctx.body = {
        status: "ok",
        timestamp: new Date().toISOString(),
        database: "connected",
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        status: "error",
        message: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  },
};
