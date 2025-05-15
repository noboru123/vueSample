<template>
    <div class="menu">
      <div 
        v-for="item in items" 
        :key="item.id" 
        class="menu-item" 
        @click="handleEvent(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Menu",
    props: {
      menuClick: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        items: [
          { id: 1, name: 'About' },
          { id: 2, name: 'FormSample' },
          { id: 3, name: 'TableSample' },
          { id: 4, name: 'CalendarSample' }
        ]
      }
    },
    mounted() {
      console.log('check menuClick: ', typeof this.menuClick)
    },
    methods: {
      handleEvent: function (item) {
        this.menuClick(item)
      }
    }
  };
  </script>
  <style scoped>
  .menu {
    .menu-item {
      padding: 5px;
      margin-bottom: 10px;
      font-size: 1.5em;
      cursor: pointer;
    }
  }
  </style>
  