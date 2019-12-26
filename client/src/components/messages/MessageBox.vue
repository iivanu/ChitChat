<template>
  <div class="message-box" v-bind:style="{ backgroundColor: message.color}" v-bind:class="{'own-message':message.type === 0}">
    <em v-if="message.type === 1">{{message.username}}</em> 
    <p>{{message.content}}</p>
    <label>{{message.timestamp}}</label>
  </div>
  
</template>

<script>
export default {
  name: "MessageBox",
  props: ["message"],
};
</script>

<style scoped> 

.message-box.own-message {
  background-color: lavender !important; 
  justify-content: center;
  border-radius: 15px;
  margin: 4px;
  padding: 5px 10px;
  border: 0.5px solid 	#DCDCDC;
  width: auto;
  max-width: 60%;
  float: right;
  clear: both;
}

.message-box {
  background-color: lavender;
  justify-content: center;
  border-radius: 15px;
  margin: 4px;
  padding: 5px 10px;
  border: 1px solid lightgray;
  width: auto;
  max-width: 60%;
  float: left;
  clear: both;
}

em {
  color:black;
  font-weight: bold;
  text-align: left;
  display: block;
  font-size: 0.6em;
}

p {
  color: black;
  text-align: justify;
  word-break: break-all;
  padding: 2px;
  margin-top: 2px;
  margin-bottom: 4px;
  font-size: 1em;
}

label{
  float: right;
  color:grey;
  font-size: 0.8em;
}

.own-message {
  text-align: right;
}
</style>