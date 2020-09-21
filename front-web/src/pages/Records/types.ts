export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
    id: number;
    name: string;
    age: number;
    moment: string;
    gameTitle: string;
    gamePlatform: Platform;
    gameGenreName: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION'