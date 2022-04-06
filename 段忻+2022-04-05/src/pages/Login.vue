<template>
  <div class="Login">
      <div class="logo"></div>
      <button @click="login">Login</button>
      <div v-if="checkWin" class="check" ref="checkBox">
          <img src="../assets/scape.png" alt="">
          <p>请横屏访问</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Login',
    component:{},
    data(){
    return {
        checkWin:false
    };
    },
    methods:{
        checkWindow(){
            console.log(window.orientation);
                if(window.orientation === 180 || window.orientation === 0){
                    this.checkWin = true
                }
                if(window.orientation === 90 || window.orientation === -90){
                    this.checkWin = false;
                    }
                    return checkWin
        },
        login() {
            this.$router.push('/Home')
                  }
    },
    mounted(){
        this.$refs.checkBox.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", checkWin,false);

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
.check{
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
    z-index: 2;
        top:5rem;
    left:6rem;
}
</style>