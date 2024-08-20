interface User {
    kyc: {
        contentType: null | string;
    };
    communitySubFailed: boolean;
    providerFailed: boolean;
    _id: string;
    communitySubWaiting: boolean;
    communitySub: boolean;
    deleted: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: null | string;
    mobile: null | string;
    status: null | string;
    address: null | string;
    profilePhoto: null | string;
    bio: null | string;
    verified: boolean;
    communitySubscribed: boolean;
    averagePrice: number;
    provider: boolean;
    posts: any[];
    profilePhotoOrVideo: null | string;
    subscriptions: any[];
    createdSubscriptions: any[];
    niche: null | string;
    totalBalance: number;
    totalEarnings: number;
    totalWithdrawn: number;
    deposits: any[];
    ratings: any[];
    withdrawnFunds: any[];
    earnings: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}