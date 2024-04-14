import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blog!: BlogType;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const blog = await this.blogsService.getBlogById(+params['ID']);
      this.blog = {
        ID: blog[0].ID,
        imageUrl: blog[0].image_url,
        likesCount: blog[0].likes_count,
        title: blog[0].title,
        content: blog[0].content,
        createdAt: blog[0].created_at,
        commentsCount: 0,
      };
      console.log(this.blog);
      
    });
  }
}

export type BlogType = {
  ID: number;
  content: string;
  createdAt: Date;
  imageUrl: string;
  likesCount: number;
  title: string;
  commentsCount: number;
};
