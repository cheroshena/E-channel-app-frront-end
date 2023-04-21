import React, { useEffect } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelectdoc } from '../features/user/userSlice';


const Book = () => {
    const dispatch = useDispatch();
    const userSelectdocState = useSelector(state => state.auth.selectdocDoctors)
    useEffect(() => {
        dispatch(getUserSelectdoc())
    }, [])
 
    return (
        <>
            <Meta title={"Doctor Booking"} />
            <BreadCrumb title="Doctor Booking" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-content-center">
                            <h4 className="cart-col-1">Doctors</h4>
                            <h4 className="cart-col-2"></h4>
                            <h4 className="cart-col-3"></h4>
                            <h4 className="cart-col-4">Delete</h4>
                        </div>
                        {
                            userSelectdocState && userSelectdocState?.map((item, index) => {
                                return (
                                    <div key={index} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                        <div className="cart-col-1 gap-15 d-flex align-items-center">
                                            <div className="w-25">
                                                <img src={item?.doctorId?.images?.[0]?.url} className="img-fluid" alt="product image" />
                                            </div>
                                            <div className="w-75">

                                                <p>Doctor Name : {item?.doctorId.name}</p>
                                                <p>Med.Id : {item?.doctorId.regno}</p>
                                                <p>Gender : {item?.doctorId.gender}</p>
                                            </div>
                                        </div>
                                        <div className="cart-col-2">
                                            <h5 className="price">{item?.doctorId.specialize}</h5>
                                        </div>
                                        <div className="cart-col-4">
                                            
                                                <AiFillDelete className="text-danger " />
                                            
                                        </div>
                                        
                                    </div>)
                            })
                        }

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
