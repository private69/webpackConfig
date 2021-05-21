<template>
  <div class="login-container">
    <el-form 
    ref="loginForm" 
    :model="loginForm" 
    :rules="loginRules" 
    class="login-form" 
    autocomplete="on" 
    label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user"
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-female"
            ref="password"
            v-model="loginForm.password"
            placeholder="Password"
            name="password"
            show-password
            autocomplete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
      </el-tooltip>
      <!-- 添加验证码 -->
      <vcode 
      :show="isShow"
      @success="success"
      @close="closeVerify"
      ></vcode>
      <el-button 
      :loading="loading" 
      type="primary" 
      style="width:100%;margin-bottom:30px;"
      @click.native.prevent="handleLogin">Login</el-button>

      <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>

        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
      </div>
    </el-form>

    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <!-- <social-sign /> -->
    </el-dialog>
  </div>
</template>
<script>
import vcode from 'vue-puzzle-vcode'
// import {login} from '@/api/request'
import {getBrowse} from '@/mixins/addLog'
export default {
    name: "login",
    components: {
        vcode,
    },
    data(){
        return {
            loading:false,
            isShow: false,
            showDialog: false,
            loginForm: {
                username: "caoLiu",
                password: "123"
            },
            loginRules: {
                username: [
                    {required: true, message: "请输入用户名 ！" , trigger: 'blur'}
                ],
                password: [
                    { required: true ,message: "请输入密码 !" , trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        handleLogin(){
            this.isShow = true
            console.log(vcode);
        },
        closeVerify(){
            this.isShow = false 
        },
        success(){
            this.loginSuccess()
            this.closeVerify()
        },
        loginSuccess(){
          let data = Object.assign({} , this.loginForm)
          let self = this;
          data["browse"] = getBrowse(navigator)
          // login(data)
          // .then(res => {
          //   self.gotoMain(res.data)
          // }).catch(err => {
            //   console.log(err);
          // })
          self.gotoMain()
        },
        gotoMain(item){
          // this.$store.state.username = item.object.username
          // if(item.code)
            this.$router.push("/person.html")
        }
    },
    mounted(){
      
    }
}
</script>
<style>
.login-container .el-input{
    display: inline-block;
    height: 47px;
    width: 97%;
  }
.login-container input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #eee;
    height: 47px;
}
.el-input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
}

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>

<style scoped>
.login-container {
  min-height: 100%;
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;

  }
.login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
}

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    }
span :first-of-type {
    margin-right: 16px;
}

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

  }
.title {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
}

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
</style>