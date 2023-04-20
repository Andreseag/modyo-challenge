export interface Animals {
  entries: Entry[];
  meta: Meta2;
}

interface Meta2 {
  total_entries: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface Entry {
  meta: Meta;
  fields: Fields;
}

interface Fields {
  image: Image;
}

export interface Image {
  url: string;
  tags: any[];
  uuid: string;
  title: string;
  alt_text?: any;
  description?: any;
  content_type: string;
}

interface Meta {
  name: string;
  slug: string;
  tags: any[];
  type: string;
  uuid: string;
  space: string;
  author: Author;
  locale: string;
  excerpt: string;
  private: boolean;
  targets: any[];
  category?: any;
  created_at: string;
  updated_at: string;
  published_at: string;
  version_type: string;
  category_name?: any;
  category_slug?: any;
  unpublished_at?: any;
  available_locales: string[];
}

interface Author {}
