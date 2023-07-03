interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({ endpoint, query, wrappedByKey, wrappedByList }: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}

// ****
interface ImageInfo {
  url: string | any;
  width?: number;
  height?: number;
}

interface ImageData {
  data: Array<{
    attributes: {
      Image: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    };
  }>;
}

export function extractImages(jsonData: ImageData): ImageInfo[] {
  const images: ImageInfo[] = [];

  jsonData.data.forEach((item) => {
    if (
      item.attributes &&
      item.attributes.Image &&
      item.attributes.Image.data &&
      item.attributes.Image.data.attributes
    ) {
      const imageData = item.attributes.Image.data.attributes;

      if (imageData.url) {
        images.push({
          url: imageData.url,
          width: imageData.width,
          height: imageData.height,
        });
      }
    }
  });

  return images;
}

// ***
export function extractAvatarUrl(response): string | null {
  if (
    response &&
    response.data &&
    response.data.attributes &&
    response.data.attributes.Avatar &&
    response.data.attributes.Avatar.data &&
    response.data.attributes.Avatar.data.attributes
  ) {
    return response.data.attributes.Avatar.data.attributes.url;
  } else {
    return null;
  }
}
