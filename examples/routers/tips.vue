<template>
    <div class="vux-tips-test">
        <div class="btn btn-success" @click="success('l2r', '从左侧进入')">从左侧进入</div>
        <div class="btn btn-success" @click="success('r2l', '从右侧进入')">从右侧进入</div>
        <div class="btn btn-success" @click="success('t2b', '从上方进入')">从上方进入</div>
        <div class="btn btn-success" @click="success('b2t', '从下方进入')">从下方进入</div>
        <div class="btn btn-error" @click="error">error</div>
        <div class="btn btn-loading" @click="loading">loading</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            success(direction, content) {
                this.$Tips.success(content, {
                    direction,
                    color: 'red'
                }, () => {
                    console.log('success-hide');
                });
            },

            error() {
                this.$Tips.error('error', () => {
                    console.log('error-hide');
                });
            },

            loading() {
                this.$Tips.loading('loading',  {
                    distance: '90px'
                },() => {
                    console.log('loading-hide');
                });
            }
        },
        mounted() {
            this.$Tips.config({
                distance: '50px',
                direction: 'l2r',
                duration: 1,
                tween: 'linear',
                color: '#fff',
                bg: '#000',
                fontSize: '.8rem'
            });
        }
    }
</script>

<style scoped lang="sass">
    .vux-tips-test {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
    }

    .btn {
        width: 92px;
        margin: 10px auto;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0);
        white-space: nowrap;
        line-height: 1.5;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 6px 0;
        font-size: 12px;
        border-radius: 4px;
        color: rgb(101, 113, 128);
    }

    .btn-loading {
        color: rgb(255, 255, 255);
        background-color: rgb(45, 183, 245);
        border-color: rgb(45, 183, 245);
    }

    .btn-error {
        color: rgb(255, 255, 255);
        background-color: rgb(255, 51, 0);
        border-color: rgb(255, 51, 0);
    }

    .btn-success {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 204, 102);
        border-color: rgb(0, 204, 102);
    }
</style>