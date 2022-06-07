import React from "react";

import NavEmp from "../Components/NavEmp";
import RegisterVaccine from "../Components/RegisterVaccine";
import OrderVaccine from "../Components/OrderVaccine";

const Employee = () => {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <NavEmp />
      <div class="col" style={{ paddingLeft: "390px" }}>
        <div class="tab-content" id="v-pills-tabContent">
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Nhân viên
              </a>
              <div>
                <button class="btn btn-outline-success" type="submit">
                  <i class="bi bi-bell-fill"></i>
                </button>
                <button class="btn btn-outline-success " type="submit">
                  <i
                    class="bi bi-box-arrow-right"
                    style={{ marginRight: "10px" }}
                  ></i>
                  log out
                </button>
              </div>
            </div>
          </nav>
          <RegisterVaccine />
          <OrderVaccine />
        </div>
      </div>
    </div>
  );
};

export default Employee;
