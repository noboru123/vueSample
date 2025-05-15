<template>
    <div class="myCard">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div>頁面展示</div>
          <div>點擊左側指示對應功能</div>
          <div>點擊下側顯示展示功能</div>
        </div>
        <div class="content">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="TableSample" name="1">
              <div>Table 元件基本展示</div>
              <div>外型自定義</div>
            </el-collapse-item>
            <el-collapse-item title="CalendarSample" name="2">
              <div>date-picker 元件基本展示</div>
              <div>外型自定義</div>
            </el-collapse-item>
            <el-collapse-item title="FormSample" name="3">
              <div>Form 常用輸入元件展示</div>
              <div>外型自定義</div>
              <div>排列自定義</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  <style lang="scss" scoped>
  $collapseBox: #cab573;
  .myCard {
    width: 100%;
    padding: 2px;

    :deep(.el-card__body) {
      background-color: $primary;
      color: $text_dark;
    }
    
    .content {
      padding: 10px 0;
      
      :deep(.el-collapse .el-collapse-item .el-collapse-item__header) {
        background-color: $collapseBox;
        color: $text_dark;
        
        padding: 0 5px;
      }
      
      
      :deep(.el-collapse .el-collapse-item .el-collapse-item__content) {
        background-color: $dark;
        color: $text_light;
        
        padding: 0 5px;
      }
    }
  }
  </style>
  