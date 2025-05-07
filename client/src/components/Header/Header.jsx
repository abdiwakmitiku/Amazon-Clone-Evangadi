import React from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCartAdd } from "react-icons/bi";

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
              <span>
                <SlLocationPin />
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
            <input type="text" />
            <FaSearch size={25} />
          </div>
          {/*right side link*/}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </a>

            {/* three components*/}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/*orders*/}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
              <BiCartAdd />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
