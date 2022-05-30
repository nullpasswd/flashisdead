# flash is dead

Svelte site explaining flash being dead, a wonderful platform for an old era now lost to time. This page explains that in a concise manner.

## Deploy the site

Requirements: [Node.js](https://nodejs.org), Git, [PNPM](https://pnpm.io). Use macOS or Linux/WSL.

After installing everything, check to ensure the commands exist in your system. If you get a "command not found" error, install the requirements properly and try again.

```sh
which node && which git && which pnpm
```

Clone the repository, enter the newly-cloned repo, and install the dependencies

```sh
git clone https://github.com/boxsux/flashisdead && cd flashisdead && pnpm i
```

If you're contributing, use live reload

```sh
pnpm run dev
```

Or if you just want to build for static use

```sh
pnpm run build
```

Start the site after building it

```
pnpm run start
```
