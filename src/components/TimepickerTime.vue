<script setup>
import { useTimepickerStore } from '@/stores/Timepicker'

const storeTimepicker = useTimepickerStore()
const props = defineProps({
    timeData: {
        type: String,
        required: true
    },
    weekName: {
        type: String,
        required: true
    }
})
</script>

<template lang="pug">
li(id="🔥TimepickerTime")
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(binaryData, index) in timeData" :key="index" :disabled="storeTimepicker.boxStart.get_IsDisabled(index, binaryData, timeData)"  :selected="storeTimepicker.boxStart.get_IsSelected(index, timeData)" @click="storeTimepicker.boxStart.update_DummyData(index, weekName, storeTimepicker.dummyData)") {{ storeTimepicker.boxGet.get_Time(index, timeData) }}
    span(v-id="'Dash'") -
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(binaryData, index) in timeData" :key="index" :disabled="storeTimepicker.boxEnd.get_IsDisabled(index, binaryData, timeData)" :selected="storeTimepicker.boxEnd.get_IsSelected(index, timeData)" @click="storeTimepicker.boxEnd.update_DummyData(index, weekName, storeTimepicker.dummyData)") {{ storeTimepicker.boxGet.get_Time(index + 1, timeData) }}
</template>


