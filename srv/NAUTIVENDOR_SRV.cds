using NAUTIVENDOR_SRV from './external/NAUTIVENDOR_SRV.cds';

service NAUTIVENDOR_SRVSampleService {
    @readonly
    entity VendorDataSet as projection on NAUTIVENDOR_SRV.VendorDataSet
    {        key Lifnr, PartnerRole, Anred, Name1, Name2, Name3, Sort1, StrSuppl1, StrSuppl2, HouseNum1, Stras, Pstlz, Ort01, Land1, Regio, TimeZone, Spras, Telf1, Telf2, Telfx, SmtpAddr, Erdat, DateTo     }    
;
    @readonly
    entity VendFBidSet as projection on NAUTIVENDOR_SRV.VendFBidSet
    {        Voyno, Lifnr, Zcode, Biddate, Bidtime, key Chrnmin, CodeDesc, Value, Cvalue, Cunit, Chrqsdate, Chrqstime, Chrqedate, Chrqetime, DoneBy, Uname, Stat, Zmode, Zcom     }    
;
    @readonly
    entity VendBidSet as projection on NAUTIVENDOR_SRV.VendBidSet
    {        key Voyno, Lifnr, Zcode, Value, Cvalue, Cunit, key Chrnmin, CodeDesc     }    
;
    @readonly
    entity VendBidHSet as projection on NAUTIVENDOR_SRV.VendBidHSet
    {        key Voyno, key Lifnr, key Chrnmin, Vimono, Vname     }    
;
    @readonly
    entity NAVOYGIPSet as projection on NAUTIVENDOR_SRV.NAVOYGIPSet
    {        key Voyno, Vlegn, Portc, Portn, Pdist, Medst, Vetad, Vetat, Vetdd, Vetdt, Cargs, Cargu     }    
;
    @readonly
    entity NAVOYGHSet as projection on NAUTIVENDOR_SRV.NAVOYGHSet
    {        key Voyno, Voynm, Vessn, Vimo, Voyty, Carty, Curr, Bidtype, Frcost, Frtu     }    
;
}