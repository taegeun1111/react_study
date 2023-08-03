import React from 'react';

const Footer = ({isDark,setIsDark}) => {
  const toggleTheme = () =>{
    setIsDark(!isDark);
  }

  return (
    <footer
      className={'footer'}
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
      }}
    >
      <button
        className={'button'}
        type={'button'}
        onClick={toggleTheme}
      >
        DarkMode
      </button>

    </footer>
  );
};

export default Footer;