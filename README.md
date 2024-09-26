<a name="readme-top"></a>

# Modern 3D Portfolio Using React, Three.js, and TypeScript

![Modern 3D Portfolio](/.github/images/img_main.png "3D Portfolio")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/atharvaa9 "Ask Me Anything!")

---

## :notebook_with_decorative_cover: Table of Contents

<details>
<summary>Click to expand</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)

</details>

---

## :bangbang: Folder Structure

Here's the folder structure for this application:

```bash
3d-portfolio/
  ├── public/
  │   ├── desktop_pc/
  │   ├── planet/
  │   ├── apple-touch-icon.png
  │   ├── favicon.ico
  │   ├── favicon16.png
  │   └── favicon32.png
  ├── src/
  │   ├── assets/
  │   │   ├── company/
  │   │   ├── projects/
  │   │   ├── socials/
  │   │   ├── tech/
  │   │   └── testimonials/
  │   ├── components/
  │   │   ├── canvas/
  │   │   ├── about.tsx
  │   │   ├── banner.tsx
  │   │   ├── contact.tsx
  │   │   ├── experience.tsx
  │   │   ├── feedbacks.tsx
  │   │   ├── footer.tsx
  │   │   ├── hero.tsx
  │   │   ├── loader.tsx
  │   │   ├── navbar.tsx
  │   │   ├── tech.tsx
  │   │   └── works.tsx
  │   ├── constants/
  │   │   └── index.ts
  │   ├── hoc/
  │   │   ├── index.ts
  │   │   └── section-wrapper.tsx
  │   ├── utils/
  │   │   ├── lib.ts
  │   │   └── motion.ts
  │   ├── app.tsx
  │   ├── env.d.ts
  │   ├── index.css
  │   ├── main.tsx
  │   └── styles.ts
  ├── .env
  ├── .env.example
  ├── .gitignore
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.cjs
  ├── tailwind.config.ts
  ├── tsconfig.json
  └── vite.config.ts
```
## :toolbox: Getting Started

To get started with the project, follow these steps:

1. Ensure you have **Git** and **NodeJS** installed on your machine.
2. Clone the repository to your local machine.
3. Create a `.env` file in the root directory.
4. Populate the `.env` file with the following:

   ```env
   # .env

   # EmailJS configuration
   VITE_APP_SERVICE_ID=XXXXXXXXXXXXXXXX
   VITE_APP_TEMPLATE_ID=XXXXXXXXXXXXXXXX
   VITE_APP_EMAILJS_KEY=XXXXXXXXXXXXXXXX
   VITE_APP_EMAILJS_RECEIVER=your@email.com
   ```
5. Service ID: Get this from your EmailJS account under API keys or services.
6. Template ID: Locate it in the EmailJS dashboard.
7. EmailJS Public Key: Find this in your EmailJS account settings.
8. EmailJS Receiver: Specify the email address for receiving messages.

9. Open a terminal in the root directory and run:
   ```bash
   npm install --legacy-peer-deps
   ```
