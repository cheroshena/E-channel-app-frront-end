import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from '../components/Container';

const Book = () => {
    return (
        <>
            <Meta title={"Doctor Booking"} />
            <BreadCrumb title="Doctor Booking" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-content-center">
                            <h4 className="cart-col-1">Doctors</h4>
                            <h4 className="cart-col-2">Specialists</h4>
                            <h4 className="cart-col-3">Appoinment No</h4>
                            <h4 className="cart-col-4">Booking ID</h4>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img src="https://www.carehospitals.com/assets/images/main/general-surgeon-aalok-somani.webp" className="img-fluid" alt="product image" />
                                </div>
                                <div className="w-75">

                                    <p>Dr.A.Gunarathna</p>
                                    <p>ID: DV678221</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">Medical Geneticists</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        min={1}
                                        max={10}
                                        id=""
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger " />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">12112112ds1</h5>
                            </div>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1 gap-15 d-flex align-items-center">
                                <div className="w-25">
                                    <img src="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=" className="img-fluid" alt="product image" />
                                </div>
                                <div className="w-75">

                                    <p>Dr.A.Gunarathna</p>
                                    <p>ID: DV678221</p>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <h5 className="price">Medical Geneticists</h5>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <div>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        min={1}
                                        max={10}
                                        id=""
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger " />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <h5 className="price">12112112ds1</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <Link to="/doctor" className="button">
                            Continue To Channeling
                        </Link>
                        <div className="d-flex flex-column align-items-end">
                            <h4>Channeling Doctor : Dr.A.Gunarathna</h4>
                            <p>You Click the "Channel" Button You Redirect to Channel information form <b>Please fill the Your Information for contact you</b> </p>

                            <Link to="/checkoutdoc" className="button">
                                Channel Now
                            </Link>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Book
