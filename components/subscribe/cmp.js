// components/subscribe/cmp.js


import{SubscribeModel} from '../../models/subscribe.js'


const subscribeModel = new SubscribeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:String,
    typeId:Number
  },
  attached(){
    this.judgeTag()
  },
  /**
   * 组件的初始数据
   */
  data: {
    class:"common",
    myTagList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
        const mark = {
          type:this.properties.type,
          typeId:this.properties.typeId
        }
      if(this.data.class ==='common'){
        //存
        const myTagList = subscribeModel.getMyTagList()
        myTagList.push(mark)
        subscribeModel.setMyTagList(myTagList)

      }else{
        //取\
        subscribeModel.removeMyTag(mark.tagId)
      }


      this.toggleClass()
      this.triggerEvent('tap')
    },
    getMytagList(){
      const myTagList = subscribeModel.getMyTagList();
      this.setData({
        myTagList
      })
      return myTagList
    },
    judgeTag(){
      const myTagList = this.getMytagList();
      myTagList.forEach((item,index)=>{
        if(item.typeId === this.properties.typeId){
          this.setData({
            class:"subscribe"
          })
        }
      })
    },
    toggleClass(){
      let className = '';
      if(this.data.class ==="common"){
        className = 'subscribe'
      }else{
        className = 'common'
      }
      this.setData({
        class:className
      })
    }
  }
})
