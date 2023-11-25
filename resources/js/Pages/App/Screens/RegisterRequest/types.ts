export interface IRegisterRequest {
    id: number;
    email: string;
    phone: string | null;
    created_at: Date | null;
}
