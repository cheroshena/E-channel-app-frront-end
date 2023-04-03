import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Color } from '../components/Color';

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
                                    src="images/images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="images/images/watch.jpg" className="img-fluid w-100" alt="watch" />
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
                                    src="images/images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img
                                        src="images/images/tab.jpg" className="img-fluid w-100" alt="watch" />
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
