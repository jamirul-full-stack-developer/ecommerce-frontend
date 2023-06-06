import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {HiClipboardList} from 'react-icons/hi'
function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <div className="header_content">
          {/* brand logo */}
          <Link to="/">
            <div className="logo">Ecommerce</div>
          </Link>
          {/* search bar */}
          <SearchBar />
          {/* right widgets */}
          <div className="wigets">

        
            <div className="wiget">
            <div className="wiget_icon"><MdAccountCircle/></div>
              <p>Hey , Guest</p>
            </div>
            <div className="wiget">
            <div className="wiget_icon"><AiOutlineHeart/><span>0</span></div>
            <p>WishList</p>
            </div>
            <div className="wiget">
            <div className="wiget_icon"><HiClipboardList/><span>0</span></div>
              <p>Orders</p>
            </div>
            <div className="wiget">
            <div className="wiget_icon"><AiOutlineShoppingCart/><span>0</span></div>
            <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
