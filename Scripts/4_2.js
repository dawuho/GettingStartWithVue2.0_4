new Vue({
  el:'#app',
  data:{
    counter:0,
    clicks:0
  },
  methods:{
    increment(){
      this.clicks++;
      this.counter=this.clicks+2;
    }
  }
});
