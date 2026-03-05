'use client';

import { useState, useEffect } from 'react';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export function usePlaceholderImages() {
  const [images, setImages] = useState<ImagePlaceholder[]>([]);

  useEffect(() => {
    fetch('/placeholder-images.json')
      .then(response => response.json())
      .then(data => setImages(data.placeholderImages));
  }, []);

  return images;
}
