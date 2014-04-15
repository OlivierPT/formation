/*
 * Add query methods like this:
 *  Parcelles.findPublic = function () {
 *    return Parcelles.find({is_public: true});
 *  }
 */
Parcelles = new Meteor.Collection('parcelles');

Meteor.publish('parcelles', function () {
  return Parcelles.find({});
});

Meteor.publish('parcelle', function () {
  return Parcelles.find({_id: id});
});


Parcelles.allow({
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

Parcelles.deny({
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

