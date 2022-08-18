import dayjs from 'dayjs';

/**
 * Dayjs类
 */
export default class Dayjs {
  constructor(format, date) {
    this.format = format;
    this.date = date;
  }
  /**
   * 格式化时间
   * @param {String | Date} date 时间
   * @param {String} format 格式化
   * @returns dayjs(date).format(format)
   */
  format(date, format) {
    return dayjs(date || this.date).format(format || this.format);
  }
  /**
   * 当前时刻
   * @returns dayjs().format()
   */
  now() {
    return dayjs(this.date).format(this.format);
  }
  /**
   * 操作 - 时
   * @param {*} n 数字
   * @returns dayjs().add(n,'hour').format()
   */
  hour(n) {
    return dayjs(this.date).add(n, 'hour').format(this.format);
  }
  /**
   * 操作 - 天
   * @param {*} n 数字
   * @returns dayjs().add(n,'day').format()
   */
  day(n) {
    return dayjs(this.date).add(n, 'day').format(this.format);
  }
}
