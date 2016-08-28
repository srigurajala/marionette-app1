MyApp.module("Entities",function(Entities,MyApp,Backbone,Marionette,$,_){
  Entities.ContactModel = Backbone.Model.extend({});
  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.ContactModel,
    comparator: 'firstName'
  });

  var contacts;

  var initializeContacts = function() {
    contacts = new Entities.ContactCollection([{
      firstName: 'Srinivas',
      lastName: 'Gurajala'
    }, {
      firstName: 'Gowri Prasanna',
      lastName: 'Gurajala'
    },
    {
      firstName: 'Aishani',
      lastName: 'Gurajala'
    },
    {
      firstName: 'Akshayani',
      lastName: 'Gurajala'
    }]);
  };

  var API = {
    getContactEntities: function() {
      if (contacts === undefined) {
        initializeContacts();
      }
      return contacts;
    }
  };

  MyApp.reqres.setHandler('contact:entities', function(){
    return API.getContactEntities();
  });
});
