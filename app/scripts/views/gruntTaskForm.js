var app = app || {},
  gruntTaskFormView = Backbone.View.extend({
    el: '#gtc-task-form-wrapper',
    totalTasksTpl: _.template( $('#gtc-task-form-tpl').html() ),
    events: {
      'click #gtc-task-save-btn' : 'saveGruntTask'
    },
    initialize: function() {
      this.$saveGruntTaskBtn = this.$('#gtc-task-save-btn');
      this.$gruntTaskTypeSelect = this.$('#gtc-task-type-select');
    },
    render: function(taskAttrs) {
      this.$el.html(this.totalTasksTpl(taskAttrs));
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

      this.$('#gtc-task-name').val('');
      this.$('#gtc-task-desc').val('');
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
