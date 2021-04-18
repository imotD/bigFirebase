importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "653165921705",
  apiKey: "AIzaSyDdDBX34uuKFYeSd2eYSEf-g9NIx6ifazM",
  projectId: "fir-push-74708",
  appId: "1:653165921705:web:89daf46fc2cccf1f1430b8"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
