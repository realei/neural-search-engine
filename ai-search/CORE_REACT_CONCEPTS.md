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
