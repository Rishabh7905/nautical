/* checksum : cad1cdbaf0d99be50d9f22ef9b720b26 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service NAUTIVENDOR_BTP_SRV {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Vendor Master data for BTP'
entity NAUTIVENDOR_BTP_SRV.xNAUTIxvend_btp {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Vendor'
  @sap.quickinfo : 'Account Number of Vendor or Creditor'
  key Lifnr : String(10) not null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Country'
  @sap.quickinfo : 'Country Key'
  Land1 : String(3);
  @sap.label : 'Name'
  @sap.quickinfo : 'Name 1'
  Name1 : String(35);
  @sap.label : 'Name 2'
  Name2 : String(35);
  @sap.label : 'Name 3'
  Name3 : String(35);
  @sap.label : 'Name 4'
  Name4 : String(35);
  @sap.label : 'City'
  Ort01 : String(35);
  @sap.label : 'District'
  Ort02 : String(35);
  @sap.display.format : 'UpperCase'
  @sap.label : 'PO Box'
  Pfach : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'P.O. Box Postal Code'
  Pstl2 : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Postal Code'
  Pstlz : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Region'
  @sap.quickinfo : 'Region (State, Province, County)'
  Regio : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Search term'
  @sap.quickinfo : 'Sort field'
  Sortl : String(10);
  @sap.label : 'Street'
  @sap.quickinfo : 'Street and House Number'
  Stras : String(35);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Address'
  Adrnr : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Name'
  @sap.quickinfo : 'Search term for matchcode search'
  Mcod1 : String(25);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Name 2'
  @sap.quickinfo : 'Search term for matchcode search'
  Mcod2 : String(25);
  @sap.display.format : 'UpperCase'
  @sap.label : 'City'
  @sap.quickinfo : 'Search term for matchcode search'
  Mcod3 : String(25);
  @sap.label : 'Title'
  Anred : String(15);
  @sap.label : 'Train station'
  Bahns : String(25);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Int. location no. 1'
  @sap.quickinfo : 'International location number (part 1)'
  Bbbnr : String(7);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Int. location no. 2'
  @sap.quickinfo : 'International location number (Part 2)'
  Bbsnr : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Authorization'
  @sap.quickinfo : 'Authorization Group'
  Begru : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Industry'
  @sap.quickinfo : 'Industry key'
  Brsch : String(4);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Check digit'
  @sap.quickinfo : 'Check digit for the international location number'
  Bubkz : String(1);
  @sap.label : 'Data line'
  @sap.quickinfo : 'Data communication line no.'
  Datlt : String(14);
  @sap.display.format : 'UpperCase'
  @sap.label : 'DME indicator'
  @sap.quickinfo : 'Report key for data medium exchange'
  Dtams : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Instruction key'
  @sap.quickinfo : 'Instruction key for data medium exchange'
  Dtaws : String(2);
  @sap.display.format : 'Date'
  @sap.label : 'Created on'
  @sap.quickinfo : 'Date on which the Record Was Created'
  Erdat : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Created by'
  @sap.quickinfo : 'Name of Person who Created the Object'
  Ernam : String(12);
  @sap.display.format : 'UpperCase'
  @sap.label : 'PBC/ISR number'
  @sap.quickinfo : 'ISR subscriber number'
  Esrnr : String(11);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Group key'
  Konzs : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Account group'
  @sap.quickinfo : 'Vendor account group'
  Ktokk : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer'
  @sap.quickinfo : 'Customer Number'
  Kunnr : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Alternative Payee'
  @sap.quickinfo : 'Account Number of the Alternative Payee'
  Lnrza : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Deletion flag'
  @sap.quickinfo : 'Central Deletion Flag for Master Record'
  Loevm : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Posting Block'
  @sap.quickinfo : 'Central posting block'
  Sperr : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Purch. block'
  @sap.quickinfo : 'Centrally imposed purchasing block'
  Sperm : Boolean;
  @sap.label : 'Language Key'
  Spras : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Number 1'
  Stcd1 : String(16);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Number 2'
  Stcd2 : String(11);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales equalizatn tax'
  @sap.quickinfo : 'Indicator: Business Partner Subject to Equalization Tax?'
  Stkza : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Liable for VAT'
  Stkzu : Boolean;
  @sap.label : 'Telebox number'
  Telbx : String(15);
  @sap.label : 'Telephone 1'
  @sap.quickinfo : 'First telephone number'
  Telf1 : String(16);
  @sap.label : 'Telephone 2'
  @sap.quickinfo : 'Second telephone number'
  Telf2 : String(16);
  @sap.label : 'Fax Number'
  Telfx : String(31);
  @sap.label : 'Teletex number'
  Teltx : String(30);
  @sap.label : 'Telex number'
  Telx1 : String(30);
  @sap.display.format : 'UpperCase'
  @sap.label : 'One-time account'
  @sap.quickinfo : 'Indicator: Is the account a one-time account?'
  Xcpdk : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payee in Document'
  @sap.quickinfo : 'Indicator: Alternative Payee in Document Allowed?'
  Xzemp : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Trading Partner No.'
  @sap.quickinfo : 'Company ID of Trading Partner'
  Vbund : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Fiscal address'
  @sap.quickinfo : 'Account number of the master record with fiscal address'
  Fiskn : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'VAT Registration No.'
  @sap.quickinfo : 'VAT Registration Number'
  Stceg : String(20);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Natural Person'
  Stkzn : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Block Function'
  @sap.quickinfo : 'Function That Will Be Blocked'
  Sperq : String(2);
  @sap.label : 'Place of birth'
  @sap.quickinfo : 'Place of birth of the person subject to withholding tax'
  Gbort : String(25);
  @sap.display.format : 'Date'
  @sap.label : 'Date of Birth'
  @sap.quickinfo : 'Date of Birth of the Person Subject to Withholding Tax'
  Gbdat : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sex'
  @sap.quickinfo : 'Key for the Sex of the Person Subject to Withholding Tax'
  Sexkz : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Information Number'
  @sap.quickinfo : 'Credit Information Number'
  Kraus : String(11);
  @sap.display.format : 'Date'
  @sap.label : 'Last External Review'
  Revdb : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Actual QM System'
  @sap.quickinfo : 'Supplier''s QM system'
  Qssys : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference Acct Group'
  @sap.quickinfo : 'Reference Account Group for One-Time Account (Vendor)'
  Ktock : String(4);
  @sap.label : 'P.O. Box city'
  @sap.quickinfo : 'PO Box city'
  Pfort : String(35);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Plant'
  @sap.quickinfo : 'Plant (Own or External)'
  Werks : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'VSR relevant'
  @sap.quickinfo : 'Indicator: vendor sub-range relevant'
  Ltsna : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Plant level relevant'
  @sap.quickinfo : 'Indicator: plant level relevant'
  Werkr : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Factory Calendar'
  @sap.quickinfo : 'Factory calendar key'
  Plkal : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Data Transfer Status'
  @sap.quickinfo : 'Status of Data Transfer into Subsequent Release'
  Duefl : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Jurisdiction'
  Txjcd : String(15);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment block'
  @sap.quickinfo : 'Payment Block'
  Sperz : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'SCAC'
  @sap.quickinfo : 'Standard carrier access code'
  Scacd : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Carrier freight grp'
  @sap.quickinfo : 'Forwarding agent freight group'
  Sfrgr : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Transportation Zone'
  @sap.quickinfo : 'Transportation zone to or from which the goods are delivered'
  Lzone : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Accts for Alt. Payee'
  @sap.quickinfo : 'Indicator: Alternative Payee Using Account Number'
  Xlfza : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'ServAgntProcGrp'
  @sap.quickinfo : 'Service agent procedure group'
  Dlgrp : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax type'
  Fityp : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax number type'
  @sap.quickinfo : 'Tax Number Type'
  Stcdt : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Social Insurance'
  @sap.quickinfo : 'Registered for Social Insurance'
  Regss : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Social Ins. Code'
  @sap.quickinfo : 'Activity Code for Social Insurance'
  Actss : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Number 3'
  Stcd3 : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Number 4'
  Stcd4 : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Number 5'
  Stcd5 : String(60);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax split'
  @sap.quickinfo : 'Tax Split'
  Ipisp : Boolean;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Tax Base'
  @sap.quickinfo : 'Tax Base in Percentage'
  Taxbs : String(1);
  @sap.label : 'Profession'
  Profs : String(30);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Stat.grp, agent'
  @sap.quickinfo : 'Shipment: statistics group, transportation service agent'
  Stgdl : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ext. manufacturer'
  @sap.quickinfo : 'External manufacturer code name or number'
  Emnfr : String(10);
  @sap.label : 'URL'
  @sap.quickinfo : 'Uniform resource locator'
  Lfurl : String(132);
  @sap.label : 'Rep''s Name'
  @sap.quickinfo : 'Name of Representative'
  J1kfrepre : String(10);
  @sap.label : 'Type of Business'
  J1kftbus : String(30);
  @sap.label : 'Type of Industry'
  J1kftind : String(30);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Confirmation status'
  @sap.quickinfo : 'Status of Change Authorization (Central)'
  Confs : String(1);
  @sap.display.format : 'Date'
  @sap.label : 'Confirmation date'
  @sap.quickinfo : 'Date on Which the Changes Were Confirmed'
  Updat : Date;
  @sap.label : 'Confirmation time'
  @sap.quickinfo : 'Time of Last Change Confirmation'
  Uptim : Time;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Central del.block'
  @sap.quickinfo : 'Central deletion block for master record'
  Nodel : Boolean;
  @sap.display.format : 'Date'
  @sap.label : 'QM System Valid To'
  @sap.quickinfo : 'Validity date of certification'
  Qssysdat : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Relevant for POD'
  @sap.quickinfo : 'Supplier indicator relevant for proof of delivery'
  Podkzb : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Office'
  @sap.quickinfo : 'Account Number of Master Record of Tax Office Responsible'
  Fisku : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Number'
  @sap.quickinfo : 'Tax Number at Responsible Tax Authority'
  Stenr : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Carrier confirmation'
  @sap.quickinfo : 'Carrier confirmation is expected'
  CarrierConf : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Micro Company'
  @sap.quickinfo : 'Micro company indicator'
  MinComp : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Terms of Liability'
  TermLi : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'CRC number'
  CrcNum : String(25);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Purpose Completed'
  @sap.quickinfo : 'Business Purpose Completed Flag'
  CvpXblck : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'RG Number'
  Rg : String(11);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Issued by'
  Exp : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'State'
  Uf : String(2);
  @sap.display.format : 'Date'
  @sap.label : 'RG Issuing Date'
  Rgdate : Date;
  @sap.display.format : 'NonNegative'
  @sap.label : 'RIC Number'
  Ric : String(11);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Foreign National Reg'
  @sap.quickinfo : 'Foreign National Registration'
  Rne : String(10);
  @sap.display.format : 'Date'
  @sap.label : 'RNE Issuing Date'
  Rnedate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'CNAE'
  Cnae : String(7);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Legal Nature'
  Legalnat : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'CRT Number'
  Crtn : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'ICMS Taxpayer'
  Icmstaxpay : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Industry Main Type'
  Indtyp : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Declaration Type'
  Tdt : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Company Size'
  Comsize : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Decl. Reg. PIS/COFI'
  @sap.quickinfo : 'Declaration Regimen for PIS/COFINS'
  Decregpc : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : ''
  @sap.quickinfo : 'Dataelement Exstensibility for Supplier'
  Lfa1EewSupp : String(1);
  @sap.unit : 'JScCurrency'
  @sap.label : 'Capital Amount'
  JScCapital : Decimal(16, 3);
  @sap.label : 'Currency'
  @sap.semantics : 'currency-code'
  JScCurrency : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Agency Location Code'
  Alc : String(8);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payment Office'
  PmtOffice : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'PPA Relevant'
  @sap.quickinfo : 'Vendor is PPA relevant'
  PpaRelevant : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Processor group'
  Psofg : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'SLAPrepr.Proced'
  @sap.quickinfo : 'Subledger acct preprocessing procedure'
  Psois : String(20);
  @sap.label : 'Name'
  @sap.quickinfo : 'Name 1'
  Pson1 : String(35);
  @sap.label : 'Name 2'
  Pson2 : String(35);
  @sap.label : 'Name 3'
  Pson3 : String(35);
  @sap.label : 'First Name'
  Psovn : String(35);
  @sap.label : 'Title'
  Psotl : String(20);
  @sap.display.format : 'UpperCase'
  @sap.label : 'House number'
  @sap.quickinfo : 'House number: is no longer used from Release 4.6B'
  Psohs : String(6);
  @sap.label : 'Street'
  @sap.quickinfo : 'Street: No longer used from Release 4.6B'
  Psost : String(28);
  @sap.display.format : 'Date'
  @sap.label : 'Date limit: Ext. ID'
  @sap.quickinfo : 'Date Limit for External Document Identification'
  BorgrDatun : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Annual repetition'
  @sap.quickinfo : 'Annual Repetition of Date Limit'
  BorgrYeaun : Boolean;
  @sap.label : 'Street'
  Addr2Street : String(60);
  @sap.label : 'House Number'
  Addr2HouseNum : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Postal Code'
  @sap.quickinfo : 'City postal code'
  Addr2Post : String(10);
  @sap.label : 'City'
  Addr2City : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Country Key'
  Addr2Country : String(3);
  @sap.label : 'Business Type'
  @sap.quickinfo : 'Subcontractor''s Business Type'
  Categ : String(12);
  @sap.label : 'Prtnr''s Trading Name'
  @sap.quickinfo : 'Partner''s Trading Name'
  PartnerName : String(30);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Partner''s UTR'
  @sap.quickinfo : 'Partner''s Unique Tax Reference (UTR)'
  PartnerUtr : String(20);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Verification Status'
  Status : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Verification Number'
  Vfnum : String(20);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Status'
  @sap.quickinfo : 'Tax Status of the Verified Subcontractor'
  Vfnid : String(1);
  @sap.label : 'Comp. House Reg. No.'
  @sap.quickinfo : 'Companies House Registration Number'
  Crn : String(8);
  @sap.display.format : 'UpperCase'
  @sap.label : 'ECC No.'
  @sap.quickinfo : 'ECC Number'
  J1iexcd : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Excise Reg. No.'
  @sap.quickinfo : 'Excise Registration Number'
  J1iexrn : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Excise Range'
  J1iexrg : String(60);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Excise Division'
  J1iexdi : String(60);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Commissionerate'
  @sap.quickinfo : 'Excise Commissionerate'
  J1iexco : String(60);
  @sap.display.format : 'UpperCase'
  @sap.label : 'CST number'
  @sap.quickinfo : 'Central Sales Tax Number'
  J1icstno : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'LST number'
  @sap.quickinfo : 'Local Sales Tax Number'
  J1ilstno : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'PAN'
  @sap.quickinfo : 'Permanent Account Number'
  J1ipanno : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Exc.Tax Ind. Vendor'
  @sap.quickinfo : 'Excise tax indicator for vendor'
  J1iexcive : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'SSI status'
  @sap.quickinfo : 'SSI Status'
  J1issist : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Type of Vendor'
  J1ivtyp : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'CENVAT'
  @sap.quickinfo : 'CENVAT Scheme Participant'
  J1ivencre : Boolean;
  @sap.display.format : 'Date'
  @sap.label : 'Obsolete'
  @sap.quickinfo : '(Obsolete) Last Changed On – do not use'
  Aedat : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Obsolete'
  @sap.quickinfo : '(Obsolete) Changed by the user – do not use'
  Usnam : String(12);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Service Tax Regn.No.'
  @sap.quickinfo : 'Service Tax Registration Number'
  J1isern : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'PAN Reference Number'
  J1ipanref : String(40);
  @sap.display.format : 'Date'
  @sap.label : 'PAN Valid From Date'
  J1ipanvaldt : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Vendor for customs'
  @sap.quickinfo : 'Customs Vendor'
  J1iCustoms : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Deductee Ref No.'
  @sap.quickinfo : 'Deductee Reference Number'
  J1idedref : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'GST Ven Class.'
  @sap.quickinfo : 'Vendor Classification for GST'
  VenClass : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Entity Type'
  @sap.quickinfo : 'Entity Code'
  EntyCd : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Resident Country'
  ResCntry : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Region of Residence'
  ResRegion : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Company Code'
  Ccode : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Public entity'
  @sap.quickinfo : 'Vendor is public entity?'
  Entpub : Boolean;
  @sap.label : 'Deed public use'
  @sap.quickinfo : 'Deed of public use'
  Escrit : String(80);
  @sap.display.format : 'Date'
  @sap.label : 'SS certif.valid.date'
  @sap.quickinfo : 'Social Security certificate validity date'
  Dvalss : Date;
  @sap.label : 'SS certificate form'
  @sap.quickinfo : 'Social Security certificate submission form'
  Frmcss : String(50);
  @sap.display.format : 'NonNegative'
  @sap.label : 'CAE code'
  Codcae : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Absence of debt'
  Ausdiv : Boolean;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Transportation Chain'
  TransportChain : String(10);
  @sap.label : 'Staging Time'
  @sap.quickinfo : 'Staging Time in Days'
  StagingTime : Decimal(3, 0);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scheduling Procedure'
  SchedulingType : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Rel. for Coll. No.'
  @sap.quickinfo : 'Cross Docking: Relevant for Collective Numbering'
  SubmiRelevant : Boolean;
};

