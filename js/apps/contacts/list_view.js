MyApp.module("ContactsApp.List",function(List, MyApp, Backbone,Marionette,$,_) {
  List.ItemView = Marionette.ItemView.extend({
    template: '#contact-list-template',
    tagName: 'tr'
  });
  List.CollectionView = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    itemView: List.ItemView,
    itemViewContainer: "tbody"
  });
});
