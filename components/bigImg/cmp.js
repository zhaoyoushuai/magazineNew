// commponents/bigImg/cmp.js
//大图组件
import {myBeh} from "../behavior/my-behavior.js"

Component({
  behaviors:[myBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    // imgSrc: String,
    // minTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    src: "https://www.baidu.com/img/bd_logo1.png",
    title: "盎司附近看不到萨格的货款结算给本赛季的后代",
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
