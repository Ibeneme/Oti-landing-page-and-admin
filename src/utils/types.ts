export interface User {
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


interface UserStats {
    newUsers: number;
    verifiedUsers: number;
    providers: number;
    subscriptionsCreated: number;
    communitySubscribed: number;
    totalWithdrawn: number;
    totalDeposited: number;
}

export interface Stats {
    ["24h"]: UserStats;
    ["7days"]: UserStats;
    ["6months"]: UserStats;
    ["1year"]: UserStats;
}

export interface Course {
    _id: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    category: string;
    progress: Progress[];
    sections: Section[];
    __v: number;
}

export interface Progress {
    user: {
        firstName: string;
        lastName: string;
        username: string;
    };
    userId: string;
    count: number;
    _id: string;
}

export interface Section {
    video: Video;
    title: string;
    description: string;
    image: string;
    _id: string;
    subsections: Subsection[];
}

export interface Video {
    id: null | string;
    url: null | string;
}

export interface Subsection {
    title: string;
    description: string;
    video: string;
    highlights: any[];
    _id: string;
}

export interface Author {
    _id: string;
    firstName: string;
    lastName: string;
}

export interface Comment {
    user: string;
    admin: string;
    sender: string;
    msg: string;
    _id: string;
    timestamp: string;
}

export interface Post {
    _id: string;
    title: string;
    tradeGoneWrong: boolean;
    content: string;
    author: Author;
    tags: any[];
    authorLastName: string;
    authorFirstName: string;
    tp1: number | null;
    tp2: number | null;
    tp3: number | null;
    tp4: number | null;
    tp5: number | null;
    sl: number | null;
    pair: string;
    images: string[];
    views: number;
    updatedAt: string;
    subscriptionId: string;
    comments: Comment[];
    createdAt: string;
    __v: number;
}

export interface Response {
    authorId: string;
    posts: Post[];
}