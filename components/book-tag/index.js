// components/book-detail/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    text:String,
    num:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindtext:function(e){
      this.triggerEvent("text",{
        text:this.properties.text
      },{})
    }
  }
})
