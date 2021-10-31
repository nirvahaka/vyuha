/*
 *  Validates a given schema using Joi schema validator.
 *  Created On 25 October 2021
 */

import { VyuhaImpl } from './interface.js'
import schema from './schema.js'

const validateRecursively = async (node: VyuhaImpl) => {
    try {
        await schema.validateAsync(node)
    } catch (err) {
        console.log(err)
        console.log(node)
        return
    }

    if (node.type == 'directory') {
        if (node.children)
            for (const n of node.children) await validateRecursively(n)
    } else {
        throw new Error('This feature will be implemented in a future version.')
    }
}

export default async (vyuha: VyuhaImpl[]): Promise<VyuhaImpl[]> => {
    for (const node of vyuha) await validateRecursively(node)

    return vyuha
}
