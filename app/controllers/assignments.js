import Ember from 'ember';

export default Ember.Controller.extend({
  //assignment: function() {
  //  return this.store.createRecord('assignment');
  //}.property(),
  //actions: {
  //  deleteAssignment: function() {
  //    this.get('model').destroyRecord().then(function() {
  //      this.transitionToRoute('match.dashboard');
  //    }.bind(this));
  //  },
  //  submitAssignment: function() {
  //    console.log("Title: ", this.get('assignment.title'));
  //    console.log("Description: ", this.get('assignment.description'));
  //    console.log("Travel: ", this.get('assignment.travel'));
  //    console.log("Driving license: ", this.get('assignment.driver_license'));
  //    console.log("Tech: ", this.get('tech'));
  //    var self = this;
  //    this.get('assignment').save().then(function() {
  //      //this.get('assignments').pushObject(self.get('assignment'));
  //      self.transitionToRoute('assignments.show', self.get('assignment'));
  //    });
  //  }
  //}
  model: function() {
    return this.store.find('assignment');
  }.property(),
  //owner: function() {
  //  return this.store.find('accounts', 1);
  //}.property(),
  //isOwner: function(){
  //  return this.model.user_id === user.id;
  //}.property('assignment')
  //setupController: function(controller, model) {
  //  model.reload();
  //  controller.set('model', model);
  //}
});

