import {init,$svg} from '../common/init';
import chengcailv from "../Q412/chengcailv";
import quality from "../Q412/quality";
import kucun from "../Q412/kucun";
import production from "../Q412/production";
import clickEvent from "../Q412/clickEvent";
import device from "../Q412/device";
import nenghao from "../Q412/nenghao";

// 初始化svg宽高
init({reportName:'report0',tdId:'a1',id:'Q412'});
setTimeout(function () {
    // 生产
    production();
    // 成材率
    chengcailv();
    // 质量
    quality();
    //库存
    kucun();
    //能耗
    nenghao();
    //设备停机
    device();
    // 跳转页面
    clickEvent();

},500)


