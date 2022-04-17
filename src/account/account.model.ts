import { Membership } from "src/membership/membership.model";

export interface Account{
    id: BigInt,
    email: string,
    password: string,
    phoneNumber: string,
    membership: Membership,
    status: accountStatus,
    area: accountArea
}

export enum accountStatus{
    ACTIVE = 'ACTIVE',
    DISABLE = 'DISABLE'
}

export enum accountArea{
    SOUTH_KOREA = 'SOUTH_KOREA',
    USA = 'USA'
}