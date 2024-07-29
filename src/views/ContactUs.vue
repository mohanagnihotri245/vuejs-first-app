
<template>
<!-- Start of template--> 

   <!-- Starting Div for Space Managment -->
  <div class="isolate bg-gray-900 px-6 py-24 sm:py-20 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    
    <!-- Heading -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
    </div>

    <!-- Form -->
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

        <!-- First Name Field -->
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-white">First name</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Last Name Field -->
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Last name</label>
          <div class="mt-2.5">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

       <!-- Email Field -->
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Phone Number Field -->
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
                <option>INR</option>
              </select>
              <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

         <!-- Message Field -->
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-blackshadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <!-- Grouping the Switch and its label together -->
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">

        <!-- Container for the Switch component -->
           <div class="flex h-6 items-center">
  
           <!-- Switch component with dynamic background color based on 'agreed' model -->
       <Switch  v-model="agreed" 
           :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']"
           >
        <!-- Screen reader only label for accessibility -->
        <span class="sr-only">Agree to policies</span>
    
        <!-- Visual indicator for the switch, moving based on 'agreed' state -->
       <span  aria-hidden="true" 
           :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" 
        />
     </Switch>
</div>

<!-- Label for the switch component, with a link to the privacy policy -->
     <SwitchLabel class="text-sm leading-6 text-gray-600">
             By selecting this, you agree to our
        {{ ' ' }}
         <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
     </SwitchLabel>

</SwitchGroup>

         
      </div>

        <!-- Injecting the Modal component conditionally -->
      <div class="mt-10">

        <!-- Using openModal and closeModal variables to decide the state of Modal Componenet -->
        <button @click="openModal" type="button" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Let's talk
         </button>
         <Modal v-if="showModal" @close="closeModal" />
       </div>
    </form>
  </div>

  <!-- Newsletter Section -->
  <div class="bg-gray-300">
    <!-- Section for the newsletter sign-up, centered with various width constraints -->
    <section class="mx-auto max-w-md py-5 px-4 sm:max-w-3xl sm:px-6 lg:flex lg:max-w-7xl lg:items-center lg:py-32 lg:px-8" aria-labelledby="newsletter-heading">
    
    <!-- Text content container -->
    <div class="lg:w-0 lg:flex-1">
      
      <!-- Newsletter heading -->
      <h2  class="text-3xl font-bold tracking-tight text-blue-white sm:text-4xl"  id="newsletter-heading">
        Sign up for our newsletter
      </h2>
      
      <!-- Description paragraph -->
      <p class="mt-3 max-w-3xl text-lg text-blue-gray-500">
        Stay updated with our latest news, exclusive offers, and expert insights. Enter your email below to join our community.
      </p>
    </div>
    
    <!-- Form container, adjusts its margin and layout on larger screens -->
    <div class="mt-8 lg:mt-0 lg:ml-8">
      
      <!-- Newsletter form -->
      <form class="sm:flex">
        
        <!-- Email input label for accessibility, visually hidden -->
        <label for="email-address" class="sr-only">Email address</label>
        
        <!-- Email input field -->
        <input 
          id="email-address" 
          name="email-address" 
          type="email" 
          autocomplete="email" 
          required 
          class="w-full rounded-md border border-blue-gray-300 px-5 py-3 placeholder-blue-gray-400 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:max-w-xs" 
          placeholder="Enter your email" 
        />
        
        <!-- Submit button container, adjusts its margin and layout on smaller screens -->
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          
          <!-- Submit button -->
          <button   type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Notify me
          </button>
        </div>
      </form>
      
      <!-- Privacy notice paragraph -->
      <p class="mt-3 text-sm text-blue-gray-500">
        We care about the protection of your data. Read our
        <a href="#" class="font-medium underline">Privacy Policy.</a>
      </p>
    </div>
  </section>
</div>

 <!-- End of template-->
</template>

<script>
// Start of Script

// Component Call
import Modal from '@/components/Modal.vue';

//Using Tailwind Libraries for Icons and toggle Button
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'


// Using Imported Components and Defining Functions
export default {
  //Components 
  components: {
    Modal,
    Switch,
    SwitchGroup,
    SwitchLabel,
  },
  // Function for toggle Button color change behaviour 
  setup() {
    const agreed = ref(false);
    return {
      agreed
    }
  },
  // Data used in the template section  
  data() {
    return {
      showModal: false
    };
  },
  // Functions for Conditionally Modal Component Injection
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
// End of Script
</script>
      
    


