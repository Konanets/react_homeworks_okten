import Joi from "joi";

const carFormValidator=Joi.object({
    model:Joi.string().max(15).min(3).required(),
    price:Joi.number().min(0).max(5000000).required(),
    year:Joi.number().min(1999).max(new Date().getFullYear()).required()
});

export {carFormValidator}