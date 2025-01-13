type Options = {
    canLoadMore?: () => boolean
    loadMore: () => void
    scrollingEl: HTMLElement | Window
    throttleTime?: number
    distanceFromBottomForLoad?: number
}

type Callback<T extends unknown[]> = (...args: T) => void

type ThrottledFunction<T extends unknown[]> = (...args: T) => void

function throttle<T extends unknown[]>(
    fn: Callback<T>,
    wait: number
): ThrottledFunction<T> {
    let lastCallTime: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    return function (...args: T) {
        const now = Date.now()

        if (lastCallTime === null || now - lastCallTime >= wait) {
            lastCallTime = now
            fn(...args)
        } else if (!timeoutId) {
            const remainingTime = wait - (now - lastCallTime)
            timeoutId = setTimeout(() => {
                lastCallTime = Date.now()
                timeoutId = null
                fn(...args)
            }, remainingTime)
        }
    }
}

export function useMyInfiniteScroll(options: Options) {
    const { loadMore, scrollingEl } = options
    const throttleTime = options.throttleTime || 0
    const distanceFromBottomForLoad = options.distanceFromBottomForLoad || 50
    const canLoadMore = options.canLoadMore || (() => true)

    onMounted(() => {
        scrollingEl.addEventListener(
            'scroll',
            throttle(() => {
                const scrollPosition = window.scrollY + window.innerHeight
                const documentHeight = document.documentElement.scrollHeight

                if (
                    scrollPosition >=
                    documentHeight - distanceFromBottomForLoad
                ) {
                    if (!canLoadMore()) return
                    loadMore()
                }
            }, throttleTime)
        )
    })

    onBeforeUnmount(() => {
        scrollingEl.removeEventListener('scroll', loadMore)
    })
}
