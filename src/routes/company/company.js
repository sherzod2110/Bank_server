import { Exception } from "../../exceptions/ErrorHandler.js";
import {
  companieslex,
  company,
  companyid,
  deletecompany,
  postcompany,
} from "./model.js";

export default {
  GETCOMPANYCOMPLEX: async (req, res) => {
    const allCompanyComplex = await companieslex().catch(
      (err) => new Exception(err.message, err.status)
    );

    if (allCompanyComplex) res.json(allCompanyComplex);
  },
  GETCOMPANY: async (req, res) => {
    const allCompany = await company().catch(
      (err) => new Exception(err.message, err.status)
    );

    if (allCompany) res.json(allCompany);
  },
  GETCOMPANYID: async ( req, res ) => {
    const { id } = req.params;
    const allCompany = await companyid(id).catch(
      (err) => new Exception(err.message, err.status)
    );

    if (allCompany) res.json(allCompany);
  },
  POSTCOMPANY: async ( req, res ) => {
    const { name, img } = req.body;

    const addCompany = await postcompany(name, img).catch(
      (err) => new Exception(err.message, err.status)
    );
    if (addCompany)
      res.status(201).json({
        message: "You succesfully add new company",
        status: 201,
      });
  },
  DELETECOMPANY: async ( req, res ) => {
    const { id } = req.params;

    const deleteCompany = await deletecompany(id).catch(
      (err) => new Exception(err.message, err.status)
    );
    if (deleteCompany)
      res.status(201).json({
        message: "You succesfully delete company",
        status: 201,
      });
  },
};
