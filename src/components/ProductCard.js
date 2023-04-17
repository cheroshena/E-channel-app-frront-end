import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid, data } = props;
    console.log(data);
    let location = useLocation();
    return (
        <>
            {
               Array.isArray(data) && data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                            <Link to={`${location.pathname == "/"
                                ? "/product/:id"
                                : location.pathname == "/product/:id"
                                    ? "/product/:id"
                                    : ":id"}`}
                                className="product-card position-relative">
                                <div className="wishlist-icon position-absolute">
                                    <button className="border-0 bg-transparent"><img src={wish} alt="product image" /></button>
                                </div>
                                <div className="product-image">
                                    <img src={item?.images[0]?.url} className="img-fluid" alt="product image" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZAYlQb_aZIPSbMSTMF33U17v-wFY0YdVwg&usqp=CAU" className="img-fluid" alt="product image" />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">{item?.brand}</h6>
                                    <h5 className="product-title">
                                        {item?.title}
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={parseFloat(item?.totalrating)}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                                    dangerouslySetInnerHTML={{__html: item?.description}}
                                    ></p>
                                    <p className="price">Rs. {item?.price}</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        <button className="border-0 bg-transparent">
                                            <img src={prodcompare} alt="compare" />
                                        </button >
                                        <button className="border-0 bg-transparent">
                                            <img src={view} alt="view" />
                                        </button >
                                        <button className="border-0 bg-transparent">
                                            <img src={addcart} alt="add cart" />
                                        </button >

                                    </div>
                                </div>
                            </Link>
                        </div>

                    )
                })
            }



        </>
    )
}

export default ProductCard
