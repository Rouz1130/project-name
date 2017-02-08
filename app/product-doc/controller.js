import Ember from 'ember';
// all actions for are componets thus far
export default Ember.Controller.extend({
  // actions onclick is action of the click function in prodcut-card
  actions:{
    onclick() {
      window.alert('cardWasClicked');
    }
  },


  // listItem arrary action to display product info on accordion component
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
