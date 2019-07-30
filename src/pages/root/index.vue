<template>
    <ul class="page-root">
        <li @click="$router.push('/css/loading')"><button>loading</button></li>
        <li @click="$router.push('/css/loading')"><button>loading</button></li>
        <li @click="$router.push('/css/loading')"><button>loading</button></li>
        <li @click="$router.push('/css/loading')"><button>loading</button></li>
        <li @click="$router.push('/css/loading')"><button>loading</button></li>
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
    text-align: center;
    display: grid;
    grid-template-columns: 30vw auto 30vw;
    grid-template-rows: 4.2rem 4.2rem;
    padding: 0 0.8rem;

    li{
        align-self: center;
        button{
            background-color: darkgoldenrod;
            border: 0;
            outline: 0;
            min-width: 6rem;
            height: 3rem;
            border-radius: 0.2rem;
        }
    }
}
</style>

