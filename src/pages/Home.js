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
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>Solo Healthcare <br /> Pack</h5>
                <p>From Rs.1999.00 or Rs.41.62/mo.</p>
                <Link className="button">Buy Now</Link>
              </div>

            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner  position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Solo Healthcare <br /> Pack</h5>

                  <Link className="small-button">View</Link>
                </div>

              </div>
              <div className="small-banner  position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival.</h4>
                  <h5>Solo Healthcare <br /> Pack</h5>

                  <Link className="small-button">View</Link>
                </div>

              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival.</h4>
                  <h5>Solo Healthcare <br /> Pack</h5>

                  <Link className="small-button">View</Link>
                </div>

              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival.</h4>
                  <h5>Solo Healthcare <br /> Pack</h5>

                  <Link className="small-button">View</Link>
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
              if (item?.tags === "future") {
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZAYlQb_aZIPSbMSTMF33U17v-wFY0YdVwg&usqp=CAU" className="img-fluid " alt="product image" />
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZAYlQb_aZIPSbMSTMF33U17v-wFY0YdVwg&usqp=CAU" className="img-fluid " alt="product image" />
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
      <Container class1="marque-wrapper home-wrapper-2 py-5 ">

        <div className="row">
          <div className="col-12">
            <div className="brand-slide marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
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
