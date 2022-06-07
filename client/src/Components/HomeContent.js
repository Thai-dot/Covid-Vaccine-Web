import React from 'react'

import logo_service1 from '../assets/logo_service1.png'
import logo_service2 from '../assets/logo_service2.png'
import logo_service3 from '../assets/logo_service3.png'
import img_process1 from '../assets/img_process1.png'
import img_process2 from '../assets/img_process2.png'
import img_process3 from '../assets/img_process3.png'


const styles = {
    styles1:{
        backgroundColor:"#F5F5F5",
         padding: "30px 30px",
         borderRadius: "10px",
          marginBottom: "20px",
    }
    ,
    styles2:{
        padding:"20px 0",
        fontWeight: "bold",
    }
}

const HomeContent = () => {
  return (
    <div>
      <div class="content" style={{ margin: "100px 0" }}>

        <div class="service" style={{ marginBottom: "100px" }} id="service">
          <div class="service-header" style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "40px", color: "#52D0F0" }}>Service</h3>
            <h1
              style={{
                fontSize: "70px",
                color: "#000",
                padding: 0,
                lineHeight: 1,
              }}
            >
              Our services
            </h1>
            <p style={{ fontSize: "22px", color: "#000" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit beatae porro, <br /> nesciunt quis maiores incidunt.
            </p>
          </div>
          <div class="container service-content" style={{ marginTop: "90px" }}>
            <div class="row justify-content-evenly">
              <div class="col-md-3" style={styles.styles1}>
                <img src={logo_service1} alt="logo service" />
                <h3 style={{ padding: "20px", fontWeight: "bold" }}>
                  Examination
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur .</p>
              </div>
              <div class="col-md-3" style={styles.styles1}>
                <img src={logo_service2} alt="logo service" />
                <h3 style={styles.styles2}>Vaccine</h3>
                <p>Lorem ipsum dolor sit amet consectetur .</p>
              </div>
              <div
                class="col-md-3"
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "30px 30px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <img src={logo_service3} alt="" />
                <h3 style={{ padding: "20px 0", fontWeight: "bold" }}>
                  Care Healthier
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur .</p>
              </div>
            </div>
          </div>
        </div>
        <div class="process" id="process">
          <div class="service-header" style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "40px", color: "#52D0F0" }}>
              How to use our service?
            </h3>
            <h1
              style={{
                fontSize: "70px",
                color: "#000",
                padding: 0,
                lineHeight: 1,
              }}
            >
              Step by step register our service
            </h1>
          </div>
          <div class="container service-content" style={{ marginTop: "90px" }}>
            <div class="row justify-content-evenly">
              <div
                class="col-md-3"
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "30px 30px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <img src={img_process1} alt="" style={{ width: "100%" }} />
                <h3 style={{ padding: "20px 0", fontWeight: "bold" }}>
                  Regist in website or at our hospital
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur .</p>
                <ul>
                  <li>Provide your infor mation</li>
                  <li>Choose date you want to service </li>
                  <li>Contact US If you have any problem</li>
                </ul>
              </div>
              <div
                class="col-md-3"
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "30px 30px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={img_process2}
                  alt="img_process2"
                  style={{ width: "100%" }}
                />
                <h3 style={{ padding: "20px 0", fontWeight: "bold" }}>
                  Pay fee service
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur .</p>
                <ul>
                  <li>Provide your infor mation</li>
                  <li>Choose date you want to service </li>
                  <li>Pay fee </li>
                </ul>
              </div>
              <div
                class="col-md-3"
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "30px 30px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <img src={img_process3} alt="" style={{ width: "100%" }} />
                <h3 style={{ padding: "20px 0", fontWeight: "bold" }}>
                  Register in website or at our hospital
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur .</p>
                <ul>
                  <li>Provide your infor mation</li>
                  <li>Choose date you want to service </li>
                  <li>Pay fee </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent