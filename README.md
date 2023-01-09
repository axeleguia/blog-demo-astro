<p align="center">
    <svg viewBox="0 0 2712 894" height="32" aria-hidden="true"><path fill="#000" d="M445.432 22.983c7.29 9.05 11.007 21.26 18.441 45.682L626.28 602.176a675.845 675.845 0 0 0-194.166-65.737L326.37 179.099a13.762 13.762 0 0 0-26.407.041L195.5 536.259A675.814 675.814 0 0 0 .459 602.095L163.664 68.541c7.457-24.38 11.186-36.57 18.475-45.602A60.008 60.008 0 0 1 206.453 4.95C217.223.622 229.97.622 255.465.622h116.569c25.528 0 38.292 0 49.072 4.338a59.994 59.994 0 0 1 24.326 18.023Z"></path><path fill="#FF5D01" d="M464.866 627.566c-26.773 22.894-80.211 38.507-141.766 38.507-75.549 0-138.872-23.52-155.675-55.152-6.007 18.129-7.354 38.877-7.354 52.131 0 0-3.957 65.082 41.309 110.349 0-23.505 19.054-42.559 42.558-42.559 40.287 0 40.242 35.148 40.205 63.664l-.002 2.545c0 43.282 26.453 80.385 64.074 96.024-5.619-11.557-8.771-24.535-8.771-38.25 0-41.28 24.234-56.65 52.4-74.514 22.41-14.213 47.31-30.004 64.47-61.682 8.954-16.528 14.038-35.459 14.038-55.577 0-12.372-1.923-24.295-5.486-35.486Z"></path><path fill="#000" d="M999.147 593.833c67.933 0 118.883-24.168 139.783-65.317 0 19.595 1.3 39.844 4.57 55.52h111.69c-5.22-22.863-7.84-54.216-7.84-95.365v-100.59c0-95.364-56.17-140.433-180.93-140.433-109.076 0-182.232 45.069-190.724 118.879h116.266c3.919-32.006 30.698-49.642 74.458-49.642 43.11 0 67.28 17.636 67.28 54.215v9.796l-118.22 10.451c-57.483 5.88-90.142 15.676-113.004 31.353-24.167 16.328-36.578 41.151-36.578 71.849 0 61.399 50.949 99.284 133.249 99.284Zm43.113-67.931c-37.89 0-60.749-15.022-60.749-39.19 0-24.82 18.939-37.885 66.629-43.763l87.52-9.144V453.4c0 43.763-37.88 72.502-93.4 72.502ZM1490.77 593.833c113.65 0 171.79-42.456 171.79-111.04 0-56.827-32.66-88.18-111.69-98.631l-98.64-11.103c-28.08-3.921-39.84-11.106-39.84-26.782 0-18.941 18.94-27.433 62.05-27.433 59.44 0 100.59 13.717 133.91 40.498l52.9-52.908c-36.58-37.884-99.93-58.786-178.32-58.786-110.38 0-171.78 39.19-171.78 105.161 0 57.48 37.88 89.486 116.26 99.936l88.84 10.451c35.27 4.573 45.72 11.106 45.72 28.087 0 19.597-19.6 30.048-65.32 30.048-67.93 0-113.65-18.29-144.35-52.255l-60.1 49.641c39.85 49.643 107.78 75.116 198.57 75.116ZM1754.78 331.255v137.821c0 80.994 45.72 122.145 143.7 122.145 30.05 0 53.56-3.266 75.77-9.798v-84.915c-11.76 2.614-26.13 5.226-45.07 5.226-41.15 0-61.4-18.288-61.4-56.826V331.255h107.12v-73.81h-107.12V137.914l-113 41.803v77.728h-73.16v73.81h73.16ZM2137.13 257.445h-103.2v326.591h113V461.892c0-35.274 7.84-67.279 29.4-87.528 16.98-15.677 41.15-24.166 75.11-24.166 12.41 0 22.21 1.304 33.31 2.611V250.26c-7.18-1.306-12.41-1.306-21.55-1.306-64.67 0-108.43 37.231-126.07 97.978v-89.487ZM2508.05 593.833c119.54 0 203.8-63.358 203.8-173.745 0-109.735-84.26-172.44-203.8-172.44-120.18 0-204.44 62.705-204.44 172.44 0 110.387 84.26 173.745 204.44 173.745Zm0-75.116c-54.86 0-89.48-35.271-89.48-98.629 0-63.36 34.62-97.325 89.48-97.325 54.22 0 88.84 33.965 88.84 97.325 0 63.358-34.62 98.629-88.84 98.629Z"></path></svg>
</p>

<p align="center"><a href="https://astro.build/" target="_blank">Astro</a> is an all-in-one web framework for building fast, content-focused websites.</p>

## About the Project

Astro Blog Demo

<img src="images/demo-1.jpg" alt="Astro Blog Dark" />

# Astro: Install CLI
```
npm install astro -g
```


# Astro: New project

```
npm create astro@latest
```
# Astro: Start server

```
astro dev
```

## 🚀 Project Structure Demo

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── components/
│   └── layouts/
│   └── pages/
│   └── scripts/
│   |   └── index.astro
│   └── styles/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
