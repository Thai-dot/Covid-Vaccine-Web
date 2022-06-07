import React from "react";

const OrderVaccine = () => {
  return (
      <div
        class="tab-pane fade"
        id="v-pills-tab2"
        role="tabpanel"
        aria-labelledby="v-pills-tab2-tab"
        tabindex="0"
        style={{ padding: "50px" }}
      >
        <div class="form-injection">
          <h3 style={{ textAlign: "center", marginBottom: "70px" }}>
            PHIẾU ĐẶT MUA CỦA KHÁCH HÀNG
          </h3>

          <h5>Thông tin khách hàng</h5>
          <div class="mb-3">
            <label for="name" class="form-label">
              Họ Tên:
            </label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="identity-number" class="form-label">
              CMND
            </label>
            <input type="text" class="form-control" id="identity-number" />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">
              Địa chỉ:
            </label>
            <input type="text" class="form-control" id="address" />
          </div>

          <h5 style={{ marginTop: 30 }}>Thong tin vaccine dat mua</h5>

          <div class="mb-3">
            <label for="vaccineName" class="form-label">
              Ten Vaccin:
            </label>
            <input type="text" class="form-control" id="vaccineName" />
          </div>

          <div class="mb-3">
            <label for="producer" class="form-label">
              NSX
            </label>
            <input type="text" class="form-control" id="producer" />
          </div>

          <div class="mb-3">
            <label for="amountOfPackage" class="form-label">
              So luong:
            </label>
            <input type="text" class="form-control" id="amountOfPackage" />
          </div>
          <button
            class="btn btn-outline-success btn-signin"
            style={{ marginTop: 30 }}
            type="submit"
          >
            Lập phiếu
          </button>
        </div>
      </div>
  );
};

export default OrderVaccine;
