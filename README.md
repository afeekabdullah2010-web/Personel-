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
