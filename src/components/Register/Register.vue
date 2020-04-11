<template>
  <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout" style="margin-left: 40px">
    <a-form-model-item has-feedback label="密码" prop="pass">
      <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="确认密码" prop="checkPass">
      <a-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="用户名" prop="username">
      <a-input v-model.number="ruleForm.username" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 7 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        Submit
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>


  export default {
    data() {
      let checkPending;
      let checkUsername = (rule, value, callback) => {
        clearTimeout(checkPending);
        if (value === '') {
          return callback(new Error('请输入用户名'));
        }
        checkPending = setTimeout(() => {
          if (Number.isInteger(value)) {
            callback(new Error('请不要输入数字！'));
          } else {
            if (value.length < 3) {
              callback(new Error('长度必须大于等于 3'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("Two inputs don't match!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          username: '',
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'change' }],
          checkPass: [{ validator: validatePass2, trigger: 'change' }],
          username: [{ validator: checkUsername, trigger: 'change' }],
        },
        layout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        },
      };
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {

            this.$axios
              .post('register', {
                username: this.username
                ,password: this.pass
              })
              .then(successResponse => {
                if(successResponse.data.code === 200) {
                  this.$router.replace({path: '/'})
                }
              }).catch(function(error){
              console.log(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


    },
  };
</script>
