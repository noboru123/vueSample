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
          { id: 2, name: 'TableSample' },
          { id: 3, name: 'CalendarSample' },
          { id: 4, name: 'FormSample' },
          { id: 5, name: '????' },
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
  