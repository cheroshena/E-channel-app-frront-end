import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = (props) => {
    const {title, brand, totalrating, price, sold, quantity, images}=props;
    return (
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div className="img-fluid">
                        <img src={images[0]?.url} className="img-fluid" alt="product image" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">{brand}</h5>
                        <h6 className="title">
                            {title}
                        </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={totalrating}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price"><span className="red-p">Rs.{price}</span> &nbsp; <strike>Rs.{price + 250}</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className="mb-0">
                                <b>5</b>days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                                <span className="badge rounded-circle p-2 bg-danger">1</span>
                            </div>
                            
                        </div>
                        <div className="prod-count my-3">
                                <p>Products:{quantity}</p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-info" 
                                    role="progressbar" 
                                    style={{width: quantity/quantity+sold *100 +"%"}}
                                    aria-valuenow={quantity/quantity+sold *100}
                                    aria-valuemin={quantity}
                                    aria-valuemax={sold + quantity}
                                    ></div>
                                </div>
                            </div>
                            <Link className="small-button">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct
