import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import DoctorCard from '../components/DoctorCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoctors } from '../features/doctors/doctorSlice';

const Doctor = () => {
  const [grid, setGrid] = useState(4);
  const doctorState = useSelector((state) => state?.doctor?.doctor)

  const dispatch = useDispatch();
  useEffect(() => {
    getDoctors();
  }, []);
  const getDoctors = () => {
    dispatch(getAllDoctors());
  }
  return (
    <>
      <Meta title={"Doctors Channeling"} />
      <BreadCrumb title="Doctors Channeling" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">
                Doctors
              </h3>
              <div className="ps-0">
                <ul>
                  <li>Internal medicine</li>
                  <li>Urology</li>
                  <li>Orthopedics</li>
                  <li>General surgery</li>
                  <li>Surgeon</li>
                  <li>Psychiatry</li>
                  <li>Family medicine</li>
                  <li>Cardiology</li>
                  <li>Radiology</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">How to Channel Doctor</h3>
              <div>
                <h5 className="sub-title">Step 1</h5>
                <div>
                  <div className="form-check">

                    <label className="form-check-label" htmlFor="">
                      Search the doctor in search bar
                    </label>
                  </div>
                  <div className="form-check">

                    <label className="form-check-label" htmlFor="">
                      Select doctor from the listing
                    </label>
                  </div>
                </div>

                <h5 className="sub-title">Step 2</h5>
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      Refer doctor details and ratings
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      For do reservation click "Go to Booking" button
                    </label>
                  </div>

                </div>
                <h5 className="sub-title">Step 3</h5>
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      If you want to delete the selected doctot click "Delete" icon
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      To continue channeling process click "Channel Now"
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      To go back click "Back to Channeling" button
                    </label>
                  </div>

                </div>
                <h5 className="sub-title">Step 4</h5>
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      Fill all the required information fields
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      To do payments click "Channel"
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      To go back click "Return to Select Doctor"
                    </label>
                  </div>

                </div>
                <h5 className="sub-title">Step 5</h5>
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      Select options for payments
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      Proceed payment by clicking "Payment"
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-2">
                      If some error occured try again
                    </label>
                  </div>
                  </div>
                <h5 className="sub-title">Step 6</h5>
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      You can view your channelings in My Channels page
                    </label>
                  </div>
                   <div className="form-check">
                    <label className="form-check-label" htmlFor="color-1">
                      Status will show the Booking Number
                    </label>
                  </div>

                </div>
              </div>
            </div>
            

          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <h6 className="mb-0 " style={{ color: '#777777' }}>WARNNING ! : only for channeling</h6>


                </div>
                <div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">10 Doctors</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => { setGrid(3); }} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => { setGrid(4); }} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => { setGrid(6); }} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => { setGrid(12); }} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <DoctorCard data={doctorState ? doctorState : []} grid={grid} />

              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Doctor
