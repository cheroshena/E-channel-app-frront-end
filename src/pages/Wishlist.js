import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import cross from "../images/cross.svg";
import Container from '../components/Container';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0021/0527/8543/products/dynarex-3187-sensi-wrap-self-adherent-latex-free-1-x-5yd-tan-case-of-30_720x.jpg?v=1675702175"  alt="watch"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="https://ae01.alicdn.com/kf/Hf538d1f8fb7a4417b838dbeb215bed3bX.jpg_640x640Q90.jpg_.webp"
                                        className="img-fluid w-100"
                                        alt="watch"
                                    />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute cross img-fluid"
                                />
                                <div className="wishlist-card-image">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/2199/5291/products/stethoscope-duplex-baby-614409.jpg?v=1619021941"
                                        className="img-fluid w-100"
                                        alt="watch"
                                    />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
            </Container>
        </>
    )
}

export default Wishlist

