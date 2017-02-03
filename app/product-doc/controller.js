import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    onclick() {
      window.alert('cardWasClicked');
    }
  },
  // items: Ember.computed(function() {
  //   return [
  //     {title: "Actions:", details: "code-snippet"},
  //     {title: "Item 2", details: "Details here"},
  //     {title: "Item 3", details: "Details here"}
  //   ];
  // })

  // take out computed function
  products: [
    {
      title: "Controller Actions",
      name: "Chris",
      text: "Services, their whys, their hows."
    },
    {
      title: "Controller Fields",
      text: "Routing and routes and such.",
      name: "Steve"
    },
    {
      title: "Required Parameters",
      text: "Templates and helpers and mustaches oh my.",
      name: "Larry"
    },
    {
      title: "Optional Parameters",
      text: "Templates and helpers and mustaches oh my.",
      name: "Tyler"
    }
  ]
});
