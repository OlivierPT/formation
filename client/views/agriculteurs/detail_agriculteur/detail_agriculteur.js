/*****************************************************************************/
/* DetailAgriculteur: Event Handlers and Helpers */
/*****************************************************************************/
Template.DetailAgriculteur.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.DetailAgriculteur.helpers({

     agriculteur: function () {
       return Agriculteurs.findOne({_id : Session.get("agriculteurId")});
     }
   
});

/*****************************************************************************/
/* DetailAgriculteur: Lifecycle Hooks */
/*****************************************************************************/
Template.DetailAgriculteur.created = function () {
};

Template.DetailAgriculteur.rendered = function () {
};

Template.DetailAgriculteur.destroyed = function () {
};
