<template>
  <!-- 个人资料 -->
  <div class="el-personal__info">
    <div class="displayRight pld20">
      <img
        style="padding-top: 5px"
        width="20"
        height="20"
        src="@/assets/otherIcon/person 01.png"
        alt="error"
      />
      <span class="pld20">
        于
        {{ form.registryTime }} 加入该项目
      </span>
    </div>
    <el-card shadow="hover">
      <h3>基本信息</h3>
      <hr />
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="用户名称：">
          <el-input v-model="form.username" v-if="edit"></el-input>
          <span v-else>{{ form.username }}</span>
        </el-form-item>
        <el-form-item label="用户 ID：">
          <span>{{ form.userID }}</span>
        </el-form-item>
        <el-form-item label="用户性别：">
          <el-radio-group v-model="form.sex" v-if="edit">
            <el-radio label="male" value="0"></el-radio>
            <el-radio label="female" value="1"></el-radio>
          </el-radio-group>
          <span v-else>{{ form.sex }}</span>
        </el-form-item>
        <el-form-item label="所在地区：">
          <el-input v-if="edit" v-model="form.area"></el-input>
          <span v-else>{{ form.area }}</span>
        </el-form-item>
        <el-form-item label="出生日期：">
          <el-input v-if="edit" v-model="form.birthday"></el-input>
          <span v-else>{{ form.birthday }}</span>
        </el-form-item>
        <el-form-item label="用户简介：">
          <el-input type="textarea" v-if="edit" v-model="form.stage"></el-input>
          <span v-else>{{ form.stage }}</span>
        </el-form-item>
        <el-form-item align="right">
          <el-button v-if="edit" type="primary" @click="edit = false"
            >取消</el-button
          >
          <el-button :type="edit ? 'primary' : 'text'" @click="edit = !edit">
            <i class="el-icon-edit"></i>
            {{ edit ? "保存" : "编辑" }}</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    propsdata: {
      type: Object,
    },
  },
  data() {
    return {
      form: {},
      edit: false,
    };
  },
  watch: {
    // 解决页面初始化不能显示数据的问题
    propsdata: {
      handler(newVal) {
        this.getFormData(newVal)
      },
      deep: true,
    },
  },
  methods: {
    getFormData(data){
      this.form = Object.assign({}, data);
    }
  },
  mounted() {
    this.getFormData(this.propsdata)
  },
};
</script>
<style lang="less">
.el-personal__info {
  margin-left: 5%;
  width: 100%;
  .el-card__body {
    padding-top: 5px;
    padding-bottom: 0px;
  }
}
.displayRight {
  // margin-left: 5%;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>