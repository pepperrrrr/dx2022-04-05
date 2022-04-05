<template>
  <div class="Login">
      <div class="logo"></div>
      <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Login',
    component:{},
    data(){
    return {
        
    };
    },
    methods:{
        checkWindow(){
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){
                console.log(window.onorientationchange);
                if(window.onorientationchange === 180 || window.onorientationchange === 0){
                    console.log('竖屏状态！');
                }
                if(window.onorientationchange === 90 || window.onorientationchange === -90){
                    console.log('横屏状态！')
                }
            },false)
        },
        login() {
            this.$router.push('/Home')
                  }
    },
    mounted(){
        this.checkWindow();
    }
}
</script>

<style>
.Login{
    height: 10rem;
    width: 10rem;
    background:url("../assets/bg.png") no-repeat center 0px;
    background-size: contain;
}

.logo{
    background:url("../assets/logo.png") no-repeat center 0px;
    background-size: contain;
    top:5rem;
    left:6rem;
    width: 1rem;
    height: 1rem;
}
</style>