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
    tags?: string[];
  }[];
};

export function extractCldImages(cloudinaryResponse: CloudinaryResponse): CloudinaryResource[] {
  const imageInfo: CloudinaryResource[] = cloudinaryResponse.resources.map(
    ({ secure_url: url, width, height, tags }) => ({
      url,
      width,
      height,
      tags,
    })
  );
  return imageInfo;
}
