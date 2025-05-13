"use client";

import { useEffect, useState } from "react";
import { usePwa } from "@/hooks/usePwa";

// Define MSStream type for Safari detection
interface ExtendedWindow extends Window {
  MSStream?: unknown;
}

// Define extended navigator for standalone property
interface ExtendedNavigator extends Navigator {
  standalone?: boolean;
}

// Component that displays PWA installation button and instructions
// Handles different installation flows for various platforms
export function PwaInstaller() {
  // Get PWA installation status and methods from custom hook
  const { isInstallable, isInstalled, installApp } = usePwa();

  // State to control visibility of iOS-specific installation instructions
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  // Detect iOS devices and show appropriate installation UI
  // iOS doesn't support standard PWA installation prompt
  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as ExtendedWindow).MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isStandalone =
      "standalone" in window.navigator &&
      (window.navigator as ExtendedNavigator).standalone;

    if (isIOS && isSafari && !isStandalone && !isInstalled) {
      setShowIOSInstructions(true);
    }
  }, [isInstalled]);

  // Handle installation button click based on platform capabilities
  const handleInstallClick = async () => {
    if (isInstallable) {
      await installApp();
    } else {
      setShowIOSInstructions(true);
    }
  };

  // Don't show anything if app is already installed
  if (isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* Install App Button with download icon */}
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Download app to your device"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 16L12 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11L12 8 15 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16.5L12 20.5L16 16.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download App
      </button>

      {/* iOS Installation Instructions Modal */}
      {showIOSInstructions && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-install-title"
        >
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            {/* Close button for modal */}
            <button
              onClick={() => setShowIOSInstructions(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close installation instructions"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold mb-4" id="ios-install-title">
              Install this app on your device
            </h3>
            <p className="text-gray-600 mb-4">To install this app on iOS:</p>
            {/* Step-by-step installation instructions */}
            <ol className="list-decimal pl-5 mb-4 text-gray-600">
              <li>Tap the Share button in Safari</li>
              <li>Scroll down and tap &quot;Add to Home Screen&quot;</li>
              <li>Tap &quot;Add&quot; in the upper right corner</li>
            </ol>
            <button
              onClick={() => setShowIOSInstructions(false)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              aria-label="Close installation instructions"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
