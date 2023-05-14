import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from "axios";
import { config } from '../utils/axiosConfig';
import { createAChannel } from '../features/user/userSlice';



const shippingSchema = yup.object({
    name: yup.string().required("Name is Required !"),
    nic: yup.string().required("NIC Number is Required !"),
    mobile: yup.string().required("Mobile is Required !"),
    email: yup.string().required("Email is Required !"),
    other: yup.string().required("Current Location is Required !"),

});




const Checkoutdoc = () => {

    const dispatch = useDispatch()
    const selectdocState = useSelector(state => state?.auth?.selectdocDoctors)
    const [totalAmount, setTotalAmount] = useState(null)
    const [shippingInfo, setShippingInfo] = useState(null)
    const[paymentInfo,setPaymentInfo]=useState({razorpayPaymentId:"",razorpayOrderId:""})
    const[selectdocDoctorState,setSelectdocDoctorState]=useState([])
    console.log(paymentInfo,shippingInfo);

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < selectdocState?.length; index++) {
            sum = sum + (Number(selectdocState[index]?.quantity) * selectdocState[index]?.price)
            setTotalAmount(sum)

        }
    }, [selectdocState])

    const formik = useFormik({
        initialValues: {
            name: "",
            nic: "",
            mobile: "",
            email: "",
            other: "",

        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            setShippingInfo(values)

            setTimeout(()=>{
                checkOutdocHandler()

            },300);

        },
    });
    console.log(shippingInfo);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    useEffect(()=>{
        let items=[]
        for (let index = 0; index < selectdocState?.length; index++) {
            items.push({doctor:selectdocState[index]?.doctorId._id,quantity:selectdocState[index]?.quantity,name:selectdocState[index]?.doctorId?.name})
            
        }
        setSelectdocDoctorState(items)
    },[])
    

    const checkOutdocHandler = async () => {


        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            alert("Razorpay SDK failed to Load")
            return;
        }


        const result = await axios.post("http://localhost:4000/api/user/channel/checkoutdoc","amount", config)
        if (!result) {
            alert("Something went wrong")
            return;
        }
        

        const { amount, id: order_id, currency } = result.data?.order
        console.log(amount);
        const options = {
            key: "rzp_test_kvK6IeYbW68otF", // Enter the Key ID generated from the Dashboard
            amount: 250,
            currency: currency,
            name: "MedHub",
            description: "Test Transaction",

            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    
                };

                const result = await axios.post("http://localhost:4000/api/user/channel/paymentVerification", data, config);

                setPaymentInfo({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                })

                


                dispatch(createAChannel({totalPrice:totalAmount,totalPriceAfterDiscount:totalAmount,orderItems:selectdocDoctorState,paymentInfo,shippingInfo}))
            },
            prefill: {
                name: "MedHub",
                email: "MedHub@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "MedHub Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="e-doc"></h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className="text-dark total-price" to="/book">
                                            Book
                                        </Link>
                                    </li>
                                    &nbsp; / &nbsp;
                                    <li
                                        className="breadcrumb-ite total-price active"
                                        aria-current="page"
                                    >
                                        Information
                                    </li>
                                    &nbsp; / &nbsp;
                                    <li className="breadcrumb-item total-price active">
                                        Shipping
                                    </li>
                                    &nbsp; /
                                    <li
                                        className="breadcrumb-item total-price active"
                                        aria-current="page"
                                    >
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title total">Contact Information</h4>
                            <p className="user-details total">
                                Pavithra Cheroshena (cheroshena@gmail.com)
                            </p>
                            <h4 className="mb-3">Shipping Address</h4>
                            <form onSubmit={formik.handleSubmit}
                                action=""
                                className="d-flex gap-15 flex-wrap justify-content-between"
                            >

                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange("name")}
                                        onBlur={formik.handleBlur("name")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.name && formik.errors.name}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="NIC Number"
                                        className="form-control"
                                        name="nic"
                                        value={formik.values.nic}
                                        onChange={formik.handleChange("nic")}
                                        onBlur={formik.handleBlur("nic")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.nic && formik.errors.nic}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Mobile"
                                        className="form-control"
                                        name="mobile"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange("mobile")}
                                        onBlur={formik.handleBlur("mobile")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.mobile && formik.errors.mobile}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="form-control"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange("email")}
                                        onBlur={formik.handleBlur("email")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.email && formik.errors.email}
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Current Location"
                                        className="form-control"
                                        name="other"
                                        value={formik.values.other}
                                        onChange={formik.handleChange("other")}
                                        onBlur={formik.handleBlur("other")}
                                    />
                                    <div className="error ms-2 my-1">
                                        {formik.touched.other && formik.errors.other}
                                    </div>
                                </div>


                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                            <BiArrowBack className="me-2" />
                                            Return to Cart
                                        </Link>
                                        <Link to="/cart" className="button">
                                            Continue to Shipping
                                        </Link>
                                        <button className="button border-0" type="submit"  >Channel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            {
                                selectdocState && selectdocState?.map((item, index) => {
                                    return (<div key={index} className="d-flex gap-10 mb-2 align-align-items-center">
                                        <div className="w-75 d-flex gap-10">
                                            <div className="w-25 position-relative">

                                                <img width={100} height={100} className="img-fluid" src={item?.doctorId?.images[0]?.url} alt="product" />
                                            </div>
                                            <div>
                                                <h5 className="total-price">{item?.doctorId?.name}</h5>
                                                <p className="total-price">{item?.doctorId?.specialize}</p>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="total-price">Time Duration</p>
                                            <h6 className="total">{item?.doctorId?.timeduration}</h6>
                                        </div>
                                    </div>)
                                })
                            }

                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Channeling fee</p>
                                <p className="total-price">Rs.500</p>
                            </div>

                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bootom py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">Rs.500</h5>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Checkoutdoc