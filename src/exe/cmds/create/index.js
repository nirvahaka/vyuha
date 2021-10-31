/*
 *  Takes a vyuha JavaScript object and creates the directory
 *  structure on the filesystem.
 *  Created On 31 October 2021
 */

import { Command } from 'commander'
import fs from 'fs/promises'
import path from 'path'

import { create } from '../../../../dist/index.js'

export default new Command()
    .name('create')
    .description(
        'takes a vyuha JSON file & creates the\ndirectory structure on the filesystem',
    )
    .argument('<file>', 'vyuha.json file to read from')
    .argument('<dir>', 'directory where filesystem is to be created')
    .action(async (file, dir) => {
        // check if the given directory exists
        // check if the directory is empty
        // read the JSON file
        file = path.resolve(file)
        const contents = await fs.readFile(file, 'utf-8')
        const vyuha = JSON.parse(contents)

        // create the filesystem structure
        await create(vyuha, path.resolve(dir))
    })
