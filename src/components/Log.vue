<template>
    <div class="log">
        <div class="box-historico">
            <div id="last-message"></div>
        </div>
        <div class="call-log">Histórico</div>
    </div>
</template>

<script>
export default {
    name: "Log",
    props: {
        msg: String,
    },
};
</script>

<style scoped lang="scss">
$card-border-color: #e2d9d5;
$card-bg-color: #f3f3f3;
$color-red: #fb8c8c;
$color-yellow: #fbe38c;
$color-blue: #736cae;
$color-green: #70c970;

.log {
    position: absolute;
    right: -300px;
    transition: all 0.5s;
    top: 50%;
    transform: translate(0, -50%);
    background: $card-bg-color;
    z-index: 9;
    .box-historico {
        border: 1px solid $card-border-color;
        padding: 15px 30px;
        width: 300px;
        box-sizing: border-box;
        min-height: 175px;
        max-height: 600px;
        overflow-y: scroll;
    }
    .call-log {
        writing-mode: vertical-lr;
        text-orientation: upright;
        position: absolute;
        left: -40px;
        top: 50%;
        padding: 10px;
        border: 1px solid $card-border-color;
        transform: translate(0, -50%);
        background: $color-yellow;
    }
    &:hover {
        right: 0;
        transition: all 0.5s;
    }
}
</style>
