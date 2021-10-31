/*
 *  TypeScript Interface Definition for a vyuha JavaScript object.
 *  Created On 31 October 2021
 */

export interface VyuhaImpl {
    name: string
    type: string
    children: VyuhaImpl[]
    content: string
}
