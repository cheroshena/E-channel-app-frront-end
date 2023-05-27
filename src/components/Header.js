import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import Home from '../pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/products/productSlice';

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state?.auth?.cartProducts)
  const authState = useSelector(state => state?.auth)
  const [paginate, setPaginate] = useState(true);
  const productState = useSelector(state => state?.product?.product)
  const [productOpt, setProductOpt] = useState([])
  const navigate = useNavigate()


  const [total, setTotal] = useState(null)


  useEffect(() => {
    let sum = 0
    for (let index = 0; index < cartState?.length; index++) {

      sum = sum + (Number(cartState[index]?.quantity) * Number(cartState[index]?.price))
      setTotal(sum)
    }
  }, [cartState])

  useEffect(() => {
    let data = []
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title })

    }
    setProductOpt(data)
  }, [productState])

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <header className="header-top-strip py-3" >
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p><Link>

              </Link></div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="#">(011) 892 6000</a>
              </p>
            </div>

          </div>

        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">MedHub</Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log('Results paginated')}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`)
                    dispatch(getAProduct(selected[0]?.prod))
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search for Products..."
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6 text-white" />
                </span>
              </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                {/* <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src={compare} alt="compare" />
                    <p className="mb-0"> Compare <br /> Products </p>

                  </Link>
                </div> */}
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0"> Favourite <br /> Wishlist </p>

                  </Link>
                </div>
                <div>
                  <Link to={authState?.user === null ? "/login" : "/my-profile"} className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="" />
                    {
                      authState?.user === null ? <p className="mb-0">
                        Log in <br /> My Account
                      </p> : <p className="mb-0">
                        Welcome Back ! <br /> {authState?.user?.firstname} </p>
                    }

                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cartState?.length ? cartState?.length : 0}</span>
                      <p className="mb-0">Rs. {total ? total : 0}</p>

                    </div>

                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu bottom d-flex align-items-center gap-30">
                
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/doctor">Doctors Channeling</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/book"> Doctor Booking</NavLink>
                    <NavLink to="/my-channels"> My Channels</NavLink>
                    <NavLink to="/my-orders">My Orders</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button onClick={handleLogout} className="border border-0 bg-transparent text-white text-uppercase" type='button' > Logout </button>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </header>

    </>
  )
}

export default Header
