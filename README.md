
一,项目目录结构:

componects: 存放组件
data: 测试json数据
images: 图片
models: 数据请求model
pages: 页面
  classic: 流行模块
  book: 书单模块
  me: 喜欢

utils: 工具类

接口文档:http://bl.7yue.pro/dev/index.html

二,开发注意事项:

步骤:
(1)创建项目:选择目录文件夹
(2)点击无APPID
(3)不勾线"创建QuickStart项目" 

新建:
(1)项目文件:app.js,app.json,app.wxss三个必须文件
(2)代码文件:创建src/ ... 页面文件:xxx.js,xxx.wxml两个必须文件


1,小程序关键文件:
app.js 以.js后缀是脚本文件
app.json 以.json后缀是配置文件
app.wxss 以.wxss后缀是样式表文件

以.wxml后缀是页面结构文件



2,格式化代码: command+f
最近文件:command+e
搜索文件:command+p
全局查找:shift+command+f


3,视图和渲染
(1)数据的绑定:
  使用双括号{{txt}} 在.js中 data: {
    txt:"这里text是内容"
  }
(2)改变数据:this.setData({txt:"恭喜你 中奖了~"})
(3)点击事件:bindtap="btnClick"
(4)判断标签:wx:if=""  wx:else 
(5)循环标签:wx:for="" 改变名字:wx:for-item="" 删除:newList.shift 固定条目:{{item}}和固定序号:{{index}}
(6)模板:
  一种:<include src="templates/header"/>导入带视图
  一种:<import src="templates/footer"/>
<template is="foot2" data="{{text:importText}}"/>

小结:
(1)在wxml中赋值:{{}},在js中data初始化
(2)在wxml标签中: 关键字="" 
(3)在js中事件: 事件名: function (可选参数) { }
(4)在js中获取数据:this.data.变量名
(5)在js中设置数据:  this.setData({变量名:新数据})


    "src/jikexueyuan/day02/index"
4,微信小程序事件
事件类型
(1)事件类型:点击事件:tap,长按事件:longtap,触摸事件:touchstart  touchend  touchmove  touchcancel,其他 submit input
(2)事件的冒泡:冒泡事件,非冒泡事件
(3)事件绑定:bind 绑定,catch 绑定
(4)事件对象:类型type,时间戳timeStamp,事件源组件target,当前组件currenttarget,触摸点事touches

5,小案例:快递查询
(1)输入框:<input class='input-order' type='number' bindinput='getInput' placeholder="请输入订单号"/>
(2)显示:<scroll-view scroll-y >
    <view wx:for='{{xxx}}'>
    </view>
  </scroll-view>
(3)请求数据:getExpressInfo: function (nu,callBack) {
    wx.request({
      url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu,
      method:'GET',
      data: {
        x: '',
        y: ''
      },
      header: {
        // 'content-type': 'application/json',// 默认值
        'apikey': '985236102e5c282413267e40b3a049f3'
      },
      success: function (res) {
        // console.log(res.data)
        callBack(res.data)
      }
    })
  }

6,生命周期
(1)APP: onLaunch --> onShow, 切换后台: onHide, 发生错误:onError
(2)Page: onLoad --> onShow --> onReady, 切换后台:onHide,卸载:onUnload
(3)页面跳转: 不带返回: wx.redirectTo({
        url: '../login/login',
      })
      带参数可返回:wx.navigateTo({
        url: 'user?id=1&title=标题',
      })
    跳回Tab:wx.switchTab({
        url: '../user/index',
      })

7,flex布局
(1)


8,相对定位和绝对定位
(1)相对定位:相对自身进行定位,参照物是自己
(2)绝对定位:相对离它最近的一个已定位的父级元素进行定位

9,样式的属性
(1)尺寸:width,height
(2)背景:background
(3)边框:border
(4)边距:margin,padding
(5)文本:font

10,选择器
(1)类选择器:.xxx{}
(2)ID选择器:#xxx{}
(3)元素选择器:name{}
(4)包含选择器:.xxx xx{}
(4)子元素选择器:.xxx > xx{}

