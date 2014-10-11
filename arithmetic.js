if (Meteor.isClient) {
  Session.setDefault("number", 3);
  Session.setDefault("operator", "+");
  Session.setDefault("operation", "Addition");
  Session.setDefault("default_number", "three");

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
      Session.set('operation', id);

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
    }
  });

  Template.config.rendered = function(evt, template) {
    var operator_id = Session.get('operation'),
      number_id = Session.get('default_number');

      this.$('#' + operator_id + ', #' + number_id).addClass('selected');
  }

  Template.worksheet.helpers({
    operation: function() {
      return Session.get('operation');
    },
    number: function() {
      return Session.get('number');
    }
  });

  Template.worksheet.events({
    'click #btn-print': function(evt) {
      print();
    }
  });

  Template.worksheet.rendered = function() {
    var operator = Session.get('operator'),
      number = Session.get('number');

    generateWorksheet(operator, number);
  }

  Template.ws_col.li_list = function() {
    return [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}
