<template>
    <div >
       <div class="border-box">
           <div ref="content" class="content">
            <div class="box" v-for="(item,index) in list" :key="index" :style="{'backgroundColor':item.color,'left':index * 700 +'px'}"></div>
           </div>
       </div>
    </div>
</template>
<script lang='ts'>
import {defineComponent, reactive,toRefs,Ref,onMounted, ref} from 'vue';
// import '../mock/index.ts'
export default defineComponent({
name: 'Index',

setup() {
    const content:Ref = ref()
    
    onMounted(() => {
         content.value.style.transition='left 1s';
            let i = 0
         setInterval(()=>{
             i += 1;
             if(i>=datas.list.length){
                 i = 0
                  content.value.style.transition = 'none';
             }
             console.log(content);
             
             content.value.style.left =`-${i * 700}px`
             
        },4000)
       // 打印一下，就可以获取dom了
    })
    let datas:any = reactive({
        name:22,
        tableData:{
            startTime:'9.00',
            endTime:'21.00',
            sub:15,
        },
        list:[
            {
                color:'red',
            },
            {
                color:'yellow',
            },
            {
                color:'blue',
            },
            {
                color:'#ccceee',
            },
        ],
        isdown:false,
        change(){
        console.log(212);
        
        this.name = 111
    },
    });
    return {...toRefs(datas),content}
},
});
</script>
<style lang='less' scoped>
.border-box{
    width: 700px;
    height: 300px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .box{
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        height: 300px;
    }
    .content{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        transition: left 1s;
    }
}
</style>