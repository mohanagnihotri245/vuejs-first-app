<template >
   <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button> <!-- New indicator -->
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active c-item">
      <img src="D:\project\Vitana_Tailwind\src\assets\data.png" class="d-block w-100 c-img" alt="Slide 1">
      <div class="carousel-caption top-20 mt-4">
        <!-- <p class="mt-5 fs-3 text-uppercase">Discover the hidden world</p> -->
        <h1 class="display-1 fw-bolder text-capitalize">Data Engineering </h1>
      
      </div>
    </div>
    <div class="carousel-item c-item">
      <img src="D:\project\Vitana_Tailwind\src\assets\analysis.jpg" class="d-block w-100 c-img" alt="Slide 2">
      <div class="carousel-caption top-12 mt-4">
        <!-- <p class="text-uppercase fs-3 mt-5">The season has arrived</p> -->
        <p class="display-1 fw-bolder text-capitalize">Analytics & Business Intelligence</p>

      </div>
    </div>
    <div class="carousel-item c-item">
      <img src="D:\project\Vitana_Tailwind\src\assets\Cloud.jpg" class="d-block w-100 c-img" alt="Slide 3">
      <div class="carousel-caption top-12 mt-4">
        <!-- <p class="text-uppercase fs-3 mt-5">Destination activities</p> -->
        <p class="display-1 fw-bolder text-capitalize">IT Infrastructure & Cloud Services</p>
        
      </div>
    </div>
    <div class="carousel-item c-item">
      <img src="D:\project\Vitana_Tailwind\src\assets\pexelse.jpg" class="d-block w-100 c-img" alt="Slide 4">
      <div class="carousel-caption top-20 mt-4">
        <!-- <p class="text-uppercase fs-3 mt-5">Adventure Awaits</p> -->
        <p class="display-1 fw-bolder text-capitalize">
            Software Engineering</p>
       
      </div>
    </div>
    <div class="carousel-item c-item"> <!-- New slide -->
      <img src="D:\project\Vitana_Tailwind\src\assets\staff.jpeg" class="d-block w-100 c-img" alt="Slide 5">
      <div class="carousel-caption top-20 mt-4">
        <!-- <p class="text-uppercase fs-3 mt-5">Discover the beauty</p> -->
        <p class="display-1 fw-bolder text-capitalize">Staffing Solutions</p>
      
      </div>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>
<script>
</script>
<style>
.c-item {
  height: 480px;
}

.c-img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}
</style>
  
