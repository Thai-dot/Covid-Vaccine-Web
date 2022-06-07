import React from 'react'

import logoNavbar from '../assets/logo_navbar.png'

const NavHome = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoNavbar} alt="logonav" width="50" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:"auto"}}>
            <li className="nav-item pd-10px">
              <a
                className="nav-link fs-30px active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item pd-10px">
              <a className="nav-link fs-30px" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item pd-10px">
              <a className="nav-link fs-30px" href="#process">
                Pricing
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-primary btn-signin"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Sign in
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Đăng Nhập
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-injection">
                    <div className="mb-3">
                      <label htmFor="userName" className="form-label">
                        Tên đăng nhập:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmFor="password" className="form-label">
                        Mật khẩu:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" className="btn btn-primary">
                      Đăng nhập
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavHome