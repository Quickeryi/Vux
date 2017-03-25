/**
 * !Vux
 * 定义基础通知类组件：Notification
 *
 * @author yiwei
 * @data 2017-03-25
 */
import Notification from './notification.vue';
import Vue from 'vue';
import VuxUtil from '../../../utils/assist';


Notification.newInstance = (properties = {}) => {
    const _props = properties;

    let props = '';
    Object.keys(_props).forEach((prop) => {
        props += ` :${VuxUtil.camelcaseToHyphen(prop)}=${prop}`;
    });

    /**
     * 创建div, append to the body
     * the div warp the notification component
     */
    const div = document.createElement('div');
    div.innerHTML = `<notification${props}></notification>`;
    document.body.appendChild(div);

    /**
     *
     */
    const notification = new Vue({ // 当前实例的直接子组件 (即: Notification)
        el: div,
        data: _props,
        components: {Notification}
    }).$children[0];

    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },

        remove(name) {
            notification.close(name);
        }
    };
};

export default Notification;