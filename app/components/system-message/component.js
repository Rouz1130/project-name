import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    class: Ember.computed('type', function() {
        var type = this.get('type');

        if (type === 'success') {
            return 'success';
        } else if (type === 'info') {
            return 'info';
        } else if (type === 'warning') {
            return 'warning';
        } else {
            return 'danger';
        }
    }),
    icon: Ember.computed('type', function() {
        var type = this.get('type');

        if (type === 'success') {
            return 'ok';
        } else if (type === 'info') {
            return 'info-sign';
        } else {
            return 'exclamation-sign';
        }
    })
});
