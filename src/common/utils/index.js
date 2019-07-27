
/**
 * 获取类型
 */
export const type = (a) => Object.prototype.toString.call(a).slice(8, -1).toLowerCase();