import type { UseFetchOptions } from '#app'

export const useApi = async <T>(url: string, options: UseFetchOptions<T>) =>
    useFetch('' + url, {
        ...options,
    })

export const api = <T>(url: string, options: UseFetchOptions<T> = {}) =>
    $fetch('' + url, {
        ...options,
    })
