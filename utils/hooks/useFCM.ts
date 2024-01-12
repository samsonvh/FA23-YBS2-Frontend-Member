import React, { useEffect, useState } from "react";
import useFCMToken from "./useFCMToken";
import { MessagePayload, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";
import { messaging } from "../firebase/firebase";

const useFCM = () => {
  const fcmToken = useFCMToken();
  const [messages, setMessages] = useState<MessagePayload[]>([]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const fcmmessaging = messaging();
      const unsubcribe = onMessage(fcmmessaging, (payload) => {
        toast.dark(payload.notification?.title);
        setMessages((messages) => [...messages, payload]);
      });
      return () => unsubcribe();
    }
  }, [fcmToken]);

  return { fcmToken, messages };
};

export default useFCM;
