import { useState, useEffect } from "react";
import PossessionAlert from "@/components/PossessionAlert";

const usePossessionDetector = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Random possession alert trigger (5% chance every 30 seconds)
    const interval = setInterval(() => {
      if (Math.random() < 0.05) {
        setShowAlert(true);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Manual trigger for testing or specific events
  const triggerPossessionAlert = () => {
    setShowAlert(true);
  };

  return {
    showAlert,
    setShowAlert,
    triggerPossessionAlert
  };
};

export { usePossessionDetector, PossessionAlert };