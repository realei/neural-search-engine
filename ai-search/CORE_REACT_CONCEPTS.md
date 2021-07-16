# JSX

# ESLint & React

- To give ESLint capabilities to understand React code:

`npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0`

**Three plugins**:

- import

  "import" is another really good one that it'll check your imports to make sure that they exists, that they're exporting things, just everything around a module system.

- jsx-accessibility (a11y stands for accessibility, a & 11 characters & y)

  It does a bunch of automatic accessibility checks for you, for example 'img' must have 'alt'

- plugin-react

  This is actuall the tool that's going to allow it to understand our react.

* Edit `.eslintrc.json`

  1. Update "plugin" in "extends"

  2. update "rules", for example some individual rules that you wanna turn off in eslint.

  For example: dont deal with "react/prop.types"

  3. update "plugins"

  `"plugins": ["react","import", "jsx-a11y"],`

  This is going to improve the abilities of ESLint to understand react.

  4. update "settings"

# Hooks

Basically it is a way of managing state.

`import { useState } from 'react';` _useState_ is what is called a **hook**. A _hook_ allows us to keep track of state as indicated by state part of this.h
Another thing to note is **hooks always beginwith use**, _useState_, _useEffect_, _useDebugValue_,there is a bunch of them.

**Note**: In javascript 'class' is a researsed word, when writing HTML inside .js it need to avoid it.
use 'className' instead of 'class' for HTML.

# Rules of Hooks

**The reason why these are called hooks** is because React has the render cycle, every time you type at frontend React kicks off a re-render. And it's gonna call these hooks, and the **order** that it calls them is **particular**. If we have more than two hoods, it's depending on that these hooks are called in the same order. it's really essential that these are called in the same order because react is depending on the fact that these are gonna be called New York because they're kind of like getting hooked up by the React re-render. In other words, **never ever put hooks inside of for loops**, **never put them inside of if statements**.

**Does it re-render the entire page, or does it re-render just a component?** React is actually quite smart about where we renders and how, that is actually why it's able to get a lot of performance out of it, it is really intelligent about it three render cycles. So it's actually able to pick out just the part of the page that's changed and re-render just that and leave the other parts of the page alone.

About the **data**, if it ever updates the render, you should put it in state, hook.

# ESLint & Hooks

1. Install "plugin"

`npm install -D eslint-plugin-react-hooks@4.2.0`

This is another set of rules that specifically applies to react hooks.

2. update "extends" i `.eslintrc.json`

This add like another layer of checking jsut to make sure that we don't have bugs with hooks, because they do have some _peculiar behavior habits_.

**The Number 1 hook that we are going to use , by far is `useState`**, it's just the most useful hook that we have.

# useEffect & Fectching API Data

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations **“side effects” (or just “effects”)**. There are **two common kinds of side effects** in React components: those that **don’t require cleanup**, and **those that do**.

**useEffect** is basically allows your to have side effects to your application. So for example, in this partucular search-params, I wanna go out to my API, and I wanna fetch the list of the breeds that are available per animal. For example, if I select "dog" as the "Animal" and I want find out what _breeds_ of dogs are available, and we can do this through something called an **effect**.

# [Custom Hooks](https://reactjs.org/docs/hooks-custom.html)

You can register handlers for things mouse leave, mouse enter, key up, key down, and can even handle stuff like copy and paste events, focus, blur, etc. [Here's a list of them from the React docs](https://reactjs.org/docs/events.html#supported-events).

# Dev Environment

When your're writingyour code, you want the **NODE_ENV** to be _development_. When change to _production_, it's literally four times smaller.

CMD is `NODE_ENV='development' && echo $NODE_ENV`.

`~/.bashrc` ---- this is the configuration for your **bash environment**

_Should you be setting the environmental variables for the build?_

If you are using **Parcel**, it just happens if you say. `dev`, it automatically sets the environment to be development.
if you say `build` it is smart enough to just switch that automatically to NODE_ENV=production.

# Strict Mode

`import { StrictMode } from "react";`

`<StrictMode></StrictMode>`

_The Strict Mode gets stripped out in production builds_

# React Dev Tools

set of tools a **browser extension** that the React provides
