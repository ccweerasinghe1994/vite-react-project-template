# [🏠 BACK TO HOME PAGE ➡️](../readme.md)

- [🏠 BACK TO HOME PAGE ➡️](#-back-to-home-page-️)
  - [Env Variables](#env-variables)
  - [creating env files for dev,qa and production and a default env file](#creating-env-files-for-devqa-and-production-and-a-default-env-file)
  - [.env Files](#env-files)
  - [Modes](#modes)

## Env Variables

Vite exposes env variables on the special import.meta.env object. Some built-in variables are available in all cases:

- import.meta.env.MODE: {string} the mode the app is running in.

- import.meta.env.BASE_URL: {string} the base url the app is being served from. This is determined by the base config
  option.

- import.meta.env.PROD: {boolean} whether the app is running in production.

- import.meta.env.DEV: {boolean} whether the app is running in development (always the opposite of import.meta.env.PROD)

- import.meta.env.SSR: {boolean} whether the app is running in the server.

## creating env files for dev,qa and production and a default env file

create `.env`,`.env.production`,`.env.qa`,`.env.development` files in the root directory.

- `.env` will be used in local development
- for production will use `.env.production`
- for dev server will use `.env.development`
- for qa will use `.env.qa`

let's change the `vite.config.ts` to dynamically import env files based on our node environment

```ts
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), 'VITE');
    return {
        plugins: [react()],
        // vite config
        //these defined constants can be accessed by window.__YOUR_VARIABLE_NAME
        define: {
            __TEST__: 123
        }
    }
})

```

- by using the mode which will return the current node environment we wll load the
  env file.

- instead of using the mode we can use command instead for deciding which env file to load.

- we're adding the  `VITE` so we are only getting the env variables which are starting with `VITE_...`

## .env Files

Vite uses dotenv to load additional environment variables from the following files in your environment directory:

```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git

```

SECURITY NOTES

.env.*.local files are local-only and can contain sensitive variables.
You should add*.local to your `.gitignore` to avoid them being checked into git.

Since any variables exposed to your Vite source code will end up in your client bundle,
VITE_* variables should not contain any **sensitive information**.

## Modes

By default, the dev server (dev command) runs in development mode and the build command runs in production mode.

This means when running vite build, it will load the env variables from .env.production if there is one:

```
# .env.production
VITE_APP_TITLE=My App
```

In your app, you can render the title using `import.meta.env.VITE_APP_TITLE`.

However, it is important to understand that mode is a wider concept than just development vs. production.
A typical example is you may want to have a "staging" mode where it should have production-like behavior,
but with slightly different env variables from production.
You can overwrite the default mode used for a command by passing the `--mode` option flag.
For example, if you want to build your app for our hypothetical staging mode:

```bash
vite build --mode staging
```

And to get the behavior we want, we need a `.env.staging` file:

```
# .env.staging
NODE_ENV=production
VITE_APP_TITLE=My App (staging)
```

Now your staging app should have production-like behavior, but display a different title from production.
