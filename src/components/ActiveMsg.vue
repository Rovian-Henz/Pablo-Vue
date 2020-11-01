<template>
    <div class="active-msg">
        <div id="active-msg" v-if="this.$parent.actualPlayer">
            {{ this.$parent.actualPlayer }} está cantando
        </div>
    </div>
</template>

<script>
export default {
    name: "ActiveMsg",
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

#active-msg {
    width: 400px;
    line-height: 1.3;
    box-sizing: border-box;
    background: $color-yellow;
    padding: 10px 15px;
    height: 80px;
    box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid $card-border-color;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
