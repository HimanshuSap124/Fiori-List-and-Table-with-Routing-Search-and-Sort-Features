sap.ui.define([
    "fiori/practice/controller/BaseController"

], (BaseController)=>{
    "use Strict" ;

    return BaseController.extend("fiori.practice.controller.List", {
        
        onInit(){

        },


        onListItemPress : function(oEvent){
            let selectedListItem = oEvent.getSource().mProperties.title ;
            let selectedItem = {} ;
            let carModel = this.getOwnerComponent().getModel("CarModel").getData();

            carModel.forEach(element => {
                if(element.name === selectedListItem){
                    selectedItem = element
                }
            });

            this.getOwnerComponent().getModel("TempModel").setData(selectedItem) ;

            // Todo Route
            this.RouteTo("ListDetailView") ;
        }
        

    });
});