<!-- 默认表格 -->
<template>
  <div :style="'width:' + width + ';height:' + height">
    <el-table
      ref="tableChart"
      :data="tableData"
      :max-height="chartData.maxHeight"
      @select-all="selectAll"
      @select="selectOnce"
      @row-click="rowClick"
    >
      <el-table-column
        v-if="chartData.selection"
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        v-for="(item, index) in colData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :align="item.align"
        :fixed="item.fixed"
      >
        <template v-if="!chartData.onlyTable && index == colData.length - 1">
          <el-button>{{ tableData[item.prop] || "编辑" }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="pageChange"
      :current-page="pageObj.page"
      :page-size="pageObj.listCount"
      layout="total, prev, pager, next, jumper"
      :page-count="pageObj.pageCount"
      :total="pageObj.total"
      clearable
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "500px",
    },
    height: {
      type: String,
      default: "250px",
    },
    // 2021-04-26 修改为单一的参数
    propsdata: {
      type: Object,
    },
  },
  data() {
    return {
      chartData: {},
      colData: [
        {
          prop: "name",
          label: "名称",
          width: 100,
          fixed: "",
          align: "left",
        },
        {
          prop: "age",
          label: "年龄",
          width: 100,
          fixed: "",
          align: "left",
        },
        {
          prop: "height",
          label: "身高",
          width: 100,
          fixed: "",
          align: "left",
        },
        {
          prop: "operator",
          label: "操作",
          width: 100,
          fixed: "",
          align: "left",
        },
      ],
      tableData: [
        {
          name: "zhangsan",
          age: 20,
          height: 190,
          template: "btn",
        },
        {
          name: "zhangsan",
          age: 20,
          height: 190,
          template: "btn",
        },
      ],
      // 总条数，总的页数，当前页，一页的显示的列表数
      pageObj: {
        total: 40,
        pageCount: 2,
        page: 1,
        listCount: 10,
      },
    };
  },
  methods: {
    pageChange() {},
    // 数组复制
    deepCopy(obj, name) {
      if (obj) this[name] = obj;
    },
    // 选择器全选
    selectAll(val) {
      // val 包含所有的数据
      this.$emit("select-all", val);
      return val;
    },
    // 选择某一行
    selectOnce(val) {
      this.$emit("select-one", val);
      return val;
    },
    // 单击某一行
    rowClick(val) {
      this.$emit("row-click", val);
      return val;
    },
    // 双击
    rowdbClick(val) {
      this.$emit("row-db-click", val);
      return val;
    },
    propsInit() {
      this.chartData = Object.assign({}, this.propsdata);
      // if (this.propsdata) return;
      let data = this.chartData;
      // 是否包含复选框
      if (!("selection" in data)) data["selection"] = true;
      // 表格的表头
      if (!("coldata" in data)) data["coldata"] = "";

      if (!("tabledata" in data)) data["tabledata"] = "";

      if (!("maxHeight" in data)) data["maxHeight"] = 200;
      // 是否包含功能按键
      if (!("onlyTable" in data)) data["onlyTable"] = false;

      data["pageobj"] = this.pageObj;
      console.log(this.chartData);
    },
  },
  watch: {
    propsdata: {
      handler() {
        this.propsInit();
      },
      deep: true,
    },
  },
  mounted() {
    this.propsInit();
    this.deepCopy(this.chartData.coldata, "colData");
    this.deepCopy(this.chartData.tabledata, "tableData");
    this.deepCopy(this.chartData.pageobj, "pageObj");
    console.log(this.chartData.tableData);
    // 分页对象的赋值处理
    this.pageObj.total = this.tableData.length;
    this.pageObj.pageCount = this.tableData.length / this.pageObj.listCount;
  },
};
</script>
