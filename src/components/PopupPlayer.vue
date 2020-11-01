<template>
    <div class="popup-player">
        <div class="backdrop">
            <div class="popup-player-name">
                <label for="user" class="user-title">Apelido</label>
                <input type="text" name="user" v-model="playerName" />
                <button type="button" @click="savePlayer">Entrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopupPlayer",
    data() {
        return {
            baseStore: this.$store.state,
            playerName: "",
        };
    },
    methods: {
        savePlayer() {
            this.$store.commit("playerName", this.playerName);
            this.$parent.saveUser();
        },
    },
};
</script>

<style scoped lang="scss">
.backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
    &.hide {
        display: none;
    }
    .popup-player-name {
        max-width: 500px;
        margin: 1.75rem auto;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: rgba(255, 255, 255, 0.75);
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
        outline: 0;
        display: flex;
        position: relative;
        height: 300px;
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
    }
}
</style>
