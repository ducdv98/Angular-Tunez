import { Controller, Get, Query, OnModuleInit } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController implements OnModuleInit {
  constructor(private readonly musicService: MusicService) {}

  async onModuleInit() {
    await this.musicService.initialize();
  }

  @Get('search/songs')
  async searchSongs(
    @Query('query') query: string,
    @Query('limit') limit?: number,
  ) {
    return this.musicService.searchSongs(query, limit);
  }

  @Get('search/artists')
  async searchArtists(
    @Query('query') query: string,
    @Query('limit') limit?: number,
  ) {
    return this.musicService.searchArtists(query, limit);
  }

  @Get('search/albums')
  async searchAlbums(
    @Query('query') query: string,
    @Query('limit') limit?: number,
  ) {
    return this.musicService.searchAlbums(query, limit);
  }

  @Get('search/playlists')
  async searchPlaylists(
    @Query('query') query: string,
    @Query('limit') limit?: number,
  ) {
    return this.musicService.searchPlaylists(query, limit);
  }
}
