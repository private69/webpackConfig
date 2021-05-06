<template>
    <div>
        <fieldset>
            <legend>这是app</legend>
            <Header></Header>
        </fieldset>
    </div>
</template>
<script>
import Header from '@/page/header.vue'
export default {
    name: "app",
    components: {
        Header
    }
}
</script>