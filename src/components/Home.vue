<template>
  <div>
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <navbar></navbar>

      </a-layout-header>
      <a-layout-content :style="{padding:' 0 50px', marginTop: '64px' }">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>

</template>

<script>
    import Navbar from './Navbar/Navbar'
    export default {
       name: "home",
       components:{
          'navbar': Navbar
       }
    }
</script>

<style scoped>

</style>
