export interface Post {
    id: number;
    title: string;
    slug: string;
    descriptions: [];
    uid: number;
    coverImage?: {
      url: string;
      alt: string;
    };
    createdAt: string;
    author?: {
      name: string;
      avatar: string;
    };
  }