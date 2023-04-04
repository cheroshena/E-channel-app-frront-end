import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img src={blog} className="img-fluid w-100" alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">26 of june 2023</p>
                <h5 className="title">wonderfull morning</h5>
                <p className="desc">These inconsistencies, combined with the inaccurate description and location of Officer Bueno demonstrates that Officer Bueno did not shoot Mr. Jones.</p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>

  );
};

export default BlogCard;
