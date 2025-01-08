import type { UseFetchOptions } from '#app'

export const useApi = async <T>(url: string, options: UseFetchOptions<T>) =>
    useFetch('' + url, {
        ...options,
    })

type FetchOptions = Parameters<typeof $fetch>[1]
export const api = <T>(url: string, options: FetchOptions = {}) =>
    $fetch('' + url, {
        ...options,
    })
