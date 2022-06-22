import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <Image src="/gump.jpg" alt="asdasd" height={200} width={250}></Image>
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
              <a>Blogs</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="/Blogs">
              <a>Blogs</a>
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
