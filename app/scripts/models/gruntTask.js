var app = app || {};
  app.GruntTask = Backbone.Model.extend({
    defaults: {
      taskName: '',
      taskType: 0,
      taskDesc: ''
    }
  });
