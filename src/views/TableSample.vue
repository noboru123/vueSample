<template>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="data1" label="項目一" />
        <el-table-column prop="data2" label="項目二" />
        <el-table-column prop="data3" label="項目三" />
        <el-table-column prop="data4" label="Option Four" />
        <el-table-column prop="data5" label="Ex 5" />
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
          tableData : [
            { data1: 'information', data2: 25, data3: '....' },
            { data3: '....', data4: '99/99/99', data5: 'test' },
            { data1: '....', data5: 'test' , data6: 0, data7: null},
            { data1: 'null check'},
          ]
        }
    },
  };
  </script>
  <style scoped>
  a {
    color: #42b983;
  }
  
  .table {
    width: 100%;
  }
  </style>
  