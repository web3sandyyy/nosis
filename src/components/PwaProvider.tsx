"use client";

import { ReactNode } from "react";
import { ServiceWorkerRegistration } from "./ServiceWorkerRegistration";
import { PwaInstaller } from "./PwaInstaller";

interface PwaProviderProps {
  children: ReactNode;
}

export function PwaProvider({ children }: PwaProviderProps) {
  return (
    <>
      {/* Register service worker (no UI, just functionality) */}
      <ServiceWorkerRegistration />

      {/* Add the PWA installer component */}
      <PwaInstaller />

      {/* Render the app content */}
      {children}
    </>
  );
}
