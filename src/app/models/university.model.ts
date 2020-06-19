export interface Grade {
    a: number;
    b: number;
    c: number;
}
export interface University {
    id: string;
    name: string;
    info: string;
    type: string;
    scores: Grade;
}
