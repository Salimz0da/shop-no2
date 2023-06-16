import React from "react";

import search from "../../img/components/navbar/search.svg";
import contact from "../../img/components/navbar/contact.svg";
import basket from "../../img/components/navbar/bucket.svg";
import like from "../../img/components/navbar/like.svg";
import turc from "../../img/components/navbar/Truck.svg";
import logoSvg from "../../img/components/navbar/nav-title-logo.svg";
import aimchair from "../../img/section/mebel/armchair.svg";
import vase from "../../img/section/mebel/vase.svg";
import highChair from "../../img/section/mebel/high chair.svg";
import whiteVase from "../../img/section/material/vase-white.svg";
import towel from "../../img/section/material/towel.svg";
import glassBox from "../../img/section/material/glass-box.svg";
import ceramixPlates from "../../img/section/material/ceramic-plates.svg";
import clearBox from "../../img/section/material/large-clear-glass-box.svg";
import jutePlastmase from "../../img/section/material/jute-placemat.svg";
import whiteBasket from "../../img/section/material/white-basket.svg";
import basketStandard from "../../img/section/material/basket.svg";


export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="navbar">
              <h1 className="home-page-title">MOODY STUDIO</h1>
              <div className="contact">
                <img src={search} alt="error" />
                <img src={contact} alt="error" />
                <img src={basket} alt="error" />
                <img src={like} alt="error" />
              </div>
            </div>
            <div className="navigation">
              <ul className="navigation-ul">
                <li className="navigation-title">HOME</li>
                <li className="navigation-title">STORE</li>
                <li className="navigation-title">ACCESSORIES</li>
                <li className="navigation-title">BRAND</li>
                <li className="navigation-title">PAGES</li>
                <li className="navigation-title">ABOUT US</li>
                <li className="navigation-title">NEWS</li>
                <li className="navigation-title">CONTACT US</li>
              </ul>
            </div>
            <div className="logo-sv">
              <img src={turc} alt="error" />
              <img src={logoSvg} alt="" />
            </div>
          </nav>
        </div>
      </header>
      <section>
        <div className="card-1">
          <img src={aimchair} alt="" />
          <div className="text-all">
            <p className="card-text-1">HOT DEALS THIS WEEK</p>
            <p className="card-text-2">
              SALE UP 50% <br /> MODERN FURNITURE
            </p>
            <a className="viewNow" href="#">
              VIEW NOW
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row-card-1">
            <div className="card-2">
              <img src={highChair} alt="error" />
              <div className="all-text-2">
                <p className="title">INY VINTAGE CHAIR</p>
                <a className="viewNow" href="#">
                  VIEW DETAILS
                </a>
              </div>
            </div>
            <div className="card-2 card-2-color">
              <img src={vase} alt="error" />
              <div className="all-text-2">
                <p className="title">LARGE TERRACOTA VASE</p>
                <a className="viewNow" href="#">
                  VIEW DETAILS
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <p>gjgj</p>
              {/* <img src={whiteVase} alt="error" />
              <p className="title-card">DECOR</p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>addadda</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
