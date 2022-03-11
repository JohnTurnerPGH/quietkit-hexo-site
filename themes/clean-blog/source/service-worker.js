// from: https://dev.to/paco_ita/service-workers-and-caching-strategies-explained-step-3-m4f

caches.keys().then((keys) =>
  Promise.all(keys.map(async (key) => await caches.delete(key)))
    .then(async () => await registration.unregister())
    .catch((err) => console.error("Something went wrong: ", err))
);

// OLD CODE BELOW

// self.addEventListener("install", function (e) {
//   self.skipWaiting();
// });

// self.addEventListener("activate", function (e) {
//   self.registration
//     .unregister()
//     .then(function () {
//       return self.clients.matchAll();
//     })
//     .then(function (clients) {
//       clients.forEach((client) => client.navigate(client.url));
//     });
// });
