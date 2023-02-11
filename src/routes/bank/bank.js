import { Exception } from "../../exceptions/ErrorHandler.js";
import { deletebank, getbank, getbankid, getbankid2, postbank } from "./model.js";

export default {
  GETBANK: async (req, res) => {
    const allBanks = await getbank().catch(
      (err) => new Exception(err.message, err.status)
    );

    if (allBanks) res.json(allBanks);
  },
  GETBANKID: async (req, res) => {
    const { id } = req.params
    
    const allBanks = await getbankid(id).catch(
      (err) => new Exception(err.message, err.status)
    );

    if (allBanks) res.json(allBanks);
  },
  GETBANKID: async (req, res) => {
    const { id } = req.params
    
    const allBanks = await getbankid2(id).catch(
      (err) => new Exception(err.message, err.status)
    );

    if (allBanks) res.json(allBanks);
  },
  POSTBANK: async (req, res) => {
    const { name, sum, year, percent } = req.body;

    const postBank = await postbank(name, sum, year, percent).catch(
      (err) => new Exception(err.message, err.status)
    );

    if (postBank)
      res.status(201).json({
        message: "You succesfully add new bank",
        status: 201,
      });
  },
  DELETEBANK: async (req, res) => {
    const { id } = req.params;
    const deleteBank = await deletebank(id).catch(
      (err) => new Exception(err.message, err.status)
    );

    if (deleteBank) res.status(202).json({
      message: "You succesfully delete company",
      status: 202
    })
  },
};
