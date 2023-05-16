import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { addToWishlist, getAllProducts } from '../features/products/productSlice';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import video01 from "../images/video01.mp4"
import video02 from "../images/video02.mp4"
import video03 from "../images/video03.mp4"
import video04 from "../images/video04.mp4"
import video05 from "../images/video05.mp4"
import video06 from "../images/video06.mp4"


const Home = () => {

  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const navigate = useNavigate();


  const dispatch = useDispatch();
  useEffect(() => {
    getblogs();
    getProducts();
  }, []);

  const getblogs = () => {
    dispatch(getAllBlogs())
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner  position-relative">
              <video
                autoPlay
                muted
                loop
                src={video05}
                className="img-fluid rounded-3"
                alt="main banner"
              />


            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner  position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  src={video01}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>OUR SERVICES</h4>
                  <h5>Take Multivitamins<br /> Supplies.</h5>


                </div>

              </div>
              <div className="small-banner  position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  src={video03}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>OUR DOCTORS</h4>
                  <h5 className='text-white'>Treat & Communicate  <br />with friendly.</h5>


                </div>

              </div>
              <div className="small-banner position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  src={video04}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute ">
                  <h4 >OUR EMPLOYEES</h4>
                  <h5>Be a Life Saveiour<br /> with Good Heart.</h5>


                </div>

              </div>
              <div className="small-banner position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  src={video06}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>OUR VISION</h4>
                  <h5 >Guide the Patient with<br /> Right way.</h5>


                </div>

              </div>


            </div>
          </div>
        </div>
      </Container>
      
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      {/*  <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Vitamins</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Vitamins</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Vitamins</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Vitamins</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Futured Collection</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item, index) => {
              if (item?.tags === "featured") {
                return (
                  <div
                    key={index}
                    className="col-3">
                    <div
                      className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent" onClick={() => { addToWish(item?._id) }}><img src={wish} alt="product image" /></button>
                      </div>
                      <div className="product-image">
                        <img src={item?.images[0]?.url} className="img-fluid" alt="product image" />
                        
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={parseFloat(item?.totalrating)}
                          edit={false}
                          activeColor="#ffd700"
                        />

                        <p className="price">Rs. {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button > */}
                          <button className="border-0 bg-transparent">
                            <img onClick={() => navigate("/product/" + item?._id)} src={view} alt="view" />
                          </button >
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="add cart" />
                          </button >

                        </div>
                      </div>
                    </div>
                  </div>
                );

              }

            })
          }

        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">

        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item, index) => {
              if (item?.tags === "special") {
                return <SpecialProduct
                  key={index}
                  id={item?._id}
                  title={item?.title}
                  brand={item?.brand}
                  totalrating={parseFloat(item?.totalrating)}
                  price={item?.price}
                  sold={item?.sold}
                  quantity={item?.quantity}
                  images={item?.images}
                />;
              }


            })
          }


        </div>

      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">

        <div className="row">

          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item, index) => {
              if (item?.tags === "popular") {
                return (
                  <div
                    key={index}
                    className="col-3">
                    <div
                      className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent" onClick={() => { addToWish(item?._id) }}><img src={wish} alt="product image" /></button>
                      </div>
                      <div className="product-image">
                        <img src={item?.images[0]?.url} className="img-fluid" alt="product image" />
                        
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={parseFloat(item?.totalrating)}
                          edit={false}
                          activeColor="#ffd700"
                        />

                        <p className="price">Rs. {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button >
                          <button className="border-0 bg-transparent">
                            <img onClick={() => navigate("/product/" + item?._id)} src={view} alt="view" />
                          </button >
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="add cart" />
                          </button >

                        </div>
                      </div>
                    </div>
                  </div>
                );

              }

            })
          }

        </div>

      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-6 ">

        <div className="row">
          <div className="col-12">
            <div className="brand-slide marquee-inner-wrapper card-wrapper ">
              <Marquee className="d-flex">
                <div className="mx-4 w-25 ">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-35">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
                <div className="mx-4 w-35">
                  <img src="images/brand-09.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>

      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">

        <div className="row">
          {
            blogState && blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-3 " key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
                    />
                  </div>
                )
              }
            })
          }
        </div>

      </Container>
    </>
  );
}

export default Home
