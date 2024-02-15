sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function( Controller,JSONModel) {
      "use strict";
  
      return Controller.extend("nauticalfe.controller.DisplayVendorDetail", {
        onInit() {

          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("RouteDisplayVendorDetail").attachPatternMatched(this.onobjectMatched,this);

        },
        onobjectMatched(onEvent){
          let myNo = onEvent.getParameter("arguments");
          console.log(("fghj",myNo, parseInt(myNo.SelectedVendorNo)));
        }
        
      });
    }
  );
  