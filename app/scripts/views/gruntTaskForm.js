var app = app || {},
  gruntTaskFormView = Backbone.View.extend({
    tagName: 'div',
    id: 'gtc-task-form',
    totalTasksTpl: _.template( $('#gtc-task-form-tpl').html() ),
    events: {
      'click #gtc-task-save-btn' : 'saveGruntTask',
      'click #gtc-task-discard-btn' : 'discardGruntTask'
    },
    initialize: function() {
      console.log(this.generateGruntTaskId());
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
      this.discardGruntTask();
    },
    discardGruntTask: function() {
      this.remove();
      this.$("#gtc-new-task-btn").addClass('active');
    },
    getTaskTypeName: function(taskType) {
      var taskTypes = ['dev','dist','other'],
        taskTypeName = taskTypes[0];
      if (taskTypes[taskType]) {
        taskTypeName = taskTypes[taskType];
      }
      return taskTypeName;
    },
    generateGruntTaskId: function() {
      if (!app.gTasks.length) {
        return 1;
      }
      return app.gTasks.length + 1;
    },
    toggleForm: function() {

    }
  });
