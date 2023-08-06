<script setup>
const props = defineProps(['time'])
/** 針對時間資料格式的index 獲取小時:分鐘
 * @param {string} isServedTime 判斷是否供餐
 * @param {number} index 判斷小時/分鐘
 */
function get_Time(isServedTime, index) {
    if (props.time.length !== 48) throw Error('props.time.length should be 48 (24hours, 30mins = 1 => 48)')

    return get_Hour() + ':' + get_Minute()

    function get_Hour() {
        const hour = Math.floor(index / 2)

        switch (hour) {
            case 0:
                return '00'
            case 1:
                return '01'
            case 2:
                return '02'
            case 3:
                return '03'
            case 4:
                return '04'
            case 5:
                return '05'
            case 6:
                return '06'
            case 7:
                return '07'
            case 8:
                return '08'
            case 9:
                return '09'
            case 10:
                return '10'
            case 11:
                return '11'
            case 12:
                return '12'
            case 13:
                return '13'
            case 14:
                return '14'
            case 15:
                return '15'
            case 16:
                return '16'
            case 17:
                return '17'
            case 18:
                return '18'
            case 19:
                return '19'
            case 20:
                return '20'
            case 21:
                return '21'
            case 22:
                return '22'
            case 23:
                return '23'
            case 24:
                return '24'
        }
    }
    function get_Minute() {
        const hour = Math.floor(index / 2)

        switch (index % 2 === 0) {
            case true:
                return '00'
            case false:
                if (hour === 23) return '59'
                return '30'
        }
    }
}
</script>

<template lang="pug">
div(id="🔥TimepickerTime")
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(isServedTime, index) in props.time" :key="index") {{ get_Time(isServedTime, index) }}
    span(v-id="'Dash'") -
    select(v-id="'Time'")
        option(disabled) 請選擇時間
        option(v-for="(isServedTime, index) in props.time" :key="index") {{ get_Time(isServedTime, index) }}
</template>

<style lang="sass">

</style>

