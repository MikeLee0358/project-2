<script setup>
import { useTimepickerStore } from '@/stores/Timepicker'

const storeTimepicker = useTimepickerStore()
const props = defineProps(['timeData', 'weekName'])


</script>

<template lang="pug">
li(id="🔥TimepickerTime")
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(binaryData, index) in timeData" :key="index" :disabled="storeTimepicker.boxStart.get_IsDisabled(binaryData, index, timeData)"  :selected="storeTimepicker.boxStart.get_Selected(index, timeData)" @click="storeTimepicker.boxStart.update_Data(index, weekName, storeTimepicker.dummyData)") {{ storeTimepicker.boxGet.get_Time(index, timeData) }}
    span(v-id="'Dash'") -
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(binaryData, index) in timeData" :key="index" :disabled="storeTimepicker.boxEnd.get_IsDisabled(binaryData, index, timeData)" :selected="storeTimepicker.boxEnd.get_IsSelected(index, timeData)" @click="storeTimepicker.boxEnd.update_Data(index, weekName, storeTimepicker.dummyData)") {{ storeTimepicker.boxGet.get_Time(index + 1, timeData) }}
</template>


