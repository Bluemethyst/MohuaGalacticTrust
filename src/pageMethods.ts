import type { Ref } from 'vue'
import type { HomePageData } from './types'

export function updatePageData(pageData: HomePageData) {
    for (const key in pageData) {
        if (Object.prototype.hasOwnProperty.call(pageData, key)) {
            const element = pageData[key as keyof HomePageData]
            if (element) {
                if (typeof element === 'string') {
                    const el = document.getElementById(key)
                    if (el) {
                        el.innerHTML = element
                    }
                } else if (typeof element === 'object' && key === 'cards') {
                    for (const cardKey in element) {
                        if (Object.prototype.hasOwnProperty.call(element, cardKey)) {
                            const cardElement = element[cardKey as keyof typeof element]
                            const cardTitleEl = document.getElementById(`${cardKey}-title`)
                            const cardDescEl = document.getElementById(`${cardKey}-description`)
                            if (cardTitleEl && cardDescEl) {
                                cardTitleEl.innerHTML = cardElement.title
                                cardDescEl.innerHTML = cardElement.description
                            }
                        }
                    }
                }
            }
        }
    }
}

export function getPageData(pageName: string, pageData: Ref<HomePageData>) {
    fetch(`/page_data/${pageName}.page.json`)
        .then((response) => response.json())
        .then((data) => {
            pageData.value = data
            if (pageData.value) {
                updatePageData(pageData.value)
            }
        })
}
