sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], (Controller, History, UIComponent)=> {

    return Controller.extend("fiori.practice.controller.BaseController" , {

        RouteTo : function(viewName){
            const router = UIComponent.getRouterFor(this) ;
            router.navTo(viewName) ;
        },


        
        onNavBack : function() {
            let oHistory = History.getInstance() ;
            let sPreviousHash = oHistory.getPreviousHash() ;

            if(sPreviousHash !== undefined){
                // window.history.go(-1) ;
                this.RouteTo("RouteHome") ;
            }
            else{
                this.RouteTo("View1", {}, true) ;
            }
        }

    });

});