export enum CertStatus {
    COMPLETED = "completed",
    PENDING = "pending",
    IN_VIEW= "ongoing"
}
export interface Result {
    acknowledged: boolean;
    insertedId?: string;
}

export interface CertOrg {
    name: string;
    logo: string;
}

export interface CertProps {
    title: string;
    verificationUrl: string;
    organization: CertOrg,
    status: CertStatus,
    courses: CertProps[],
    date: string;
    expiration: string;
    skills: string[];
}
