/**
 * !Vux
 * Tips组件
 *
 * @author yiwei
 * @data 2017/3/25.
 */
import Notification from '../base/notification';

let defaultOpt = {
    direction: 'b2t',        // 运动方向
    distance : '30%',        // 运动距离
    duration : 1.5,          // tips隐藏延时
    tween    : 'ease',       // 运动速度曲线
    color    : '#fff',       // 字体颜色
    bg       : '#000',       // 背景色
    fontSize : '12px'        // 字体大小
};
let tipsInstance;
let name = 1;
let prefixKey = 'vux-tips-';

/**
 * 获取Tips实例
 *
 * 单例模式
 */
let getTipsInstance = () => {
    let styles = {};
    let position = (() => {
        let _pos = '';
        switch (defaultOpt.direction) {
            case 'b2t':
                _pos = 'bottom';
                break;
            default:
                _pos = 'top';
                break;

        }
        return {
            [_pos]: defaultOpt.distance
        };
    })();
    Object.assign(styles, position);
    tipsInstance = tipsInstance || Notification.newInstance({
        styles
    });
    return tipsInstance;
};


let notice = (...args) => {
    let [
        type,
        content,
        duration,
        tween,
        color,
        bg,
        fontSize,
        after
    ] = [...args];
    let instance = getTipsInstance(); // 获取Notification实例
    instance.notice({
        content: `
            <div>
                <i class="${prefixKey}icon-${type} ${prefixKey}icon"></i>
                <span>${content}</span>
            </div>
        `,
        styles: {
            color: color,
            background: bg,
            fontSize: fontSize,
            left: '50%'
        },
        name: `${prefixKey}${name}`,
        duration,
        after,
        transitionName: 'move-up'
    });

    // 用于手动清除
    return (() => {
        let target = name++;
        return function () {
            instance.remove(`${prefixKey}${target}`);
        };
    })();
};

export default {
    /**
     * 全局配置方法
     *
     * @param direction
     * @param distance
     * @param duration
     * @param tween
     * @param color
     * @param bg
     * @param fontSize
     */
    config(
        {
            direction = defaultOpt.direction, // 运动方向
            distance  = defaultOpt.distance,  // 运动距离
            duration  = defaultOpt.duration,  // tips隐藏延时
            tween     = defaultOpt.tween,     // 运动速度曲线
            color     = defaultOpt.color,     // 字体颜色
            bg        = defaultOpt.bg,        // 背景色
            fontSize  = defaultOpt.fontSize   // 字体大小
        } = {}
    ) {
        let args = arguments;
        defaultOpt.keys((key) => {
            defaultOpt[key] = args[key];
        });
    },

    /**
     * 展示成功信息
     *
     * @param content       内容
     * @param duration      自动关闭的延时，单位秒，调用时传值则会覆盖全局配置
     * @param tween         运动速度曲线，调用时传值则会覆盖全局配置
     * @param color
     * @param bg
     * @param fontSize
     * @param after         关闭后的回调
     */
    success(
        content,
        duration  = defaultOpt.duration,
        tween     = defaultOpt.tween,
        color     = defaultOpt.color,
        bg        = defaultOpt.bg,
        fontSize  = defaultOpt.fontSize,
        after     = () => {},
    ) {
        return notice('success', ...arguments);
    },

    /**
     * 展示error信息
     *
     * @param content       内容
     * @param duration      自动关闭的延时，单位秒，调用时传值则会覆盖全局配置
     * @param tween         运动速度曲线，调用时传值则会覆盖全局配置
     * @param color
     * @param bg
     * @param fontSize
     * @param after         关闭后的回调
     */
    error(
        content,
        duration  = defaultOpt.duration,
        tween     = defaultOpt.tween,
        color     = defaultOpt.color,
        bg        = defaultOpt.bg,
        fontSize  = defaultOpt.fontSize,
        after     = () => {},
    ) {
        return notice('error', ...arguments);
    },

    /**
     * 展示loading信息
     *
     * @param content       内容
     * @param duration      自动关闭的延时，单位秒，调用时传值则会覆盖全局配置
     * @param tween         运动速度曲线，调用时传值则会覆盖全局配置
     * @param color
     * @param bg
     * @param fontSize
     * @param after         关闭后的回调
     */
    loading(
        content,
        duration  = defaultOpt.duration,
        tween     = defaultOpt.tween,
        color     = defaultOpt.color,
        bg        = defaultOpt.bg,
        fontSize  = defaultOpt.fontSize,
        after     = () => {},
    ) {
        return notice('loading', ...arguments);
    },
};