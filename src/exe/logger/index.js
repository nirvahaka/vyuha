/*
 *  Configures itivrutaha command line logger.
 *  Created On 31 October 2021
 */

import chalk from 'chalk'
import itivrutaha from 'itivrutaha'

export let logger

const banner = `${chalk.bold.yellowBright(
    '  __  __',
)}\n${chalk.bold.yellowBright(' /\\ \\/\\ \\')}\n${chalk.bold.yellowBright(
    ' \\ \\ \\_/ |',
)}  A CLI application ⚡ to create, 🔭 validate\n${chalk.bold.yellowBright(
    '  \\ \\___/',
)}   and capture 📂 filesystem structure.\n${chalk.bold.yellowBright(
    '   \\/__/',
)}\n`

export default async () => {
    console.log(banner)

    logger = await itivrutaha.createNewLogger({
        appName: 'vyuha',
        bootLog: false,
        shutdownLog: false,
        theme: {
            string: ':emoji :type :message',
        },
    })
}
