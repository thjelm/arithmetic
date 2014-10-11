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
    'click #operators > button': function(evt, template) {
      var id = evt.currentTarget.id;

      template.$('#operators > button').removeClass('selected');
      template.$('#' + id).addClass('selected');

      Session.set('operator', id);
    },
    'click #numbers > button': function(evt, template) {
      var id = evt.currentTarget.id;

      template.$('#numbers > button').removeClass('selected');
      template.$('#' + id).addClass('selected');
      Session.set('number', id);
    },
    'click #btn-add': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.ws_col.li_list = function() {
    return [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}
