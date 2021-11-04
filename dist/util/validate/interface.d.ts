export interface VyuhaImpl {
    name: string;
    type: string;
    children?: VyuhaImpl[];
    content?: string;
}
