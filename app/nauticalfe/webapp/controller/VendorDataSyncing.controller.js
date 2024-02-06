
sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment",
        "sap/ui/core/routing/History",
        'sap/m/MessageToast',
        "sap/m/MenuItem",
        'sap/ui/model/json/JSONModel',
        "sap/ui/core/library",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/FilterType"
    ],
    function (BaseController, Fragment, History, MessageToast, MenuItem, JSONModel, CoreLibrary, Filter, FilterOperator, FilterType) {
        "use strict";
        let selectedData = [];
        return BaseController.extend("nauticalfe.controller.VendorDataSyncing", {
            // _oSupplMenuFragment: null,
            _oMenuFragment: null,
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
            populateInputField: function (inputField, selectedValue) {
                inputField.setValue(selectedValue);
            },
            onExit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("MastView");
            }, onBackPressHome: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            },
            backPress: function () {
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("MastView", {}, true);
                }
            },

            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            showVendorNoDialog: function () {
                var oView = this.getView();


                if (!this._oTankInfomate) {
                    this._oTankInfomate = sap.ui.xmlfragment(oView.getId(), "nauticalfe.fragments.Supplier", this);
                    oView.addDependent(this._oTankInfomate);
                }
                this._oTankInfomate.open();

            },
            onClose: function () {
                if (this._oTankInfomate) {
                    this._oTankInfomate.close();
                }
            },
            onOkk: function () {
                if (this._oTankInfomate) {
                    this._oTankInfomate.close();
                }
            },
            onExecute: function () {
                let selecteVendorNo = this.byId("button1").getValue();
                console.log("Selected Data ", selectedData);
                var updateSync = {
                    "LIFNR": selectedData[0],
                    "ANRED": selectedData[1],
                    "ADRNR": selectedData[2],
                    "NAME1": selectedData[3],
                    "STREET": selectedData[6],
                    "PSTLZ": selectedData[7],
                    "ORT01": selectedData[8],
                    "LAND1": selectedData[9],
                    "REGIO": selectedData[10],
                    "TELF1": selectedData[11],
                    "TELF2": selectedData[12],
                    "TELFX": selectedData[13],
                    "ERDAT": "2023-05-20",
                    "SPRAS": selectedData[15],
                    "SMTP_ADNR": "jane@example.com",
                    "DATE_TO": "2024-12-31",
                    "STR_SUPPL1": "",
                    "STR_SUPPL2": "",
                    "SORT1": "Oak Avenue",
                    "TIME_ZONE": "GMT-5",
                    "HOUSE_NUM1": "456"
                };
                // var updateSync = JSON.parse(jsonString);
                console.log(updateSync);
                console.log("UpdateSync ", updateSync);
                var updateSynModel = new JSONModel();
                updateSynModel.setData(updateSync);
                this.getView().setModel(updateSynModel, "nomination")
                let oData = this.getView().getModel('nomination').getData()
                let salesModel = this.getOwnerComponent().getModel()
                let oBindList = salesModel.bindList("/Newtable");
                // debugger
                // oBindList.create(oData);
                oBindList.create(oData, {
                    success: function (msg) {
                        console.log(msg);
                        // MessageBox.success('Successfully.')
                    },
                    error: function (err) {
                        console.log(err);
                        // MessageBox.success('Error.')
                    },
                })

                console.log(selecteVendorNo, typeof selecteVendorNo);
                if (!selecteVendorNo) {
                    console.log(selecteVendorNo);
                    MessageToast.show("Please choose Vendor no.");

                } 
                else {
                    this.getView().byId("vendorBoxes").setVisible(false)
                    this.getView().byId("synctable").setVisible(true)
                    let oTable = this.getView().byId("synctable");

                    let oFilter = new Filter("LIFNR", FilterOperator.Contains, selecteVendorNo);
                    oTable.getBinding("items").filter(oFilter, FilterType.Application);
                }
            },

            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
            showVendorNoDialog2: function (oEvent) {
                let oData = oEvent.getSource();
                var oDialog = new sap.m.Dialog({
                    title: "Select: Vessel Types",
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
                                var button1Input = this.getView().byId("button1");
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
                    path: "/LFA1",
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
            // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            showVendorNoDialog3: function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Country",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Ctr" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Name" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Nationality" }),
                            }),
                        ],
                        // Handle selection change in the table
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            console.log(oSelectedItem);
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("CountryInp1");
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Ok",
                        type: "Reject",
                        press: function () {
                            // Make sure to handle the case where the user closes the dialog without making a selection
                            oDialog.close();
                        },
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });

                let oValueHelpTable = oDialog.getContent()[0];

                // Replace with your entity set
                oValueHelpTable.bindItems({
                    path: "/CURR",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{NAVOYCUR}" }),
                            new sap.m.Text({ text: "{NAVOYGCURDES}" }),
                        ],
                    }),
                });

                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
            showVendorNoDialog4: function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Country",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Code" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Description" }),
                            }),
                        ],
                        // Handle selection change in the table
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            console.log(oSelectedItem);
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("vendor12");
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Ok",
                        type: "Reject",
                        press: function () {
                            // Make sure to handle the case where the user closes the dialog without making a selection
                            oDialog.close();
                        },
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });

                let oValueHelpTable = oDialog.getContent()[0];

                // Replace with your entity set
                oValueHelpTable.bindItems({
                    path: "/CURR",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{NAVOYCUR}" }),
                            new sap.m.Text({ text: "{NAVOYGCURDES}" }),
                        ],
                    }),
                });

                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            showVendorNoDialog5: function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Country",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "CoCd" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Company Name " }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "City " }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "CrCy " }),
                            }),
                        ],
                        // Handle selection change in the table
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            console.log(oSelectedItem);
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("CoCd1");
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Ok",
                        type: "Reject",
                        press: function () {
                            // Make sure to handle the case where the user closes the dialog without making a selection
                            oDialog.close();
                        },
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });

                let oValueHelpTable = oDialog.getContent()[0];

                // Replace with your entity set
                oValueHelpTable.bindItems({
                    path: "/CURR",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{NAVOYCUR}" }),
                            new sap.m.Text({ text: "{NAVOYGCURDES}" }),
                        ],
                    }),
                });

                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            CountryDialogue : function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Vessel Types",
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
                                                aFilters.push(new sap.ui.model.Filter("LAND1", sap.ui.model.FilterOperator.Contains, sSearchTerm));

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
                                var button1Input = this.getView().byId("button1");
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
                    path: "/LFA1",
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

            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            delitionSupplierDialog: function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Country",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Code" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Description" }),
                            }),
                        ],
                        // Handle selection change in the table
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            console.log(oSelectedItem);
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("delitionSupplier");
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Ok",
                        type: "Reject",
                        press: function () {
                            // Make sure to handle the case where the user closes the dialog without making a selection
                            oDialog.close();
                        },
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });

                let oValueHelpTable = oDialog.getContent()[0];

                // Replace with your entity set
                oValueHelpTable.bindItems({
                    path: "/CURR",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{NAVOYCUR}" }),
                            new sap.m.Text({ text: "{NAVOYGCURDES}" }),
                        ],
                    }),
                });

                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            DilitionCompanyDialog: function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Country",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Code" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Description" }),
                            }),
                        ],
                        // Handle selection change in the table
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            console.log(oSelectedItem);
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("DilitionCompany");
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Ok",
                        type: "Reject",
                        press: function () {
                            // Make sure to handle the case where the user closes the dialog without making a selection
                            oDialog.close();
                        },
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });

                let oValueHelpTable = oDialog.getContent()[0];

                // Replace with your entity set
                oValueHelpTable.bindItems({
                    path: "/CURR",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{NAVOYCUR}" }),
                            new sap.m.Text({ text: "{NAVOYGCURDES}" }),
                        ],
                    }),
                });

                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            CountryCompanyDialog: function (oEvent) {
                let oData = oEvent.getSource();

                // Create a dialog
                var oDialog = new sap.m.Dialog({
                    title: "Select: Country",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Code" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Description" }),
                            }),
                        ],
                        // Handle selection change in the table
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            console.log(oSelectedItem);
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("CountryCompany");
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Ok",
                        type: "Reject",
                        press: function () {
                            // Make sure to handle the case where the user closes the dialog without making a selection
                            oDialog.close();
                        },
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),
                });

                let oValueHelpTable = oDialog.getContent()[0];

                // Replace with your entity set
                oValueHelpTable.bindItems({
                    path: "/CURR",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{NAVOYCUR}" }),
                            new sap.m.Text({ text: "{NAVOYGCURDES}" }),
                        ],
                    }),
                });

                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            populateInputField: function (inputField, value) {
                // Ensure the input field exists
                if (inputField) {
                    // Set the value in the input field
                    inputField.setValue(value);
                } else {
                    console.error("Input field not found");
                }
            },
            // Function to populate the input field
            populateInputField: function (inputField, value) {
                // Ensure the input field exists
                if (inputField) {
                    // Set the value in the input field
                    inputField.setValue(value);
                    console.log("Input field value set:", value);
                } else {
                    console.error("Input field not found");
                }
            },
        });
    }
);