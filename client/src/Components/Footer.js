import React from 'react'

import logonavbar from '../assets/logo_navbar.png'

const styles = {
  style1: {
    backgroundColor: "#191919",
    padding: "30px 0",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  style2: {
      justifyContent: "space-evenly",
        color: "#fff",
        margin: "0",
  },
  style3: {
      border:"2px solid #fff",
        borderRadius: "5px",
        marginBottom: "10px",
  },
  style4:{
      padding: "30px 30px",
        marginBottom: "20px",
  },
  style5:{
      padding: "20px 0",
      fontWeight: "bold",
  }

};

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer" style={styles.style1}>
        <div className="row" style={styles.style2}>
          <div className="col-md-3" style={styles.style4}>
            <img src={logonavbar} alt="logonav" style={styles.style3} />
            <p>Lorem ipsum dolor sit amet consectetur .</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="col-md-3" style={styles.style4}>
            <h3 style={styles.style5}>Care Healthier</h3>
            <p>call us: +151-654-6513</p>
            <p>Email: hospital@gmail.com</p>
          </div>
          <div className="col-md-3" style={styles.style4}>
            <h3 style={styles.style5}>Adress</h3>
            <p>123 HCM city VietNam</p>
            <p>Email: hospital@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer