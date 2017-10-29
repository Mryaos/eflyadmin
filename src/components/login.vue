<template>
  <div class="hello">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.email" placeholder="Username"  style="margin-bottom:30px !important; margin-top: 100px !important;">
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
import Server from './../api/server'
export default {
  name: 'login',
  data () {
           return {
               formInline: {
                   email: '',
                   password: ''
               },
               ruleInline: {
                   email: [
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

                         data && data.msg && this.$Message.success(data.msg);
                         if(data.ok) {
                           this.$router.push('/')
                         }
                         console.log(data);
                       })
                       .catch(err => {
                         console.log(err);
                       })
                    
                   } else {
                       this.$Message.error('表单验证失败!');
                   }
               })



           }
       },
       created() {
         Server.get({
           url: '/user/checklogin'
         })
         .then(res => {
           if (res.ok) {
             this.$router.push('/')
           }
         })
         .catch(e => {
           console.log(e)
         })
       }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
