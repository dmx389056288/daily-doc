<template>
  <div>
    <div class="border-box" @mousedown="stopSwiper" @mouseup="playSwiper">
      <div ref="content" class="content">
        <div
          class="box"
          v-for="(item, index) in list"
          :key="index"
          :style="{ backgroundColor: item.color, left: index * 700 + 'px' }"
        ></div>
      </div>
      <div class="round-list">
        <div
          class="dot"
          v-for="(item, index) in list"
          :key="index"
          :class="selectIndex === index ? 'doc-select' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs, Ref, onMounted, ref } from "vue";
// import '../mock/index.ts'
export default defineComponent({
  name: "Index",

  setup() {
    const content: Ref = ref();
    onMounted(() => {
      datas.swiper();
    });
    const datas: any = reactive({
      selectIndex: 0,
      timerId: null,
      list: [
        {
          color: "red",
        },
        {
          color: "yellow",
        },
        {
          color: "blue",
        },
        {
          color: "#ccceee",
        },
      ],
      isdown: false,
      target:'',
      startX:'',
      swiper() {
        datas.timerId = setInterval(() => {
          content.value.style.transition = "left 1s";
          datas.selectIndex += 1;
          if (datas.selectIndex >= datas.list.length) {
            datas.selectIndex = 0;
            content.value.style.transition = "none";
          }
          content.value.style.left = `-${datas.selectIndex * 700}px`;
        }, 2000);
      },
      handel(e:any){          
          console.log(e);          
          if(datas.startX > e.x){
              console.log('左移动');
              content.value.style.left = `${content.value.style.left.substring(content.value.style.left.length - 2,0) - (datas.startX - e.x)}px`
              console.log(content.value.style.left);
              
          } else {
              console.log('右移动');
              content.value.style.left =  `${content.value.style.left.substring(content.value.style.left.length - 2,0) + (datas.startX - e.x)}px`
          }
          console.log(content.value.style);
          
      },
      stopSwiper(e:any) {
        clearInterval(datas.timerId);
        console.log(e);
        datas.startX = e.x
        e.target.addEventListener("mousemove", datas.handel ,false);
      },
      playSwiper(e:any) {
          console.log('抬起');
        e.target.removeEventListener("mousemove",datas.handel ,false)
        datas.swiper();
      },
      mousemoveSwiper(e: any) {
        console.log(e);
      },
    });
    return { ...toRefs(datas), content };
  },
});
</script>
<style lang='less' scoped>
.border-box {
  width: 700px;
  height: 300px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .box {
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 300px;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    transition: left 1s;
  }
  .round-list {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    .dot {
      border: 1px solid #ccc;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
    }
    .doc-select {
      background-color: #1ab533;
    }
  }
}
</style>