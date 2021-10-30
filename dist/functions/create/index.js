/*
 *  Takes a vyuha JavaScript object and creates the directory
 *  structure on the filesystem.
 *  Created On 25 October 2021
 */
import { promise } from '@vsnthdev/utilities-node';
import schema from '../../util/validate/schema.js';
export default async (vyuha, dir) => {
    // validate the schema
    const { returned, err } = await promise.handle(schema.validateAsync(vyuha));
    console.log({
        err,
        returned,
    });
    // create the files & directories
};
