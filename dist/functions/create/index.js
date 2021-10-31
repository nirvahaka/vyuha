/*
 *  Takes a vyuha JavaScript object and creates the directory
 *  structure on the filesystem.
 *  Created On 25 October 2021
 */
import fs from 'fs/promises';
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
        // write the file and it's contents
        const content = node.content || '';
        await fs.writeFile(path.join(dir, node.name), content);
    }
};
export const create = async (vyuha, dir) => {
    // validate the vyuha file
    vyuha = await validate(vyuha);
    // create the directory structure
    for (const node of vyuha)
        await loop(node, dir);
};
