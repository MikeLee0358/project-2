<script setup>
import { useTimepickerStore } from '@/stores/Timepicker'

const storeTimepicker = useTimepickerStore()
const props = defineProps({
    binaryTime: {
        type: String,
        required: true
    }
})

</script>

<template lang="pug">
div(id="🔥TimepickerTime")
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(isServedBinary, index) in binaryTime" :key="index" :disabled="isServedBinary === '0'") {{ storeTimepicker.get_Time(index) }}
    span(v-id="'Dash'") -
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(isServedBinary, index) in binaryTime" :key="index" :disabled="isServedBinary === '0'" v-show="index > 0") {{ storeTimepicker.get_Time(index) }}
</template>

<style lang="sass">

</style>

