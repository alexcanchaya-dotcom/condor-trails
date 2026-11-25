/* Condor Trails form helpers
 *
 * TODO: Replace this mailto: fallback with a form-service endpoint
 * (for example a Formspree form action such as
 * https://formspree.io/f/YOUR_FORM_ID) once an account is configured.
 * Until then, forms open a pre-filled email to the public contact address
 * already shown on the site (info@condortrails.com). Do not show a
 * "sent" or "subscribed" state unless a request was actually delivered.
 */
(function (global) {
  var CONTACT_EMAIL = "info@condortrails.com";

  function openMailto(subject, body) {
    var url =
      "mailto:" +
      CONTACT_EMAIL +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    global.location.href = url;
  }

  function formValuesAsBody(form) {
    var lines = [];
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.disabled) return;
      var type = (el.type || "").toLowerCase();
      if ((type === "checkbox" || type === "radio") && !el.checked) return;
      if (type === "submit" || type === "button") return;
      var value = el.value;
      if (el.tagName === "SELECT" && el.selectedOptions && el.selectedOptions[0]) {
        value = el.selectedOptions[0].textContent.replace(/\s+/g, " ").trim();
      }
      if (value == null || String(value).trim() === "") return;
      lines.push(el.name + ": " + String(value).trim());
    });
    return lines.join("\n");
  }

  function submitEmailViaMailto(e, subject, introLine) {
    e.preventDefault();
    var form = e.target;
    var input = form.querySelector('input[type="email"]');
    var email = input && input.value.trim();
    if (!email) {
      if (input) input.focus();
      return;
    }
    var body = (introLine ? introLine + "\n\n" : "") + "Email: " + email;
    openMailto(subject, body);
  }

  function handleNewsletterSubmit(e) {
    submitEmailViaMailto(
      e,
      "Newsletter signup — Condor Trails",
      "Please add this address to the Condor Trails newsletter."
    );
  }

  global.CONDOR_TRAILS_CONTACT_EMAIL = CONTACT_EMAIL;
  global.openCondorTrailsMailto = openMailto;
  global.condorTrailsFormValuesAsBody = formValuesAsBody;
  global.handleNewsletterSubmit = handleNewsletterSubmit;
  global.handleFooterNewsletterSubmit = handleNewsletterSubmit;
  global.handleBlogNewsletterSubmit = handleNewsletterSubmit;
  global.handleLeadMagnetSubmit = function (e) {
    submitEmailViaMailto(
      e,
      "Travel guide request — Condor Trails",
      "Please send the requested travel guide to this address."
    );
  };

  // Trip-page inquiry form: name, email, and an optional message.
  // TODO: Replace this mailto: fallback with a form-service endpoint
  // (for example a Formspree form action such as
  // https://formspree.io/f/YOUR_FORM_ID) once an account is configured.
  global.handleTripInquirySubmit = function (e) {
    e.preventDefault();
    var form = e.target;
    var nameInput = form.querySelector('[name="Name"]');
    var emailInput = form.querySelector('input[type="email"]');
    var name = nameInput && nameInput.value.trim();
    var email = emailInput && emailInput.value.trim();
    if (!name) {
      if (nameInput) nameInput.focus();
      return;
    }
    if (!email) {
      if (emailInput) emailInput.focus();
      return;
    }

    var tripName = (form.getAttribute("data-trip-name") || "Peru").trim();
    var subject = "Inquiry: " + tripName + " — Condor Trails";
    openMailto(subject, formValuesAsBody(form));

    form.style.display = "none";
    var wrap = form.closest(".trip-inquiry-form-wrap") || form.parentNode;
    var success = wrap && wrap.querySelector(".form-success");
    if (success) success.classList.add("show");
  };
})(window);
