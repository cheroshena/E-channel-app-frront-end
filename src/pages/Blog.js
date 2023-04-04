import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from "../components/BlogCard";
import blog from "../images/blog-1.jpg";


const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"} />
            <BreadCrumb title="Blogs" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
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
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
