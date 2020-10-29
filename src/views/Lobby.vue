<template>
    <div class="lobby">
        <PopupPlayer />
    </div>
</template>

<script>
// @ is an alias to /src
import PopupPlayer from "@/components/PopupPlayer.vue";

export default {
    name: "Lobby",
    components: {
        PopupPlayer,
    },
};
</script>