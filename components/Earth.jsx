"use client";

import { useEffect, useRef } from "react";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default function EarthZoom({design}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let viewer;

    async function initCesium() {
      if (!containerRef.current) return;

      window.CESIUM_BASE_URL = "/_next/static/cesium";

      const Cesium = await import("cesium");

      Cesium.Ion.defaultAccessToken =
        process.env.NEXT_PUBLIC_CESIUM_TOKEN;

      viewer = new Cesium.Viewer(containerRef.current, {
        timeline: false,
        animation: false,
        baseLayerPicker: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        fullscreenButton: false,

        // ✅ map with labels
        baseLayer: Cesium.ImageryLayer.fromProviderAsync(
          Cesium.IonImageryProvider.fromAssetId(4)
        ),
      });

      // 🌙 force dark mode
      viewer.scene.globe.baseColor = Cesium.Color.BLACK;
      viewer.scene.skyBox.show = false;
      viewer.scene.backgroundColor = Cesium.Color.BLACK;

      // 🌍 start
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-100, 60, 25000000),
      });

      // 🚀 zoom
      setTimeout(() => {
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(
            -79.3832,
            43.6532,
            12000
          ),
          duration: 4,
        });
      }, 800);
    }

    initCesium();

    return () => {
      if (viewer && !viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div className={`${design} overflow-hidden bg-black shadow-2xl`}>
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}