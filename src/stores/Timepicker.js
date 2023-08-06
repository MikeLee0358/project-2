import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimepickerStore = defineStore('timepicker', ()=> {
    const dummyData = ref({
        "week_day0": "000000000000000000000000000000000000000000000000",
        "week_day1": "000000000000000000000000001111111111111111111111",
        "week_day2": "000000111111000000000000000000000000000000000000",
        "week_day3": "000000000000111111000000000000000000000000000000",
        "week_day4": "000000000000000000000000111111111111000000000000",
        "week_day5": "000000000000000000000000000000000000111111111111",
        "week_day6": "111111111111111111111111111111111111111111111111"
    })

    /** 轉換成 星期 X
     * @param {string} name "week_day0"
     * @returns {string} 星期日
     */
    function get_WeekName(name) {
        if (Object.keys(dummyData.value).length !== 7) throw Error(`data should be 7 days, yours: ${Object.keys(dummyData.value).length}`)

        const weekNumber = name.charAt(name.length - 1)
        let weekName = ''; 
        
        switch (weekNumber) {
            case '0':
                weekName = '星期日'
                break
            case '1':
                weekName = '星期一'
                break
            case '2':
                weekName = '星期二'
                break
            case '3':
                weekName = '星期三'
                break
            case '4':
                weekName = '星期四'
                break
            case '5':
                weekName = '星期五'
                break
            case '6':
                weekName = '星期六'
                break
        }
        return weekName
    }

    /** 針對時間格式做轉換
     * @param {number} index 判斷小時/分鐘
     * @returns {string} "小時:分鐘"
     */
    function get_Time(index) {
        if (Object.values(dummyData.value)[0].length !== 48) throw Error(`data should be 48 (24 hours, per 30mins 1 = 48), yours: ${Object.values(dummyData.value)[0].length}`)

        return `${get_Hour()} : ${get_Minute()}`

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
    return {
        dummyData,
        get_Time,
        get_WeekName,
    }
})