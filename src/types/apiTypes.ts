export interface Media {
  name: string;
  resource_type: 'image' | 'video';
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface SEO {
  defaultMeta: Array<{
    content: string;
    type: string;
    value: string;
  }>;
  description: string;
  keywords: string[];
  schema: Array<{
    meta_name: string;
    meta_value: string;
    type: string;
  }>;
  title: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name?: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: any[];
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  seo: SEO;
  cta_text: CtaText;
  sections: Section[];
  delivery_method: string;
  is_cohort_based_course: boolean;
  modality: string;
  platform: string;
  start_at: string;
  type: string;
}

export interface ApiResponse {
  code: number;
  message: string;
  data: ProductData;
  error: any[];
  payload: any[];
  status_code: number;
}