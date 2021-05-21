<template>
<!-- 插入标签 -->
  <div ref="element"></div>
</template>
<script>
export default {
    props: {
        propsdata: {
            type: Object
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        }
    },
    mounted(){
        let dom = this.$refs.element;
        let data = Object.assign({},this.propsdata);
        let createEle = document.createElement(data.element);
        dom.appendChild(createEle);
        createEle.innerText = data.text || "未命名";
        // this.adjustStyle(createEle);
    },  
    methods: {
        // 调整样式
        // adjustStyle(e){
        //     let lineStyle = ['a','span'];
        //     e.style.backgroundColor = "#333";
        //     if(lineStyle.indexOf(this.propsdata.element) == -1) {
        //         e.style.display = "block";
        //         e.style.width = this.width;
        //         e.style.height = this.height;
        //     }
        // }
    }
}
</script>
<style lang="less">

</style>