class SubscribeModel{
    setMyTagList(value){
        wx.setStorageSync('markTagList',value)
    }
    getMyTagList(){
        return wx.getStorageSync('markTagList') || []
    }
    removeMyTag(tagId){
        var TagList = this.getMyTagList();
        let MyIndex = 0;
        
        TagList.forEach((item,index)=>{
            if(item.tagId ===tagId){
                MyIndex = index;
            }
        })
        TagList.splice(MyIndex,1);
        this.setMyTagList(TagList)
    }
}

export {SubscribeModel}