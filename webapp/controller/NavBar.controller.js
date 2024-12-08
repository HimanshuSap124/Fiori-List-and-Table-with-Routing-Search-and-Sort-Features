sap.ui.define([
    "fiori/practice/controller/BaseController"
] , (BaseController) => {
    return BaseController.extend("fiori.practice.controller.NavBar" , {

        onInit(){

        },

        toCarTableView : function(){
            this.RouteTo("CarTableView");
        },

        ListView : function(){
            this.RouteTo("ListView");
        }

    })
});