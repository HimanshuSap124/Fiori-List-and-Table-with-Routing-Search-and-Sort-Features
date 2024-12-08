sap.ui.define([
    "fiori/practice/controller/BaseController",
	'sap/m/MessageToast',
	"fiori/practice/utils/formatter"

] , (BaseController, MessageToast, formatter) => {

    return BaseController.extend("fiori.practice.controller.CarTable" , {

		formatter : formatter ,

        onInit() {
        
        },


        onToggleInfoToolbar: function(oEvent) {
			var oTable = this.byId("idProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
		},

		
		onSearch : function(oEvent){
			/* 
				Filter requires 3 parameters -
				1. Path	(data variables used on our JSON Model)
				2. Operator (operator should be from sap.ui.model.FileOperator Library and operators can be EQ i.e., equals, Contains etc)
				3. searched value (the value we type on search bar)

				and Filter is defined in sap.ui.model Library
			*/

			
			let searchedValue = oEvent.getSource().getValue() ;

			let path1 = "name";
			let path2 = "fuel_type";
			let path3 = "currency"
						
			let operator = sap.ui.model.FilterOperator.Contains ;

			let aFilter = [
				new sap.ui.model.Filter(path1, operator, searchedValue),
				new sap.ui.model.Filter(path2, operator, searchedValue),
				new sap.ui.model.Filter(path3, operator, searchedValue)
			];

			/*	in the below line, if we provide andOperator as True, then whatever we search should be 
			present in all 3 path like if we search "abc" , then it will show result iff abc is present 
			in name, fuel_type and currency as well.

			*/
			let andOperator = false ;
			
			let allFilters = new sap.ui.model.Filter(aFilter, andOperator) ;

			this.getView().byId("idProductsTable").getBinding("items").filter(allFilters) ;
		},




		sorting : function(oEvent) {
			/* 
				Sort requires 3 parameters -
				1. Path	(data variables used on our JSON Model)
				2. Descending (if true, it will arrange in Descending order, if false it will arrange in Ascending Order.)
				3. Group By (if you want to group your result in a particular value)

				and Sort is defined in sap.ui.model Library
			*/

			let sortBy = oEvent.getSource().getProperty("text") ;	// read the text of the button
			
			let path = null ;

			if(sortBy === "Sort by Price"){
				path = "price"
			}
			else if(sortBy === "Sort by Rating"){
				path = "rating"
			}

			let decending = false ;
			let group = false;

			let oSorter = new sap.ui.model.Sorter(path, decending, group) ;
			
			this.getView().byId("idProductsTable").getBinding("items").sort(oSorter) ;

			MessageToast.show(sortBy);
		},



		onReset : function(){
			this.getView().byId("idProductsTable").getBinding("items").filter([]) ;
			this.getView().byId("idProductsTable").getBinding("items").sort() ;

			MessageToast.show("Sort and Filter is Reset now.");
		}



    });

});