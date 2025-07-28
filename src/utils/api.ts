import { ApiResponse, ProductData } from '@/types/apiTypes';

export const fetchProductData = async (lang: string = 'en'): Promise<ProductData> => {
  const response = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
      },
      next: { revalidate: 3600 }, // ISR: Revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch product data: ${response.statusText}`);
  }

  const json: ApiResponse = await response.json();

  if (json.code !== 200) {
    throw new Error(json.message || 'Unknown error occurred');
  }

  return json.data;
};