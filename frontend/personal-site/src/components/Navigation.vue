<template>
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarToggler
        target="#navbarNav"
        @click="collapse2 = !collapse2"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarNav" v-model="collapse2">
      <MDBNavbarNav>
        <MDBNavbarItem to="/"> Home </MDBNavbarItem>
        <MDBNavbarItem to="resume"> Resume </MDBNavbarItem>
        <MDBNavbarItem to="skills"> Skills </MDBNavbarItem>
        <MDBNavbarItem href="https://github.com/premo14" new-tab> Github </MDBNavbarItem>
        <MDBNavbarItem href="https://linkedin.com/in/anthony-premo" new-tab> LinkedIn </MDBNavbarItem>
        <MDBNavbarItem to="contact"> Contact </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script setup lang="ts">
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const collapse2 = ref(false);
</script>