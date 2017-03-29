<style lang="sass" scoped>
    .container {
        position: relative;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        background: rgb(247, 247, 247);
    }

    li {
        text-align: center;
        position: relative;
    }

    li:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: rgb(51, 153, 255);
        transform: scaleY(.5);
    }

    a {
        text-decoration: none;
        color: rgb(51, 153, 255);
        display: block;
        padding: 12px 0;
    }
</style>

<template>
    <div class="container">
        <nav>
            <ul>
                <li v-for="(router, index) of routers" :key="index">
                    <router-link :to="router.path" v-text="router.name"></router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                routers: [
                    {
                        path: "/tips",
                        name: "Tips"
                    }
                ]
            }
        }
    };
</script>