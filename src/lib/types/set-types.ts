export type Photo = {
    link: string;
    width?: number;
    height?: number;
    altText: string;
};

export type SetMetaData = {
    name: string;
    subtitle?: string;
    legoId: string;
    legoTheme: string;
    legoSubtheme?: string;
    dateReleased: string;
    dates: string[];
    pieces: number;
    bricksetLink: string;
    heroPhotoIndex: number;
    builtImage: string;
    photos: Photo[];
    featured?: boolean;
};

export type Set = {
    metadata: SetMetaData;
    name: string;
};
