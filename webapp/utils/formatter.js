sap.ui.define([], function() {
    "use strict" ;

    return {
        FuelState : function(iValue){
            if(iValue === "Electric"){
                return "Success" ;
            }
            else if(iValue === "Petrol"){
                return "None" ;
            }
            else{
                return "Information" ;
            }
        }
    }
})