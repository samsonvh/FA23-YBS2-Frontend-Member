import React, { useEffect, useState } from "react";
import useNotificationPermission from "./useNotificationPermission";
import { getToken, isSupported } from "firebase/messaging";
import { messaging } from "../firebase/firebase";

const useFCMToken = () => {
  const permission = useNotificationPermission();
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    const retrieveToken = async () => {
      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        if (permission === "granted") {
          const isFCMSuppport = await isSupported();
          if (!isFCMSuppport) return;
          const fcmtoken = await getToken(messaging(), {
            vapidKey:
              "BC03xuJ-dJ53tLr-Ct0eXy7kYst5n6vwHmFUTv6NQiKDgg11dqB28cr17anAcS3V7cIwwo3q-WgMhO037x7OUZs",
          });
          setFcmToken(fcmtoken);
        }
      }
    };
    retrieveToken();
  }, [permission]);

  return fcmToken;
};

export default useFCMToken;
