export interface GuestMessage {
  name: string;
  message: string;
  timestamp: Date;
}

export interface Photo {
  id: number;
  url: string;
  caption?: string;
}

export enum SectionType {
  HERO = 'HERO',
  SYNOPSIS = 'SYNOPSIS',
  GALLERY = 'GALLERY',
  TIMELINE = 'TIMELINE',
  LOCATION = 'LOCATION',
  GUESTBOOK = 'GUESTBOOK',
}
