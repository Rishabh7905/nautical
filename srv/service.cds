using {api_url} from '../db/api_url';
using {businessPartner} from '../db/business_partner';
using {class_of_vessel_master} from '../db/class_of_vessel_master';
using {country_master} from '../db/country_master';
using {maintain_group} from '../db/maintain_group';
using {release_strategy_voyage} from '../db/release_strategy_ master_table_for_voyage';
using {release_strategy_chartering} from '../db/release_strategy_for_chartering';
using {NAUTI_MAS} from '../db/voyage_master_data';
using {create_voyage} from '../db/create_voyage_schema';
using { voyage_approval } from '../db/approval_voyage_schema';
using {create_chartering} from '../db/chartering_schema';
using {submit_quotation} from '../db/submit_quotation_schema';
using {compare_quotation} from '../db/compare_quotaion_schema';
using ZBTP_NAUTI_CREATEVOYAGE_CDS from './external/ZBTP_NAUTI_CREATEVOYAGE_CDS.cds';
using ZBTP_NAUTI_MARINE_DM_CDS from './external/ZBTP_NAUTI_MARINE_DM_CDS.cds';
using ZBTP_NAUTI_VOY_DOC_UPD_CDS from './external/ZBTP_NAUTI_VOY_DOC_UPD_CDS.cds';
using ZBTP_NAUTICAL_MARIDISTANCE_CDS from './external/ZBTP_NAUTICAL_MARIDISTANCE_CDS.cds';
using NAUTINAUTICALCV_SRV  from './external/NAUTINAUTICALCV_SRV.cds';
using {NAUTI_VENDOR} from '../db/vendor_data_syncing';
using NAUTIVENDOR_BTP_SRV from './external/NAUTIVENDOR_BTP_SRV.cds';


