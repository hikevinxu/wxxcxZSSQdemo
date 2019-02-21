import api from '../../utils/api.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tags: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的生命周期
   */
  created() {
    console.log(this.properties.tags);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchThisTag: function(e){
      this.triggerEvent('myTagChange', { tagName: e.currentTarget.dataset.tag });
    }
  }
})
