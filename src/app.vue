<template>
    <div id="app">
        <nav>
            <button class="left" @click="turnBack">返回</button>
            <h4>display</h4>
            <button class="right"></button>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'root',
    data(){
        
        return {

        }
    },
    methods: {
        turnBack(){
            // console.log(this.$router);
            this.$router.back()
        }
    }
}
</script>


<style lang="scss" scoped>
#app{
    nav{
        background-color: darkcyan;
        color: white;
        height: 4rem;

        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;

        .left{

        }
    }
}
</style>

