import React, { useEffect } from 'react'
import Container from '../components/Container';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from 'react-redux';
import { getChannels } from '../features/user/userSlice';

const Channels = () => {

    const dispatch = useDispatch()
    const orderState = useSelector(state => state?.auth?.getchanneledDoctor?.orders)
    console.log(orderState);

    useEffect(() => {
        dispatch(getChannels())

    }, [])

    return (
        <>
            <Meta title={"My Channels"} />
            <BreadCrumb title="My Channels" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-3'>
                                <h5>Channel Id</h5>
                            </div>
                            <div className='col-3'>
                                <h5>Channeling Service Charge</h5>
                            </div>
                            <div className='col-3'>
                                <h5>Information</h5>
                            </div>
                            <div className='col-3'>
                                <h5>Status</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-3'>
                        {
                            orderState && orderState?.map((item, index) => {
                                return (
                                    <div className='row my-3' key={index}>
                                        <div className='col-3'>
                                            <p>ID: {item?._id}</p>
                                        </div>
                                        <div className='col-3'>
                                            <p>Rs. 500</p>
                                        </div>
                                        <div className='col-3'>
                                            <p>Check your Channel status</p>
                                        </div>
                                        <div className='col-3'>
                                            <p>{item?.orderStatus}</p>
                                        </div>
                                        <div className='col-12'>
                                            <div className='row bg-white p-3'>
                                                <div className='col-3'>
                                                    <h6>Doctor Name</h6>
                                                </div>
                                                <div className='col-3'>
                                                    <h6>Specialice</h6>
                                                </div>
                                                <div className='col-3'>
                                                    <h6>Time Duration</h6>
                                                </div>
                                                <div className='col-3'>
                                                    <h6>Register No</h6>
                                                </div>
                                                {
                                                    item?.orderItems?.map((i, index) => {
                                                        return (
                                                            <div key={index} className='col-12'>
                                                                <div className='row list-order text-white row my-3  p-3'>
                                                                    <div className='col-3'>
                                                                        <p>{i?.doctor?.name}</p>
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <p>{i?.doctor?.specialize}</p>
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <p>{i?.doctor?.timeduration}</p>
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <p>{i?.doctor?.regno}</p>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Channels
