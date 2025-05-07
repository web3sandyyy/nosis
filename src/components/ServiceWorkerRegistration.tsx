"use client";

import { useEffect, useState } from "react";

export function ServiceWorkerRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js");

        console.log("Service worker registered successfully", reg);
        setIsRegistered(true);
        setRegistration(reg);

        // Log when the service worker update is found
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            console.log("Service worker update found, installing...");
            newWorker.addEventListener("statechange", () => {
              console.log("Service worker state:", newWorker.state);
            });
          }
        });
      } catch (error) {
        console.error("Service worker registration failed:", error);
      }
    };

    registerServiceWorker();

    return () => {
      // Nothing to clean up for service worker registration
    };
  }, []);

  return null; // This is a utility component, no UI needed
}
