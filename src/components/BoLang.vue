<template>
  <div class="body"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.body {
    position: relative;
    align-items: center;
    min-height: 100vh;
    background-color: #6983a5;
    overflow: hidden;
 
    &:before, &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fffbf3;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
 
    &:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }
 
    &:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }
}
 
@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}
</style>