import React from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        {" "}
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/*logo*/}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-log"
              />
            </a>
            <div className={classes.delivery}>
              {/*delivery*/}
              <span className="loc">
                <SlLocationPin size={17} />
              </span>
              <span>
                <div>
                  <p>Delivery to</p>
                  <span>Ethiopia</span>
                </div>
              </span>
            </div>
          </div>
          {/*search*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <FaSearch size={25} />
          </div>
          {/*right side link*/}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* three components*/}
            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/*orders*/}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
