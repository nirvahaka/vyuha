/*
 *  Takes a vyuha JavaScript object and creates the directory
 *  structure on the filesystem.
 *  Created On 31 October 2021
 */

import { Command } from 'commander'

export default new Command()
    .name('create')
    .description(
        'takes a vyuha JSON file & creates the\ndirectory structure on the filesystem',
    )
    .argument('<file>', 'vyuha.json file to read from')
    .argument('<dir>', 'directory where filesystem is to be created')
    .action(async file => {
        console.log(file)
    })
