import React from "react";
import "../../styles/popular_product.css";
import PopularProductComp from "../../components/popular_product_comp";

export default function PopularProduct() {
  let imageLink = "https://img.freepik.com/premium-photo/elegant-furniture-chair-design-stylish-room-setting-modern-interior-inspiration_947814-118218.jpg";
  return (
    /**
     * TODO: Practical - 1
     * Convert this design to a reusable component
     */

    
    <div>
      <PopularProductComp innerImage = {imageLink} innerName = "Test Product" pState = "Inactive" pPrice = "N/A"></PopularProductComp>

      <PopularProductComp innerImage = {imageLink} innerName = "Crypter - NFT UI Kit" pState = "Active" pPrice = "$3,456"></PopularProductComp>
      
      <PopularProductComp innerImage = {imageLink} innerName = "Crypter - NFT UI Kit" pState = "Active" pPrice = "$3,456"></PopularProductComp>

      <PopularProductComp innerImage = {imageLink} innerName = "Crypter - NFT UI Kit" pState = "Active" pPrice = "$3,456"></PopularProductComp>

      <PopularProductComp innerImage = {imageLink} innerName = "Crypter - NFT UI Kit" pState = "Active" pPrice = "$3,456"></PopularProductComp>
      
    </div>
  );
}
