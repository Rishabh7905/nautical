sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History"
  ],
  function (BaseController, Fragment, History) {
    "use strict";

    let selectedData = [];
    let sSelectedIds = [];
    let sSelectedTableId;
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
                selectionChange:this.onChange,
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
              debugger;
              var oTable = oDialog.getContent()[0].getItems()[1];
              var oSelectedItem = oTable.getSelectedItem();

              if (oSelectedItem) {
                var oSelectedValue = oSelectedItem.getCells()[0].getText(); // Assuming the ID is in the first column
                // Access the Input field by its ID
                var inputField = this.getView().byId("BpMasterVendor");
                // Set its value to the selected ID
                inputField.setValue(oSelectedValue);
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
                press: this.deleteSelectedRows.bind(this),
                
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
      onChange: function(oEvent) {
        let oSource = oEvent.getSource();
        selectedData = oSource.getSelectedItems();
        console.log(selectedData);
        
        sSelectedIds = selectedData.map(function(oSelectedItem) {
            return oSelectedItem.getId(); // Assuming IDs are stored as the item IDs
        });
        sSelectedTableId = oSource.getId();
    
        // Call deleteSelectedRows with the selected IDs
        
    },
    
    deleteSelectedRows: function() {
        let oTable = this.getView().byId(sSelectedTableId); // Replace "yourTableId" with the actual ID of your table
    
        sSelectedIds.forEach(function(sSelectedId) {
            let oSelectedItem = sap.ui.getCore().byId(sSelectedId);
            if (oSelectedItem) {
                oTable.removeItem(oSelectedItem); // Remove the selected item from the table
            }
        });
    
    },
      deleteSelectedRows1: function (oEvent) {
        var oTable = oEvent.getSource(); // Assuming the event source is the table
        var oModel = oTable.getModel(); // Assuming the table is bound to a model
    
        var aSelectedIndices = oTable.getSelectedItem();
        var aContextsToDelete = [];
    
        // Retrieve the contexts of selected items
        aSelectedIndices.forEach(function (nIndex) {
            var oContext = oTable.getContextByIndex(nIndex);
            aContextsToDelete.push(oContext);
        });
    
        // Remove selected items from the model
        aContextsToDelete.forEach(function (oContext) {
            oModel.remove(oContext.getPath(), {
                success: function () {
                    // Item removed successfully
                },
                error: function (oError) {
                    // Handle error while removing item
                    console.error("Error while deleting item:", oError);
                }
            });
        });
    
        oTable.removeSelections();
    }
    });
  }
);