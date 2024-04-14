import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogList: BlogType[] = [];

  constructor(private blogsService: BlogsService) {}

  async ngOnInit(): Promise<void> {
    const data = await this.blogsService.getBlogs();
    const mappedData = data.map((b) => ({
      imageUrl: b.image_url,
      title: b.title,
      ID: b.ID,
      likesCount: b.likes_count,
      commentsCount: 0,
    }));
    this.blogList = mappedData;
  }
}

export type BlogType = {
  imageUrl: string;
  title: string;
  ID: number;
  likesCount: number;
  commentsCount: number;
};
