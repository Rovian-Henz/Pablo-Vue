<template>
    <div class="log">
        <div class="box-historico">
            <div id="last-message"></div>
        </div>
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
</style>
