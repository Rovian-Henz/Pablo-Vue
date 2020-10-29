<template>
    <div class="popupPlayer">
        <div class="backdrop">
            <div class="popup-player-name">
                <label for="user" class="user-title">Apelido</label>
                <input type="text" name="user" id="user" />
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
        };
    },
    methods: {
        savePlayer() {
            const player = document.querySelector("#user").value;
            this.$store.commit("namePlayer", player);
            this.$parent.saveUser(player);
        },
    },
};
</script>

<style scoped lang="scss">
</style>
