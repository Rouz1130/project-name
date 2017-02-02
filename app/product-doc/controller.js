import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    onclick() {
      window.alert('cardWasClicked');
    }
  },
  items: Ember.computed(function() {
    return [
      {title: "Item 1", details: "Details here"},
      {title: "Item 2", details: "Details here"},
      {title: "Item 3", details: "Details here"}
    ];
  })
});
