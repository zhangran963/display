<template>
    <div class="page-bubble">
        <h4>bottom-left</h4>

        <button>Bubble</button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>


<style lang="scss">
.page-bubble{
    color: darkblue;

    button{
        position: relative;
        z-index: 1;
        color: #fff;
        padding: .5em 1em;
        outline: 0;
        border: none;
        background-color: #2d3058;
        overflow: hidden;
        transition: color .4s ease-in-out;

        // 阴影内容
        &::before{
            content: "";
            z-index: -1;
            position: absolute;
            // 定位左下角
            top: 100%;  
            right: 100%;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: #3cefff;
            transform-origin: center;
            // 初始大小
            transform: translate3d(50%,-50%,0) scale3d(0,0,0);
            // 变化维度 transform
            transition: transform 1500ms ease-in-out;
        }
        &:hover{
            cursor: pointer;
            color: #161616;
        }
        &:hover::before{
            // 最终大小
            transform: translate3d(50%,-50%,0) scale3d(15,15,15);
        }
    }
}


</style>

