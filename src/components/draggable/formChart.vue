<template>
  <div :style="'width:' + width + ';heigth:' + height" class="formChart">
    <el-form :rules="rules" :model="formData" label-width="80px">
      <el-form-item
        v-for="(item, index) of formLabel"
        :key="index"
        :label="item.label"
      >
        <el-input
          v-if="item.type == 'input'"
          v-model="formData[item.model]"
          :placeholder="'请输入' + item.label"
          :show-password="item.showPassword || item.showpassword"
          :disabled="item.disabled"
          :clearable="item.clearable || item.clearable == undefined ? true : false"
        >
        </el-input>
        <el-radio-group
          v-else-if="item.type == 'radio'"
          v-model="formData[item.model]"
        >
          <el-radio
            v-for="(val, index) in item.data"
            :key="index"
            :label="index + 1"
            >{{ val }}</el-radio
          >
        </el-radio-group>
        <el-checkbox-group
          v-else-if="item.type == 'checkbox'"
          v-model="formData[item.model]"
        >
          <el-checkbox
            v-for="(val, index) in item.data"
            :label="val"
            :key="index"
            >{{ val }}</el-checkbox
          >
        </el-checkbox-group>
        <el-switch
          v-else-if="item.type == 'switch'"
          v-model="formData[item.model]"
        ></el-switch>
        <el-input
          :type="item.type"
          v-else-if="item.type == 'textarea'"
          :style="'width:' + width"
        ></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button
          v-for="(item, index) in btnGroup"
          :key="index"
          :type="item.type"
          @click="btnClick(item.callback)"
        >
          {{ item.label }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    // 宽度
    width: {
      type: String,
      default: "400px",
    },
    // 高度
    height: {
      type: String,
    },
    // 2021-04-26 修改为单一的参数
    propsdata: {
      type: Object,
    },
  },
  data() {
    return {
      rules: {},
      formData: {
        checkbox: [],
      },
      // 具体的表单
      formLabel: [
        {
          label: "名称",
          model: "name",
          type: "input",
        },
        {
          label: "密码",
          model: "password",
          type: "input",
          showPassword: true,
        },
        {
          label: "单选框",
          model: "radio",
          type: "radio",
          data: ["名称一", "名称二", "名称三"],
        },
        {
          label: "多选框",
          model: "checkbox",
          type: "checkbox",
          data: ["名称一", "名称二", "名称三"],
        },
        {
          label: "开关",
          model: "switch",
          type: "switch",
        },
        {
          label: "备注",
          model: "textarea",
          type: "textarea",
        },
      ],
      // 按键组
      btnGroup: [
        {
          label: "取消",
          callback: "cancel",
        },
        {
          label: "保存",
          callback: "save",
          type: "primary",
        },
      ],
    };
  },
  mounted() {
    this.propsInit();
  },
  watch: {
    propsdata: {
      handler() {
        this.propsInit();
      },
      deep: true,
    },
  },
  methods: {
    btnClick(name) {
      console.log("aaa");
      this.$emit(name, "");
    },
    // 数组复制
    deepCopy(obj, name) {
      if (JSON.stringify(obj) == "{}" || JSON.stringify(obj) == "[]") return;
      if (obj instanceof Array) this[name] = obj;
      else if (obj instanceof Object) this[name] = Object.assign({}, obj);
    },
    addRules() {},
    propsInit() {
      if (!this.propsdata) return;
      try {
        // 验证规则
        this.deepCopy(this.propsdata.ruledata, "rules");
        // 表单类型
        this.deepCopy(this.propsdata.formlabel, "formLabel");
        // 按键组
        this.deepCopy(this.propsdata.btngroup, "btnGroup");
        this.formLabel.forEach((ele) => {
          if (ele.type == "checkbox") this.formData[ele.type] = [];
        });
      } catch (err) {
        console.log("表单赋值失败：", err.name);
      }
    },
  },
};
</script>
<style>
.formChart .el-form-item {
  background-color: inherit;
}
.formChart .el-input {
  width: 400px;
}
.formChart .el-textarea__inner {
  width: 400px;
}
</style>