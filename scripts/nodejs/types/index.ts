export type DataType = {
    [key: string]: {
        type: string;
        name: string;
        model: string;
        price: number;
        collision: boolean;
    };
};

export type Model = {
    type: string;
    name: string;
    model: string;
    price: number;
    collision: boolean;
};

export type Data = {
    [key: string]: Model;
};