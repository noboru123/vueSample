<template>
    <div class="homepage">
        <div class="menu-bar">
            <Menu :menuClick="menuClickHandleEvent"/>
        </div>
        <div class="menu-content">
            <router-view />
        </div>
    </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import About from "./About.vue";

export default {
    name: "HomePage",
    components: {
        Menu,
        About,
    },
    data() {
        return {
            displayContent: null
        }
    },
    mounted() {
        this.$router.push('/about')
    },
    methods: {
        menuClickHandleEvent(item) {
            const pathMap = {
                1: '/about',
                2: '/form',
                3: '/table',
                4: '/calendar'
                // 可依照你的需要增加
            }

            const path = pathMap[item.id]
            if (path) {
                this.$router.push(path)
            }

 else {
                console.warn('無對應路由：', item.id)
            }
        }
    }
};

</script>
  

<style scoped>
.homepage {
    width: 100%;
    display: flex;

    .menu-bar {
        width: 25%;
    }

    .menu-content {
        width: 75%;
    }
}
</style>

  