export type Content = {
  name: string;
  data: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  parts: number;
  time: number;
  tags: string[];
  preface: string;
  contents: Content[];
  aboutAuthor: string;
};
