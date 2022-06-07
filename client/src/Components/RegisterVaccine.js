import React from 'react'
import CusInforVaccine from './CusInforVaccine';

const RegisterVaccine = () => {
  return (
    <div>
      <div
        class="tab-pane fade show active"
        id="v-pills-tab1"
        role="tabpanel"
        aria-labelledby="v-pills-tab1-tab"
        tabindex="0"
        style={{ padding: "50px" }}
      >
        <div class="injections-list">
          <div class="row" style={{ textAlign: "center" }}>
            <div class="col-2">ID</div>
            <div class="col-2">Họ tên</div>
            <div class="col-2">CMND</div>
            <div class="col-2">Địa chỉ</div>
            <div class="col-2">Tên vaccine</div>
            <div class="col-2">Số lượng</div>
          </div>
          <CusInforVaccine />

        </div>
      </div>
    </div>
  );
}

export default RegisterVaccine