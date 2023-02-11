import { Router } from "express";
import bank from "./bank/bank.js";
import company from "./company/company.js";
import complex from "./complex/complex.js";
import room from "./room/room.js";
import admin from "./admin/admin.js";

const router = Router();

export default router
    .post('/login', admin.POSTADMIN)

    .get('/company/:id', company.GETCOMPANYID)
    .get('/companyComplex', company.GETCOMPANYCOMPLEX)
    .get('/companiesGet',  company.GETCOMPANY)
    .post('/compamiesPost', company.POSTCOMPANY)
    .delete('/companiesDelete/:id', company.DELETECOMPANY)
    
    .get('/complexId/:id', complex.COMPLEXID)
    .get('/complexCompanyId/:id', complex.GETCOMPLEXCOMPANYID)
    .get('/complexGet', complex.GETCOMPLEX)
    .post('/complexPost', complex.POSTCOMPLEX)
    .delete('/complexDelete/:id', complex.DELETECOMPLEX)

    .get('/bankGetId/:id', bank.GETBANKID)
    .get('/bankGet', bank.GETBANK)
    .get('/bankgett/:id', bank.GETBANKID)
    .post('/bankPost', bank.POSTBANK)
    .delete('/bankDelete/:id', bank.DELETEBANK)
    
    .get('/roomGetId/:id', room.GETROOMID)
    .get('/roomGetIdcomplex/:id', room.GETROOMCL)
    .get('/roomGet', room.GETROOM)
    .post('/roomPost', room.POSTROOM)
    .delete('/roomDelete/:id', room.DELETEROOM)
