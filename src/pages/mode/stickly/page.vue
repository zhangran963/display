<template>
  <div class="page stickly-container">
    stickly 页
    <p v-for="(item,index) in items" :key="index">{{ item }}</p>
  </div>
</template>


<script>
export default {
  data: () => ({
    items: [],
  }),
  beforeCreate(){
    console.log('>>> beforeCreate:', this.items);
  },
  created(){
    console.log('>>> created:', this.items);
    for(let i=0;i<100;i++){
      this.items = this.items.concat(i)
    }
  }
}
</script>