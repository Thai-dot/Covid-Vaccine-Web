import React from 'react'

import logo_navbar from '../assets/logo_navbar.png'
import healthicons_health_worker_form from '../assets/healthicons_health-worker-form.png'
import Group39 from '../assets/Group39.png'
import avatarDoctor from '../assets/avatar-doctor.png'

const NavEmp = () => {
  return (
    <div>
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills me-3 "
          style={{
            padding: "50px",
            backgroundColor: "#F8FAFC",
            margin: "0 !important",
            position: "fixed",
            bottom: 0,
            top: 0,
          }}
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a class="navbar-brand" style={{ marginBottom: "50px" }} href="#">
            <img src={logo_navbar} alt="" width="80" height="80" />
          </a>
          <button
            class="nav-link active"
            id="v-pills-tab1-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-tab1"
            type="button"
            role="tab"
            aria-controls="v-pills-tab1"
            aria-selected="true"
            style={{ width: "290px", marginBottom: "30px" }}
          >
            <div class="row" style={{ alignItems: "center" }}>
              <div class="col-3">
                <img src={healthicons_health_worker_form} alt="heathicon" />
              </div>
              <div class="col-9" style={{ fontWeight: "bold" }}>
                Xem phiếu đăng ký tiêm
              </div>
            </div>
          </button>

          <button
            class="nav-link"
            id="v-pills-tab2-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-tab2"
            type="button"
            role="tab"
            aria-controls="v-pills-tab2"
            aria-selected="false"
            style={{ width: "290px", marginBottom: "30px" }}
          >
            <div class="row" style={{ alignItems: "center" }}>
              <div class="col-3">
                <img src={Group39} alt="group39" />
              </div>
              <div class="col-9" style={{ fontWeight: "bold" }}>
                Them phieu dat mua
              </div>
            </div>
          </button>

          <button
            class="nav-link"
            id="v-pills-tab3-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-tab3"
            type="button"
            role="tab"
            aria-controls="v-pills-tab3"
            aria-selected="false"
            style={{ width: "290px", marginBottom: "30px" }}
          >
            <div class="row" style={{ alignItems: "center" }}>
              <div class="col-3">
                <img src={Group39} alt="Group39" />
              </div>
              <div class="col-9" style={{ fontWeight: "bold" }}>
                Them phieu đăng ký tiêm chủng
              </div>
            </div>
          </button>

          <div class="infor-user" style={{ padding: "20px" }}>
            <div class="infor-user-left">
              <p
                style={{
                  lineHeight: 1.5,
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Nguyễn Văn A
              </p>
              <p
                style={{
                  lineHeight: 1.5,
                  margin: 0,
                  fontSize: 15,
                  color: "#52D0F0",
                }}
              >
                Nhân viên
              </p>
            </div>
            <div class="infor-user-right">
              <div class="infor-user-img">
                <img src={avatarDoctor} alt="avatarDoctor" />
              </div>
            </div>
          </div>
        </div>
      </div>






    </div>
  );
}

export default NavEmp