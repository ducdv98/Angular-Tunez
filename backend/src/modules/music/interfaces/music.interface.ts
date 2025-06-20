export interface Song {
  id: string;
  title: string;
  artist: string;
  duration?: string;
  thumbnail?: string;
  url?: string;
}

export interface Artist {
  id: string;
  name: string;
  thumbnail?: string;
  subscriberCount?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year?: string;
  thumbnail?: string;
  trackCount?: number;
}

export interface Playlist {
  id: string;
  title: string;
  author: string;
  thumbnail?: string;
  trackCount?: number;
  description?: string;
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  query: string;
}
