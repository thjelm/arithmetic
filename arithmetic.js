if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.config.helpers({
    class: function(id) {
      return Session.get(id) || "";
    },
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.config.events({
    'click #operators > button': function(evt) {
      var id = evt.currentTarget.id;

      Session.set('add', "");
      Session.set('subtract', "");
      Session.set('multiply', "");
      Session.set('divide', "");
      Session.set(id, "selected");
      Session.set('operator', id);
    },
    'click #numbers > button': function(evt) {
      var id = evt.currentTarget.id;

      Session.set('one', '');
      Session.set('two', '');
      Session.set('three', '');
      Session.set('four', '');
      Session.set('five', '');
      Session.set('six', '');
      Session.set('seven', '');
      Session.set('eight', '');
      Session.set('nine', '');
      Session.set('ten', '');
      Session.set(id, 'selected');
      Session.set('number', id);
    },
    'click #btn-add': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
