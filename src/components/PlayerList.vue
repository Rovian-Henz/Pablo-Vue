<template>
    <div class="playerList">
        <div class="players-box">
            <div id="players-list"></div>
            <!-- <div id="current-player"></div> -->
        </div>
        <div class="call-player-list">Jogadores</div>
    </div>
</template>

<script>
export default {
    name: "PlayerList",
};
</script>

<style scoped lang="scss">
$card-border-color: #e2d9d5;
$card-bg-color: #f3f3f3;
$color-red: #fb8c8c;
$color-yellow: #fbe38c;
$color-blue: #736cae;
$color-green: #70c970;

.playerList {
    position: absolute;
    left: -400px;
    transition: all 0.5s;
    top: 50%;
    transform: translate(0, -50%);
    background: $card-bg-color;
    z-index: 9;
    .players-box {
        border: 1px solid $card-border-color;
        padding: 15px 30px;
        width: 400px;
        box-sizing: border-box;
        min-height: 175px;
    }
    .call-player-list {
        writing-mode: vertical-lr;
        text-orientation: upright;
        position: absolute;
        right: -40px;
        top: 50%;
        padding: 10px;
        border: 1px solid $card-border-color;
        transform: translate(0, -50%);
        background: $color-yellow;
    }
    &:hover {
        left: 0;
        transition: all 0.5s;
    }
}
</style>
