sap.ui.define([
    "fiori/practice/controller/BaseController"
] , (BaseController) => {
    return  BaseController.extend("fiori.practice.controller.ListDetail", {
        
        onInit() {
            let modelData = this.getOwnerComponent().getModel("TempModel").getData();

            if(modelData.length === undefined){
                this.RouteTo("ListView") ;
            }
        },

        navToListPage : function(){
            this.getOwnerComponent().getModel("TempModel").setData(null) ;
            this.RouteTo("ListView");
        }
    });
});