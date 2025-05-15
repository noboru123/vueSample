<template>
    <div class="myCalendar">
      <el-calendar
        :events="events"
        :event-content="renderEvent"
        @date-change="handleDateChange"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "CalendarSample",
    data() {
        return {
          events  : [
            { start: '2025-05-01', title: '活動1' },
            { start: '2025-05-15', title: '活動2' },
          ]
        }
    },
    methods: {
      renderEvent(item) {
        return h('div', { class: 'my-event' }, event.title)
      }
    }
  }
  </script>
  <style lang="scss" scoped>
  $focusBox: #cab573;
  .myCalendar {
    width: 100%;
    padding: 2px;

    :deep(.el-calendar__header) {
      background-color: $primary;
      color: $text_dark;
    }

    :deep(.el-calendar__body) {
      background-color: $dark;
      color: $text_light;
    }

    :deep(.el-calendar__body td.current.is-selected) {
      background-color: $focusBox;
      color: $text_dark;
    }

    :deep(.el-calendar__body) td .el-calendar-day:hover {
      background-color: $focusBox;
      color: $text_dark;
    }
  }
  </style>
  