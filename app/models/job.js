import DS from 'ember-data';

var attr = DS.attr;

var Job = DS.Model.extend({
  user_id                : attr(),
  title                  : attr('string'),
  description            : attr('string'),
  travel                 : attr('string'),
  driver_license         : attr('string'),
  job_types              : DS.hasMany('jobType', {inverse       : 'job', async     : true, embedded : 'always'}),
  job_compensations      : DS.hasMany('jobCompensation', {async : true/*, embedded : 'always'*/}),
  submissionType         : 'job',
  description_fragment: function() {
    return this.get('description').substr(0, 150) + ' [...]';
  }.property('description'),
  is_owner: function(){
    var session = container.lookup('simple-auth-session:main')
    return this.get('user_id') === session.content.id;
  }.property()
});

//Job.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Job One'},
//    {id: 2, title: 'Job Two'},
//    {id: 3, title: 'Job Three'}
//  ]
//});

export default Job;
