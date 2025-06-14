declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      EMAIL_SERVER_HOST: string;
      EMAIL_SERVER_PORT: string;
      EMAIL_SERVER_USER: string;
      EMAIL_SERVER_PASSWORD: string;
      EMAIL_FROM: string;
      NOTIFICATION_EMAIL: string;
    }
  }
}
