<template>
  <div class="sticky z-20 top-0">
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-10 w-auto" src="https://i.ibb.co/H7jDM6F/download.png" alt="download" border="0">
            </div>
            <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
              <router-link to="/" :class="getLinkClass('/')">Home</router-link>
              <router-link to="/AboutUs" :class="getLinkClass('/AboutUs')">About Us</router-link>
              <router-link to="/ContactUs" :class="getLinkClass('/ContactUs')">Contact Us</router-link>
              <!-- <router-link to="/Domains" :class="getLinkClass('/Domains')">Domains</router-link> -->
            </div>
          </div>
          <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input id="search" name="search" class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </div>
          </div>
          <div class="flex items-center lg:hidden">
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="space-y-1 pt-2 pb-3">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
          <DisclosureButton as="a" :class="getLinkClassMobile('/')" > 
            <router-link to="/">
              Home

            </router-link>
          </DisclosureButton>
          <DisclosureButton as="a" :class="getLinkClassMobile('/AboutUs')">
            <router-link to="/AboutUs">
              About Us

            </router-link>
          </DisclosureButton>
          <DisclosureButton as='a':class="getLinkClassMobile('/ContactUs')">
            <router-link to="/ContactUs">
              Contact Us
               
            </router-link>
          </DisclosureButton>
          <!-- <DisclosureButton as="a" :class="getLinkClassMobile('/Domain')">Domains</DisclosureButton> -->
        </div>
        <div class="border-t border-gray-200 pt-4 pb-3">
          <div class="flex items-center px-4">
            <!-- <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div> -->
            <!-- <div class="ml-3">
              <div class="text-base font-medium text-gray-800">Tom Cook</div>
              <div class="text-sm font-medium text-gray-500">tom@example.com</div>
            </div> -->
            <!-- <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->
          </div>
          <!-- <div class="mt-3 space-y-1">
            <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Your Profile</DisclosureButton>
            <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Settings</DisclosureButton>
            <DisclosureButton as="a" href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Sign out</DisclosureButton>
          </div> -->
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'

const route = useRoute()

const getLinkClass = (path) => {
  return route.path === path
    ? 'inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'
    : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
}
const getLinkClassMobile = (path) => {
  return route.path === path
    ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
    : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
}
</script>
