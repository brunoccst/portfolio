# Personal site

[![Netlify Status](https://api.netlify.com/api/v1/badges/ac440973-f6e4-4d25-b49a-b5e98d166b28/deploy-status)](https://app.netlify.com/sites/brunoccst/deploys)

Personal site of Bruno Carvalho da Costa. Live at
[brunoccst.netlify.app](https://brunoccst.netlify.app/).

It is a single-page application: one HTML file loads a React app that swaps the
visible section without a full page reload.

---

## Requirements

- Node.js 22 or newer
- npm 10 or newer

Check what you have:

```bash
node -v && npm -v
```

## Running it locally

```bash
cd personal-site.web && npm install && npm run dev
```

The dev server prints a URL (usually `http://localhost:5173`). It reloads the
browser when you save a file.

## npm scripts

All scripts run from the `personal-site.web` folder.

| Script                  | What it does                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| `npm run dev`           | Starts the development server with hot reload.                                                               |
| `npm run build`         | Checks the locale files, type-checks the code, then writes the production files to `personal-site.web/dist`. |
| `npm run preview`       | Serves the contents of `dist` so you can check the production build.                                         |
| `npm run typecheck`     | Runs the TypeScript compiler without producing files.                                                        |
| `npm run lint`          | Runs oxlint, including the React hooks and accessibility rules. Fails on any warning.                        |
| `npm run format`        | Rewrites every file with Prettier.                                                                           |
| `npm run format:check`  | Reports files Prettier would change, without changing them.                                                  |
| `npm run check:locales` | Fails when `en.json` and `pt.json` do not have the same keys.                                                |
| `npm test`              | Runs the tests once.                                                                                         |
| `npm run check`         | Runs typecheck, lint, format check, the locale check and the tests in turn.                                  |

Run `npm run check` before pushing. CI runs the same checks and the build on
every pull request; see `.github/workflows/ci.yml`.

## Repository layout

```
personal-site/
├── .github/workflows/    CI: checks and build on every pull request
├── docs/                 Written notes about the project
│   ├── DECISIONS.md      Why the project is built this way
│   ├── KNOWN-ISSUES.md   Things that are wrong or incomplete
│   └── NEXT-STEPS.md     Planned work
├── netlify.toml          Build and hosting settings for Netlify
└── personal-site.web/        The React application
```

## Application layout

```
personal-site.web/
├── index.html            Page shell; loads src/main.tsx
├── public/               Files copied to the site root as-is
├── scripts/              Build-time checks, such as the locale key check
├── vite.config.ts        Build tool configuration
├── tsconfig*.json        TypeScript configuration
└── src/
    ├── main.tsx          Creates the React root and wraps the app in providers
    ├── App.tsx           Intro sequence and the route table
    ├── components/       UI pieces, one folder per component
    ├── sections/         Content of the three site sections
    ├── content/          Experience entries and the helpers that format them
    ├── config/           Section list shared by the router and the navigation
    ├── hooks/            Reusable pieces of behaviour
    ├── i18n/             Translation setup and the locale files
    ├── styles/           Design tokens, mixins and global CSS
    └── theme/            Material UI theme and light/dark switching
```

## Tech stack

| Tool                                                | Used for                                               |
| --------------------------------------------------- | ------------------------------------------------------ |
| [React 19](https://react.dev/)                      | Building the interface.                                |
| [TypeScript](https://www.typescriptlang.org/)       | Types for every file in `src`.                         |
| [Vite](https://vite.dev/)                           | Dev server and production build.                       |
| [React Router](https://reactrouter.com/)            | Mapping URLs such as `/experience` to a section.       |
| [i18next](https://www.i18next.com/) + react-i18next | Loading text from locale files.                        |
| [Material UI](https://mui.com/)                     | The icon buttons and tooltips in the top-right corner. |
| [Sass](https://sass-lang.com/)                      | Writing the styles as SCSS.                            |
| [oxlint](https://oxc.rs/docs/guide/usage/linter)    | Linting, including React hooks and jsx-a11y rules.     |
| [Prettier](https://prettier.io/)                    | Formatting.                                            |

## How the page works

### The frame

`components/Layout/Layout.tsx` renders a `<main>` element that is fixed to the
viewport and inset from every edge. Its stylesheet calls that element the
_frame_. Everything the visitor reads lives inside it. The frame's top inset is
larger than the other three, which leaves an empty band for the system controls
that sit outside the frame.

Inside the frame:

- `components/Brand/Brand.tsx` — the `<h1>` in the top-left corner.
- `components/SideNav/SideNav.tsx` — the list of sections.
- `components/ContentPanel/ContentPanel.tsx` — the scrollable area holding the
  current section.

### The intro

`components/Intro/Intro.tsx` covers the screen when the app first mounts.

The name and the role each sit inside a mask element. Each mask covers its own
text and reaches across the gap to the `|`, so its clip edge lands on the
separator. Each half starts pushed fully outside its mask — the name to the
right, the role to the left — which hides it behind the `|`, then slides to
`translateX(0)`. Because the mask stays put while the text moves inside it,
neither half can cross the separator, and both appear to come out of the
character itself. After a pause the animation reverses and both slide back in.

The `|` is raised above the masks with `z-index`, so the text passes behind it
rather than over it.

`App.tsx` tracks the intro with a `stage` value:

1. `intro` — only the intro is on screen.
2. `revealing` — the intro started leaving, and the page is mounted behind it so
   the two cross-fade.
3. `done` — the intro is removed from the React tree.

The intro runs for about four and a half seconds. Clicking or tapping anywhere,
pressing <kbd>Esc</kbd>, <kbd>Enter</kbd> or <kbd>Space</kbd>, or using the
"Skip intro" button fades it out at once. When the operating system asks for
reduced motion, the finished line is shown still for 1.5 seconds instead.

### Moving between sections

The `<body>` element has `overflow: hidden`, so the window itself never scrolls.
`hooks/useSectionNavigation.ts` listens for wheel, touch and key events on the
window and calls React Router's `navigate` to show the next or previous section.

The content panel gets priority: when it still has room to scroll, the hook lets
the browser scroll it and does not change the section. Only when the panel has
reached its top or bottom does the input move to another section.

Inputs the hook understands:

| Input                                                           | Result                   |
| --------------------------------------------------------------- | ------------------------ |
| Mouse wheel or trackpad, 60px of travel                         | Next or previous section |
| Vertical swipe of 56px or more                                  | Next or previous section |
| <kbd>↓</kbd> <kbd>↑</kbd> <kbd>PageDown</kbd> <kbd>PageUp</kbd> | Next or previous section |
| <kbd>Home</kbd> <kbd>End</kbd>                                  | First or last section    |

After a change, further input is ignored for 700ms so one long gesture does not
skip several sections.

A short line under the side navigation tells visitors this. It reads "Swipe up
or down" on touch screens and mentions the wheel and arrow keys elsewhere.

### Routing

`config/sections.ts` holds the ordered list of sections. Both the router and the
side navigation read from it, so the two can never disagree.

| URL           | Section               |
| ------------- | --------------------- |
| `/`           | Redirects to `/about` |
| `/about`      | About me              |
| `/experience` | Experience            |
| `/links`      | Links                 |
| anything else | Redirects to `/about` |

## Styling

Styles are written as SCSS. Every component has its own `*.module.scss` file
next to it. Vite turns those into [CSS Modules](https://vite.dev/guide/features#css-modules):
class names are made unique at build time, so a class in one component cannot
affect another.

Shared code lives in `src/styles`:

| File              | Contents                                                                    |
| ----------------- | --------------------------------------------------------------------------- |
| `_tokens.scss`    | CSS custom properties: colours, spacing, font sizes, motion timings.        |
| `_variables.scss` | Sass values used at build time: breakpoints, easing curves, z-index layers. |
| `_mixins.scss`    | Reusable blocks such as `below()`, `motion-reduce` and `visually-hidden`.   |
| `global.scss`     | Reset, `<body>` defaults, focus ring, skip link.                            |

Import a shared file with `@use`:

```scss
@use "../../styles/mixins" as m;
@use "../../styles/variables" as v;

.example {
  color: var(--color-text);

  @include m.below(v.$bp-md) {
    color: var(--color-text-muted);
  }
}
```

### Themes

The light theme is a sunny sky: a blue background with soft white patches and a
deep sky-blue accent. The dark theme is deep space: a near-black blue with two
distant coloured glows and a starlight-gold accent.

Both backgrounds are `radial-gradient` layers held in a single `--celestial`
custom property and painted on one fixed pseudo-element behind the page. The
frame is translucent, so that background shows through it.

`theme/AppThemeProvider.tsx` writes the current mode onto the `<html>` element as
`data-theme="light"` or `data-theme="dark"`. `_tokens.scss` defines the light
values on `:root` and overrides the colour tokens under `[data-theme='dark']`.
Nothing else needs to know which theme is active — every component reads colours
through `var(--color-*)`.

The chosen mode is saved in `localStorage` under `personal-site.theme`. Without a
saved value, the app follows the operating system setting.

### Font sizes

Font sizes are `clamp()` values in `_tokens.scss`, for example:

```scss
--text-base: clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem);
```

The browser picks a size between the first and last values based on the viewport
width, so text scales without extra media queries.

## Text and translations

No user-facing string is written inside a component. Strings live in
`src/i18n/locales/en.json` and `src/i18n/locales/pt.json`, and components read
them with the `t` function:

```tsx
const { t } = useTranslation();
return <h2>{t("sections.about.title")}</h2>;
```

Experience entries are the exception: they live in `src/content/`, with both
languages in one place. See [Adding an experience entry](#adding-an-experience-entry).

English is the default and the fallback: if a key is missing from `pt.json`, the
English value is shown.

`src/i18n/index.ts` picks the starting language in this order:

1. the value saved in `localStorage` under `personal-site.language`
2. the browser's preferred languages
3. English

For arrays of strings or objects, use the `useTranslatedList` hook:

```tsx
const paragraphs = useTranslatedList<string>("sections.about.paragraphs");
```

### Adding a translation key

1. Add the key to `en.json`.
2. Add the same key to `pt.json`.
3. Read it with `t('your.key')`.

Keep the two files in the same shape. `npm run check:locales` fails, and so does
the build, when a key exists in only one file.

## Adding an experience entry

Timeline entries (experience) live in TypeScript files under `src/content/`,
not in the locale files. Each entry keeps every language side by side, so
adding one is a single edit. Add an object to the array in
`src/content/experience.ts`:

```ts
{
  start: '2026-01',
  // end: '2026-12',   leave out while the role is ongoing
  role: { en: 'Senior Engineer', pt: '…' },
  organisation: 'Acme',
  location: { en: 'Germany', pt: '…' },
  summary: { en: 'One or two sentences about the role.', pt: '…' },
  stack: ['React', 'TypeScript'],
},
```

- `start` and `end` are months written as `YYYY-MM`. The page formats them
  for the visitor's language (`Jan 2026`) and shows the "present" label from
  the locale files when `end` is missing.
- Any text field is either one string, used in every language, or an object
  with one string per language. TypeScript fails the build if a language is
  missing.
- `stack` is optional; leave it out to show no tags.
- Order does not matter: entries are sorted newest first. The year range
  above the heading is worked out from the entries too.
- The dash between dates and the dot before the location are drawn in
  `Section.module.scss`, not written in the data.

`npm test` checks that every date is a real month, that no entry ends before
it starts and that no text is empty in any language.

## Adding a section

1. Add an entry to the array in `src/config/sections.ts`:

   ```ts
   { id: 'projects', path: '/projects', labelKey: 'nav.projects' }
   ```

2. Add `nav.projects` and a `sections.projects` block to both locale files.
3. Create `src/sections/ProjectsSection.tsx`. Copy `AboutSection.tsx` and reuse
   the class names from `Section.module.scss`.
4. Register the component in `SECTION_COMPONENTS` inside `src/App.tsx`.

The side navigation, the route table and the scroll order all follow from the
array, so nothing else needs changing.

## Accessibility

- A skip link is the first item in the tab order and jumps to the content panel.
- The active navigation entry carries `aria-current="page"`, added by React
  Router's `NavLink`.
- The content panel is a labelled region with `tabindex="0"`, so keyboard users
  can scroll it.
- A hidden live region announces the section name after every change, and the
  document title is updated to match.
- Every animation is switched off when the operating system asks for reduced
  motion, and the intro is shown as a still line for 1.5 seconds.
- The intro can be skipped with a button, a click anywhere, or the keyboard.
- The side navigation is described by a line saying that scrolling, the arrow
  keys or a swipe change the section.
- Focus is drawn with a two-pixel outline in the accent colour.
- Text colours meet WCAG AA contrast against their backgrounds. The measured
  ratios are listed in [docs/DECISIONS.md](docs/DECISIONS.md).

## Deployment

Netlify builds the site from the `main` branch of this repository. The settings
live in `netlify.toml` at the repository root:

- `base` is `personal-site.web`, so Netlify runs the build inside that folder.
- `command` is `npm run build`.
- `publish` is `dist`.
- A catch-all redirect returns `index.html` with status 200 for every path. This
  is what makes `brunoccst.netlify.app/experience` work on a fresh page load —
  without it, Netlify would look for a file at that path and return a 404.

Pushing to `main` triggers a deploy.

## Further reading

- [docs/DECISIONS.md](docs/DECISIONS.md)
- [docs/KNOWN-ISSUES.md](docs/KNOWN-ISSUES.md)
- [docs/NEXT-STEPS.md](docs/NEXT-STEPS.md)

## Licence

[MIT](LICENSE)
