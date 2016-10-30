var app = app || {};

app.gruntTasksListItemView = Backbone.View.extend({
  tagName: 'li',
  tasksListItemTpl: _.template($('#gtc-task-tpl').html()),
  events: {
    'click .gtc-task' : 'showTaskInfo'

  },
  initialize: function() {

  },
  render: function() {
    this.$el.html( this.tasksListItemTpl( this.model.attributes ) );
    return this;
  },

  showTaskInfo: function () {
  }
});
