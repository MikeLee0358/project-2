import { defineStore } from "pinia";
import { onMounted, reactive } from "vue";

export const useTimepickerStore = defineStore('timepicker', ()=> {
    /** @type {dummyData} */
    const dummyData = reactive({
        "week_day0": "000000000000000000000000000000000000000000000000",
        "week_day1": "111111111111111111111111111111111111111111111111",
        "week_day2": "000000111111000000000000000000000000000000000000",
        "week_day3": "000000000000111111000000000000000000000000000000",
        "week_day4": "000000000000000000000000111111111111000000000000",
        "week_day5": "000000000000000000000000000000000000111111111111",
        "week_day6": "111111111111111111111111111111111111111111111111"
    })

    const boxStart = {
        /** @type {nso_v} */
        update_DummyData: (index, weekName, dummyData) => {
            if (typeof weekName !== 'string') throw Error(`typeof weekName !== 'string', yours: ${weekName}`)
            if (typeof dummyData !== 'object') throw Error(`typeof dummyData !== 'object', yours: ${dummyData}`)

            const targetIndex = index
            let newTimeData = ''

            for (let i = 0; i < dummyData[weekName].length; i++) {
                if(i >= targetIndex && i <= dummyData[weekName].lastIndexOf('1')) newTimeData += '1'
                else newTimeData += '0'
            }

            dummyData[weekName] = newTimeData
        },
        /** @type {ns_b} */
        get_IsSelected: (index, timeData) => {
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (timeData.indexOf('1') === index) return true
            else return false
        },
        /** @type {nss_b} */
        get_IsDisabled: (index, binaryData, timeData) => {
            if (typeof binaryData !== 'string') throw Error(`typeof binaryData !== 'string', yours: ${binaryData}`)
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (timeData.lastIndexOf('1') < index) return true
            else return false
        },
    }

    const boxEnd = {
        /** @type {nso_v} */
        update_DummyData: (index, weekName, dummyData) => {
            if (typeof weekName !== 'string') throw Error(`typeof weekName !== 'string', yours: ${weekName}`)
            if (typeof dummyData !== 'object') throw Error(`typeof dummyData !== 'object', yours: ${dummyData}`)

            const targetIndex = index
            let newTimeData = ''

            for (let i = 0; i < dummyData[weekName].length; i++) {
                if(i >= dummyData[weekName].indexOf('1') && i <= targetIndex) newTimeData += '1'
                else newTimeData += '0'
            }

            dummyData[weekName] = newTimeData
        },
        /** @type {nss_b} */
        get_IsDisabled: (index , binaryData, timeData) => {
            if (['0','1'].includes(binaryData) === false) throw Error(`['0','1'].includes(binaryData) === false, yours: ${binaryData}`)
            if (typeof binaryData !== 'string') throw Error(`typeof binaryData !== 'string', yours: ${binaryData}`)
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (index < timeData.indexOf('1')) return true
            else return false
        },
        /** @type {ns_b} */
        get_IsSelected: (index, timeData) => {
            if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

            if (timeData.lastIndexOf('1') === index) return true
            else if (timeData.lastIndexOf('1') === timeData.length - 1) return true
            else return false
        }
    }
    
    const boxGet = {
        /** @type {ns_s} */
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
        /** @type {ns_s} */
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
        /** @type {s_v} */
        handle_ToDayOff: (timeData) => {
            onMounted(()=> {
                if (timeData.length !== 48) throw Error(`timeData.length !== 48, yours: ${timeData.length}`)

                if (Number(timeData) === 0) document.getElementById('🔥Timepicker__Label')?.click()
            })
        },
    }

    return {
        dummyData,
        boxStart,
        boxEnd,
        boxGet,
        boxHandle,
    }
})