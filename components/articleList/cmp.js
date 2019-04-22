import { IndexModel } from '../../models/index.js'
// components/articleList/cmp.js
import{SearchModel} from '../../models/search.js'
const searchModel = new SearchModel()
const indexModel = new IndexModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Array,
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magazineId: {
      type:String,
      value:0,
      observer:'hasMoreData'
    },
    word:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData:false,
    type:''
  },
  attached(){
    const curPages = getCurrentPages()
    console.log(curPages)
    const index = curPages.length - 1;
    let type = ''
    if(curPages[index].route === 'pages/search/search'){
      type = 'search'
    }else{
      type = 'index'
    }

    this.setData({
      type
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      if (this._islock()||this.data.noMoreData) {
        return
      }
      this._loadLock()
      this.getMoreData()

    },
    getMoreData(){
      const start = this.data.articleList.length;
      let getMore = null;
      if(this.data.type === 'search'){
        const word = this.data.word;
        getMore = searchModel.getSearchArticleList(word,start)
      }else{
        const magazineId = this.data.magazineId;
        getMore = indexModel.getArticleList(magazineId, start)
      }

      getMore.then(res=>{
        this._setMoreData(res)
        this._unloadLock()
      })
    },
    hasMoreData(){
      this.setData({
        noMoreData:false,
      })
    },
    _islock() {
      return this.data.loading;
    },
    _loadLock() {
      this.setData({
        loading: true
      })
    },
    _unloadLock() {
      this.setData({
        loading: false
      })
    },
    _setMoreData(list) {
      const combineList = this.data.articleList.concat(list);
      if(combineList.length == this.data.articleList.length){
        this.setData({
          noMoreData:true
        })
        return 
      } 
      this.setData({
        articleList: combineList,
      })
    }
  }
})
