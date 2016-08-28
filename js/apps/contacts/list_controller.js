MyApp.module("ContactsApp.List",function(List,MyApp, Backbone,Marionette,$,_){
  List.Controller = {
    listContacts: function() {
      var contacts = MyApp.request('contact:entities');
      console.log(contacts);
      var collView = new List.CollectionView({
        collection: contacts
      });
      MyApp.mainRegion.show(collView);
    }
  };
});
