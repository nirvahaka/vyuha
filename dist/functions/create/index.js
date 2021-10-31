/*
 *  Takes a vyuha JavaScript object and creates the directory
 *  structure on the filesystem.
 *  Created On 25 October 2021
 */
import mkdirp from 'mkdirp';
import path from 'path';
import validate from '../../util/validate/index.js';
const loop = async (node, dir) => {
    if (node.type == 'directory') {
        // create this directory
        await mkdirp(path.join(dir, node.name));
        // recurse more!
        if (node.children)
            for (const n of node.children)
                await loop(n, path.join(dir, node.name));
    }
    else {
        throw new Error('This feature will be implemented in a future version.');
    }
};
export const create = async (vyuha, dir) => {
    // validate the vyuha file
    vyuha = await validate(vyuha);
    // create the directory structure
    for (const node of vyuha)
        await loop(node, dir);
};
