<template lang="html">
  <div class="personal">
    <navbar></navbar>
    <div class="main">
      <p class="tit">个人中心</p>
      <div class="con">
        <p class="name">姓名: <span>{{name}}</span></p><br/>
        <p class="name">邮箱: <span>{{youxiang}}</span></p><br/>
        <p class="name">组别: <span>{{zubie}}</span></p>
      </div>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
            <FormItem label="密码" prop="passwd" label-width="37">
                <Input type="password" v-model="formCustom.passwd"></Input>
            </FormItem>
            <FormItem label="确认密码" prop="passwdCheck" label-width="60">
                <Input type="password" v-model="formCustom.passwdCheck"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')"  style="margin-left: 8px; margin-top:20px !important;">提交</Button>
                <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px; margin-top:20px !important;">重置</Button>
            </FormItem>
        </Form>
    </div>
  </div>
</template>

<script>
import navbar from './nav.vue'
export default {
  name: 'personal',
  data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',

                },
                name: '马晓阳',
                youxiang: '1111111111@qq.com',
                zubie: '程序组',
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('更改失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        components: {
          navbar
        }
}
</script>

<style>
.con {
  float: left;
  text-align: left;
  margin-left: 325px !important;
  margin-bottom: 15px !important;
}
.name {
  font-size: 12px;
}
.name span {
  padding-left: 56px;
}
.ivu-form {
  min-height: 600px;
  float: left;
  width: 950px;
}

.tit {
  font-size: 24px;
  margin-bottom: 20px !important;
}
.ivu-form-item {
  width: 300px;
}
.ivu-input {
  float: left !important;
  display: block;
}
</style>
