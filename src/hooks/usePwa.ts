"use client";

import { useState, useEffect } from "react";
import { getInstallStatus } from "@/app/actions";

interface PWAStatus {
  isInstallable: boolean;
  isInstalled: boolean;
  installPromptEvent: any | null;
}

export function usePwa() {
  const [status, setStatus] = useState<PWAStatus>({
    isInstallable: false,
    isInstalled: false,
    installPromptEvent: null,
  });

  useEffect(() => {
    // Check if the PWA is ready
    const checkPwaStatus = async () => {
      try {
        await getInstallStatus();
      } catch (error) {
        console.error("Error checking PWA status:", error);
      }
    };

    checkPwaStatus();

    // Check if installable and if already installed
    const checkInstallable = () => {
      if (
        "standalone" in window.navigator ||
        window.matchMedia("(display-mode: standalone)").matches
      ) {
        setStatus((prev) => ({ ...prev, isInstalled: true }));
      }
    };

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setStatus((prev) => ({
        ...prev,
        isInstallable: true,
        installPromptEvent: e,
      }));
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", () => {
      setStatus((prev) => ({ ...prev, isInstalled: true }));
    });

    checkInstallable();

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const installApp = async () => {
    if (!status.installPromptEvent) return false;

    try {
      await status.installPromptEvent.prompt();
      const choiceResult = await status.installPromptEvent.userChoice;

      if (choiceResult.outcome === "accepted") {
        setStatus((prev) => ({
          ...prev,
          isInstalled: true,
          installPromptEvent: null,
        }));
        return true;
      }
    } catch (error) {
      console.error("Error installing app:", error);
    }
    return false;
  };

  return {
    ...status,
    installApp,
  };
}
