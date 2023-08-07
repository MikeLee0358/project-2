import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useTimepickerStore = defineStore('timepicker', ()=> {
    /** 
     *  @typedef {Object} dummyData 
     *  @property {string} week_day0
     *  @property {string} week_day1
     *  @property {string} week_day2
     *  @property {string} week_day3
     *  @property {string} week_day4
     *  @property {string} week_day5
     *  @property {string} week_day6
     */
    const dummyData = ref({
        "week_day0": "000000000000000000000000000000000000000000000000",
        "week_day1": "111111111111111111111111111111111111111111111111",
        "week_day2": "000000111111000000000000000000000000000000000000",
        "week_day3": "000000000000111111000000000000000000000000000000",
        "week_day4": "000000000000000000000000111111111111000000000000",
        "week_day5": "000000000000000000000000000000000000111111111111",
        "week_day6": "111111111111111111111111111111111111111111111111"
    })

    const boxStart = {
        /**
         * @param {number} index 
         * @param {keyof dummyData} weekName
         * @param {dummyData} data 
         */
        update_Data: (index, weekName, data) => {
            if (typeof weekName !== 'string') throw Error(`typeof weekName !== 'string', yours: ${weekName}`)
            const targetIndex = index
            let newTimeData = ''

            for (let i = 0; i < data[weekName].length; i++) {
                if(i >= targetIndex && i <= data[weekName].lastIndexOf('1')) newTimeData += '1'
                else newTimeData += '0'
            }

            data[weekName] = newTimeData
        },
        /** 初始時間
         * @param {number} index 判斷用
         * @param {string} timeData '00011111...' length: 48
         * @returns {boolean} true or false
         */
        get_Selected: (index, timeData) => {
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (timeData.indexOf('1') === index) return true
            else return false
        },
        /** 停止供餐選項
         * @param {string} binaryData '0' or '1'
         * @param {number} index 判斷用
         * @param {string} timeData '00011111...' length: 48
         * @returns {boolean} true or false
         */
        get_IsDisabled: (binaryData, index, timeData) => {
            if (typeof binaryData !== 'string') throw Error(`typeof binaryData !== 'string', yours: ${binaryData}`)
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (timeData.lastIndexOf('1') < index) return true
            else return false
        },

    }

    const boxEnd = {
        /**
         * @param {number} index 
         * @param {keyof dummyData} weekName
         * @param {dummyData} data 
         */
        update_Data: (index, weekName, data) => {
            if (typeof weekName !== 'string') throw Error(`typeof weekName !== 'string', yours: ${weekName}`)
            const targetIndex = index
            let newTimeData = ''

            for (let i = 0; i < data[weekName].length; i++) {
                if(i >= data[weekName].indexOf('1') && i <= targetIndex) newTimeData += '1'
                else newTimeData += '0'
            }

                data[weekName] = newTimeData
        },
        /** 停止供餐選項
         * @param {string} binaryData '0' or '1'
         * @param {number} index 判斷用
         * @param {string} timeData '00011111...' length: 48
         * @returns {boolean} true or false
         */
        get_IsDisabled: (binaryData, index , timeData) => {
            if (typeof binaryData !== 'string') throw Error(`typeof binaryData !== 'string', yours: ${binaryData}`)
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (index < timeData.indexOf('1')) return true
            else return false
        },
        /** 初始時間
         * @param {number} index 判斷用
         * @param {string} timeData '00011111...' length: 48
         * @returns {boolean} true or false
         */
        get_IsSelected: (index, timeData) => {
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (timeData.lastIndexOf('1') === index) return true
            else if (timeData.lastIndexOf('1') === timeData.length - 1) return true
            else return false
        }
    }
    
    const boxGet = {
            /** 時間格式轉換
         * @param {number} index 判斷用
         * @param {string} timeData '00011111...' length: 48
         * @returns {string} "小時:分鐘"
         */
        get_Time: (index, timeData) => {
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            return `${get_Hour()} : ${get_Minute()}`

            function get_Hour() {
                const hour = Math.floor((index) / 2)

                if (hour < 10) return `0${hour}`
                else if (index === timeData.length) return '23'
                else return `${hour}`
            }
            function get_Minute() {
                if (index % 2 === 1) return '30'
                else {
                    if (index === timeData.length) return '59'
                    else return '00'
                }
            }
        },
        /** 轉換成 星期 X
         * @param {number} index 
         * @param {string} timeData '00011111...' length: 48
         * @returns {string} 星期日
         */
        get_WeekName: (index, timeData) => {
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            let name = ''
            
            switch (index) {
                case 0:
                    name = '星期日'
                    break
                case 1:
                    name = '星期一'
                    break
                case 2:
                    name = '星期二'
                    break
                case 3:
                    name = '星期三'
                    break
                case 4:
                    name = '星期四'
                    break
                case 5:
                    name = '星期五'
                    break
                case 6:
                    name = '星期六'
                    break
            }
            return name
        }
    }

    const boxHandle = {
        /** 初始化時，處理休息日不供餐
         * 
         * (透過JS點擊Label DOM操作input:checked樣式，達到關閉的功能。)
         * @param {string} timeData '00011111...' length: 48
         */
        handle_ToDayOff: (timeData) => {
            onMounted(()=> {
                if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

                if (Number(timeData) === 0) document.getElementById('🔥Timepicker__Label')?.click()
            })
        },
    }

    return {
        boxEnd,
        boxGet,
        boxStart,
        boxHandle,
        dummyData,
    }
})