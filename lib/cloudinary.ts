type CloudinaryResource = {
  url: string;
  width: number;
  height: number;
};

type CloudinaryResponse = {
  resources: {
    secure_url: string;
    width: number;
    height: number;
  }[];
};

export function extractCldImages(cloudinaryResponse: CloudinaryResponse): CloudinaryResource[] {
  const imageInfo: CloudinaryResource[] = cloudinaryResponse.resources.map(({ secure_url: url, width, height }) => ({
    url,
    width,
    height,
  }));
  return imageInfo;
}