service Nautical{
    entity EPATH as projection on api_url.EPATH;
    entity BP_MAS_DASH as projection on businessPartner.BP_MAS_DASH;
    entity CLASS as projection on class_of_vessel_master.CLASS;
    entity ZCOUNTRY as projection on country_master.ZCOUNTRY;
    entity ZUSER as projection on maintain_group.ZUSER;
    entity ZVOY_RELVoyage as projection on release_strategy_voyage.ZVOY_REL;
    entity ZVOY_RELChartering as projection on release_strategy_chartering.ZVOY_REL;
    entity VOYTYP as projection on NAUTI_MAS.VOYTYP;
    entity BidTYP as projection on NAUTI_MAS.BIDMASTER;
    entity CARTYP as projection on NAUTI_MAS.CARTYP;
    entity CURR as projection on NAUTI_MAS.CURR;
    entity MAS as projection on NAUTI_MAS.BIDMASTER;
    entity NAVOYGUOM as projection on NAUTI_MAS.NAVOYGUOM;
    entity NAVOYGC as projection on NAUTI_MAS.NAVOYGC;
    entity EVENT_MAS as projection on NAUTI_MAS.EVENT_MAS;
    entity REF_DOC_S as projection on NAUTI_MAS.REF_DOC_S;
    entity NAVOYGH as projection on create_voyage.NAVOYGH;
    entity NAVOYGIP as projection on create_voyage.NAVOYGIP;
    entity NAVOYGCIT as projection on create_voyage.NAVOYGCIT;
    entity VOYAG_APPR as projection on voyage_approval.VOYAG_APPR;
    entity CHARTREQ as projection on create_chartering.CHARTREQ;
    entity ZCHAT_VEN as projection on create_chartering.ZCHAT_VEN;
    entity CHAT_APPR as projection on create_chartering.CHAT_APPR;
    entity VEND_BIDH as projection on submit_quotation.VEND_BIDH;
    entity VEND_BID as projection on submit_quotation.VEND_BID;
    entity BID_SCORE as projection on compare_quotation.BID_SCORE;
    entity VEND_FBID as projection on compare_quotation.VEND_FBID; 
    entity ZPORT as projection on NAUTI_MAS.ZPORT; 
    entity LFA1 as projection on NAUTI_VENDOR.LFA1;
    entity Newtable as projection on NAUTI_VENDOR.Newtable;
    entity ADR6 as projection on NAUTI_VENDOR.ADR6;
    entity ADRC as projection on NAUTI_VENDOR.ADRC;

   entity BidTypeSet as projection on NAUTINAUTICALCV_SRV.BidTypeSet;
    

 
    entity ZBTP_NAUTI_CreateVoyage as projection on ZBTP_NAUTI_CREATEVOYAGE_CDS.ZBTP_NAUTI_CreateVoyage
    {        key Vlegn, Portc, Portn, Pdist, Medst, Vspeed, Ppdays, Vsdays, Vetad, Vetat, Vetdd, Vetdt, Vwead, Pstat, Matnr, Maktx, Cargs, Cargu, Othco, Frcost, Totco     }    
;
 entity ZBTP_NAUTI_Marine_DM as projection on ZBTP_NAUTI_MARINE_DM_CDS.ZBTP_NAUTI_Marine_DM
    {        key start_port, key end_port, key route_id, key location_id, latitude, longitude     }    
;
 entity ZBTP_Nauti_Voy_DOC_UPD as projection on ZBTP_NAUTI_VOY_DOC_UPD_CDS.ZBTP_Nauti_Voy_DOC_UPD
    {        key sl_no, key voyno, key filename, file_content     }    
;
entity ZBTP_NAUTICAL_MariDistance as projection on ZBTP_NAUTICAL_MARIDISTANCE_CDS.ZBTP_NAUTICAL_MariDistance
    {         from_port,  to_port,  distance     }    
;
 entity xNAUTIxvend_btp as projection on NAUTIVENDOR_BTP_SRV.xNAUTIxvend_btp
    {        key Lifnr, Land1, Name1, Name2, Name3, Name4, Ort01, Ort02, Pfach, Pstl2, Pstlz, Sortl, Stras, Adrnr, Mcod1, Mcod2, Mcod3, Anred, Bahns, Bbbnr, Bbsnr, Begru, Brsch, Bubkz, Datlt, Dtams, Dtaws, Erdat, Ernam, Esrnr, Konzs, Ktokk, Kunnr, Lnrza, Loevm, Sperr, Sperm, Spras, Stcd1, Stcd2, Stkza, Stkzu, Telbx, Telf1, Telf2, Telfx, Teltx, Telx1, Xcpdk, Xzemp, Vbund, Fiskn, Stceg, Stkzn, Sperq, Gbort, Gbdat, Sexkz, Kraus, Revdb, Qssys, Ktock, Pfort, Werks, Ltsna, Werkr, Plkal, Duefl, Txjcd, Sperz, Scacd, Sfrgr, Lzone, Xlfza, Dlgrp, Fityp, Stcdt, Regss, Actss, Stcd3, Stcd4, Stcd5, Ipisp, Taxbs, Profs, Stgdl, Emnfr, Lfurl, J1kfrepre, J1kftbus, J1kftind, Confs, Updat, Uptim, Nodel, Qssysdat, Podkzb, Fisku, Stenr, CarrierConf, MinComp, TermLi, CrcNum, CvpXblck, Rg, Exp, Uf, Rgdate, Ric, Rne, Rnedate, Cnae, Legalnat, Crtn, Icmstaxpay, Indtyp, Tdt, Comsize, Decregpc, Lfa1EewSupp, JScCapital, JScCurrency, Alc, PmtOffice, PpaRelevant, Psofg, Psois, Pson1, Pson2, Pson3, Psovn, Psotl, Psohs, Psost, BorgrDatun, BorgrYeaun, Addr2Street, Addr2HouseNum, Addr2Post, Addr2City, Addr2Country, Categ, PartnerName, PartnerUtr, Status, Vfnum, Vfnid, Crn, J1iexcd, J1iexrn, J1iexrg, J1iexdi, J1iexco, J1icstno, J1ilstno, J1ipanno, J1iexcive, J1issist, J1ivtyp, J1ivencre, Aedat, Usnam, J1isern, J1ipanref, J1ipanvaldt, J1iCustoms, J1idedref, VenClass, EntyCd, ResCntry, ResRegion, Ccode, Entpub, Escrit, Dvalss, Frmcss, Codcae, Ausdiv, TransportChain, StagingTime, SchedulingType, SubmiRelevant     }    
;
       
}
