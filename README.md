# Healthtech Firebase Backend

A Google Cloud-native backend for a healthtech mobile application using Firebase Functions with Node.js/TypeScript.

## Features

- **Health Metrics API**: Store and retrieve user health metrics
- **AI-Powered Insights**: Generate health insights using Google Gemini AI
- **Push Notifications**: Send targeted notifications to users
- **File Upload**: Handle voice recordings and images via Google Cloud Storage
- **Authentication**: Secure endpoints with Firebase Auth
- **Real-time Data**: Firestore for scalable data storage

## Project Structure

```
functions/
├── src/
│   ├── config/          # Environment configuration
│   ├── functions/       # Firebase Functions
│   ├── middleware/      # Authentication and validation middleware
│   ├── services/        # Business logic services
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── test/            # Test setup and utilities
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase CLI
- Google Cloud Project with Firebase enabled

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   cd functions
   npm install
   ```

3. Copy environment configuration:
   ```bash
   cp .env.example .env
   ```

4. Fill in your environment variables in `.env`

### Development

- **Build**: `npm run build`
- **Watch mode**: `npm run build:watch`
- **Local emulator**: `npm run serve`
- **Run tests**: `npm test`
- **Lint code**: `npm run lint`

### Deployment

```bash
npm run deploy
```

## Environment Variables

See `.env.example` for required environment variables.

## API Endpoints

- `POST /metrics` - Store health metrics
- `GET /summary` - Generate AI health insights
- `POST /notify` - Send push notifications
- `POST /upload` - Upload files to Cloud Storage

## Testing

The project uses Jest for testing with Firebase emulators for integration tests.

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## License

Private - Healthtech Application Backend