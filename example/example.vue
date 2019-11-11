<template>
  <div>
    <el-tooltip class="" effect="dark" content="提示文字" placement="top">
      <!-- target node -->
    </el-tooltip>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="dialogVisible=false">确定</el-button>
      </span>
    </el-dialog>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="propA"
        label="labelA"
        width="180">
      </el-table-column>
      <el-table-column
        prop="propB"
        label="labelB">
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang='scss' scoped>

</style>
