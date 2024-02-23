sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, Fragment, History, MessageTost,JSONModel) {
    "use strict";

    let selectedData = [];
    let sSelectedIds = [];
    let VendorNo  =0;
   
    return BaseController.extend("nauticalfe.controller.BPMasterDetails", {
      onInit() {
      },
      onPress: function () {
        var oView = this.getView(),
          oButton = oView.byId("button");
        if (!this._oMenuFragment) {
          this._oMenuFragment = Fragment.load({
            name: "nauticalfe.fragments.MastOptionsDropDown",
            id: oView.getId(),
            controller: this
          }).then(function (oMenu) {
            oMenu.openBy(oButton);
            this._oMenuFragment = oMenu;
            return this._oMenuFragment;
          }.bind(this));
        } else {
          this._oMenuFragment.openBy(oButton);
        }
      },
      onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Routedash");
      },
      onExit: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteHome");
      },
      onBackPress: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("MastView");
      },
      onSaveAs: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteSaveAsVariant");
      },
      onExecute: function () { 
        console.log("clicked");
        var selectedVendor = this.getSelectedVendorDetails(); // Implement this method to get selected vendor details
         
        // Navigate to the "RouteDisplayVendorDetail" route with the selected vendor's number
        this.navigateToVendorDetail("10045");

    //     var oModel = this.getOwnerComponent().getModel("vendorModel");
    //     console.log("oModel",oModel);
    
    // if (oModel) {
    //     // Set the model to the view, so it can be accessed in the controller
    //     this.getView().setModel(oModel, "vendorModel");
    // } else {
    //     // Handle error if the model is not found
    //     console.error("Vendor model not found.");
    // }

    },

    getSelectedVendorDetails: function () {
      console.log("vhjkj");
      // Implement this method to get the selected vendor's details
      // You can retrieve the selected vendor's details from the model or any other data source
      // For demonstration purposes, let's assume you have a model named "vendorModel" and the selected vendor's details are stored in it
      
      // var vendorModel = this.getView().getModel("vendorModel"); // Assuming vendorModel is your JSONModel
      // var selectedVendorIndex = vendorModel.getProperty("/selectedVendorIndex");
      // var selectedVendorDetails = vendorModel.getProperty("/vendors/" + selectedVendorIndex);
      //  return selectedVendorDetails;
  },

  displaySelectedVendorDetails: function (selectedVendor) {
    // Display the selected vendor's details in the table
    
    var table = this.getView().byId("synctable");
     var items = table.getItems()[0];  //Assuming you have only one item in the table
    
    items.getCells()[0].setValue(selectedVendor.VendorNo);
    items.getCells()[1].setValue(selectedVendor.Title);
    items.getCells()[2].setValue(selectedVendor.Address);
    items.getCells()[3].setValue(selectedVendor.Name1);
    items.getCells()[4].setValue(selectedVendor.Name2);
    items.getCells()[5].setValue(selectedVendor.Name3);
    items.getCells()[6].setValue(selectedVendor.Street);
    items.getCells()[7].setValue(selectedVendor.PostalCode);
    items.getCells()[8].setValue(selectedVendor.City);
    items.getCells()[9].setValue(selectedVendor.Country);
},

