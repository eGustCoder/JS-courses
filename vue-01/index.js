'use strict';

function main() {
  var data = {
    title: '',
    todoList: [],
  };

  var computed = {
    textStyle: function () {
      return function (finished) {
        return finished ? { textDecoration: 'line-through', color: '#CCC' } : null;
      };
    },
  };

  var methods = {
    addItem: function () {
      this.todoList = this.todoList.concat({ title: this.title, finished: false });
      this.title = '';
    },

    removeItem: function (index) {
      this.todoList = this.todoList.slice(0, index).concat(this.todoList.slice(index + 1));
    },

    toggleItem: function (index) {
      var todoList = [];
      for (var i = 0; i < this.todoList.length; i++) {
        var item = this.todoList[i];
        if (i == index) {
          todoList.push({ title: item.title, finished: !item.finished });
        } else {
          todoList.push(item);
        }
      }
      this.todoList = todoList;
    },
  };

  new Vue({
    el: '#app',
    data: data,
    computed: computed,
    methods: methods,
    template: '#main',
  });
}

(function () {
  Vue.config.productionTip = false;
  main();
})();
