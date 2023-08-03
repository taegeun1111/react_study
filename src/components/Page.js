import React, {useContext} from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Page = () => {
  // const data = useContext(ThemeContext);

  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Page;