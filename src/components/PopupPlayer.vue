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
</style>
