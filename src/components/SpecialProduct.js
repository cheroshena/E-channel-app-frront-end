import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    return (
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div className="img-fluid">
                        <img src="https://ae01.alicdn.com/kf/Hf538d1f8fb7a4417b838dbeb215bed3bX.jpg_640x640Q90.jpg_.webp" className="img-fluid" alt="product image" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Hemas</h5>
                        <h6 className="title">
                            bla bla bla shik
                        </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price"><span className="red-p">Rs.250</span> &nbsp; <strike>Rs.300</strike>
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
                                <p>Products: 5</p>
                                <div class="progress">
                                    <div className="progress-bar progress-bar-striped bg-info" 
                                    role="progressbar" 
                                    style={{width: "25%"}}
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
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
