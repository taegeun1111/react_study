import React, {useContext} from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {UserContext} from "../Context/UserContext";

const Page = () => {
  // const text = useContext(UserContext);

  return (
    <div>
      {/*{text}*/}
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Page;