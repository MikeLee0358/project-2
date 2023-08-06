<script setup>
import { computed } from 'vue';
import TimepickerTime from './TimepickerTime.vue';
import TimepickerSwitch from './TimepickerSwitch.vue';
const props = defineProps(['time', 'index'])

const get_WeekName = computed(() => {
    if (props.index === undefined) throw Error('required index')
    console.log(props.index)
    switch (props.index) {
        case 0:
            return '星期一'
        case 1:
            return '星期二'
        case 2:
            return '星期三'
        case 3:
            return '星期四'
        case 4:
            return '星期五'
        case 5:
            return '星期六'
        case 6:
            return '星期日'
    }
})
</script>

<template lang="pug">
li(id="🔥TimePicker")
    span(v-id="'Title'") {{ get_WeekName }}
    input(v-id="`Checkbox-${props.index}`" type="checkbox" checked)
    TimepickerSwitch
    label(v-id="'Label'" :for="`🔥TimePicker__Checkbox-${props.index}`") 本日供餐
    TimepickerTime(:time="time")
</template>

<style lang="sass">
#🔥TimePicker
    display: flex
    align-items: center
    justify-content: space-around
    margin-bottom: 10px
    &__Title
        color: red
    & > input:not(:checked) // 透過css切換checked狀態時的顏色，預設checked狀態
        ~ #🔥TimepickerTime
            visibility: hidden
        ~ #🔥TimepickerSwitch
            background: $grey
            #🔥TimepickerSwitch__CircleX
                visibility: visible
            #🔥TimepickerSwitch__CircleV
                visibility: hidden
    &__Label
        color: blue
</style>