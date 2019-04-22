// pages/catalog/catalog.js

import {tagInfoList} from '../../utils/tagList.js'
import { SubscribeModel } from '../../models/subscribe.js';

const subscribeModel = new SubscribeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList:tagInfoList,
    myTagList:[],
    searchWord:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(){
    const myTagList = subscribeModel.getMyTagList()
    this.setData({
      myTagList
    })
  },
  onShow(){
    this.setData({
    searchWord:''
    })
  },
  onSubscribeTap(){
    this.getData()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
})