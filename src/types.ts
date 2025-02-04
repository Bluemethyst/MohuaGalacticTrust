export interface Card {
    title: string
    description: string
}

export interface Cards {
    card1: Card
    card2: Card
    card3: Card
    card4: Card
}

export interface HomePageData {
    title: string
    subtitle: string
    cards: Cards
}

export const emptyHomePageData: HomePageData = {
    title: '',
    subtitle: '',
    cards: {
        card1: {
            title: '',
            description: '',
        },
        card2: {
            title: '',
            description: '',
        },
        card3: {
            title: '',
            description: '',
        },
        card4: {
            title: '',
            description: '',
        },
    },
}
