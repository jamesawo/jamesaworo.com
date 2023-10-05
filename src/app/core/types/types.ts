export interface Result {
    acknowledged: boolean;
    insertedId?: string;
}

export interface CertProps {
    title: string;
    verificationUrl: string;
}
