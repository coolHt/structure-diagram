import Region from './dispose.vue';
const comment = {
  install: function (Vue) {
    Vue.component('StructureTree', Region); //这里的名字就是项目中导出的名字
  }
};
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { //vue挂载
  window.Vue.use(comment);
}
export default comment;
