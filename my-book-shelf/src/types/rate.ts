export interface RateI {
    _id: string;
    bookId: string;
    rating: number;
    ratedBy: string;
}
export interface CreateRateI {
    bookId: string;
    rating: number;
}
