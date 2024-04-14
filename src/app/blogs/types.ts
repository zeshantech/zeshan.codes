export type BlogType = {
  imageUrl: string;
  title: string;
  ID: number;
  likesCount: number;
  commentsCount: number;
};

export type GetBlogType = {
  ID: number;
  active: boolean;
  content: string;
  created_at: Date;
  image_url: string;
  likes_count: number;
  title: string;
};
