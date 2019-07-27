<template>
    <ul class="page-root">
        <li @click="$router.push('/css/loading')"><button >按钮</button></li>
    </ul>
</template>

<script>
export default {
    name: 'root',
    data(vm){
        // console.log(vm);
        
        return {

        }
    },
    mounted(){
        // console.log(this.$root);
        
    }
}
</script>


<style lang="scss">
.page-root{
    color: darkblue;

    .main{
        outline: 1px solid;
    }
}
</style>

