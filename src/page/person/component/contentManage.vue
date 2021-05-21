<template>
<!-- 跑马灯组件 作品展示-->
  <div>
    <el-carousel
      @change="changeCarousel"
      :interval="4000"
      :height="showHeight"
      :autoplay="false"
      :direction="'vertical'"
    >
      <el-carousel-item v-for="(item, index) in imglist" :key="'img' + index">
        <el-image
          :style="'height:' + showHeight + ';width: 70%;'"
          :src="item.coverImg"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: {
    showHeight: {
      type: String,
      default: "500px",
    },
    imglist: {
      type: Array,
    },
  },
  methods: {
    changeCarousel(index) {
      return index;
    },
  },
};
</script>
<style lang="less">
.el-carousel__item {
  text-align: center;
  // margin-left: 5%;
}
</style>