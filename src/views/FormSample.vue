<template>
  <div class="myForm">
    <el-form :model="form" label-width="120px">
      <!-- 輸入框 -->
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="請輸入姓名" />
      </el-form-item>

      <!-- 數字輸入框 -->
      <el-form-item label="年齡">
        <el-input-number v-model="form.age" :min="0" :max="150" />
      </el-form-item>

      <!-- 下拉選單 -->
      <el-form-item label="城市">
        <el-select v-model="form.city" placeholder="請選擇城市">
          <el-option label="台北" value="Taipei" />
          <el-option label="台中" value="Taichung" />
          <el-option label="高雄" value="Kaohsiung" />
        </el-select>
      </el-form-item>

      <!-- 單選框 -->
      <el-form-item label="性別">
        <el-radio-group v-model="form.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 多選框 -->
      <el-form-item label="興趣">
        <el-checkbox-group v-model="form.hobbies">
          <el-checkbox label="音樂" />
          <el-checkbox label="閱讀" />
          <el-checkbox label="運動" />
        </el-checkbox-group>
      </el-form-item>

      <!-- 開關 -->
      <el-form-item label="訂閱通知">
        <el-switch v-model="form.subscribe" />
      </el-form-item>

      <!-- 日期選擇器 -->
      <el-form-item label="生日">
        <el-date-picker v-model="form.birthday" type="date" placeholder="選擇生日" />
      </el-form-item>

      <!-- 時間選擇器 -->
      <el-form-item label="上班時間">
        <el-time-picker v-model="form.startTime" placeholder="選擇時間" />
      </el-form-item>

      <!-- 日期時間選擇器 -->
      <el-form-item label="會議時間">
        <el-date-picker v-model="form.meetingTime" type="datetime" placeholder="選擇會議時間" />
      </el-form-item>

      <!-- 級聯選擇器 -->
      <el-form-item label="地區">
        <el-cascader
          v-model="form.area"
          :options="areaOptions"
          placeholder="選擇地區"
        />
      </el-form-item>

      <!-- 提交按鈕 -->
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
  export default {
    name: "FormSample",
    data() {
      return {
        form: {
          name: '',
          age: null,
          city: '',
          gender: '',
          hobbies: [],
          subscribe: false,
          birthday: '',
          startTime: '',
          meetingTime: '',
          area: [],
        },
        areaOptions: [
          {
            value: 'taiwan',
            label: '台灣',
            children: [
              { value: 'taipei', label: '台北' },
              { value: 'taichung', label: '台中' },
              { value: 'kaohsiung', label: '高雄' },
            ],
          },
        ]
      }
    },
    methods: {
      submit () {
        console.log('送出資料:', form.value)
      }
    }
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
  