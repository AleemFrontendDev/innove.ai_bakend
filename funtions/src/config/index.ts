import { defineString, defineInt } from 'firebase-functions/params';

// Environment configuration using Firebase Functions parameters
export const config = {
  gemini: {
    apiKey: defineString('GEMINI_API_KEY'),
    model: defineString('GEMINI_MODEL', { default: 'gemini-1.5-flash' }),
    maxTokens: defineInt('GEMINI_MAX_TOKENS', { default: 1000 }),
    temperature: defineString('GEMINI_TEMPERATURE', { default: '0.7' }),
  },
  storage: {
    bucketName: defineString('STORAGE_BUCKET_NAME'),
    maxFileSize: defineInt('MAX_FILE_SIZE_MB', { default: 10 }),
    allowedMimeTypes: defineString('ALLOWED_MIME_TYPES', {
      default: 'image/jpeg,image/png,audio/mpeg,audio/wav',
    }),
  },
  notifications: {
    fcmServerKey: defineString('FCM_SERVER_KEY'),
    defaultPriority: defineString('FCM_DEFAULT_PRIORITY', { default: 'high' }),
  },
  app: {
    environment: defineString('NODE_ENV', { default: 'development' }),
    logLevel: defineString('LOG_LEVEL', { default: 'info' }),
    corsOrigins: defineString('CORS_ORIGINS', { default: '*' }),
  },
};

// Type-safe configuration interface
export interface AppConfig {
  gemini: {
    apiKey: string;
    model: string;
    maxTokens: number;
    temperature: number;
  };
  storage: {
    bucketName: string;
    maxFileSize: number;
    allowedMimeTypes: string[];
  };
  notifications: {
    fcmServerKey: string;
    defaultPriority: string;
  };
  app: {
    environment: string;
    logLevel: string;
    corsOrigins: string[];
  };
}

// Helper function to get resolved configuration values
export function getConfig(): AppConfig {
  return {
    gemini: {
      apiKey: config.gemini.apiKey.value(),
      model: config.gemini.model.value(),
      maxTokens: config.gemini.maxTokens.value(),
      temperature: parseFloat(config.gemini.temperature.value()),
    },
    storage: {
      bucketName: config.storage.bucketName.value(),
      maxFileSize: config.storage.maxFileSize.value(),
      allowedMimeTypes: config.storage.allowedMimeTypes.value().split(','),
    },
    notifications: {
      fcmServerKey: config.notifications.fcmServerKey.value(),
      defaultPriority: config.notifications.defaultPriority.value(),
    },
    app: {
      environment: config.app.environment.value(),
      logLevel: config.app.logLevel.value(),
      corsOrigins: config.app.corsOrigins.value().split(','),
    },
  };
}
