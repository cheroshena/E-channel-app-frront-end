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
                            Weekly articals with insight into the weekend's message.
                            </h3>
                            <div className="ps-0">
                               
                                <ul>
                                    <li>Our blog takes the message from the weekendand lays out next right steps, so you can hear a message and do a message in practical ways.</li>
                                    
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
