export interface IAddress {
    street: string;
    number: number;
    district: string;
    state: { id: number; name: string };
    city: { id: number; name: string };
}

export interface ICustomer {
    id?: number;
    name: string;
    photo: string | null;
    sex: string;
    phone_1: string | null;
    phone_2: string | null;
    birthday: Date | null;

    raw_sex: string;
    birthday_formatted: string;
    raw_phone1: string;
    raw_phone2: string;
    updated_at: string;
    created_at: string;

    address_id: number;
    address: IAddress;

    photoChosen?: string;
}
