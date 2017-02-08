import Ember from 'ember';

export default Ember.Component.extend({
  // click function: the action gets passed too product-doc controller
    classNames: ['product-card'],
    click() {
        this.get('click')();
    }
});
