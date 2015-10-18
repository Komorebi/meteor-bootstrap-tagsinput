Package.describe({
    name: 'walexander:bootstrap-tagsinput',
    summary: 'jQuery plugin providing a Twitter Bootstrap user interface for managing tags, repackaged for Meteor',
    version: '0.9.1',
    git: "https://github.com/komorebi/meteor-bootstrap-tagsinput.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('jquery@1.0.1', 'client');
  api.use('twbs:bootstrap@3.3.5','client');
  api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
  api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client');
});
