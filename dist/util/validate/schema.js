/*
 *  Joi schema definition to validate a vyuha JavaScript object.
 *  Created On 25 October 2021
 */
import Joi from 'joi';
const entry = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid('directory', 'file').required(),
});
export default Joi.array()
    .min(1)
    .items(Joi.object({
    ...entry,
    ...{
        children: Joi.array().min(1).items(entry),
    },
}));
