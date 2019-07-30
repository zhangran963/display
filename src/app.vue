<template>
    <div id="app">
        <nav>
            <button class="left" @click.stop="turnBack" :style="{visibility: isRoot?'hidden':'visible'}">返回</button>
            <h4 class="center">display</h4>
            <button class="right" >&nbsp;</button>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'root',
    data(vm){
        // console.log(location.pathname);
        
        return {
            isRoot: true
        }
    },
    methods: {
        turnBack(){
            this.$router.back()
        },
    },
    updated(){
        // 判断根元素
        this.isRoot = location.pathname==='/'
    }
}
</script>


<style lang="scss" scoped>
$height: 4rem;
#app{
    nav{
        background-color: darkcyan;
        color: white;
        height: $height;

        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;

        .left, .center, .right{
            line-height: $height;
            min-width: $height;
            color: white;
        }
        .left{
            text-align: left;
        }
        .center{
            font-size: 1.2rem;
            font-weight: bolder;
        }
        .right{
            visibility: hidden;
        }
    }
}
</style>