11,滑块视图容器
<swiper autoplay='true' interval='2000' indicator-dots='true'>
  <block wx:for='{{imgUrls}}'>
    <swiper-item>
      <image src='{{item}}' bindtap='startDetail'></image>
    </swiper-item>
  </block>
</swiper>
注:autoplay 是否自动切换; interval 自动切换时间间隔;indicator-dots 是否显示面板指示点;

12,可滚动视图区域
<scroll-view scroll-y style='height:250px' bindscrolltoupper='scrollToUpper' bindscrolltolower ='scrollToLower' scroll-top='{{scrollTop}}' scroll-into-view='{{intoView}}'>
   <view id="green" class="scroll-view-item bc_green"></view>
    <view id="red"  class="scroll-view-item bc_red"></view>
    <view id="yellow" class="scroll-view-item bc_yellow"></view>
    <view id="blue" class="scroll-view-item bc_blue"></view>
</scroll-view>
注:scroll-y 允许纵向滚动;bindscrolltoupper 滚动到顶部/左边;scroll-top 设置竖向滚动条位置;scroll-into-view 值应为某子元素id（id不能以数字开头）;

13,引入js:var http = require("../../../util/http.js")
注:有几层目录,../几个;以引用http.js为参考,进一层目录加一个../

14,导航跳转:wx.navigateTo({
      url: "posts/post"
    });
注:相对路径,不能以/xx 开头,以当前所在的js为参考,../是跳出一层目录,/xx是进入一层

15,flex布局:
  博客:http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$
  /* 设置flex布局 */
  display: flex;

  /* 水平-主轴 *//*  flex-direction: row  *//* 垂直-主轴 */
  flex-direction: row;

  /* 包裹换行 */
  flex-wrap: wrap;

  /* 等同于:flex-direction: row;flex-wrap: wrap; */
  /* flex-flow: row wrap; */
  
  /* 主轴上对齐: 左对齐flex-start,右对齐flex-end,居中center
     左右间距相等space-around,左右对齐中间等分space-between
  */
  justify-content: center;

  /* 交叉轴对齐: 上对齐flex-start,下对齐flex-end,居中center
     填充父高度stretch(子元素无高度),子元素文字一行对齐baseline
  */
  align-items: center;
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。


16,导入说明:
js导入:var appconfig = require("../../data/appconfig.js");
xml导入:<import src="read-item/read-item-template.wxml" />
css导入:@import "read-item/read-item-template.wxss";

17,css中的position说明
/*
*当你定义的CSS中有position属性值为absolute、relative或fixed，通过 "left"、"top"、*"right" 以及 "bottom" 属性来规定
*absolute:相对于第一个起始位置(左上角)
*fixed: 相对于浏览器窗口的坐标,不论窗口滚动与否，元素都会留在那个位置
*relative:相对于自己中心位置,距离其他元素的位置
*用z-index此取值方可生效。
*此属性参数值越大，则被层叠在最上面。
**/
.read-detail-line {
  margin: 0 auto;
  height: 1px;
  width: 660rpx;
  position: relative;
  top: -40rpx;
  background-color: #eee;
  z-index: -99;
}
/*使用绝对布局: 居中显示   */
.read-detail-play image {
  width: 100rpx;
  height: 100rpx;
  left: 50%;
  margin-left: -50rpx;
  position: absolute;
  top: 150rpx;
}
.play-icon{
  width: 120rpx;
  height: 120rpx;
  /* 相对定位: 以当前元素的中心点,相对于自己位置,距离其他元素的位置 */
  position: relative;
  /* 当前向上偏移 用负数 420/2= 210 + 120/2 =270*/
  top: -270rpx;
}


18,使用Component组件:
  (1)创建:Component({
    behaviors: [],
    // 数据和属性值
    properties: {},
    data: {}, // 私有数据，可用于模版渲染
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function(){},
    moved: function(){},
    detached: function(){},
    // 内部方法建议以下划线开头
    methods: {}
  })
  (2)xx.json中使用:"usingComponents": { "read-component": "xx/xx/"}
  (3)xx.wxml中引用: <read-component />

