import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const DoctorCard = (props) => {
    const { grid, data } = props;
    console.log(data);
    let location = useLocation();
    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div 
                        key={index}
                        className={`${location.pathname == "/doctor" ? `gr-${grid}` : "col-3"}`}>
                            <Link to={`${location.pathname == "/"
                                ? "/doctor/:id"
                                : location.pathname == "/doctor/:id"
                                    ? "/doctor/:id"
                                    : ":id"}`}
                                className="doctor-card position-relative">
                                <div className="doctor-image">
                                    <img src={item?.images[0]?.url} className="img-fluid" alt="product image" />


                                </div>
                                <div className="doctor-details">
                                    <h6 className="brand">{item?.specialize}</h6>
                                    <h5 className="doctor-title">
                                    {item?.name}
                                    </h5>
                                    
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={parseFloat(item?.doctotalrating)}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} dangerouslySetInnerHTML={{ __html: item?.discription }}></p>
                                    <p className="price">All Days {item?.timeduration}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }


        </>
    )
}

export default DoctorCard