export interface BookI {
    price: { current: number; original?: number };
    stock: { physical: number; audio?: string; eBook?: string };
    id: string;
    title: string;
    author: string;
    description: string;
    keywords: string[];
    category?: string;
    contributedBy?: string;
    publishedDate: string;
}
