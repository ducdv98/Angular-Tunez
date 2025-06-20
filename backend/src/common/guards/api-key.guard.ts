import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'];

    // For now, just allow all requests
    // In the future, implement proper API key validation
    return true;

    // Future implementation:
    // if (!apiKey || typeof apiKey !== 'string') {
    //   throw new UnauthorizedException('API key is required');
    // }
    //
    // const isValidApiKey = this.validateApiKey(apiKey);
    // if (!isValidApiKey) {
    //   throw new UnauthorizedException('Invalid API key');
    // }
    //
    // return true;
  }

  private validateApiKey(apiKey: string): boolean {
    // Implement your API key validation logic here
    // This could check against a database, environment variable, etc.
    return process.env.API_KEY === apiKey;
  }
} 