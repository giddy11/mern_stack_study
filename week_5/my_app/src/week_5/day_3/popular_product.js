import React from "react";
import "../../styles/popular_product.css";

export default function PopularProduct() {
  return (
    /**
     * TODO: Practical - 1
     * Convert this design to a reusable component
     */
    <div>
      {/* <PopularProduct></PopularProduct> */}
      
      <div className="cost redx">
        <div className="left">
          <div className="img">
            <img
              src="https://img.freepik.com/premium-photo/elegant-furniture-chair-design-stylish-room-setting-modern-interior-inspiration_947814-118218.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <p>Crypter - NFT UI kit</p>
            <span>icon</span>
          </div>
        </div>
        <div className="right">
          <span>$2,453.80</span>
          <span className="active">Active</span>
        </div>
      </div>

      <div className="cost redx">
        <div className="left">
          <div className="img">
            <img
              src="https://img.freepik.com/premium-photo/elegant-furniture-chair-design-stylish-room-setting-modern-interior-inspiration_947814-118218.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <p>Crypter - NFT UI kit</p>
            <span>icon</span>
          </div>
        </div>
        <div className="right">
          <span>$2,453.80</span>
          <span className="active">Active</span>
        </div>
      </div>

      <div className="cost redx">
        <div className="left">
          <div className="img">
            <img
              src="https://img.freepik.com/premium-photo/elegant-furniture-chair-design-stylish-room-setting-modern-interior-inspiration_947814-118218.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <p>Crypter - NFT UI kit</p>
            <span>icon</span>
          </div>
        </div>
        <div className="right">
          <span>$2,453.80</span>
          <span className="active">Active</span>
        </div>
      </div>

      <div className="cost redx">
        <div className="left">
          <div className="img">
            <img
              src="https://img.freepik.com/premium-photo/elegant-furniture-chair-design-stylish-room-setting-modern-interior-inspiration_947814-118218.jpg"
              alt=""
            />
          </div>
          <div className="name">
            <p>Crypter - NFT UI kit</p>
            <span>icon</span>
          </div>
        </div>
        <div className="right">
          <span>$2,453.80</span>
          <span className="active">Active</span>
        </div>
      </div>
    </div>
  );
}
