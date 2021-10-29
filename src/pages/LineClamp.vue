<template>
  <div id="line-clamp">
      
      <div class="content" :class="ischeck?'line-clamp':''">
          <div @click="cheked" class="btn" >{{ischeck?'展开':'收起'}}</div>
          作为一名入党进取分子，我一向以一名党员的准则要求自我。严格规范自我的行为，同时也在思想上提高自我的觉悟，进取为成为一名光荣的共.产.党员而准备着。因为我明白，党对于她的成员的要求是十分严格的。下头是我这一年中的思想转变，请组织审核。首先，是我对于党员的认识。
我是听着《没有共.产.党就没有新中国》长的的，我深知党之于中国的重要性，但那时只是觉得成为一名共.产.党员是及其光荣而神圣的。可是奇偶随着年龄的增长，异常是成为一名进取分子之后，我开始对党有了更加深刻的理解，对于党员这个称呼的含义有了更加深切的体会。中.国.共.产.党，不仅仅是国家执政党，不仅仅是中国昌盛，民族腹腔的指路人，更是扎根群众，服务人民的公仆，更是为千千万万百姓支撑一片天的擎天巨柱。配得上被称为共.产.党员的人，都是那些将群众利益放在心上，舍得下小我的人。从某种意义来说，党员着两个字等同于无私与风险的高尚品德，和天下为公的宽广心境。</div>
  </div>
</template>
<script lang='ts'>
import { defineComponent ,reactive, ref ,toRefs} from 'vue';
export default defineComponent({
name: '',
setup() {
   const data = reactive({
       ischeck:true,
        cheked() {
            data.ischeck = !data.ischeck
        }
   })
return {
    ...toRefs(data),
}
}
});
</script>
<style lang='less' scoped>
#line-clamp{
    font-size: 12px;
    display: flex;
    .content{
        &.line-clamp{
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            max-height:60px;
        }
        max-height:400px;
        max-width: 900px;
        transition: 1s all;
        &::before{
            content: '';
            float: right;
            width: 0;
            height: calc(100% - 17px);
            background: red
        }
    }
    .btn{
        background-color: red;
        float: right;
        clear: both;
    }
}
</style>