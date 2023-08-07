<script setup>
</script>

<template lang="pug">
section(id="🔥TimepickerSwitch")
    div(v-id="'CircleX'")
    div(v-id="'CircleV'")
</template>

<style lang="sass">
#🔥TimepickerSwitch
    width: 50px
    height: 25px
    border-radius: 15px
    background: $green
    &__CircleX, &__CircleV
        position: relative
        width: 50%
        height: 100%
        background: $white
        border-radius: 15px
        transform: scale(0.75)
        color: $green
        &::after
            position: absolute
            left: 50%  
            top:50%
            transform: translate(-50%, -50%)
            
    &__CircleX
        visibility: hidden
        &::after
            content: '\2715'
    &__CircleV
        top: -100%
        left: 50%
        &::after
            content: '\2713'
</style>

