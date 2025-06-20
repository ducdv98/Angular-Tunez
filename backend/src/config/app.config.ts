export interface AppConfig {
  port: number;
  cors: {
    origin: string[];
    methods: string[];
    credentials: boolean;
  };
  api: {
    prefix: string;
    version: string;
  };
  rateLimit: {
    ttl: number;
    limit: number;
  };
}

export const appConfig: AppConfig = {
  port: parseInt(process.env.PORT || '3000', 10),
  cors: {
    origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  },
  api: {
    prefix: 'api',
    version: 'v1',
  },
  rateLimit: {
    ttl: parseInt(process.env.RATE_LIMIT_TTL || '60000', 10), // 1 minute
    limit: parseInt(process.env.RATE_LIMIT_MAX || '100', 10), // 100 requests per minute
  },
};
