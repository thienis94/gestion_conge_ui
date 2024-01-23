<template>

<div>
     <form>
        <input style="text" name="" v-model="username" placeholder="username">
        <input type="password" v-model="password" placeholder="password">
        <boutton type="submit" v-on:click =" performance" name="">login</boutton>
     </form>
     <p> username ={{ username }}</p>
     <p>password ={{ password }}</p>
</div>
</template>
<script>
export default{
    data(){
        return{
username:"thierry",
password:"thienis",
        }
    },
methods:{
    login(){

    },
    performance
}
}
</script>

<style scoped>

</style>