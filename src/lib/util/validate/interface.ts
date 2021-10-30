/*
 *  TypeScript Interface Definition for a vyuha JavaScript object.
 *  Created On 31 October 2021
 */

enum VyuhaNodeType {
    directory,
    file,
}

export interface VyuhaImpl {
    name: string
    type: VyuhaNodeType
    items: VyuhaImpl[]
}
