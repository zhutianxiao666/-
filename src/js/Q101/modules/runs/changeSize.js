export default function () {

    // 计算网页大小
    const width = window.innerWidth,
        height = window.innerHeight;
    // 改变尺寸
    this.svg.setAttribute('width',width);
    this.svg.setAttribute('height',height);
}