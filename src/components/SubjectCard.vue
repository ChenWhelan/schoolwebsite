<template>

  <div class="container1">
    <div class="card">
      <div class="imgBx">
        <img src="../images/计算机.png" alt="">
      </div>
      <div class="contentBx">
        <h2>计算机科学与技术</h2>
        <router-link to="/AboutSubject/ComputerTech"><span>Read More</span></router-link>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img src="../images/软件工程.jpg" alt="">
      </div>
      <div class="contentBx">
        <h2>软件工程</h2>
       
        <router-link to="/AboutSubject/SoftWare"><span>Read More</span></router-link>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img src="../images/通信工程.jpg" alt="">
      </div>
      <div class="contentBx">
        <h2>通信工程</h2>
        
        <router-link to="/AboutSubject/CommunEngineer"><span>Read More</span></router-link>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img src="../images/人工智能.jpg" alt="">
      </div>
      <div class="contentBx">
        <h2>智能科学与技术</h2>
        <router-link to="/AboutSubject/AI"><span>Read More</span></router-link>
      </div>
    </div>

    <div class="card">
      <div class="imgBx">
        <img src="../images/自动化.jpeg" alt="">
      </div>
      <div class="contentBx">
        <h2>电气工程及其自动化</h2>
     
        <router-link to="/AboutSubject/AutoMation"><span>Read More</span></router-link>
      </div>
    </div>
  </div>
  
  </template>
  
  <style>

.container1{
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  flex-flow: row;
  margin:0 auto;
/* background: #C9E6E4; */
}

.container1 .card{
  width: 280px;
  margin: 10px;
  padding: 40px 30px;
  background:#ffc93c;;
  border-radius: 40px;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
              6px 6px 20px rgba(0, 0, 0, .1);
    height: 400px;
}

.container1 .card:hover{
  box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.5),
              inset 6px 6px 20px rgba(0, 0, 0, 0.05);
}

.container1 .card .imgBx{
  position: relative;
  text-align: center;
  
}

.container1 .card .imgBx img{
  max-width: 150px;
  border: 5px dashed #155263;
  padding:5px;
  border-radius: 50%;
}

.container1 .card .contentBx{
  position: relative;
  margin-top: 20px;
  text-align: center;
}

.container1 .card .contentBx h2{
  color: #fff;
  font-weight: 700;
  font-size: 1.4em;
  letter-spacing: 2px;
}


.container1 .card .contentBx a{
  display: inline-block;
  padding: 20px 20px;
  margin-top: 30px;
  border-radius: 40px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 0.5),
  4px 4px 15px rgba(0, 0, 0, .1);
  background-color: #ff6f3c;
}

.container1 .card .contentBx a:hover{
  box-shadow: inset -4px -4px 10px rgba(255, 255, 255, 0.5),
  inset 4px 4px 10px rgba(0, 0, 0, .1);
}

.container1 .card .contentBx a:hover span{
  display: block;
  transform: scale(0.98);
}

.container1 .card:hover .imgBx,
.container .card:hover .contentBx{
  transform: scale(0.98);
}
  </style>