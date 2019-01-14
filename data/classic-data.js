/**
 *获取最新一期
 content：期刊内容
 fav_nums: 点赞次数
 image: 图片
 index: 期号
 like_status: 是否点赞
 pubdate: 发布日期
 title: 期刊题目
 type: 期刊类型,这里的类型分为:100 电影 200 音乐 300 句子
 id: 期刊在数据中序号，供点赞使用
 */
var classicLast = {
  "content": "人生不能像做菜，把所有的料准备好才下锅",
  "fav_nums": 14,
  "id": 0,
  "image": "http://bl.7yue.pro/images/movie.8.png",
  "index": 7,
  "like_status": 1,
  "pubdate": "2018-06-22",
  "title": "李安<<饮食男女>>",
  "type": 100
}
var classicData = [{
    "content": "人生不能像做菜，把所有的料准备好才下锅",
    "fav_nums": 2,
    "id": 1,
    "image": "http://bl.7yue.pro/images/movie.8.png",
    "index": 7,
    "like_status": 1,
    "pubdate": "2018-06-22",
    "title": "李安<<饮食男女>>",
    "type": 100
  },
  {
    "content": "你陪我步入蝉夏 越过城市喧嚣",
    "fav_nums": 5,
    "image": "http://bl.7yue.pro/images/music.1.png",
    "id": 2,
    "index": 1,
    "like_status": 1,
    "pubdate": "2018-06-22",
    "title": "纸短情长",
    "type": 200,
    "url": "https://music.163.com/song/media/outer/url?id=557581284.mp3"
  },
  {
    "content": "这个夏天又是一个毕业季",
    "fav_nums": 10,
    "id": 3,
    "image": "http://bl.7yue.pro/images/sentence.2.png",
    "index": 2,
    "like_status": 0,
    "pubdate": "2018-06-22",
    "title": "未名",
    "type": 300
  },
  {
    "content": "许多人来来去去,相聚又别理",
    "fav_nums": 3,
    "image": "http://bl.7yue.pro/images/music.5.png",
    "id": 2,
    "index": 1,
    "like_status": 0,
    "pubdate": "2018-06-22",
    "title": "好妹妹<<一个人的北京>>",
    "type": 200,
    "url": "https://music.163.com/song/media/outer/url?id=557581285.mp3"
  }
]

module.exports = {
  classicLast: classicLast,
  classicData: classicData,
}