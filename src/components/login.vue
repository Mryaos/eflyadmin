<template>
  <div class="hello">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username"  style="margin-bottom:30px !important; margin-top: 100px !important;">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <br>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password"  style="margin-bottom:30px !important;">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <br>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import * as Server from './../api/server'
export default {
  name: 'login',
  data () {
           return {
               formInline: {
                   user: '',
                   password: ''
               },
               ruleInline: {
                   user: [
                       { required: true, message: '请填写用户名', trigger: 'blur' }
                   ],
                   password: [
                       { required: true, message: '请填写密码', trigger: 'blur' },
                       { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                   ]
               }
           }
       },
       methods: {
           handleSubmit(name) {
              let self = this;
               this.$refs[name].validate((valid) => {
                   if (valid) {
                       Server.post({
                         url: '/user/login',
                         data: self.formInline
                       })
                       .then(data => {
                         console.log(data);
                       })
                       .catch(err => {
                         console.log(err);
                       })
                       this.$Message.success('提交成功!');
                   } else {
                       this.$Message.error('表单验证失败!');
                   }
               })
           }
       },
       created() {
         console.log(Server)
       }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
