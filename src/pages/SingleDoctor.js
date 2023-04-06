import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import DoctorCard from '../components/DoctorCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import Container from '../components/Container';
import { Link } from "react-router-dom";

const SingleDoctor = () => {
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };
    return (
        <>
            <Meta title={"Doctor Name"} />
            <BreadCrumb title="Doctor Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div><img src="https://www.carehospitals.com/assets/images/main/general-surgeon-aalok-somani.webp" className="img-fluid" alt="product image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Medical Geneticists
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">Dr.A.Gunarathna</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0 t-review">( 2 Reviews )</p>
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
                                    <h3 className="product-heading">Registration :</h3>
                                    <p className="product-data">DV678221</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Qualifications :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Practising Government Hospitals :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Experience :</h3>
                                    <p className="product-data">In Stock</p>
                                </div>

                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className="product-heading">Quantity :</h3>
                                    <div className="">
                                        <input
                                            type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            style={{ "width": "70px" }}
                                            className="form-control"
                                            id="" />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <Link to="/doctor" className="button text-white">
                                            Cancel
                                        </Link>
                                        <Link to="/book" className="button text-white">
                                            Add to Booking
                                        </Link>
                                    </div>
                                </div>

                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading">Special Note</h3>
                                    <p className="product-data">
                                        These are specialists in family medicine, internal medicine, pediatrics and geriatrics and provide the primary resources — conducting routine physicals, prescribing medicines, treating minor illnesses, managing chronic conditions — for these defined populations and are typically the first point of contact, says Jones.
                                        Primary care physicians are advocates for the patient in coordinating the use of the entire health care system to benefit the patient, according to the American Academy of Family Physicians.
                                        “I tell students you can’t go wrong specializing in primary care,” says Jones. “You may end up caring for the health of generation in one family. That, our graduates tell us, can be extremely rewarding.”
                                        Family physicians are the most in-demand physicians, followed by internal medicine, according to the Doximity report. <br /> <br />
                                        <b>"You want to channeling Doctor click the 'Book' Button and after fill the form"</b>
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
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
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
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review ">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className="mb-0">Cheroshena</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Consectetur fugit ut excepturi quos. Id reprehenderit
                                        voluptatem placeat consequatur suscipit ex. Accusamus dolore
                                        quisquam deserunt voluptate, sit magni perspiciatis quas
                                        iste?
                                    </p>
                                </div>
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className="mb-0">L.Fernando</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Consectetur fugit ut excepturi quos. Id reprehenderit
                                        voluptatem placeat consequatur suscipit ex. Accusamus dolore
                                        quisquam deserunt voluptate, sit magni perspiciatis quas
                                        iste?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">

                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                </div>
                <div className="row">
                    <DoctorCard />
                </div>
            </Container>
        </>
    )
}

export default SingleDoctor
