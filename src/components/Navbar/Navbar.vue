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
        <router-link  to="/home"> <a-icon type="home" /> 首页</router-link >
      </a-menu-item>
      <a-menu-item key="app">
        <router-link  to="/shop"> <a-icon type="shopping-cart" /> 商城</router-link>
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
          <a-menu-item key="setting:1"  @click="showLoginModal">登录</a-menu-item>
          <a-modal :footer= "null" title="用户登录" v-model="visibleLogin" @ok="handleLoginOk">
            <login></login>
          </a-modal>
          <a-menu-item key="setting:2" @click="showResgisterModal">注册</a-menu-item>
          <a-modal :footer= "null" title="用户注册" v-model="visibleResgister" @ok="handleResgisterOk">
            <register></register>
          </a-modal>
          <a-menu-item key="setting:3">退出</a-menu-item>
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
  import Login from '../Login/Login'
  import Register from "../Register/Register";
  export default {
    name: "Navbar"
    ,components: {

      'login': Login
      ,'register': Register
    }
    ,data () {
      return {
        current: ['mail']
        ,visibleLogin: false
        ,visibleResgister: false
      }
    }
    ,methods : {
      showLoginModal() {
        this.visibleLogin = true;
      }
      ,handleLoginOk(e) {
        console.log(e);
        this.visibleLogin = false;
      }
      ,showResgisterModal() {
        this.visibleResgister = true;
      }
      ,handleResgisterOk(e) {
        console.log(e);
        this.visibleResgister = false;
      }
      ,cancel() {

      }
    }
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
