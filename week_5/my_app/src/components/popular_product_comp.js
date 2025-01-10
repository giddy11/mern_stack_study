import React from 'react'

export default function PopularProductComp(props) {
    let productIcon = props.innerImage;
    let productName = props.innerName;
    let productStatus = props.pState;
    let productPrice = props.pPrice;
  return (
    <div>
        <div className="cost redx">
        <div className="left">
          <div className="img">
            <img
              src={productIcon}
              alt=""
            />
          </div>
          <div className="name">
            <p>{productName}</p>
            <span>icons</span>
          </div>
        </div>
        <div className="right">
          <span>{productPrice}</span>
          <span className="active">{productStatus}</span>
        </div>
      </div>

    </div>
  )
}
