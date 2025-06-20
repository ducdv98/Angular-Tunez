# Angular Tunez Backend - Project Structure

This NestJS application serves as a wrapper for the `ytmusic-api` package, providing a clean REST API for YouTube Music interactions.

## 📁 Project Structure

```
src/
├── modules/                    # Feature modules (Domain-driven)
│   └── music/                 # Music module - main business domain
│       ├── dto/               # Data Transfer Objects
│       │   └── search-query.dto.ts
│       ├── interfaces/        # Module-specific interfaces
│       │   └── music.interface.ts
│       ├── music.controller.ts # REST endpoints
│       ├── music.service.ts   # Business logic & ytmusic-api wrapper
│       └── music.module.ts    # Module definition
│
├── common/                    # Shared utilities and components
│   ├── filters/              # Exception filters
│   │   └── http-exception.filter.ts
│   ├── interceptors/         # Response interceptors
│   │   └── response.interceptor.ts
│   ├── guards/               # Authentication & authorization
│   │   └── api-key.guard.ts
│   └── interfaces/           # Common interfaces
│       └── api-response.interface.ts
│
├── config/                   # Application configuration
│   └── app.config.ts        # Centralized config management
│
├── app.module.ts            # Root application module
└── main.ts                  # Application entry point
```

## 🏗️ Architecture Principles

### 1. Domain-Driven Design (DDD)
- Code organized around business domains (music)
- Each module encapsulates related functionality
- Clear separation between business logic and infrastructure

### 2. Clean Architecture
- Dependency injection for loose coupling
- Interfaces for abstraction
- Separation of concerns

### 3. Module Structure
Each module follows a consistent structure:
- **Controller**: HTTP layer, handles requests/responses
- **Service**: Business logic layer, interacts with external APIs
- **DTOs**: Data validation and transformation
- **Interfaces**: Type definitions and contracts
- **Module**: Dependency injection configuration

## 🔗 API Endpoints

All endpoints are prefixed with `/api/v1/music`

### Search Endpoints
- `GET /search/songs?query=<search_term>&limit=<number>`
- `GET /search/artists?query=<search_term>&limit=<number>`
- `GET /search/albums?query=<search_term>&limit=<number>`
- `GET /search/playlists?query=<search_term>&limit=<number>`

### Response Format
All responses follow a consistent format:
```json
{
  "success": true,
  "data": [...],
  "timestamp": "2025-01-27T..."
}
```

### Error Handling
Global exception filter ensures consistent error responses:
```json
{
  "success": false,
  "statusCode": 400,
  "timestamp": "2025-01-27T...",
  "path": "/api/v1/music/search/songs",
  "method": "GET",
  "message": "Error details"
}
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run start:dev
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3000/api/v1/music/search/songs?query=adele&limit=5
   ```

## 🔧 Configuration

Configuration is centralized in `src/config/app.config.ts`:
- Port settings
- CORS configuration
- Rate limiting
- API versioning

Environment variables can be set via `.env` file (see `.env.example`).

## 🛡️ Security Features

- **CORS Protection**: Configurable origins
- **Rate Limiting**: Protection against abuse (future implementation)
- **API Key Authentication**: Guard for secure access (future implementation)
- **Input Validation**: DTOs with class-validator decorators
- **Global Exception Handling**: Consistent error responses

## 📦 Future Enhancements

This structure is designed to easily accommodate:
- Additional music providers (Spotify, Apple Music)
- User management and playlists
- Caching layer (Redis)
- Database integration (PostgreSQL/MongoDB)
- Real-time features (WebSockets)
- API documentation (Swagger)
- Health checks and monitoring
- Queue system for heavy operations

## 🧪 Testing

The project follows testing best practices:
- Unit tests for services and controllers
- Integration tests for modules
- E2E tests for complete workflows

Run tests with:
```bash
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:cov      # Coverage report
```

## 📝 Coding Standards

- **TypeScript**: Strict typing, no `any` usage
- **Naming**: kebab-case for files, PascalCase for classes
- **Imports**: Organized by type (Angular, third-party, relative)
- **Error Handling**: Comprehensive try-catch blocks
- **Logging**: Structured logging with context
- **Documentation**: JSDoc comments for complex functions 