export type YearRangeType = 'before' | 'after' | 'mid';

export interface IUser {
    id?: number;
    name: string;
    email: string;
    email_verified_at: Date | null;
    password?: string;
    phone?: string | null;
    photo: string | null;
    photoChosen?: string;
    created_at: Date | null;
    updated_at: Date | null;
    roles: string[];
    abilities: string[];
}
