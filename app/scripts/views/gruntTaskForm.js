var app = app || {},
  gruntTaskFormView = Backbone.View.extend({
    tagName: 'form',
    id: 'gtc-task-form',
    totalTasksTpl: _.template( $('#gtc-task-form-tpl').html() ),
    events: {
      'click #gtc-task-save-btn' : 'saveGruntTask'
    },
    initialize: function() {

    },
    render: function(taskAttrs) {
      this.$el.html(this.totalTasksTpl(taskAttrs));
      $("#gtc-task-form-wrapper").html(this.$el);
    },
    gruntTaskProperties: function() {
      return {
        taskName: this.$('#gtc-task-name').val().trim(),
        taskType: this.getTaskTypeName(this.$('#gtc-task-type-select').find(':selected').val()),
        taskDesc: this.$('#gtc-task-desc').val().trim()
      };
    },
    saveGruntTask: function() {
      app.gTasks.create(this.gruntTaskProperties());
      this.remove();
    },
    getTaskTypeName: function(taskType) {
      var taskTypes = ['dev','dist','other'],
        taskTypeName = taskTypes[0];
      if (taskTypes[taskType]) {
        taskTypeName = taskTypes[taskType];
      }
      return taskTypeName;
    },
    toggleForm: function() {

    }
  });
