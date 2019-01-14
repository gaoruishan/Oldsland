const key = "q";

class SearchModel {

  getHistory() {
    let arr = wx.getStorageSync(key);
    if(!arr){
      return []
    }
    return arr;
  }

  addHistory(data) {
    let list = this.getHistory();
    if (list && list.length == 5){
      list.pop();
      list.unshift(data)
    }
    if (list && list.indexOf(data) == -1) {
      list.unshift(data)
    }
    wx.setStorageSync(key, list)
  }
}


export {
  SearchModel
}