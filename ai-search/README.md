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
