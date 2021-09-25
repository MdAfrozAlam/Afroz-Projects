

    export interface Category {
        code: string;
        name: string;
    }

    export interface Image {
        format: string;
        imageType: string;
        url: string;
    }

    export interface Price {
        currencyIso: string;
        formattedValue: string;
        priceType: string;
        value: number;
    }

    export interface PriceRange {
    }

    export interface Stock {
        stockLevelStatus: string;
    }

    export interface Product {
        availableForPickup: boolean;
        baseProduct: string;
        code: string;
        images: Image[];
        isAvailableForExpress: boolean;
        multidimensional: boolean;
        name: string;
        orderType: string;
        price: Price;
        priceRange: PriceRange;
        stock: Stock;
        url: string;
        variantType: string;
        averageRating?: number;
        summary: string;
        description: string;
    }

    export interface Suggestion {
        value: string;
    }

    export interface RootObject {
        categories: Category[];
        products: Product[];
        searchTerm: string;
        suggestions: Suggestion[];
    }



