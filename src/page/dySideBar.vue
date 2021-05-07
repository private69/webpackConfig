<template>
  <div>
    <fieldset class="dy-side-bar__fieldset">
      <legend>这是动态插入的组件</legend>
      <span>{{ testprops }} </span>
    </fieldset>
  </div>
</template>
<script>
export default {
  props: ["testprops"],
};
</script>