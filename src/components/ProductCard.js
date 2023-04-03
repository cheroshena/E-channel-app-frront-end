import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/images/wish.svg" alt="product image" /></Link>
                    </div>
                    <div className="product-image">
                        <img src="images/images/watch.jpg" className="img-fluid" alt="product image" />
                        <img src="images/images/watch-1.avif" className="img-fluid" alt="product image" />
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
                            <Link>
                                <img src="images/images/prodcompare.svg" alt="compare" />
                            </Link>
                            <Link>
                                <img src="images/images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/images/add-cart.svg" alt="add cart" />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/images/wish.svg" alt="product image" /></Link>
                    </div>
                    <div className="product-image">
                        <img src="images/images/watch.jpg" className="img-fluid" alt="product image" />
                        <img src="images/images/watch-1.avif" className="img-fluid" alt="product image" />
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
                            <Link>
                                <img src="images/images/prodcompare.svg" alt="compare" />
                            </Link>
                            <Link>
                                <img src="images/images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/images/add-cart.svg" alt="add cart" />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
