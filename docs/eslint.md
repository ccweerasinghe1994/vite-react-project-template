# [🏠 BACK TO HOME PAGE ➡️](../readme.md)

## adding eslint to the application as a dev dependency

run this command in the terminal to add

```bash
npm i -D eslint
```

in `package.json` file. we can see the eslint installed.

```json
{
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "eslint": "^8.26.0",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}
```

to generate the config file. We will use this following command.

```bash
🔥 -> npx eslint --init
```

answer the following questions

```bash
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config@0.4.0
Ok to proceed? (y) y
? How would you like to use ESLint? … 
  To check syntax only
▸ To check syntax and find problems
  To check syntax, find problems, and enforce code style
? What type of modules does your project use? … 
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
? Which framework does your project use? … 
▸ React
  Vue.js
  None of these
  ✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

these dependencies will be installed

- eslint-plugin-react@latest
- @typescript-eslint/eslint-plugin@latest
- @typescript-eslint/parser@latest

additionally we will eslint plugin`eslint-plugin-react-hooks`

```bash
npm i -D eslint-plugin-react-hooks
```

Then extend the recommended eslint config:

```json
{
  "extends": [
    "plugin:react-hooks/recommended"
  ]
}
```
we will add following configurations to eslint
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"//eslint will know about our tsconfig
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react/react-in-jsx-scope": 0 // no need because now react is a global object
    }
}

```