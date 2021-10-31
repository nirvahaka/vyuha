/*
 *  Joi schema definition to validate a vyuha JavaScript object.
 *  Created On 25 October 2021
 */
import Joi from 'joi';
export default Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid('directory', 'file').required(),
    children: Joi.array().min(1).when('type', {
        is: 'file',
        then: Joi.forbidden(),
    }),
    content: Joi.string().when('type', {
        is: 'directory',
        then: Joi.forbidden(),
    }),
});
