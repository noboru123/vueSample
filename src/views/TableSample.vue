<template>
    <div class="myTable">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="data1" label="姓名" align="left" />
        <el-table-column prop="data2" label="年齡" align="center" />
        <el-table-column prop="data3" label="城市" />
        <el-table-column prop="data4" label="性別" />
        <el-table-column prop="data5" label="技能" align="right" width="150" />
        <el-table-column prop="data6" label="訂閱通知" />
        <el-table-column prop="data7" label="生日" />
        <el-table-column prop="data7" label="登記時間" />
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
    mounted() {
      this.loadLocalData()
    },
    methods: {
      loadLocalData () {
        let localData = localStorage.getItem('formList')
        console.log('check formList: ', localData)
      }
    }
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
  