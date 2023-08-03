import React, {useState} from 'react';

import Page from "./components/Page";
import {ThemeContext} from "./Context/ThemeContext";
import {UserContext} from "./Context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page/>
      </ThemeContext.Provider>
    </UserContext.Provider>

  )
}

export default App;
