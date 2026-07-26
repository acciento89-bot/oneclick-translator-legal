# Kamilunavo / OneClick Translator Legal Site v3

This version contains:

- `imprint.html` with the business address
- `contact.html` with a Formspree-ready contact form
- Kamilunavo as the umbrella business designation
- Piotr Kaminski as the responsible natural person
- updated Privacy Policy, Terms, Support, navigation, and footer

## Important: activate the contact form

GitHub Pages is static and cannot process form submissions on its own.

1. Create a Formspree account.
2. Create a new form that sends submissions to:
   `acciento89@gmail.com`
3. Copy the Formspree form ID.
4. Open `contact.html`.
5. Replace:

```text
YOUR_FORM_ID
```

with the actual form ID.

Example:

```html
<form action="https://formspree.io/f/abcdwxyz" method="POST">
```

6. Commit the updated file to GitHub.
7. Send a test message and confirm the Formspree verification email if requested.

## Upload patch

Upload all files from the patch folder to the root of the public GitHub Pages repository.
Existing files may be replaced.

## URLs

- `/imprint.html`
- `/contact.html`
- `/privacy.html`
- `/terms.html`

## Business-name note

`Kamilunavo` is used as a business designation. For a sole proprietorship
without a commercial-register entry, the responsible person's full legal name must
remain visible. Do not add `e.K.`, `UG`, `GmbH`, `CEO`, or `Geschäftsführer` unless
the legal status actually changes.

Before spending heavily on branding, domains, or advertising, perform a trademark and
name-conflict check. A general web search is not a legal trademark clearance.


## Version 4 privacy update

The Privacy Policy now covers:

- minimized automatic technical incident reports;
- voluntary `/report-issue` submissions;
- optional salted pseudonymous server fingerprints;
- report retention periods;
- temporary in-memory anti-spam cooldown processing.
