Agriculteurs = new Meteor.Collection('agriculteurs');

Meteor.publish('agriculteurs', function () {
  return Agriculteurs.find({});
});

Meteor.publish('agriculteur', function (id) {
  return Agriculteurs.findOne({_id: id});
});

Agriculteurs.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

Agriculteurs.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
