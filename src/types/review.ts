export type Review = {
    'id': string;
    'date': string;
    'user': Author;
    'comment': string;
    'rating': number;
  }

export type Author = {
    'photo': string;
    'name': string;
    'isPro': boolean;
};

