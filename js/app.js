var MyApp = new Marionette.Application();

MyApp.addRegions({
  mainRegion: '#main-region'
});

MyApp.on('initialize:after', function(){
  MyApp.ContactsApp.List.Controller.listContacts();
});
