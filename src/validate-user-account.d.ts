export interface ValidationResponse {
    success?: boolean;
}
export interface ValidateUserAccountProps {
    id: string | number;
    Company: string;
    ARDivisionNo: string;
    CustomerNo: string;
}
export declare function validateUserAccount({ id, Company, ARDivisionNo, CustomerNo }: ValidateUserAccountProps): Promise<boolean>;
