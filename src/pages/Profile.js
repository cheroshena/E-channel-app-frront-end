import React, { useState } from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';
import {FiEdit} from "react-icons/fi"

const profileSchema = yup.object({
    firstname: yup.string().required("First Name is Required!"),
    lastname: yup.string().required("Last Name is Required!"),
    email: yup.string().email("Email should be Valid").required("Email is Required!"),
    mobile: yup.string().required("Mobile is Required!"),
});



const Profile = () => {

    const dispatch = useDispatch()
    const userState = useSelector(state => state?.auth?.user)
    const [edit, setEdit] = useState(true)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userState?.firstname,
            lastname: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
        },
        validationSchema: profileSchema,
        onSubmit: values => {
            dispatch(updateProfile(values));

            setEdit(true)

        },
    });

    return (
        <>
            <Meta title={"My Profile"} />
            <BreadCrumb title="My Profile" />
            <Container class1="cart-wrapper py-5 home-wrapper-2">
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='my-3'>Update Profile</h3>
                            <FiEdit className='fs-3' onClick={()=>setEdit(false)} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="example1" className="form-label">First Name</label>
                                <input
                                    disabled={edit}
                                    type="text"
                                    name='firstname'
                                    className="form-control"
                                    id="example1"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange('firstname')}
                                    onBlur={formik.handleBlur('firstname')}
                                />
                                <div className='error'>
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example2" className="form-label">Last Name</label>
                                <input
                                    disabled={edit}
                                    type="text"
                                    name='lastname'
                                    className="form-control"
                                    id="example2"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange('lastname')}
                                    onBlur={formik.handleBlur('lastname')}
                                />
                                <div className='error'>
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    disabled={edit}
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={formik.values.email}
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">Mobile Number</label>
                                <input
                                    disabled={edit}
                                    type="number"
                                    name='mobile'
                                    className="form-control"
                                    id="exampleInputEmail2"
                                    aria-describedby="emailHelp"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange('mobile')}
                                    onBlur={formik.handleBlur('mobile')}
                                />
                                <div className='error'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                            </div>

                            {
                                edit === false && <button type="submit"  className="btn btn-primary">Save</button>
                            }
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Profile
