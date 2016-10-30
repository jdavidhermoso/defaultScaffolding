var app = app || {},
GtList = Backbone.Collection.extend({
  model: app.GruntTask,
  localStorage: new Backbone.LocalStorage('grunt-tasks-cheatsheet'),
  gruntTasksAmount: function() {
    return this.length;
  }
});

app.gTasks = new GtList();

