<template>
    
      <q-layout view="lHh lpr lFf ">
        <q-header  class="bg-indigo-10">
          <q-toolbar  >
            <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
            <!-- <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar> -->
  
            <q-toolbar-title><SPAN class="text-red">EDEX</SPAN> TECH</q-toolbar-title>
            <q-tabs class="desktop-only">
              <q-tab>HOME</q-tab>
              <q-tab>ABOUT US</q-tab>
              <q-tab>CONTACT US</q-tab>
              <q-tab>PLACEMENT</q-tab>
            </q-tabs>
  
            <!-- <q-btn flat round dense icon="whatshot" /> -->
          </q-toolbar>
        </q-header>
  
        <!-- <q-footer elevated>
          <q-toolbar class="glossy">
            <q-toolbar-title>Footer</q-toolbar-title>
          </q-toolbar>
        </q-footer> -->
  
        <q-page-container>
          <RouterView/>
        </q-page-container>
      </q-layout>
   
    
  </template>