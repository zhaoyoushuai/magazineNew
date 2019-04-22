// components/article/cmp.js
import {LikeModel} from "../../models/like.js"


const likeModel = new LikeModel

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail:Object
  },
  attached(){
    const articleDetail = this.data.articleDetail
    const artId = articleDetail.artId
    if(likeModel.getLikeStatus(artId)){
      this.setData({
        likeStatus:true
      })
    }

  },
  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      const like = e.detail.like
      const articleDetail = this.data.articleDetail
      const artId = articleDetail.artId
      const likeList = wx.getStorageSync('likeList')||[]
      if(like){
        likeModel.addLikeList(articleDetail)
      }else{
        likeModel.removeLikeList(artId) 
      }
    }
  }
})
