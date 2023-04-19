import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from "../components/BlogCard";
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '../features/blogs/blogSlice';
import moment from "moment";

const Blog = () => {
    const blogState = useSelector((state) => state?.blog?.blog);

    const dispatch = useDispatch();
    useEffect(() => {
        getblogs();
    }, []);
    const getblogs = () => {
        dispatch(getAllBlogs())
    };
    return (
        <>
            <Meta title="Blogs" />
            <BreadCrumb title="Blogs" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Find By Categories
                            </h3>
                            <div className="ps-0">
                                <ul>
                                    <li>Mothers & Baby 1</li>
                                    <li>Mothers & Baby 2</li>
                                    <li>Mothers & Baby 3</li>
                                    <li>Mothers & Baby 4</li>
                                    <li>Mothers & Baby 5</li>
                                    <li>Mothers & Baby 6</li>
                                    <li>Mothers & Baby 7</li>
                                    <li>Mothers & Baby 8</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {
                                blogState && blogState?.map((item, index) => {
                                    return (
                                        <div className="col-6 mb-3" key={index}>
                                            <BlogCard 
                                            id={item?._id} 
                                            title={item?.title} 
                                            description={item?.description} 
                                            image={item?.images[0]?.url}
                                            date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
                                            />
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog
