<script setup>
import { useTimepickerStore } from '@/stores/Timepicker'

import Timepicker from '@/components/Timepicker.vue';

const storeTimepicker = useTimepickerStore()
</script>

<template lang="pug">
ul(id="🔥App")
    Timepicker(v-for="(timeData, weekName, index) in storeTimepicker.dummyData" :weekName="weekName" :timeData="timeData" :index="index")
</template>

<style lang="sass">
#🔥App 
    display: grid
    align-content: center
    gap: 2.5vh
    max-width: 768px
    height: 100vh
    margin: 0 auto
</style>

