export default () => ({
  app: {
    environment: process.env.APP_ENV || 'local',
    port: parseInt(process.env.APP_PORT) || 3000,
  },
});
