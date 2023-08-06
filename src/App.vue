<script setup>
import Timepicker from './components/Timepicker.vue';
const dayBox = {
    "week_day0": "000000000000000000000000000000000000000000000000",
    "week_day1": "111111111111111111111111111111111111111111111111",
    "week_day2": "000000111111000000000000000000000000000000000000",
    "week_day3": "000000000000111111000000000000000000000000000000",
    "week_day4": "000000000000000000000000111111111111000000000000",
    "week_day5": "000000000000000000000000000000000000111111111111",
    "week_day6": "111111111111111111111111111111111111111111111111"
}
</script>

<template lang="pug">
ul(id="🔥App")
    Timepicker(v-for="(time, name, index) in dayBox" :time="time" :index="index")
</template>

<style lang="sass">
#🔥App
    list-style: none
</style>

