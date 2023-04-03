import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="col-3">
        <div className="blog-card">
            <div className="card-image">
                <img src="images/images/blog-1.jpg" className="img-fluid" alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">26 of june 2023</p>
                <h5 className="title">wonderfull morning</h5>
                <p className="desc">These inconsistencies, combined with the inaccurate description and location of Officer Bueno demonstrates that Officer Bueno did not shoot Mr. Jones.</p>
                <Link to="/" className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
