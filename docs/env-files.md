# [🏠 BACK TO HOME PAGE ➡️](../readme.md)

## Env Variables

Vite exposes env variables on the special import.meta.env object. Some built-in variables are available in all cases:

- import.meta.env.MODE: {string} the mode the app is running in.

- import.meta.env.BASE_URL: {string} the base url the app is being served from. This is determined by the base config option.

- import.meta.env.PROD: {boolean} whether the app is running in production.

- import.meta.env.DEV: {boolean} whether the app is running in development (always the opposite of import.meta.env.PROD)

- import.meta.env.SSR: {boolean} whether the app is running in the server.
