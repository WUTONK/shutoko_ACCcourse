<template>
  <div class="home">
    <h4>{{$t("m.languageCheck")}}</h4>
   <i-select :model.sync="model1" style="width:200px" @on-change="change">
        <i-option v-for="item in lan" :key="item.key" :value="item.key">{{ item.lang }}</i-option>
    </i-select>
    <i-button type="primary" @click="to('menu')">{{$t("m.menu")}}</i-button>
    <h5 style="margin-top:20px">{{$t('m.welcome')}}</h5>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
    return {
      lan:[
        {lang:"中文",key:1},
        {lang:"English",key:0},
        {lang:"Japanse",key:2}
      ],
      model1:"1",
      lang:null
    }
  },created(){
    this.lang = localStorage.getItem('locale') || 'zh';
    console.log(this.lang)
  },
  methods:{
    change(val){
      console.log(val)
      if(val==0){
        this.lang='en';
        localStorage.setItem("locale",this.lang)
        this.$i18n.locale = this.lang;
      }else if(val==1){
        this.lang="zh";
        localStorage.setItem("locale",this.lang)
        this.$i18n.locale = this.lang;
      }else{
          this.lang="ja";
        localStorage.setItem("locale",this.lang)
        this.$i18n.locale = this.lang;
      }
    },
    to(url){
      this.$router.push({name:url})
    }
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
.home{
    width: 400px;
    margin: 200px auto 0;
    text-align: left;
    h4{
      text-align: left;
    }
}
</style>

