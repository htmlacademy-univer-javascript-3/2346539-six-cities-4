export type Review = {
    id: string;
    date: string;
    user: Author;
    comment: string;
    rating: number;
  }

export type Author = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

