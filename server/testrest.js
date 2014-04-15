/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Meteor.startup(function() {
    // code to run on server at startup
    if (typeof console !== 'undefined')
        console.log("Here is the server");


    HTTP.call("GET", "http://192.168.1.9:8080/jee6restservices/rest/agriculteurs",
            function(error, result) {
                if (!error) {
                    console.log("Clean the collection...");
                    Agriculteurs.remove({});
                    console.log("Result : "+result);
                    var agriculteurs = EJSON.parse(result.content);
                    console.log("Nb agriculteur : "+agriculteurs.length);
                    for (var i = 0; i < agriculteurs.length; i++) {
                        var agriculteur = agriculteurs[i]
                        console.log("Agriculteur "+i+" parsé : "+EJSON.stringify(agriculteur));
                        var id = Agriculteurs.insert(agriculteur);
                        console.log("Agriculteur "+i+" crée : "+id);
                    }
                } else {
                    console.log("Error : "+error);
                }
            });
});