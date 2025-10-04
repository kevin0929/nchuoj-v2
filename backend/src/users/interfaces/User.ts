export interface User {
    id: number;
    student_id: string;
    username: string;
    password: string;
    email: string;
    role?: string;
    created_at?: Date;
    updated_at?: Date;
    last_login_at?: Date | null;
    last_login_ip?: string | null;
}