import React from "react";

import Navbartwo from "../../components/Navbar/Navbartwo";
import Sidebar from "../../components/Sidebar";
import Singleblog from "../../components/Singleblog";


const Blogdetail = () => {

  return (
    <>
      <Navbartwo />
      <div className="home">
        <Singleblog />
        <Sidebar />
      </div>
    </>
  );
};

export default Blogdetail;
