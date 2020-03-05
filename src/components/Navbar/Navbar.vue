<template>
  <div>
    <div class="logo" >Logo</div>
    <a-menu
      theme="dark"
      v-model="current"
      mode="horizontal"
      :defaultSelectedKeys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="user_home">
        <a-icon type="home" />首页
      </a-menu-item>
      <a-menu-item key="app">
        <a-icon type="shopping-cart" /> 商城
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"><a-icon type="shop" />活动</span>
        <a-menu-item-group>
          <a-menu-item key="setting:1">活动 1</a-menu-item>
          <a-menu-item key="setting:2">活动 2</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-input-search
        placeholder="输入所查询的商品"
        style="width: 200px"

      />

      <a-sub-menu style="float: right">
        <span slot="title" class="submenu-title-wrapper">    <a-icon type="user" />用户</span>
        <a-menu-item-group>
          <a-menu-item key="setting:5">登录</a-menu-item>
          <a-menu-item key="setting:6">退出</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item style="float: right">
        <a-popover placement="bottomRight" >
          <template slot="content">
            <p>Content</p>
            <p>Content</p>
          </template>
          <template slot="title">
            <span>Title</span>
          </template>
          <a-icon type="bell"  />
        </a-popover>
      </a-menu-item>


    </a-menu>
  </div>
</template>

<script>
  export default {
    name: "Navbar.vue"
    ,data () {
      return {
        current: ['mail'],
      }
    }
    ,
  }
</script>

<style>
  .logo {
    color: azure;
    width: 30px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }

</style>
