import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import DoctorCard from '../components/DoctorCard';

const Doctor = () => {
  const [grid, setGrid] = useState(4);
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
                  <li>Allergists</li>
                  <li>Anesthesiologists</li>
                  <li>Cardiologists</li>
                  <li>Dermatologists</li>
                  <li>Family Physicians</li>
                  <li>Medical Geneticists</li>
                  <li>Obstetricians and Gynecologists</li>
                  <li>Pediatricians</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Available Doctors</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Available (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Unavailable(0)
                    </label>
                  </div>
                </div>

                <h5 className="sub-title">Channeling Date</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      Monday
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Tuesday
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Wednesday
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Thursday
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Friday
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Saturday
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">
                Doctor's Tags
              </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Hemas
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Volteren
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    BioPlus
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Sidhdhlepe
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Brandix
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Hemas
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Volteren
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    BioPlus
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Sidhdhlepe
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Brandix
                  </span>
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
                <DoctorCard grid={grid} />

              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Doctor
