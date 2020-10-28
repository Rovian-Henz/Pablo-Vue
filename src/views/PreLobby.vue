<template>
    <div class="preLobby">
        <PopupPlayer />
    </div>
</template>

<script>
// @ is an alias to /src
import PopupPlayer from "@/components/PopupPlayer.vue";

export default {
    name: "PreLobby",
    components: {
        PopupPlayer,
    },
};
</script>