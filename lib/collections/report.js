Report = new Mongo.Collection('report');
var Schemas = {};
Schemas.Report = new SimpleSchema({
  sessionId: {
    type: String,
    label: "sessionId",
    max: 200
  },
  type:{
    type: String,
    label: "Type",
    max: 200
  }
});

if (Meteor.isServer) {
  Report.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return false;
    }
  });


}
