import React from 'react'

import group23 from '../assets/Group23.png'
const Hero = () => {
  return (
    <div class="content" style={{ margin: "100px 0" }}>
      <div class="container about" style={{ marginBottom: "100px" }}>
        <div class="row">
          <div class="col-md-6" style={{ marginBottom: "30px" }}>
            <h1 style={{fontSize:"70px"}}>Vaccine to celebrate a healthier</h1>
            <p style={{fontSize:"22px",padding:"10px 0" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              deserunt rerum eius voluptas.
            </p>
            <button type="button" class="btn btn-primary btn-signin">
              Regist now
            </button>
          </div>
          <div class="col-md-6" style={{paddingTop: 30}}>
            <img src={group23} style={{width:"90%"}} alt="bighero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero