"use client";

import { useEffect, useState } from "react";

export function usePageLoader(splineLoaded) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [minimumTimeFinished, setMinimumTimeFinished] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await document.fonts.ready;
        setFontsLoaded(true);
      } catch (error) {
        console.log(error);
        setFontsLoaded(true);
      }
    }

    loadFonts();
  }, []);

  useEffect(() => {
    const images = Array.from(document.images);

    async function loadImages() {
      const imagePromises = images.map((image) => {
        if (image.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        });
      });

      await Promise.all(imagePromises);

      setImagesLoaded(true);
    }

    loadImages();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumTimeFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const pageLoaded =
    fontsLoaded &&
    imagesLoaded &&
    splineLoaded;

  const canFinishLoading =
    pageLoaded &&
    minimumTimeFinished;

  return {
    pageLoaded,
    canFinishLoading,
  };
}