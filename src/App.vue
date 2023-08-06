<script setup>
import Timepicker from '@/components/Timepicker.vue';
import { useTimepickerStore } from '@/stores/Timepicker'
const storeTimepicker = useTimepickerStore()
</script>

<template lang="pug">
ul(id="🔥App")
    Timepicker(v-for="(binaryTime, name, index) in storeTimepicker.dummyData" :name="name" :binaryTime="binaryTime" :index="index")
</template>

<style lang="sass">
#🔥App
    list-style: none
</style>