19,在CSS中，BOX的Padding属性:
  padding:5px;就是上下左右都为5；
  padding:0px,5px;就是上下为0，左右为5；
  padding:10px 5px 15px;就是上位10，左右为5，下为15；
  padding:0px,5px,10px,15px;就是上为0，右为5，下为10，左为15，
  padding的顺序是顺时针方向的

20,重组数据和打开对象
  // 组装数据格式
  var movieSubjects = {};
  movieSubjects["inTheaters"]={
  categoryTitle: categoryTitle,
    movieData:data
  };
  this.setData(movieSubjects);
  //用...打开指定的key对象
  <template is='movieItem' data='{{...inTheaters}}' />

21,绑定数据,必须用小写!!!
data-movieId='{{id}}' -->movieid

22,rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

23, 宽度 实线 颜色
border:5px solid red;

24,ES6模块字符串(拼接字符串问题)
  let a = 123;
  console.log(`${a}456`)
  console.log(`${this.test()}456`)
25,扩展运算符
...data 布局中可以直接使用属性名

26,CSS相对定位:
/* 相对定位: 相对于当前元素的中心点,距离其他元素的位置 */
position: relative;
/* 当前向上偏移 用负数 */
top: -270rpx;

27,Promise对象(保存数据状态,可return,可.then)
   //resolve:成功, reject:失败
    const promise = new Promise((resolve,reject)=>{
      //1,只有一个返回参数,可以去掉function
      //2,只有一行代码,可以去掉{}
      wx.getSystemInfo({
        success:(res)=> resolve(res),
        fail:(error)=>reject(error)
      })
    })
    //使用.then获取成功/失败回调
    promise.then(
      res=> console.log(res),
      err=> console.log(err)
    )

28,阴影
  box-shadow: 0 0 3px 0 #999;
  0 必需。水平阴影的位置
  0 必需。垂直阴影的位置
  3px 可选。模糊距离。
  0 可选。阴影的尺寸。
  #999 可选。阴影的颜色。

29,单行文本 省略号
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  两行文本 省略号
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

30,字体间距
 letter-spacing: 3rpx;

31,postion位置调整
  父:position: relative;
  子:position: absolute; bottom: 0rpx;//底部

32,元素居中text-align:center

33,navigateTo跳转url以/开头 绝对路径
    let bid = this.properties.bookModel.id;
      wx.navigateTo({
        url: '/pages/book/detail/index?bid=' + bid,
      })

34,加粗字体  font-weight: bold;

35,文本缩进  text-indent: 50rpx;

36,对于text空格  decode可以解析的有 &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;

37,定义过滤器wxs
  第一步:定义函数
  var format = function(txt){
      if(txt){
        var reg = getRegExp("\n", "g");
        return txt.replace(reg, '\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
      }
      return ""
  }
  module.exports={
    format: format,
  }
  第二步:引入函数
  <wxs src="../../../utils/filter.wxs" module="util" />
  第三步:使用函数
  <text decode="{{true}}" class='content-text'>{{util.format(bookDetail.summary)}}</text>

38,js中数组操作:  push()、pop() 是从数组的尾部进行增减，unshift()、shift() 是从数组的头部进行增

39,组件的onTap事件传递数据
     onTap:function(event){
      this.triggerEvent('tapping',{
        text:this.properties.text
      })
    }
    let b = this.properties.like?"like":"cancal"
      //"like": 自定义点击名称 <like-cmp bind:like="onLike" />
      this.triggerEvent("likeTap",{
        behavior:b
      },{})

40,js数组判断是否包含某一元素 返回-1不存在: list.indexOf(data) == -1

41,app.wcss样式 不能再组件中使用,组件中公共方法和变量使用behavior

42,使用开放数据标签 <open-data class='avatar' type="userAvatarUrl" />
   userAvatarUrl:头像;
   userNickName:昵称; 

43,自定义插槽需要Class <image slot="img" class="avatar" src="/images/my/my.png" />

44,flex父布局 子view块 水平居中-->align-self: center;