import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    onclick() {
      window.alert('cardWasClicked');
    }
  },

  products: [
    {
      name: "Controller Actions",
      description: "Services, their whys, their hows."
    },
    {
      name: "Controller Fields",
      description: "Routing and routes and such."
    },
    {
      name: "Required Parameters",
      description: "Templates and helpers and mustaches oh my."
    },
    {
      name: "Optional Parameters",
      description: "Templates and helpers and mustaches oh my."

    }
  ]
});
