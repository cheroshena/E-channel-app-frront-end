import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const DoctorCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/doctor" ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id" className="doctor-card position-relative">
                    <div className="doctor-image">
                        <img src="https://www.carehospitals.com/assets/images/main/general-surgeon-aalok-somani.webp" className="img-fluid" alt="product image" />
                        

                    </div>
                    <div className="doctor-details">
                        <h6 className="brand">Medical Geneticists</h6>
                        <h5 className="doctor-title">
                            Dr.A.Gunarathna
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
                        <p className="price">Monday 2pm-4pm / Friday 8am-10am</p>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/doctor" ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id" className="doctor-card position-relative">
                    <div className="doctor-image">
                        <img src="https://www.carehospitals.com/assets/images/main/general-surgeon-aalok-somani.webp" className="img-fluid" alt="product image" />
                        

                    </div>
                    <div className="doctor-details">
                        <h6 className="brand">Medical Geneticists</h6>
                        <h5 className="doctor-title">
                            Dr.A.Gunarathna
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
                        <p className="price">Monday 2pm-4pm / Friday 8am-10am</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default DoctorCard