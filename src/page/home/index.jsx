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

import whiteVase from "../../img/section/material/white-vase.png";
import towel from "../../img/section/material/towel.png";
import glassBox from "../../img/section/material/glass-box.png";
import ceramixPlates from "../../img/section/material/ceramic-plates.png";
import clearBox from "../../img/section/material/glass-box-clear.png";
import jutePlastmase from "../../img/section/material/Jute-placemat.png";
import whiteBasket from "../../img/section/material/basket-white.png";
import basketStandard from "../../img/section/material/standard-basket.png";
import star from "../../img/section/svg-resurs/star.svg";

import withFood from '../../img/section/material-2/withFood.png'
import twill from '../../img/section/material-2/twill-seat.png'
import fluter from '../../img/section/material-2/fluted-beverage.png'
import beverageGlass from '../../img/section/material-2/ceramix-egg.png'
import bombobox from '../../img/section/material-2/Bambobox.png'
import metallCutlery from '../../img/section/material-2/metallCutlery.png'
import ceramicCups from '../../img/section/material-2/4packCeramixCups.png'
import lineNapkins from '../../img/section/material-2/lineNaplins.png'
import stoneware from '../../img/section/material-2/stonewre.png'

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
              <div className="card-imageholder">
                <img src={whiteVase} alt="error" />
              </div>
              <div className="card-content">
                <h3 className="card-title-2">DECOR</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3">
                <p className="text-card-2">DECOR</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Card 1 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={towel} alt="error" />
              </div>
              <div className="card-content card-content-mini">
                <h3 className="card-title-2">LINEN BEACH TOWEL</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3 text-all-3-mini">
                <p className="text-card-2">LINEN BEACH TOWEL</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Card2 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={glassBox} alt="error" />
              </div>
              <div className="card-content ">
                <h3 className="card-title-2">Square Clear Glass Box</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3 text-all-3-mini">
                <p className="text-card-2">Square Clear Glass Box</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Crad3 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={ceramixPlates} alt="error" />
              </div>
              <div className="card-content">
                <h3 className="card-title-2">4-pack Small Ceramic Plates</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3">
                <p className="text-card-2">4-pack Small Ceramic Plates</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Card4 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={clearBox} alt="error" />
              </div>
              <div className="card-content">
                <h3 className="card-title-2">Large Clear Glass Box</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3">
                <p className="text-card-2">Large Clear Glass Box</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Card5 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={jutePlastmase} alt="error" />
              </div>
              <div className="card-content">
                <h3 className="card-title-2">Round Jute Placemat</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3">
                <p className="text-card-2">Round Jute Placemat</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Card6 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={whiteBasket} alt="error" />
              </div>
              <div className="card-content">
                <h3 className="card-title-2">Metal Wire Basket</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3">
                <p className="text-card-2">Metal Wire Basket</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
            {/* Card7 */}
            <div className="card card-mini">
              <div className="card-imageholder">
                <img src={basketStandard} alt="error" />
              </div>
              <div className="card-content">
                <h3 className="card-title-2">BOHO CHIC</h3>
                <p className="text-card-3">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, <br /> sed do eiusmod tempor <br /> incididunt ut labore
                  et dolore <br /> magna aliqua.
                </p>
                <a href="" className="viewNow viewNow-whitw">
                  VIEW ALL
                </a>
              </div>
              <div className="text-all-3">
                <p className="text-card-2">BOHO CHIC</p>
                <img src={star} alt="error" />
                <p className="card-price">30$</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="add-badsheed">
          <div className="add-badsheed-card">
            <h4 className="add-badsheed-card-title">BEDSHEET SETS</h4>
            <p className="add-badsheed-card-price">
              $50.00 <span>$220.00</span>
            </p>
            <p className="add-badsheed-card-text">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
            <button className="viewNow">VIEW DETAILS</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="head-title">TOP RATING</h2>
          <div className="card-material-row">
            <div className="card-material">
              <img src={withFood} alt="error" />
              <div className="card-info-material">
                <p>Tray with Foot</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
            <div className="card-material">
              <img src={twill} alt="error" />
              <div className="card-info-material">
                <p>Fluted Beverage Glass</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
             <div className="card-material">
              <img src={fluter} alt="error" />
              <div className="card-info-material">
                <p>Glazed Stoneware Plate</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
            <div className="card-material">
              <img src={beverageGlass} alt="error" />
              <div className="card-info-material">
                <p>Ceramic Egg Cup</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
            <div className="card-material">
              <img src={bombobox} alt="error" />
              <div className="card-info-material">
                <p>Small Bamboo Box</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
            <div className="card-material">
              <img src={metallCutlery} alt="error" />
              <div className="card-info-material">
                <p>Metal Cutlery Basket</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
            <div className="card-material">
              <img src={ceramicCups} alt="error" />
              <div className="card-info-material">
                <p>Twill Seat Cushion</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            <div className="card-material">
              <img src={lineNapkins} alt="error" />
              <div className="card-info-material">
                <p>Twill Seat Cushion</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Crad */}
            {/* Crad */}
            <div className="card-material">
              <img src={stoneware} alt="error" />
              <div className="card-info-material">
                <p>4-pack Ceramic Cups</p>
                <img src={star} alt="error" />
                <h5>30$</h5>
              </div>
            </div>
            {/* Card */}
           
            
          </div>
        </div>
      </section>
    </div>
  );
}
