// components/classic/music/index.js
import { classicBehavior} from "../classic-behavior.js"
// var musicManager = wx.getBackgroundAudioManager();
Component({
  behaviors: [classicBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    onPauseIcon: "images/player@waitting.png",
    onPlayIcon: "images/player@playing.png"
  },
  attached:function(){
    // musicManager.onPause(()=>{
    //   this._setPlayStatus(false)
    // })
    // musicManager.onPlay(()=>{
    //   this._setPlayStatus(true)
    // })
    // //播放结束
    // musicManager.onEnded(() => {
    //   musicManager.stop();
    //   this._setPlayStatus(false)
    // })
  },

  detached:function(){
    // musicManager.stop();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
    * 播放状态
    */
    _setPlayStatus(playing) {
      this.setData({
        playing: playing
      })
    },
    onPlay: function() {
      var playing = !this.data.playing;
      this._setPlayStatus(playing)
      if (playing) {
        // musicManager.src = this.properties.src;
        // musicManager.title = this.properties.title;
      } else {
        // musicManager.pause();
      }
    }
  }
})