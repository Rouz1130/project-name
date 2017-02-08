import Ember from 'ember';
//
// export default Ember.Component.extend({
//   classNames: ['implement-doc'],
//   import Ember from 'ember';


  export default Ember.Component.extend({
    items: null,
    activeItem: null,
    actions: {
      toggleActiveItem(item) {
        if (this.get('activeItem') !== item) {
          this.set('activeItem', item);
        } else {
          this.set('activeItem', null);
        }
      }
    }
  // fooo: [
  //    {
  //      foo: "blah",
  //      foo2: "Services, their whys, their hows."
  //    },
  //    {
  //      foo: "foo",
  //      foo2: "Routing and routes and such."
  //    },
  //    {
  //      foo: "foo",
  //      foo2: "Templates and helpers and mustaches oh my."
  //    },
  //    {
  //      foo: "Optional Parameters",
  //      foo2: "Templates and helpers and mustaches oh my."
  //
  //    }
  //  ]
});
