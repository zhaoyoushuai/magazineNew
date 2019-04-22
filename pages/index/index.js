import {IndexModel} from '../../models/index.js'
import {random} from '../../utils/randomStr.js'
const indexModel = new IndexModel()
Page({
  data: {
    articleList:[],
    markList:[],
    recommend:{},
    getMore:'',
    magazineId:0,
    loading:true,
  },
  //事件处理函数

  onLoad: function () {
    this.getData(this.data.magazineId)
    // indexModel.getArticleList().then(res=>{
    //   console.log(res)
    // })
    // indexModel.getMarkList().then(res=>{
    //   console.log(res)
    // })
    // indexModel.getRecommendInfo().then(res=>{
    //   console.log(res)
    // })
  },
  onCatalog(){
    wx.switchTab({
      url:'/pages/catalog/catalog'
    })
  }, 
  onNav(e){
    const magazineId = e.detail.index;
    this.setData({
      magazineId:magazineId,
      articleList:[],
      markList:[],
      recommend:{},
    })
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })

    this.getData(magazineId)
  },
  getData(magazineId){
    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const recommend = indexModel.getRecommendInfo(magazineId) 
    Promise.all([articleList,markList,recommend]).then(res=>{
      this.setData({
        articleList:res[0],
        markList:res[1],
        recommend:res[2]
      })
      this.setData({
        loading:false
      })
    })
  },
  onReachBottom(){
    this.setData({
      getMore:random(20)
    })
  }
})
