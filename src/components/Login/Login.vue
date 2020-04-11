<template>
  <a-form-model layout="horizontal" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="formInline.username" placeholder="Username">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-input v-model="formInline.password" type="password" placeholder="Password">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.username === '' || formInline.password === ''"
      >
        Log in
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      handleSubmit(e) {
          this.$axios
            .post('login', {
              username: this.formInline.username
              ,password: this.formInline.password
            })
            .then(successResponse => {
              if(successResponse.data.code === 200) {
                this.$router.replace({path: '/'})
              }
            }).catch(function(error){
            console.log(error)
          })
      },
    },
  };

</script>
<style>

</style>
