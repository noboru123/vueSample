<template>
    <div class="form">
      FormSample
    </div>
  </template>
  
  <script>
  export default {
    name: "FormSample",
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
  