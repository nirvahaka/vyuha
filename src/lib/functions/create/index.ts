/*
 *  Takes a vyuha JavaScript object and creates the directory
 *  structure on the filesystem.
 *  Created On 25 October 2021
 */

import { promise } from '@vsnthdev/utilities-node'

import { VyuhaImpl } from '../../util/validate/interface.js'
import schema from '../../util/validate/schema.js'

export default async (vyuha: VyuhaImpl[], dir: string): Promise<void> => {
    // validate the schema
    const { returned, err } = await promise.handle(schema.validateAsync(vyuha))

    console.log({
        err,
        returned,
    })

    // create the files & directories
}
