import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import DoctorCard from '../components/DoctorCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import Container from '../components/Container';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addRating, getADoctor } from '../features/doctors/doctorSlice';
import { toast } from 'react-toastify';
import { addProdToSelectdoc, getUserSelectdoc } from '../features/user/userSlice';


const SingleDoctor = () => {
    const [quantity, setQuantity] = useState(1)
    const [alreadyAdded, setAlreadyAdded] = useState(false)

    const location = useLocation();

    const navigate = useNavigate()


    const getDoctorId = location.pathname.split("/")[2]

    const dispatch = useDispatch();

    const doctorState = useSelector(state => state?.doctor?.singledoctor)
    const selectdocState = useSelector(state => state?.auth?.selectdocDoctors)
    console.log(doctorState);
    useEffect(() => {
        dispatch(getADoctor(getDoctorId))
        dispatch(getUserSelectdoc())
    }, [])

    useEffect(() => {
        for (let index = 0; index < selectdocState?.length; index++) {
            if (getDoctorId === selectdocState[index]?.doctorId?._id) {
                setAlreadyAdded(true)
            }

        }
    }, [])

    const uploadSelectdoc = () => {
        dispatch(addProdToSelectdoc({ doctorId: doctorState?._id, quantity }))
        navigate('/book')
    }

    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {

        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };
    const [star, setStar] = useState(null)
    const [comment, setComment] = useState(null)

    const addRatingToDoctor = () => {
        if (star === null) {
            toast.error("Please add star Rating")
            return false
        } else if (comment === null) {
            toast.error("Please Write a Comment")
            return false
        } else {
            dispatch(addRating({ star: star, comment: comment, docId: getDoctorId }))
            
            dispatch(getADoctor(getDoctorId))
        
        }
        return false

    }

    return (
        <>
            <Meta title={"Doctor Name"} />
            <BreadCrumb title={doctorState?.name} />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <img src={doctorState?.images?.[0]?.url} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    {doctorState?.specialize}
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">{doctorState?.name}</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={doctorState?.doctotalrating?.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    
                                </div>
                                <a className="review-btn" href="#review">
                                    Write a Review
                                </a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Specialists :</h3>
                                    <p className="product-data">Medical Geneticists</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Gender :</h3>
                                    <p className="product-data">{doctorState?.gender}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Registration :</h3>
                                    <p className="product-data">{doctorState?.regno}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Qualifications :</h3>
                                    <p className="product-data">{doctorState?.qulification}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Experience :</h3>
                                    <p className="product-data">{doctorState?.expirience}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Channeling Time Duration :</h3>
                                    <p className="product-data">{doctorState?.timeduration}</p>
                                </div>

                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className="product-heading"> You can Channeling only "One Patient"</h3>
                                    
                                    <div className={alreadyAdded ? "ms-0" : "ms-5" + "d-flex align-items-center gap-30 ms-5"}>

                                        <button
                                            className="button border-0"
                                            type="button"
                                            onClick={() => { alreadyAdded ? navigate('/book') : uploadSelectdoc() }}
                                        >
                                            {alreadyAdded ? "Go to Booking" : "Add to Booking"}
                                        </button>
                                    </div>
                                </div>

                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading">Special Note</h3>
                                    <p className="product-data" dangerouslySetInnerHTML={{ __html: doctorState?.discription }}>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tenetur nisi similique illum aut perferendis voluptas, quisquam
                                obcaecati qui nobis officia. Voluptatibus in harum deleniti
                                labore maxime officia esse eos? Repellat?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tenetur nisi similique illum aut perferendis voluptas, quisquam
                                obcaecati qui nobis officia. Voluptatibus in harum deleniti
                                labore maxime officia esse eos? Repellat?These are specialists in family medicine, internal medicine, pediatrics and geriatrics and provide the primary resources — conducting routine physicals, prescribing medicines, treating minor illnesses, managing chronic conditions — for these defined populations and are typically the first point of contact, says Jones.
                                Primary care physicians are advocates for the patient in coordinating the use of the entire health care system to benefit the patient, according to the American Academy of Family Physicians.
                                “I tell students you can’t go wrong specializing in primary care,”
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="reviews-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id="review">Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className="text-dark " href="">Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Your Review</h4>
                                
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                            onChange={(e) => {
                                                setStar(e)
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            cols="30"
                                            rows="4"
                                            placeholder="Comments"
                                            onChange={(e) => {
                                                setComment(e.target.value)
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end mt-3">
                                        <button type="button" onClick={addRatingToDoctor} className="button border-0">Submit Review</button>
                                    </div>
                                
                            </div>
                            <div className="reviews mt-4">
                            {
                                    doctorState && doctorState?.docratings?.map((item, index) => {
                                        return (
                                            <div key={index} className="review ">
                                                <div className="d-flex gap-10 align-items-center">

                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={item?.star}
                                                        edit={false}
                                                        activeColor="#ffd700"

                                                    />
                                                </div>
                                                <p className="mt-3">
                                                    {item?.comment}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            
        </>
    )
}

export default SingleDoctor
