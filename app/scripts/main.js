/*
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function () {
  "use strict";

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features

  const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

  if (
    "serviceWorker" in navigator &&
    (window.location.protocol === "https:" || isLocalhost)
  ) {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(function (registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function () {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            const installingWorker = registration.installing;

            installingWorker.onstatechange = function () {
              switch (installingWorker.state) {
                case "installed":
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in the page's interface.
                  break;

                case "redundant":
                  throw new Error(
                    "The installing " + "service worker became redundant."
                  );

                default:
                // Ignore
              }
            };
          }
        };
      })
      .catch(function (e) {
        console.error("Error during service worker registration:", e);
      });
  }

  // Your custom JavaScript goes here

  // Bacon adder
  const btnBacon = document.getElementById("btn-bacon");
  const sectionBacon = document.getElementById("section-bacon");

  const createImg = () => {
    const newBacon = document.createElement("img");
    newBacon.src =
      "http://media.washtimes.com.s3.amazonaws.com/media/image/2015/02/23/bacon.jpg";
    newBacon.alt = "Bacon";
    newBacon.style = "width: 100%; height: 100%";

    return newBacon;
  };

  btnBacon.addEventListener("click", () => {
    sectionBacon.appendChild(createImg());
  });

  // FORM VALIDATION
  const form = document.getElementById("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const contry = document.getElementById("contry");
  const postalCode = document.getElementById("postal-code");
  const phoneNumber = document.getElementById("phone-number");
  const creditCard = document.getElementById("credit-card");
  const securityCode = document.getElementById("sec-code");
  const expDate = document.getElementById("exp-date");
  const error = document.getElementById("error");
  const success = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    let messages = [];

    firstName.value === "" || firstName.value === null
      ? messages.push("First name is required")
      : null;
    lastName.value === "" || lastName.value === null
      ? messages.push("Last name is required")
      : null;
    email.value === "" || email.value === null
      ? messages.push("Email is required")
      : null;
    postalCode.value === "" || postalCode.value === null
      ? messages.push("Postal Code is required")
      : null;
    phoneNumber.value === "" || phoneNumber.value === null
      ? messages.push("Phone number is required")
      : null;
    creditCard.value === "" || creditCard.value === null
      ? messages.push("Credit card number is required")
      : null;
    securityCode.value === "" || securityCode.value === null
      ? messages.push("Security card number is required")
      : null;
    contry.value === "" || contry.value === null
      ? messages.push("Contry name is required")
      : null;
    expDate.value === "" || expDate.value === null
      ? messages.push("Expiration date is required")
      : null;

    if (messages.length > 0) {
      e.preventDefault();
      error.innerText = messages.join(", ");
    } else {
      e.preventDefault();
      success.innerText = "Form submitted!";
    }

    const info = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      contry: contry.value,
      postalCode: postalCode.value,
      phoneNumber: phoneNumber.value,
      creditCard: creditCard.value,
      securityCode: securityCode.value,
      expDate: expDate.value,
    };

    console.log(info);
  });
})();
