<template>
    <div id="app">
        <div class="header">
            <nav class="nav" :class="{'fixed': isTop }" ref="nav">
                <button class="left" @click.stop="turnBack" :style="{visibility: isRoot?'hidden':'visible'}">返回</button>
                <h4 class="center">display</h4>
                <button class="right" >&nbsp;</button>
            </nav>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'root',
    data(vm){
        return {
            isRoot: true,
            isTop: false,
        }
    },
    created(){
        window.onscroll = () => {
            let {top} = this.$refs.nav.getBoundingClientRect()
            if(top <= 0){
                this.isTop = true
            }else{
                this.isTop = false
            }
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
    .header{
        height: $height;
    }
    nav{
        user-select: none;
        background-color: darkcyan;
        color: white;
        height: $height;

        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;

        

        &.fixed{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 9999;
        }

        .left, .center, .right{
            line-height: $height;
            width: $height;
            min-width: $height !important;
            color: white;
        }
        .left{
            text-align: left;
            background-color: transparent;
            outline: 0;
            border: 0;
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

