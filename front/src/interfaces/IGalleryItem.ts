export interface GalleryItem {
  image: string;
  title: string;
  location: string;
  category: 'corporate' | 'wedding' | 'social' | 'all';
  subtitle: string;
  size: 'large' | 'medium' | 'small'; // Para el grid masonry
}
