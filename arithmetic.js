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
      var id = evt.currentTarget.id,
        number = Session.get('number'),
        operator = $('#' + id).text();

      template.$('#operators > button').removeClass('selected');
      template.$('#' + id).addClass('selected');

      Session.set('operator', operator);

      if (!!number) {
        generateWorksheet(operator, number)
      }
    },
    'click #numbers > button': function(evt, template) {
      var id = evt.currentTarget.id,
        operator = Session.get('operator'),
        number = $('#' + id).text();

      template.$('#numbers > button').removeClass('selected');
      template.$('#' + id).addClass('selected');
      Session.set('number', number);

      if (!!operator) {
        generateWorksheet(operator, number);
      }
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
