<script setup>
import { useTimepickerStore } from '@/stores/Timepicker'
import TimepickerTime from '@/components/TimepickerTime.vue';
import TimepickerSwitch from '@/components/TimepickerSwitch.vue';

const storeTimepicker = useTimepickerStore()
const props = defineProps({
    binaryTime: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})
</script>

<template lang="pug">
li(id="🔥TimePicker")
    span(v-id="'Title'") {{ storeTimepicker.get_WeekName(name) }}
    input(v-id="`Checkbox-${index}`" type="checkbox" checked)
    TimepickerSwitch
    label(v-id="'Label'" :for="`🔥TimePicker__Checkbox-${index}`") 本日供餐
    TimepickerTime(:binaryTime="binaryTime")
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