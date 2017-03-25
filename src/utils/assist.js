/**
 * !Vux
 * 定义工具类方法
 *
 * @data 2017/3/25.
 */
class VuxUtil {
    /**
     * Conversion the `camelCase` to `camel-case`
     *
     * @static
     * @param str
     */
    static camelcaseToHyphen(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
}

export default VuxUtil;


