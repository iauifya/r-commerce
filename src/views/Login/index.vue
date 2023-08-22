<script setup>
//表單校驗(帳號名+密碼)
import { ref } from 'vue'

//1.準備表單對象
const form = ref({
  account: '',
  password: '',
  agree: true
})

//2. 準備規則對象
const rules = {
  account: [
    { required: true, message: '用戶名不能為空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密碼不能為空', trigger: 'blur' },
    { min: 6, max: 14, message: '密碼長度為6-14個字符', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        console.log(value)
        //自定義校驗邏輯
        // 勾選就通過 不勾選就不通過
        if(value){
          callback()
        } else{
          callback(new Error('請勾選協議'))
        }
      }
    }
  ]
}
</script>
<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <router-link to="/">小兔鮮</router-link>
        </h1>
        <router-link class="entry" to="/">
          進入網站首頁
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </router-link>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="">帳戶登錄</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form :model="form" :rules="rules" label-position="right" label-width="60px" status-icon>
              <el-form-item prop="account" label="帳戶">
                <el-input v-model="form.account"/>
              </el-form-item >
              <el-form-item prop="password" label="密碼">
                <el-input v-model="form.password"/>
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox v-model="form.agree" size="large">
                  我已同意隱私條款和服務條款  
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn">點擊登錄</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="">關於我們</a>
          <a href="">幫助中心</a>
          <a href="">售後服務</a>
          <a href="">配送與驗收</a>
          <a href="">商務合作</a>
          <a href="">搜索推薦</a>
          <a href="">友情鏈結</a>
        </p>
        <p>CopyRight &copy; 小兔鮮兒</p>
      </div>
    </footer>
  </div>
</template>
<style scoped lang="less">
.login-section {
  background: url(../../assets/images/login-bg.png) no-repeat center / cover;
  height: 488px;
  position: relative;
  .wrapper {
    width: 400px;
    background: #fff;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    .qrcode-box {
      text-align: center;
      padding-top: 40px;
      p {
        margin-top: 20px;
        a {
          color: @xtxColor;
          font-size: 16px;
        }
      }
    }
    nav {
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;
      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        &:first-child {
          border-right: 1px solid #f5f5f5;
          text-align: left;
        }
        &.active {
          color: @xtxColor;
          font-weight: bold;
        }
      }
    }
  }
}
</style>