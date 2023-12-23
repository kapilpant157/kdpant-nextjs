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
          Words are merely insufficient expressing the depth of emotions. So it is a place where i try
           to find some words that can describe how unworthy i am in this everlasting time. Emotional 
           parts are supposed to be either ignored or taken as joke. They are not intended to hurt others.
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
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link href="https://www.facebook.com/kapilpant157">
              <a>Facebook</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="https://www.linkedin.com/kapilpant157">
              <a>Linkedin</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="https://www.instagram.com/kapilpant157">
              <a>Instagram</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="https://www.tiktok.com/kapilpant157">
              <a>TikTok</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="https://www.dribble.com/kapilpant157">
              <a>Dribble</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="https://www.twitter.com/@kapilpant12">
              <a>Twitter</a>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link href="https://www.youtube.com/channel/UCFngHog9EfMsBQ_l2liXQ2g">
              <a>Youtube</a>
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
