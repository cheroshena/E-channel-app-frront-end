import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Color } from '../components/Color';
import cross from "../images/cross.svg";

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Product"} />
            <BreadCrumb title="Compare Product" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0021/0527/8543/products/pure-msk-black-a-500x500500x500_540x.png?v=1633034486" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title"> Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h6>Brand:</h6>
                                            <p>Hemas</p>
                                        </div>
                                        <div className="product-detail">
                                            <h6>Type:</h6>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h6>Availablity:</h6>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h6>Color:</h6>
                                            <Color />

                                        </div>
                                        <div className="product-detail">
                                            <h6>Size:</h6>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0021/0527/8543/products/dynarex-3187-sensi-wrap-self-adherent-latex-free-1-x-5yd-tan-case-of-30_720x.jpg?v=1675702175" className="img-fluid" alt=""/>
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title"> Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h6>Brand:</h6>
                                            <p>Hemas</p>
                                        </div>
                                        <div className="product-detail">
                                            <h6>Type:</h6>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h6>Availablity:</h6>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h6>Color:</h6>
                                            <Color />

                                        </div>
                                        <div className="product-detail">
                                            <h6>Size:</h6>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct
