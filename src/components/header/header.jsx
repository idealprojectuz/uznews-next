import React from "react";
import "./header.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import lupa from "../../assets/searchicon.svg";
export default function Header() {
  // console.log(logo);
  return (
    <header>
      <div className="container">
        <div className="header-left flex items-center gap-[20px]">
          <div className="logo">
            <Image loading="lazy" src={logo} width={147} height={18} />
          </div>
          <div className="search">
            <form>
              <div className="searchwrapper">
                <input type="search" className="search" placeholder="qidiruv" />
                <button className="focus: ">
                  <Image src={lupa} width={23} height={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="header-right"></div>
      </div>
    </header>
  );
}
