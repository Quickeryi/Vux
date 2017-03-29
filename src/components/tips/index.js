/**
 * !Vux
 * Tips组件
 *
 * @author yiwei
 * @data 2017/3/25.
 */
import Notification from '../base/notification';
import VuxUtil from '../../utils/assist';

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

let resizePosition = (args) => {
    let {
        direction,
        distance
    } = args;
    let _pos = '';
    /**
     * 当tip进入的方向为b2t (bottom -> top)时，设置的distance为 bottom定位的值
     * 否则，则为top的定位值
     *
     */
    switch (direction) {
        case 'b2t':
            _pos = 'bottom';
            break;
        default:
            _pos = 'top';
            break;

    }
    return {
        [_pos]: distance
    };
};

/**
 * 获取Tips实例
 *
 * 单例模式
 */
let getTipsInstance = (args) => {
    let styles = {};
    let position = resizePosition(args);
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
        {
            direction,
            distance,
            duration,
            tween,
            color,
            bg,
            fontSize
        },
        after
    ] = [...args]; // 解构赋值

    let instance = getTipsInstance({
        direction,
        distance
    }); // 获取Notification实例
    VuxUtil.EventBus.$emit('reset-styles', resizePosition({
        direction,
        distance
    }));
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
            fontSize: fontSize
        },
        name: `${prefixKey}${name}`,
        duration,
        after,
        transitionName: (() => {
            let transitionDirection = 'down';
            switch (direction) {
                case 'l2r':
                    transitionDirection = 'left';
                    break;
                case 'r2l':
                    transitionDirection = 'right';
                    break;
                case 'b2t':
                    transitionDirection = 'down';
                    break;
                case 't2b':
                    transitionDirection = 'up';
                    break;
            }
            return `move-${transitionDirection}`;
        })()
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
        let args = {...arguments}[0];
        Object.keys(defaultOpt).forEach((key) => {
            defaultOpt[key] = args[key] || defaultOpt[key];
        });
    },

    /**
     * 展示成功信息
     *
     * @param content       内容
     * @param direction
     * @param distance
     * @param duration      自动关闭的延时，单位秒，调用时传值则会覆盖全局配置
     * @param tween         运动速度曲线，调用时传值则会覆盖全局配置
     * @param color
     * @param bg
     * @param fontSize
     * @param after         关闭后的回调
     */
    success(
        content,
        {
            direction = defaultOpt.direction,
            distance  = defaultOpt.distance,
            duration  = defaultOpt.duration,
            tween     = defaultOpt.tween,
            color     = defaultOpt.color,
            bg        = defaultOpt.bg,
            fontSize  = defaultOpt.fontSize,
        } = {},
        after = () => {}
    ) {
        return notice(
            'success',
            content,
            {
                direction,
                distance,
                duration,
                tween,
                color,
                bg,
                fontSize
            },
            after
        );
    },

    /**
     * 展示error信息
     *
     * @param direction
     * @param distance
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
        {
            direction = defaultOpt.direction,
            distance  = defaultOpt.distance,
            duration  = defaultOpt.duration,
            tween     = defaultOpt.tween,
            color     = defaultOpt.color,
            bg        = defaultOpt.bg,
            fontSize  = defaultOpt.fontSize,
        } = {},
        after = () => {}
    ) {
        return notice(
            'error',
            content,
            {
                direction,
                distance,
                duration,
                tween,
                color,
                bg,
                fontSize
            },
            after
        );
    },

    /**
     * 展示loading信息
     *
     * @param direction
     * @param distance
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
        {
            direction = defaultOpt.direction,
            distance  = defaultOpt.distance,
            duration  = defaultOpt.duration,
            tween     = defaultOpt.tween,
            color     = defaultOpt.color,
            bg        = defaultOpt.bg,
            fontSize  = defaultOpt.fontSize,
        } = {},
        after = () => {}
    ) {
        return notice(
            'loading',
            content,
            {
                direction,
                distance,
                duration,
                tween,
                color,
                bg,
                fontSize
            },
            after
        );
    },
};