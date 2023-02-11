import Joi from "joi";

export const company = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required()
}).required()

export const complexs = Joi.object({
  complexName: Joi.string().required(),
  companyId: Joi.string().required()
}).required()

export const rooms = Joi.object({
  roomCount: Joi.number().required(),
  xonaMetr: Joi.number().required(),
  roomMuch: Joi.string().required(),
  complexName: Joi.string().required()
}).required()

export const banks = Joi.object({
  name: Joi.string().required(),
  sum: Joi.number().required(),
  year: Joi.number().required(),
  percent: Joi.number().required()
}).required()