declare enum VyuhaNodeType {
    directory = 0,
    file = 1
}
export interface VyuhaImpl {
    name: string;
    type: VyuhaNodeType;
    items: VyuhaImpl[];
}
export {};
