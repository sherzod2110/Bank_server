import { Exception } from "../../exceptions/ErrorHandler.js"
import { complex, complexid, deletecomplex, getcomplexcompanyid, postcomplex, Roomid } from "./model.js"

export default {
  COMPLEXID: async(req, res, next) => {
    const { id } = req.params;
    const foundRoomId = await Roomid(id)
      .catch((err) => next(new Exception(err.message, 503)));

      const foundComplexId = await complexid(id)
      .catch((err) => next(new Exception(err.message, 503)));

    if (foundComplexId) res.json({
      status: 200,
      room: foundRoomId,
      complex: foundComplexId
    });

  },
  GETCOMPLEXCOMPANYID: async(req, res, next) => {
    const { id } = req.params;

    const foundComplex = await getcomplexcompanyid(id)
      .catch((err) => next(new Exception(err.message, 503)));

    if (foundComplex) res.json(foundComplex);
  },
  GETCOMPLEX: async (req, res) => {
    const allComplex = await complex()
    .catch(err => new Exception(err.message, err.status))

    if(allComplex) res.json(allComplex)
  },
  POSTCOMPLEX: async (req, res) => {
  const { name, companyId  } = req.body

    const addComplex = await postcomplex(name, companyId)
    .catch(err => new Exception(err.message, err.status))
    if(addComplex) res.status(201).json({
        message : "You succesfully add new complex",
        status : 201
    })
  },
  DELETECOMPLEX: async (req, res) => {
    const { id } = req.params
  
      const deleteComplex = await deletecomplex(id)
      .catch(err => new Exception(err.message, err.status))
      if(deleteComplex) res.status(202).json({
          message : "You succesfully delete new complex",
          status : 202
      })
    },
}