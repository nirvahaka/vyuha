/*
 *  Configures commander.js and initializes commands.
 *  Created On 31 October 2021
 */

import { Command } from 'commander'
import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'

import create from './create/index.js'

const program = new Command()

export default async () => {
    const { name, version } = JSON.parse(
        await fs.readFile(
            path.join(dirname(), '..', '..', '..', 'package.json'),
            'utf-8',
        ),
    )

    program.name(name).version(version).addCommand(create)

    return await program.parseAsync()
}
