import Joi from "joi";

const registrationValidation=Joi.object({
    username:Joi.string().regex(/^[a-z][a-z0-9]{1,19}$/).required(),
    password:Joi.string().regex(/^[a-zA-Z0-9`~!@#$%^&*()\-_=\+\\\/|\'";\.,:?"<>\[\]{}]{2,20}$/).required()
})

export {registrationValidation}