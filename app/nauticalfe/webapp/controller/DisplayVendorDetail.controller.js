sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel", 
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
  ],
  function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("nauticalfe.controller.DisplayVendorDetail", {
      onInit: function () {
        // Create a new instance of JSONModel
        let oModel = new JSONModel();
        
        // Load data asynchronously
        oModel.loadData("/odata/v4/nautical/Newtable");
        
        // Attach request completed event
        oModel.attachRequestCompleted(function () {
          // Data is now loaded, you can access it here
          var modelData = oModel.getData().value;
          
          // // Filter the data based on a specific condition (e.g., vendor number)
          // var filteredData = modelData.filter(function(item) {
          //   return item.VendorNo === itemId; // Assuming itemId is defined somewhere in your code
          // });
          
          // // Set the filtered data to the model
          // oModel.setData(filteredData);
          
          // Set the model to the view
          console.log("omodel",oModel);
          this.getView().setModel(oModel, "displaydataModel");
          let mdata = this.getView().getModel("displaydataModel").getData();
          console.log("sdfgh",mdata.value);
        }.bind(this));
      }


    });
  }
);


// sap.ui.define([
//   "sap/ui/core/mvc/Controller",
//   "sap/ui/model/json/JSONModel",
//   "sap/ui/model/Filter",
//   "sap/ui/model/FilterOperator"
// ], function (Controller, JSONModel, Filter, FilterOperator) {
//   "use strict";

//   return Controller.extend("nauticalfe.controller.DisplayVendorDetail", {
//       onInit: function () {
//           // Create a new instance of JSONModel
//           let oModel = new JSONModel();

//           // Load data asynchronously
//           oModel.loadData("/odata/v4/nautical/Newtable");

//           // Attach request completed event
//           oModel.attachRequestCompleted(function () {
//               // Data is now loaded, you can access it here
//               var modelData = oModel.getData().value;

//               // Set the model to the view
//               this.getView().setModel(oModel, "displaydataModel");
//           }.bind(this));
//       },

//       onVendorSelect: function (oEvent) {
//           // Get the selected vendor item
//           var oSelectedItem = oEvent.getParameter("listItem");

//           // Get the selected vendor's binding context
//           var oContext = oSelectedItem.getBindingContext("displaydataModel");

//           // Get the selected vendor's data
//           var oSelectedVendor = oContext.getObject();

//           // Bind the selected vendor's data to the form fields
//           this.getView().byId("inputVendorNo").bindValue("{displaydataModel>LIFNR}");
//           this.getView().byId("inputTitle").bindValue("{displaydataModel>ANRED}");
//           // Bind other fields similarly

//           // Set the binding context to the form
//           this.getView().byId("smartForm").setBindingContext(oContext, "displaydataModel");
//       }
//   });
// });

