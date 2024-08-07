<template>
  <!-- Main container with relative positioning and background color -->
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-25">
    
    <!-- Background image with full coverage and specific object position -->
    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
    
    <!-- Decorative gradient background shape for larger screens -->
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    
    <!-- Decorative gradient background shape for smaller screens -->
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    
    <!-- Main content area with max width and padding -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mr-auto ml-auto max-w-3xl lg:ml-0 lg:mr-8">
        
        <!-- Heading -->
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with Vitana</h2>
        
        <!-- Paragraph with description -->
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Vitana is a global professional services firm that offers top-notch Data Engineering, Analytics, IT, and Staffing
          solutions to organizations. Using advanced technologies and innovation, they deliver transformational outcomes in a
          competitive digital world.
          <br><br>
          Beginning in 2015, Vitana changed the way professional services are offered. We focus on building long lasting
          relationships and help our customers succeed over building our bottom line. Our clients have continuously ranked us a
          top vendor.
        </p>
      </div>
      
      <!-- Links section -->
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          
          <!-- Dynamic link rendering -->
          <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
    
    <!-- Cards section -->
    <div class="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Card 1: Mission -->
        <div class="max-w-sm border border-gray-300 bg-transparent rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Mission</div>
            <p class="text-gray-300 text-base">
              Understand our client’s unique needs and deliver highest quality, customized business solutions at an affordable
              cost.
            </p>
          </div>
        </div>
        
        <!-- Card 2: Vision -->
        <div class="max-w-sm border border-gray-300 bg-transparent rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Vision</div>
            <p class="text-gray-300 text-base">
              To be a globally recognized corporation that provides next generation technology and staffing solutions, conceived
              through the power of innovation, executed with superlative agility, and delivered by a team of talented and
              passionate professionals.
            </p>
          </div>
        </div>
        
        <!-- Card 3: Values -->
        <div class="max-w-sm border border-gray-300 bg-transparent rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Values</div>
            <p class="text-gray-300 text-base">
              Customer Delight, Innovation, Integrity & Transparency, Pursuit of Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  // Links data array
  const links = [
    { name: '12 Offices worldwide', href: '#' },
    { name: '300+ Full-time colleagues', href: '#' }
  ];
</script>
