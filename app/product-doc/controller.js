import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    onclick() {
      window.alert('cardWasClicked');
    }
  },

  products: [
    {
      title: "Controller Actions",
      author: "Chris",
      text: "Services, their whys, their hows."
    },
    // {
    //   title: "Controller Fields",
    //   text: "Routing and routes and such.",
    //   author: "Steve"
    // },
    // {
    //   title: "Required Parameters",
    //   text: "Templates and helpers and mustaches oh my.",
    //   author: "Larry"
    // },
    // {
    //   title: "Optional Parameters",
    //   text: "Templates and helpers and mustaches oh my.",
    //   author: "Tyler"
    // }
  ]
});
