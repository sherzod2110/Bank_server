import { Exception } from "../../exceptions/ErrorHandler.js";
import { deleteroom, getroom, getroomcl, getroomid, postroom } from "./model.js";

export default {
  GETROOM: async (req, res) => {
    const allRooms = await getroom().catch(
      (err) => new Exception(err.message, err.status)
    );

    if(allRooms) res.json(allRooms)
  },
  GETROOMCL: async (req, res) => {
    const allRooms = await getroomcl().catch(
      (err) => new Exception(err.message, err.status)
    );

    if(allRooms) res.json(allRooms)
  },
  GETROOMID: async (req, res) => {
    const {id} = req.params
    const allRooms = await getroomid(id).catch(
      (err) => new Exception(err.message, err.status)
    );

    if(allRooms) res.json(allRooms)
  },
  POSTROOM: async (req, res) => {

    const { room_number, room_meter_square, room_sum_square, complex_id} = req.body;

    const postRooms = await postroom(room_number, room_meter_square, room_sum_square, complex_id)
        .catch(err => new Exception(err.message, err.status))

        if(postRooms) res.status(201).json({
            message: "You succesfully add new room",
            status: 201
        })
  },
  DELETEROOM: async (req, res) => {
    const {id} = req.params

    const deleteRoom = await deleteroom(id)
        .catch(err => new Exception(err.message, err.status))

        if(deleteRoom) res.status(202).json({
            message: "You succesfully delete room",
            status: 202
        })
    
  }
};



