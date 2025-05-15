<template>
    <div class="myTable">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="data1" align="left" label="項目一" />
        <el-table-column prop="data2" align="center" label="項目二" />
        <el-table-column prop="data3" label="項目三" />
        <el-table-column prop="data4" label="Option Four" />
        <el-table-column prop="data5" align="right" label="Ex 5" width="150" />
        <el-table-column prop="data6" label="Option 6" />
        <el-table-column prop="data7" label="項目7" />
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: "TableSample",
    data() {
        return {
          tableData: [
            { data1: 'information', data2: 25, data3: '....', data4: '', data5: '', data6: '', data7: '' },
            { data1: '', data2: '', data3: '....', data4: '99/99/99', data5: 'test', data6: '', data7: '' },
            { data1: '....', data2: '', data3: '', data4: '', data5: 'test', data6: 0, data7: null },
            { data1: 'null check', data2: '', data3: '', data4: '', data5: '', data6: '', data7: '' },
          ]
        }
    },
  };
  </script>
  <style lang="scss" scoped>
  .myTable {
    width: 100%;
    padding: 2px;

    :deep(.el-table) th {
      background-color: $primary !important;
      color: $text_dark;
    }

    :deep(.el-table) tr td {
      background-color: $dark;
      color: $text_light;
    }

    :deep(.el-table) tr:hover td {
      color: $text_dark;
    }
  }
  </style>
  