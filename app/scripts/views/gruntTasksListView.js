var app = app || {};

app.gruntTasksListView = Backbone.View.extend({
  el: '#gtc-task-list',
  totalTasksTpl: _.template($('#gtc-task-tpl').html()),
  events: {
    'click #gtc-new-task-btn.active': 'showNewTaskForm'
  },
  initialize: function () {
    this.listenTo(app.gTasks, 'add', this.addGruntTask);
    app.gTasks.fetch();
  },
  showNewTaskForm: function () {
    var gruntTaskForm = new gruntTaskFormView({});
    this.$("#gtc-new-task-btn").removeClass('active');
    gruntTaskForm.render(
      {
        taskName: '',
        taskType: 0,
        taskDesc: ''
      }
    );
  },
  addGruntTask: function(gruntTask) {
    var gruntTaskView = new app.gruntTasksListItemView({
      model: gruntTask
    });
    this.$el[0].append(gruntTaskView.render().el);
    this.$("#gtc-new-task-btn").addClass('active');
  }
});
