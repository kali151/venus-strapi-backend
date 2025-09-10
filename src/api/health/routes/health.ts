export default {
  routes: [
    {
      method: "GET",
      path: "/health",
      handler: "health.index",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/api/health",
      handler: "health.index",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
