import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'venus-strapi-backend-production.up.railway.app',
        '*.railway.app',
        '*.up.railway.app'
      ],
      host: true,
      port: 1337,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
