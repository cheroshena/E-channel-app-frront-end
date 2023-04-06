import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
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
                        <img src="https://medtree.co.uk/media/catalog/product/cache/2adb77301c05f4f445452e10bf0d42fe/d/i/di451ca_1.jpg" className="img-fluid" alt="product image" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZAYlQb_aZIPSbMSTMF33U17v-wFY0YdVwg&usqp=CAU" className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Hemas</h6>
                        <h5 className="product-title">
                            You will need to have React in your project in order to use the component.
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...</p>
                        <p className="price">Rs.120.00</p>
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
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
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
                        <img src="https://medtree.co.uk/media/catalog/product/cache/2adb77301c05f4f445452e10bf0d42fe/d/i/di451ca_1.jpg" className="img-fluid" alt="product image" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZAYlQb_aZIPSbMSTMF33U17v-wFY0YdVwg&usqp=CAU" className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Hemas</h6>
                        <h5 className="product-title">
                            You will need to have React in your project in order to use the component.
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...</p>
                        <p className="price">Rs.120.00</p>
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
        </>
    )
}

export default ProductCard