navigateToVendorDetail: function (selectedVendorNo) {
  // Navigate to the "RouteDisplayVendorDetail" route with the selected vendor's number
  console.log("ghjkjhjhjhhghj");
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("RouteDisplayVendorDetail", {
      "SelectedVendorNo": selectedVendorNo
  });
},
   
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      showBPMasterDialog: function (oEvent) {
        let oData = oEvent.getSource();

        // Create a dialog
        var oDialog = new sap.m.Dialog({
          title: "Select:Vendor",
          contentWidth: "60%",
          contentHeight: "60%",
          content: new sap.m.VBox({
            items: [
              new sap.m.Panel({
                content: [
                  new sap.m.SearchField({
                    placeholder: "Search...",
                    liveChange: function (oEvent) {
                      var sSearchTerm = oEvent.getParameter("newValue");
                      var oBinding = oValueHelpTable.getBinding("items");
                      var aFilters = [];   
                      if (sSearchTerm) {
                        aFilters.push(new sap.ui.model.Filter("ORT01", sap.ui.model.FilterOperator.Contains, sSearchTerm));
                        console.log(aFilters, oBinding);
                      }
                      oBinding.filter(aFilters);
                    }
                  }),
                ]
              }),
              new sap.m.Table({
                mode: sap.m.ListMode.MultiSelect,
              
                columns: [
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "vendor no " }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "title" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "address" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "name1" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "Name2" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "Name3" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "street" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "postal code" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "city" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "country" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "region" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "teliphone1" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "teliphone2" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "fax no" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "creation date" }),
                  }),
                  new sap.m.Column({
                    header: new sap.m.Text({ text: "language" }),
                  }),
                ],
              }),
            ],
            inputHandleForChange:function(id){
                 console.log("get id"+id);
            },
            selectionChange: function (oEvent) {
              var oSelectedItem = oEvent.getParameter("listItem");
              console.log(oSelectedItem);
              var oSelectedValue = oSelectedItem.getCells()[0].getText(); // Assuming vendor no is in the first column
              var buttonVendorIdNo = this.getView().byId("vendorIdNo");
              buttonVendorIdNo.setText(oSelectedValue); // Set the vendor number to the button text
             
              oDialog.close();
          }.bind(this),
          }),
          buttons: [
           new sap.m.Button({
            text: "Ok",
            type: "Accept",
            press: function () {
          
              var oTable = oDialog.getContent()[0].getItems()[1];
              var oSelectedItem = oTable.getSelectedItem();

              if (oSelectedItem) {
                var oSelectedValue = oSelectedItem.getCells()[0].getText(); // Assuming the ID is in the first column
                // Access the Input field by its ID
                var inputField = this.getView().byId("BpMasterVendor");
                // Set its value to the selected ID
                inputField.setValue(oSelectedValue);
                VendorNo = oSelectedValue
                // Close the dialog
                oDialog.close();
            } else {
                console.log("No item selected.");
            }
            }.bind(this),
          }),
           new sap.m.Button({
            text: "cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),
          
            new sap.m.Button({
                text: "Delete",
                type: "Reject",
                press: function () {
                  var oTable = oDialog.getContent()[0].getItems()[1];
                  var aSelectedItems = oTable.getSelectedItems();
              
                  if (aSelectedItems.length > 0) {
                      var oModel = oTable.getModel();
              
                      aSelectedItems.forEach(function (oSelectedItem) {
                          var oContext = oSelectedItem.getBindingContext();
                          oContext.delete("$direct", {
                              success: function () {
                                  console.log("Item removed successfully");
                                  MessageTost("Data removed successfully");
                              },
                              error: function (oError) {
                                  console.error("Error occurred while removing item:", oError);
                              }
                          });
                      });
              
                      // Clear the selection
                      oTable.removeSelections();
                  } else {
                      console.log("No item selected to delete.");
                  }
              
                  // Close the dialog
                  oDialog.close();
              }
              
              
              
              
              
            })
        ]
        });
        let oValueHelpTable = oDialog.getContent()[0].getItems()[1];
        oValueHelpTable.bindItems({
          path: "/Newtable",
      
          template: new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "{LIFNR}" }),
              new sap.m.Text({ text: "{ANRED}" }),
              new sap.m.Text({ text: "{ADRNR}" }),
              new sap.m.Text({ text: "{NAME1}" }),
              new sap.m.Text({ text: "{NAME2}" }),
              new sap.m.Text({ text: "{NAME3}" }),
              new sap.m.Text({ text: "{STRAS}" }),
              new sap.m.Text({ text: "{PSTLZ}" }),
              new sap.m.Text({ text: "{ORT01}" }),
              new sap.m.Text({ text: "{LAND1}" }),
              new sap.m.Text({ text: "{REGIO}" }),
              new sap.m.Text({ text: "{TELF1}" }),
              new sap.m.Text({ text: "{TELF2}" }),
              new sap.m.Text({ text: "{TELFX}" }),
              new sap.m.Text({ text: "{ERDAT}" }),
              new sap.m.Text({ text: "{SPRAS}" }),
            ],
          
        }),
        });

        // Bind the dialog to the view
        this.getView().addDependent(oDialog);

        // Open the dialog
        oDialog.open();
      },
    });
  }
)