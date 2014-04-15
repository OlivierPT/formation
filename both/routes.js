/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});


Router.map( function (){
  this.route('App', {
    path: '/'
  });
  
  this.route('App', {
    path: '/home'
  });
  
  this.route('ListeAgriculteurs', {
    path: '/listeAgriculteurs'
  });
  
  this.route('DetailAgriculteur', {
    path: '/detailAgriculteur'
  });

this.route('ListeParcelles', {
    path: '/listeParcelles'
  });

});

