import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private supabase: SupabaseClient;

  constructor(private http: HttpClient) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getBlogs(limit = 10, skip = 0): Promise<GetBlogType[]> {
    try {
      const { data, error } = await this.supabase
        .from('blog')
        .select('*')
        .order('created_at', { ascending: false })
        .range(skip, limit)
        .returns<GetBlogType[]>();

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error getting blogs:', error);
      throw error;
    }
  }

  async getBlogById(ID: number): Promise<GetBlogType[]> {
    try {
      const { data, error } = await this.supabase
        .from('blog')
        .select('*')
        .eq('ID', ID)
        .returns<GetBlogType[]>();

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error getting blogs:', error);
      throw error;
    }
  }
}

export type GetBlogType = {
  ID: number;
  active: boolean;
  content: string;
  created_at: Date;
  image_url: string;
  likes_count: number;
  title: string;
};
