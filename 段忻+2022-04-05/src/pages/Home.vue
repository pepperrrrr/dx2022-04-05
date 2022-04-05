<template>
  <div class="background" id="home">
      <div class="Home"></div>
  </div>
</template>

<script>
import axios from 'axios'
import style from '../style/style.css'

export default {
    name:'Home',
    component:{},
    data(){
        return{
        }
    },
    methods:{

    },
    computed:{
    },
    mounted(){
        console.log(window.innerHeight)
    }
}
</script>

<style>
#home{
    height: 10rem;
    width: 10rem;
    background-size: contain;
}
</style>