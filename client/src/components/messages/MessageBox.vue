<template>
  <div class="message-box" :style="cssVars" v-bind:class="{'own-message':message.type === 0}">
    <em v-if="message.type === 1">{{message.username}}</em> 
    <p>{{message.content}}</p>
    <label>{{message.timestamp}}</label>
  </div>
  
</template>

<script>
export default {
  //test: /\.s[a|c]ss$/,
  //loader: 'sass-loader',
  name: "MessageBox",
  props: ["message"],
    /*computed:{
    cssVars() {
        return {
          '--bg-color': this.color
        }
      }
    },*/
};

</script>

<style scoped> 

.message-box.own-message{
  background-color:PaleTurquoise;
  display: inline-block;
  justify-content:center;
  border-radius: 15px;
  margin: 4px ;
  padding:7px 10px;
  border: 1px ;
  width:auto;
  max-width:500px;
  float:right;
  clear:both;
}

.message-box{
  /*background-color: var(--bg-color);*/
  background-color: lavender;
  display: inline-block;
  justify-content:center;
  border-radius: 15px;
  margin: 4px ;
  padding:7px 10px;
  border: 1px ;
  width:auto;
  max-width:500px;
  float:left;
  clear:both;
}

em {
  color: black;
  font-weight:bold;
  text-align: left;
  display:block;
}

p {
  color: black;
  text-align: justify;
  word-break:break-all;
  padding: 2px;
  margin-top:2px;
  margin-bottom:4px;
}

label{
  float:right;
  color:grey;

}
.own-message {
  text-align: right;
}
</style>