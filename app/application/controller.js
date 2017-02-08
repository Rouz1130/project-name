import Ember from 'ember';
// this action also works in product-doc not sure why it is here but actions up so
export default Ember.Controller.extend({
  actions: {
    selectSearchResult() {
      this.set('product.image');
    }
  }
  });
