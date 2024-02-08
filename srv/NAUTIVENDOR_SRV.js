const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const NAUTIVENDOR_SRV = await cds.connect.to("NAUTIVENDOR_SRV"); 
      srv.on('READ', 'VendorDataSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendFBidSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendBidSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'VendBidHSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'NAVOYGIPSet', req => NAUTIVENDOR_SRV.run(req.query)); 
      srv.on('READ', 'NAVOYGHSet', req => NAUTIVENDOR_SRV.run(req.query)); 
}