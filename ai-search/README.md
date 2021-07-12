# About "ai-search"

AI-Search is a frontend project build for Neural-Search-Engine for MVP's Demo only.

This project is my first React Project which is under the guidence of Brian Holt's React V6.

[Here](https://btholt.github.io/complete-intro-to-react-v6/) is Brian Holt's React course blog.

# React Configuration

## JavaScript Tools

1. NPM Configuration

   `cd ~/neural-search-engine/ai-search`

   `npm init -y`

   Now there is _package.json_, which is a manifest for the React project

2. Prettier (code formater for JavaScript)

- Install Prettier

  `npm install -D prettier`

  `-D` means that it's a dev dependency, I dont need to ship _Prettier_ to productiton

  You should check _package-lock.json_ file, **but never modify it by hand**

- Edit `.prettierrc`

  create `.prettierrc` under project root folder

  here you can define _two spaces_ vs _four spaces_; Please use _tabs_; please use _single quotes_ or _double quotes_

- Edit `package.json`'s `"scripts" object`

  **Script** is basically like _a repository of shell commmands_ that work inside of your project.
  Every time you run `npm run format`, I want it to run prettier for me,
  and tell prettier to write out and modify all of the code in "src" directory the correct format.

  1. delete: `"test": "echo \"Error: no test specified\" && exit 1"`

  2. add: `"format": "prettier --write \"src/**/*.{js, jsx}\""`

  `\"src/**/*\"` means every file in 'src' directory, no matter the depth

  3. run `npm run format` in your terminal to have a try

- Install VS code extension

  1. Install the prettier vs code extension

  2. edit `settings`

  (1) Make sure `Format On Save` is checked;

  Make sure that prettier runs every time you save a file.

  (2) Make sure ``Prettier: Require Config` is checked;

  What this will do is if you put a prettier file inside of a project, the prettier knows "Okay! this is now when I need to run".
  Otherwise it will run on every file that you ever open in VS code, which is probably not like what you want.

3. ESLint

ESLint allows you to have opinions of enforce your code, where jproduce much more like syntacitcally. It'slike putting commas in the right places and single quotes or double quotes, spacing. ESLint is going to be kind of more higher lvevel more opinionated. It is going to be like hey we don't use arrow functions here or we only use single quotes. In these kinds of contexts or those kind of things, things we are enforcing like your opinion on someone else.

ESLine and Prettier can both worry about spacing ..., you definitely only want prettier to worry about that and ESLint to worry about **more opinionated things**.

- Install ESLint

  `npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0`

  This is a pretty un-opinionated version of eslintconfig. You can make eslint config very opinionated.

  For example, Airbnb config, adopt the standard config, there's several of them.

  At the init stage of AI-Search, we just use eslint recommended. Which is a pretty lacks but still good configurateion for eslint.

- Creste `.eslintrc.json`

  The **order** here is significant, you need to put the **first one** as **eslint recommended**, this is going to turn on a bunce of options.
  This is also goint to turn on like _whitespace rules_, and we need to _turn off these rules_ and that's what the **prettier config** does.

  The **\*prettier config** doesn't add any rules or doesn't know turn on any new features of the essence, it actually just turns off features it checks for.

  We dont have `plugins` now.

  `parserOptions`

  (1) We're going to be working with **ECMA**. ecmaVersion is 2021.

  (2) `sourceType` -- "module" this is just telling you like am I doing commin js, am I doing like browser stuff? We're going to be using **ES modules**, so that's where that comes from.

  (3) We want `ecmaFeatures` and we're gonna be using JSX here.

  (4) And then underneath that we're going to have what environments we're working in, _es6_, _browser_. This could be like map or weak map or set like those are like those Globals that it'sexpecting.

- Add a new _script_ into _package.json_

  `"lint": "eslint \"src/**/*.{js, jsx}\" --quiet"`
  The reason why we do _--quiet_ is eslint can be has a lot of stuff that can come out of it, and for the most part we don't need all of it. We just want know something is wrong. if you remove _--quiet_, it will show you all the verbose output.

- Run it with command `npm run lint`

- Install the extension for VS code
