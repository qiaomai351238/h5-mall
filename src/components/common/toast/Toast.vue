<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='加入购物车',duration=2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(()=>{
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    z-index:9;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.75);
    color:#fff;
    padding: 8px 10px;
border-radius:5px;
  }
</style>
