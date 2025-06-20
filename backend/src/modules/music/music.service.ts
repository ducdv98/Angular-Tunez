import { Injectable, Logger } from '@nestjs/common';
import YTMusic from 'ytmusic-api';

@Injectable()
export class MusicService {
  private readonly logger = new Logger(MusicService.name);
  private ytMusic: YTMusic;

  constructor() {
    this.ytMusic = new YTMusic();
  }

  async initialize(): Promise<void> {
    try {
      await this.ytMusic.initialize();
      this.logger.log('YouTube Music API initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize YouTube Music API', error);
      throw error;
    }
  }

  async searchSongs(query: string, limit?: number) {
    try {
      const results = await this.ytMusic.searchSongs(query);
      // Apply limit if specified
      return limit ? results.slice(0, limit) : results;
    } catch (error) {
      this.logger.error(`Failed to search songs for query: ${query}`, error);
      throw error;
    }
  }

  async searchArtists(query: string, limit?: number) {
    try {
      const results = await this.ytMusic.searchArtists(query);
      // Apply limit if specified
      return limit ? results.slice(0, limit) : results;
    } catch (error) {
      this.logger.error(`Failed to search artists for query: ${query}`, error);
      throw error;
    }
  }

  async searchAlbums(query: string, limit?: number) {
    try {
      const results = await this.ytMusic.searchAlbums(query);
      // Apply limit if specified
      return limit ? results.slice(0, limit) : results;
    } catch (error) {
      this.logger.error(`Failed to search albums for query: ${query}`, error);
      throw error;
    }
  }

  async searchPlaylists(query: string, limit?: number) {
    try {
      const results = await this.ytMusic.searchPlaylists(query);
      // Apply limit if specified
      return limit ? results.slice(0, limit) : results;
    } catch (error) {
      this.logger.error(
        `Failed to search playlists for query: ${query}`,
        error,
      );
      throw error;
    }
  }
}
