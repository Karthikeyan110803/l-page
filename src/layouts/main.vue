<template>
    <div class="q-pa-md">
      <q-layout view="lHh lpr lFf">
        <q-header elevated>
          <q-toolbar class="glossy">
            <q-btn flat round dense icon="menu" class="q-mr-sm" />
            <!-- <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar> -->
  
            <q-toolbar-title>INFO TECH SOLUTIONS</q-toolbar-title>
            <q-tabs>
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
    </div>
    
  </template>