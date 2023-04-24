<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Moon from '@lit101/icons/moon.svg?component';
</script>

<template>
  <lit101-theme>
    <lit101-applayout>
      <lit101-nav slot="sidebar">
        <div slot="logo">
          Logo
        </div>
        <lit101-navitem active>Hello</lit101-navitem>
      </lit101-nav>
      <lit101-appbar>
        <div slot="end">
          <lit101-avatar></lit101-avatar>
        </div>
        <lit101-divider slot="end"></lit101-divider>
        <div slot="end">
          <lit101-iconbutton>
            <Moon></Moon>
          </lit101-iconbutton>
        </div>
      </lit101-appbar>
      <lit101-container>
        <lit101-breadcrumb>
          <button>Dashboard</button>
          <a href="#">About</a>
          wow
        </lit101-breadcrumb>
        <lit101-card :elevation="10">
          <lit101-cardbody>
            <HelloWorld :msg="'Hello'"></HelloWorld>
          </lit101-cardbody>
        </lit101-card>
      </lit101-container>
    </lit101-applayout>

  </lit101-theme>
</template>

<style scoped>
</style>
