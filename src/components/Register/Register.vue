<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        用户名&nbsp;
        <a-tooltip title="What do you want others to call you?">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input
        v-decorator="[
          'username',
          {
            rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入密码!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请输入确认密码!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>


  export default {
    data() {
      return {
        confirmDirty: false,

        autoCompleteResult: [],
        formItemLayout: {
          labelCol: {
            xs: { span: 14 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 14 },
            sm: { span: 12 },
          },
        },
        tailFormItemLayout: {
          wrapperCol: {
            xs: {
              span: 14,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 10,
            },
          },
        },
      };
    },
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'register' });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.$axios
              .post('register', {
                username: values.username
                ,password: values.password
              })
              .then(successResponse => {
                if(successResponse.data.code === 200) {
                  this.$router.replace({path: '/'})
                }
              }).catch(function(error){
              console.log(error)
            })
          }
        });
      },
      handleConfirmBlur(e) {
        const value = e.target.value;
        this.confirmDirty = this.confirmDirty || !!value;
      },
      compareToFirstPassword(rule, value, callback) {
        const form = this.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('密码不一致!');
        } else {
          callback();
        }
      },
      validateToNextPassword(rule, value, callback) {
        const form = this.form;
        if (value && this.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    },
  };
</script>
