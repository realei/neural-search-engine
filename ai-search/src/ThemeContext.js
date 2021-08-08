import { createContext } from 'react';

// empty function `function () {}`
const ThemeContext = createContext(["green", function () {}]);

export default ThemeContext;