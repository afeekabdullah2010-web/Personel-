# Anzar Afeek Abdullah — Personal Portfolio

A responsive portfolio built with HTML, CSS, and JavaScript. Includes services, technical skills, experience, education, social profiles, and direct email/telephone links.

## Local development

From `/workspace/Personel-`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

No dependencies or build step required. Google Fonts is optional and falls back to system fonts.

## Content updates

Edit text and links in `index.html`, and colors in `style.css`. `script.js` updates the footer year. Facebook and LinkedIn names are shown as text because exact profile URLs have not been supplied. Instagram and TikTok URLs use the supplied handles. The linked existing personal website is provided by the owner; this code has not been deployed there.

## Pages

- `index.html`: Home and page directory
- `about.html`: Personal introduction
- `services.html`: Services
- `skills.html`: Expertise and technical skills
- `achievements.html`: Experience and achievements
- `education.html`: Education
- `projects.html`: Existing website and online presence
- `contact.html`: Contact information and social profiles

All pages share `style.css` and `script.js`, with active navigation, a mobile menu, and keyboard-accessible navigation. Deploy the complete directory so relative page and asset links continue to work.

## Design

Black and purple developer portfolio inspired by the supplied reference layout, with an original implementation. The home page includes owner-specific services, experience, education, skill tiles, and contact links. No sample client statistics or testimonials are used.

## Interaction features

- First visit in each tab session shows a five-second black Loading screen. Subsequent page navigation skips it. Without JavaScript, content remains available.
- Sections fade in and out as they enter and leave the viewport. Reduced-motion preferences disable these effects.
- Social links use inline SVG icons. Facebook and LinkedIn names remain unlinked until exact profile URLs are supplied.
- Online Presence includes a Hire Me email link.
- Say hello opens an accessible portfolio assistant dialog. This is a local, rule-based guide, not live AI and not direct messaging with the owner. Messages are not transmitted or stored. Visitors can email the owner directly. A real AI assistant would require a separately configured server-side API; never embed API secrets in client files.

`mine.html` is the owner's explicitly public personal gallery, linked from all nine pages. It currently uses the supplied portrait; no additional photo files were present in GitHub main during this update. The developer watermark is `0x1337` and footer spacing is compact on desktop and mobile.

## Deploy to Netlify

Import `afeekabdullah2010-web/Personel-` from GitHub, choose branch `main`, leave base directory and build command empty, and use `.` as the publish directory. `netlify.toml` includes the publish directory and response headers. No environment variables, package installation, or build command are needed.

For manual deployment, extract the ZIP and upload the `Personel-` folder containing `index.html` directly. Do not upload the outer directory containing only the `Personel-` folder. After deployment verify the Home page, a direct `/mine.html` request, the mobile menu, and Say hello. The portfolio assistant is local and does not deliver messages; email and phone links open the visitor's installed apps. Mine is public. Google Fonts is optional; system fonts work without it. Existing external social/Netlify profile destinations must be maintained by the owner.

## Client enquiries and Gmail notifications

The Contact page contains the static Netlify form `project-enquiry` with a honeypot and a `/thank-you.html` success destination. Hire Me links to this form. Deploy the updated site with Netlify Forms detection enabled, then verify `project-enquiry` appears under Forms. In the site's form notification settings (Forms / form notifications, or Site configuration → Notifications → Form submission notifications), add an Email notification for this form addressed to `afeekabdullah2010@gmail.com`. The UI wording may vary. Submit a real test enquiry on the deployed site and confirm both the stored submission and received email, including spam. This configuration cannot be enabled by HTML alone. Local preview cannot process submissions. Email links remain available as a fallback; the portfolio chat is separate and its messages are not sent to the owner. Form submissions and notifications are subject to the Netlify plan limits.
