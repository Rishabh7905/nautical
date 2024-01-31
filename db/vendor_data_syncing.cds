namespace NAUTI_VENDOR;
 
entity LFA1{
    LIFNR:String(10);  //Account no. of vendor
    ANRED:String(15);        // title
    ADRNR:String(10);        //Address
    NAME1:String(35);       //Name
    NAME2:String(35);
    NAME3:String(35);
    STRAS:String(35);       //Street
    PSTLZ:String(10);       //postal code
    ORT01:String(35);      //city
    LAND1:String(3);      //country
    REGIO:String(3);      //region
    TELF1:String(16);      //telephone 1
    TELF2:String(16);      //telephone2
    TELFX:String(31);      // fax Number
    ERDAT:Date;      // created on
    SPRAS:String(15);      //language
    ADR6 : Association to one ADR6 on ADR6.LFA1 = $self;
    ADRC : Association to one ADRC on ADRC.LFA1 = $self;
 
}
entity ADR6{
    ADDRNUMBER: String(10); // Address Number
    SMTP_ADNR: String(241); //Email Address
    LFA1: Association to one LFA1;
 
}
entity ADRC{
    ADDRNUMBER: String(10); // Address Number
    DATE_TO: Date; //valid to Date in current release only 99991231 possible
    STR_SUPPL1: String(40); //street1
    STR_SUPPL2: String(40); //street2
    STREET: String(60); //Street
    SORT1: String(20);  //Search Item 1
    TIME_ZONE: String(6); //TIme Zone
    HOUSE_NUM1: String(10); //House Number
    LFA1: Association to one LFA1;
}



entity Newtable {
    key ID : UUID @Core.Computed;
    key LIFNR: String(10); // Account no. of vendor from LFA1
    ANRED: String(15); // Title from LFA1
    ADRNR: String(100); // Address from LFA1
    NAME1: String(35); // Name from LFA1
    STREET: String(60); // Street from ADRC
    PSTLZ: String(10); // Postal code from LFA1
    ORT01: String(35); // City from LFA1
    LAND1: String(3); // Country from LFA1
    REGIO: String(3); // Region from LFA1
    TELF1: String(16); // Telephone 1 from LFA1
    TELF2: String(16); // Telephone 2 from LFA1
    TELFX: String(31); // Fax Number from LFA1
    ERDAT: Date; // Created on from LFA1
    SPRAS: String(15); // Language from LFA1
    SMTP_ADNR: String(241); // Email Address from ADR6
    DATE_TO: Date; // Valid to Date from ADRC
    STR_SUPPL1: String(40); // Street1 from ADRC
    STR_SUPPL2: String(40); // Street2 from ADRC
    SORT1: String(20); // Search Item 1 from ADRC
    TIME_ZONE: String(6); // Time Zone from ADRC
    HOUSE_NUM1: String(10); // House Number from ADRC
}

 