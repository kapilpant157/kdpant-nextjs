import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <Image src="/swyambhu.png" alt="Kapil Dev Pant" height={200} width={250}></Image>
        <p>
          Words are merely insufficient expressing the depth of emotions. So it
          is a place where i try to find some words that can describe how
          unworthy i am in this everlasting time.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Coding</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Health</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Travel</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Drawing</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Random</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Cyber Security</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
       
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
