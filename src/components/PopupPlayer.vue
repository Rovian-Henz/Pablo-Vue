<template>
    <div class="popupPlayer">
        <div class="backdrop">
            <div class="popup-player-name">
                <label for="user" class="user-title">Apelido</label>
                <input type="text" name="user" id="user" />
                <button type="button" onclick="saveUser()">Entrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopupPlayer",
};
</script>

<style scoped lang="scss">
</style>
