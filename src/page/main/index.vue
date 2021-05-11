<template>
    <div>
        <Header />
    </div>
</template>
<script>
import Header from '@/page/component/header'
import add from './show'
export default {
    components: {
        Header
    },
    mounted(){
        this.$message({
            message: `this is a message ! add(1,2,3,4) = ${add(1,2,3,4)}`,
            type: "primary",
            showClose: true,
        })
    }
}
</script>