import React, { useEffect } from 'react'
import Container from '../components/Container';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice';

const Orders = () => {
  const dispatch = useDispatch()
  const orderState = useSelector(state => state?.auth?.getorderedProduct?.orders)
  console.log(orderState);

  useEffect(() => {
    dispatch(getOrders())

  }, [])
  return (
    <>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className='col-12'>
            <div className='row'>
              <div className='col-3'>
                <h5>Order Id</h5>
              </div>
              <div className='col-3'>
                <h5>Total Amount</h5>
              </div>
              <div className='col-3'>
                <h5>Total Amount after Discount</h5>
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
                  <div key={index} className='row bg-white p-3 ' >
                    <div className='col-3'>
                      <p>ID: {item?._id}</p>
                    </div>
                    <div className='col-3'>
                      <p>Rs. {item?.totalPrice}</p>
                    </div>
                    <div className='col-3'>
                      <p>Rs. {item?.totalPriceAfterDiscount}</p>
                    </div>
                    <div className='col-3'>
                      <p>{item?.orderStatus}</p>
                    </div>
                    <div className='col-12'>
                      <div className='row bg-white p-3'>
                        <div className='col-3'>
                          <h6>Product Name</h6>
                        </div>
                        <div className='col-3'>
                          <h6>Quantity</h6>
                        </div>
                        <div className='col-3'>
                          <h6>Price</h6>
                        </div>
                        <div className='col-3'>
                          <h6>Brand</h6>
                        </div>
                        {
                          item?.orderItems?.map((i, index) => {
                            return (
                              <div key={index} className='col-12'>
                                <div className='row list-order text-white row my-3  p-3'>
                                  <div className='col-3'>
                                    <p>{i?.product?.title}</p>
                                  </div>
                                  <div className='col-3'>
                                    <p>{i?.quantity}</p>
                                  </div>
                                  <div className='col-3'>
                                    <p>Rs. {i?.price}</p>
                                  </div>
                                  <div className='col-3'>
                                    <p>{i?.product?.brand}</p>
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

export default Orders
