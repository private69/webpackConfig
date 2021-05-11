<template>
  <div id="header" ref="header">
    <span> this is header </span>
    <!-- <component is="dysidebar" :testprops="'hello world'"></component> -->
    <component
      v-for="(val, index) in cpmarr"
      :key="index"
      :is="val"
    ></component>
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cpmarr: [],
    };
  },
  methods: {
    add() {
      this.cpmarr.push("dysidebar");
    },
  },
  mounted() {
    let header = document.getElementById("header") || this.$refs.header;
    // ERROR
    try {
      // way one to create dynamic component
      let node = document.createElement("dysidebar");
      console.log(header == document.getElementById("header")); // true
      console.log(document.createElement("dysidebar").nodeType); // 1
      header.appendChild(node);
    } catch (err) {
      console.log(err);
    }
    // ERROR
    try {
      // way two to create dynamic component
      let node = document.createElement("component");
      node.is = "dysidebar";
      console.log(node.nodeType); // 1
      header.appendChild(node);
    } catch (error) {}
  },
  //   components: {
  //     dysidebar,
  //   },
};
</script>
<style lang="less" scoped>
#header {
  span {
    color: #f00;
  }
}
</style>