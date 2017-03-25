new Vue({
  el:'#app',
  data:{
    counter:0,
    clicks:0
  },
  methods:{
    increment(){
      this.counter=this.counter+2;
      this.clicks++;
    }
  }
});
