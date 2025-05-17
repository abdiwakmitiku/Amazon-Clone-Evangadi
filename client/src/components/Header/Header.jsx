import React, { useContext } from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{basket}, dispatch] = useContext(DataContext);

  return (
    <>
      <section>
        {" "}
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/*logo*/}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-log"
              />
            </Link>
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
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components*/}
            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/*orders*/}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={40} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
