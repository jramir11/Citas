export interface Author {
  _id?: string;
  name: string;
  __v?: number;
}

export interface AuthorResp {
  message: string;
  author: Author;
}

export interface AuthorsResp {
  message: string;
  authors: Author[];
}
