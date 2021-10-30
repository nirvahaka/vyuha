#!/usr/bin/env node
/*
 *  Command-line executable that uses vyuha as a library.
 *  Created On 24 October 2021
 */

import cmds from './cmds/index.js'
import logger from './logger/index.js'

// initialize the logger
await logger()

// load the commands
await cmds()
