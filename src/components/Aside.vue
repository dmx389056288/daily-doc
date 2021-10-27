<template>
   <div id="aside">
       
   </div>
</template>
<script lang='ts'>
import { defineComponent,reactive,toRefs } from 'vue';
export default defineComponent({
name: 'Aside',
setup() {
    const data = reactive({
        asideList:[
            {
                id:'1',
                title:'一级标题',
                childShow:false,
                child:[
                    {
                        id:'1-1',
                        title:'二1级标题'
                    },
                    {
                        id:'1-2',
                        title:'二2级标题'
                    },
                    {
                        id:'1-3',
                        title:'二3级标题'
                    }
                ]
            },
            {
                id:'2',
                title:'一级标题',
                childShow:false,
                child:[
                    {
                        id:'2-1',
                        title:'二1级标题'
                    },
                    {
                        id:'2-2',
                        title:'二2级标题'
                    },
                    {
                        id:'2-3',
                        title:'二3级标题'
                    }
                ]
            }
                ]
            })
    const handle = (item:any) => {
        item.childShow = !item.childShow
    }
    const handleOpen = (key:number , keyPath:string) => {
      console.log(key, keyPath)
    }
    const handleClose = (key:number , keyPath:string) => {
      console.log(key, keyPath)
    }
return {
    handle,
    handleOpen,
    handleClose,
    ...toRefs(data)
}
}
});
</script>
<style lang='less' scoped>
#aside{
    height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
}
</style>