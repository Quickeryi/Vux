<script type="text/ecmascript-6">
    /**
     * !Vux
     * 分发Tips消息组件
     */
    'use strict';
    let uuid = 0;
    let getUuid = () => {
        return `vuxnotification_${Date.now()}_${uuid++}`;
    };
    import Notice from './notice.vue';
    export default {
        components: {
            Notice
        },
        props: {
            styles: {
                type: Object
            }
        },
        data() {
            return {
                notices: []
            }
        },
        methods: {
            /**
             * 消息进入队列
             *
             * @param notice 消息对象
             */
            add(notice) {
                const name = notice.name || getUuid();
                let _notice = Object.assign({
                    name // 必须保证每一个消息对象的唯一性
                }, notice);
                this.notices.push(_notice);
            },

            /**
             * 消息出对列
             *
             * @param name 对应的消息标识
             */
            close(name) {
                const notices = this.notices;
                for (let notice of notices) {
                    if (notice.name === name) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>

<template>
    <div class="vux-tips" :style="styles">
        <Notice
            v-for="notice in notices"
            :key="notice.name"
            :styles="notice.styles"
            :content="notice.content"
            :duration="notice.duration"
            :name="notice.name"
            :transition-name="notice.transitionName"
            :on-after="notice.after"
            >
        </Notice>
    </div>
</template>

<style scoped>
    .vux-tips {
        position: fixed;
        z-index: 10000;
        width: 100%;
        left: 0
    }
</style>