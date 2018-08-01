<template>
    <div>
        <h2>Login</h2>
        <form  @submit.prevent="login">
            <label for="">
                <input type="text" v-model="email" placeholder="email"/>
            </label>
            <label for="">
                <input type="password" v-model="pass" placeholder="password"/>
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import auth from '@/auth'
export default {
    data(){
        return{
            email:'joe@example.com',
            pass:'111111'
        }
    },
    methods:{
        login(){
            auth.login(this.email,this.pass,(loggedIn)=>{
                console.log(loggedIn);
                if(loggedIn){
                    this.$router.replace(this.$route.query.redirect||'/') 
                } 
            });
        }
    },
    mounted(){
        console.log(this.$route.query);  //redirect:/dashboard
    }
}
</script>

<style>

</style>
