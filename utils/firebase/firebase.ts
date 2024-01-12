"use client"
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig : FirebaseOptions = {
  apiKey: "AIzaSyBSUFP1u1iNzPOypjxSkFAF4rM38M40aKY",
  authDomain: "yacht-booking-system-2.firebaseapp.com",
  projectId: "yacht-booking-system-2",
  storageBucket: "yacht-booking-system-2.appspot.com",
  messagingSenderId: "99667106083",
  appId: "1:99667106083:web:a6586f8c55bcfbadab9496",
};

export const app = initializeApp(firebaseConfig);
export const messaging = () => getMessaging(app);

// export const requestPermission = () => {
//   console.log("Requesting User Permission......");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification User Permission Granted.");
//       return getToken(messaging, {
//         vapidKey: `BC03xuJ-dJ53tLr-Ct0eXy7kYst5n6vwHmFUTv6NQiKDgg11dqB28cr17anAcS3V7cIwwo3q-WgMhO037x7OUZs`,
//       })
//         .then((currentToken) => {
//           if (currentToken) {
//             console.log("Client Token: ", currentToken);
//           } else {
//             console.log("Failed to generate the app registration token.");
//           }
//         })
//         .catch((err) => {
//           console.log(
//             "An error occurred when requesting to receive the token.",
//             err
//           );
//         });
//     } else {
//       console.log("User Permission Denied.");
//     }
//   });
// };

// requestPermission();

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
