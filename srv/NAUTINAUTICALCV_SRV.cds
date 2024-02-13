using NAUTINAUTICALCV_SRV from './external/NAUTINAUTICALCV_SRV.cds';

service NAUTINAUTICALCV_SRVSampleService {
    @readonly
    entity BidTypeSet as projection on NAUTINAUTICALCV_SRV.BidTypeSet
    {        Ddtext, key DomvalueL     }    
;
}