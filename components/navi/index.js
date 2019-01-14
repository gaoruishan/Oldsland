// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    last:Boolean,
    first:Boolean,
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    left_icon:"images/triangle@left.png",
    left_icon_dis: "images/triangle.dis@left.png",
    right_icon: "images/triangle@right.png",
    right_icon_dis: "images/triangle.dis@right.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(e){
      if(!this.properties.last){
        this.triggerEvent("left", {}, {})
      }
    },
    onRight: function (e) {
      if (!this.properties.first) {
        this.triggerEvent("right", {}, {})
      }
    }
  }
})
