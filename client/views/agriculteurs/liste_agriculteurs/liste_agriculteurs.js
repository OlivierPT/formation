/*****************************************************************************/
/* ListeAgriculteurs: Event Handlers and Helpers */
/*****************************************************************************/
Template.ListeAgriculteurs.events({
//    'click': function () {
//      Session.set("agriculteurId", this._id);
//    },
    
    'click #edit': function () {
      Session.set("agriculteurId", this._id);
    }
  });

Template.ListeAgriculteurs.helpers({
  
    items: function () {
      return Agriculteurs.find();
    }

});


/*****************************************************************************/
/* ListeAgriculteurs: Lifecycle Hooks */
/*****************************************************************************/
Template.ListeAgriculteurs.created = function () {
};

Template.ListeAgriculteurs.rendered = function () {
};

Template.ListeAgriculteurs.destroyed = function () {
};
