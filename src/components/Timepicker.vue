<script setup>
import { useTimepickerStore } from '@/stores/Timepicker'
import TimepickerTime from '@/components/TimepickerTime.vue';
import TimepickerSwitch from '@/components/TimepickerSwitch.vue';

const storeTimepicker = useTimepickerStore()
const props = defineProps({
    timeData: {
        type: String,
        required: true
    },
    weekName: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})

storeTimepicker.boxHandle.handle_ToDayOff(props.timeData)
</script>

<template lang="pug">
li(id="🔥Timepicker")
    span(v-id="'Title'") {{ storeTimepicker.boxGet.get_WeekName(index, timeData)}}
    input(v-id="`Checkbox-${index}`" type="checkbox")
    label(v-id="`Label`" :for="`🔥Timepicker__Checkbox-${index}`")
        TimepickerSwitch
        span 本日供餐
    TimepickerTime(:timeData="timeData" :weekName="weekName")
</template>

<style lang="sass">
#🔥Timepicker
    display: flex
    align-items: center
    justify-content: space-around
    &__Title
        color: $red
    & > input
        display: none
    & > input:checked // 🔥Timepicker__Checkbox-${index} 處理切換狀態
        ~ #🔥TimepickerTime
            visibility: hidden
        ~ #🔥Timepicker__Label #🔥TimepickerSwitch
            background: $grey
            #🔥TimepickerSwitch__CircleX
                visibility: visible
                color: $grey
            #🔥TimepickerSwitch__CircleV
                visibility: hidden
    &__Label
        display: flex
        align-items: center
        gap: 1vw
        color: $blue
</style>