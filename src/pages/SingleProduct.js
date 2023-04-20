import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { Color } from '../components/Color';
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import Container from '../components/Container';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct } from '../features/products/productSlice';
import { toast } from 'react-toastify';
import { addProdToCart } from '../features/user/userSlice';


export const SingleProduct = () => {
    const[quantity,setQuantity]=useState(1)


    const location = useLocation()

    const getProductId = location.pathname.split("/")[2]

    const dispatch = useDispatch();

    const productState = useSelector(state => state?.product?.singleproduct)

    console.log(productState);

    useEffect(() => {
        dispatch(getAProduct(getProductId))
    }, [])

    const uploadCart=()=>{
        dispatch(addProdToCart({productId:productState?._id,quantity,price:productState?.price}))
    }

    const props = { width: 400, height: 600, zoomWidth: 600, img: productState?.images[0]?.url ? productState?.images[0]?.url : "https://cdn.shopify.com/s/files/1/2199/5291/products/stethoscope-duplex-baby-614409.jpg?v=1619021941" };
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
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div><ReactImageZoom {...props} />
                            </div>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    {productState?.title}
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">Rs {productState?.price}</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={isNaN(parseFloat(productState?.totalrating)) ? 0 : parseFloat(productState?.totalrating)}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0 t-review">( 2 Reviews )</p>
                                </div>
                                <a className="review-btn" href="#">
                                    Write a Review
                                </a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Name :</h3>
                                    <p className="product-data">{productState?.title}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Brand :</h3>
                                    <p className="product-data">{productState?.brand}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Category :</h3>
                                    <p className="product-data">{productState?.category}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tags :</h3>
                                    <p className="product-data">{productState?.tags}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Availablity :</h3>
                                    <p className="product-data">{productState?.quantity} Items</p>
                                </div>

                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className="product-heading">Quantity :</h3>
                                    <div className="">
                                        <input
                                            type="number"
                                            name=""
                                            min={1}
                                            max={productState?.quantity}
                                            style={{ "width": "70px" }}
                                            className="form-control"
                                            id="" 
                                            onChange={(e)=>setQuantity(e.target.value)}
                                            value={quantity}
                                            />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button 
                                        onClick={()=>{uploadCart()}} 
                                        /*data-bs-toggle="modal" data-bs-target="#staticBackdrop"*/ 
                                        className="button border-0" type="button">Add to Cart</button>
                                        <button className="button signup">Buy Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div><a href="#"><TbGitCompare className="fs-5 me-2" />Add to Compare</a></div>
                                    <div><a href="#"><AiOutlineHeart className="fs-5 me-2" />Add to Wishlist</a></div>
                                </div>
                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading">Shipping & Returns :</h3>
                                    <p className="product-data">
                                        Free shipping and returns available on all orders! <br /> We
                                        ship all US domestic orders within
                                        <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className="product-heading">Product Link:&nbsp;</h3>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            copyToClipboard(
                                                window.location.href
                                            );
                                        }}
                                    >
                                        <MdContentCopy />  Product Link
                                    </a>
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

                            <p dangerouslySetInnerHTML={{ __html: productState?.description }}>

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
                                        <a className="text-dark " href="#">Write a Review</a>
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
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}
