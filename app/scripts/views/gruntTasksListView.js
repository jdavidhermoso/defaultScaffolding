var app = app || {};

app.gruntTasksListView = Backbone.View.extend({
  el: '#gtc-task-list',
  totalTasksTpl: _.template($('#gtc-task-tpl').html()),
  events: {
    'click #gtc-new-task-btn': 'showNewTaskForm',
    'click .gtc-task': 'showTaskInfo'
  },
  initialize: function () {
    app.gTasks.fetch();
  },
  showTaskInfo: function () {

  },
  showNewTaskForm: function () {
    var gruntTaskForm = new gruntTaskFormView({});
    gruntTaskForm.render(
      {
        taskName: '',
        taskType: 0,
        taskDesc: ''
      }
    );
  }
});
