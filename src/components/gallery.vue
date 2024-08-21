<template>
    <!-- Gallery -->
    <div class="text-center">
      <h2>Gallery</h2>
      <p>Your paragraph text goes here. This text is centered along with the heading above it.</p>
    </div>
  
    <div class="row no-gutters">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          class="w-100 shadow-1-strong rounded mb-4 img-reduced-height"
          alt="Boat on Calm Water"
        />
  
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          class="w-100 shadow-1-strong rounded mb-4 img-reduced-height"
          alt="Wintry Mountain Landscape"
        />
      </div>
  
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          class="w-100 shadow-1-strong rounded mb-4 img-reduced-height"
          alt="Mountains in the Clouds"
        />
  
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          class="w-100 shadow-1-strong rounded mb-4 img-reduced-height"
          alt="Boat on Calm Water"
        />
      </div>
  
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
          class="w-100 shadow-1-strong rounded mb-4 img-reduced-height"
          alt="Waves at Sea"
        />
  
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          class="w-100 shadow-1-strong rounded mb-4 img-reduced-height"
          alt="Yosemite National Park"
        />
      </div>
    </div>
    <!-- Gallery -->
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .row {
    margin-left: 0;
    margin-right: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  h2 {
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 20px;
  }
  
  .text-center p {
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 20px;
  }
  
  .no-gutters {
    margin-left: 0;
    margin-right: 0;
  }
  
  /* Custom class to reduce the image height */
  .img-reduced-height {
    height: 200px; /* Adjust this value as needed */
    object-fit: cover; /* Ensures the image covers the specified height */
  }
  </style>
  