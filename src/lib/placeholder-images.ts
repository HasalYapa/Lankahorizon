import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function getImage(id: string): ImagePlaceholder {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        console.warn(`Image with id "${id}" not found.`);
        return {
            id: 'not-found',
            description: 'Image not found',
            imageUrl: 'https://picsum.photos/seed/error/600/400',
            imageHint: 'error placeholder'
        }
    }
    return image;
}
