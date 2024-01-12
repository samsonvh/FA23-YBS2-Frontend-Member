// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");
//the Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBSUFP1u1iNzPOypjxSkFAF4rM38M40aKY",
  authDomain: "yacht-booking-system-2.firebaseapp.com",
  projectId: "yacht-booking-system-2",
  storageBucket: "yacht-booking-system-2.appspot.com",
  messagingSenderId: "99667106083",
  appId: "1:99667106083:web:a6586f8c55bcfbadab9496",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: "./logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
