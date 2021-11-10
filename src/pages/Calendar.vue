
<template>
  <div class="calendar">
    <div
      v-for="item in weekData"
      :key="item.week"
      class="item"
      @click="change(item)"
    >
      <div class="week">
        {{ item.week }}
      </div>
      <div
        class="date"
        :class="item.checked?'checked':''"
      >
        {{ item.date }}
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs,onMounted } from 'vue';
export default defineComponent({
name: '',
setup(props, context) {
  onMounted(() => {
    data.getList()
  })

  const data = reactive({
    
    weekData:[
          {
            week:'一',
            date: 0,
            checked:false,
            intDate:0
          },
          {
            week:'二',
            date:0,
            checked:false,
          },
          {
            week:'三',
            date:0,
            checked:false,
          },
          {
            week:'四',
            date:0,
            checked:false,
          },
          {
            week:'五',
            date:0,
            checked:false,
          },
          {
            week:'六',
            date:0,
            checked:false,
          },
          {
            week:'日',
            date:0,
            checked:false,
          },
        ],
      getStartDay() {
        const now = new Date();
        const nowTime = now.getTime();
        const day = now.getDay();
        const oneDayTime = 24 * 60 * 60 * 1000;
        const MondayTime = nowTime - (day - 1) * oneDayTime;
        // const SundayTime = nowTime + (7 - day) * oneDayTime;
        // const monday = new Date(MondayTime);
        // const sunday = new Date(SundayTime);
        return MondayTime;
      },
      change(item:any) {
        console.log(item);
        data.weekData.forEach(v => {
          // this.$set(v, 'checked', false);
          v.checked = false
        });
        // this.$set(item, 'checked', true);
          item.checked = true

        // this.$emit('change', item.intDate);
        context.emit('change', item.intDate)
      },
      getList() {
        const startDay = data.getStartDay();
        data.weekData.forEach((v:any, i) => {
          // 当周开始时间加一天时间
          const day = (startDay + (i * 24 * 60 * 60 * 1000));
          const newDay = new Date(day);
          if(newDay.getDate() === 1) {
            v.date = `${newDay.getMonth() + 1}月`;
          } else {
            v.date = newDay.getDate();
          }
          v.intDate = newDay;
          if(newDay.getDate() === new Date().getDate()) {
            v.checked = true;
          }
        });
      }
  })
return {...toRefs(data),}
}
});
</script>
<style lang='less' scoped>
.calendar{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(226, 220, 30);
  border-radius:0 0 11px 11px ;
  // margin: 12px 0;
  padding: 10px 0;
  .week{
    text-align: center;
    color:'red'
  }
  .date{
    border-radius: 50%;
    padding: 5px 10px;
  }
  .checked{
    background-color: #00BDA5;
    color: #fff;
  }
}
</style>