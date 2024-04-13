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

  async getBlogs(limit = 10, skip = 0) {
    try {
      const { data, error } = await this.supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })
        .range(skip, limit);

      if (error) throw error;

      return data;
    } catch (error) {
      console.error('Error getting blogs:', error);
      throw error;
    }
  }
}
