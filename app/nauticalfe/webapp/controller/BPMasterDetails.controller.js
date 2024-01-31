sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History"
  ],
  function (BaseController, Fragment, History) {
    "use strict";

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
          }),

          beginButton: new sap.m.Button({
            text: "Ok",
            type: "Accept",
            press: function () {
              var oTable = oDialog.getContent()[0].getItems()[1];
              var oSelectedItem = oTable.getSelectedItem();

              if (oSelectedItem) {
                var oSelectedValue = oSelectedItem.getCells()[0].getText(); // Adjust index based on your column structure
                selectedData.push(oSelectedItem.getCells()[0].getText());
                selectedData.push(oSelectedItem.getCells()[1].getText());
                selectedData.push(oSelectedItem.getCells()[2].getText());
                selectedData.push(oSelectedItem.getCells()[3].getText());
                selectedData.push(oSelectedItem.getCells()[4].getText());
                selectedData.push(oSelectedItem.getCells()[5].getText());
                selectedData.push(oSelectedItem.getCells()[6].getText());
                selectedData.push(oSelectedItem.getCells()[7].getText());
                selectedData.push(oSelectedItem.getCells()[8].getText());
                selectedData.push(oSelectedItem.getCells()[9].getText());
                selectedData.push(oSelectedItem.getCells()[10].getText());
                selectedData.push(oSelectedItem.getCells()[11].getText());
                selectedData.push(oSelectedItem.getCells()[12].getText());
                selectedData.push(oSelectedItem.getCells()[13].getText());
                selectedData.push(oSelectedItem.getCells()[14].getText());
                selectedData.push(oSelectedItem.getCells()[15].getText());

                console.log(selectedData);
                var inputVoyageType = this.getView().byId(oData.getId()); // Input field for Voyage Type
                this.populateInputField(inputVoyageType, oSelectedValue);
                var button1Input = this.getView().byId("_IDGenInput1");
                this.populateInputField(button1Input, oSelectedValue);
              }
              oDialog.close();
            }.bind(this),
          }),
          endButton: new sap.m.Button({
            text: "Cancel",
            type: "Reject",
            press: function () {
              oDialog.close();
            },
          }),

        });

        let oValueHelpTable = oDialog.getContent()[0].getItems()[1];

        // Replace with your entity set
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
);
