export const configQueryClient = {
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 600 * 1000,
            cacheTime: 5 * 60 * 600 * 1000,
            refetchOnWindowFocus: false
        }
    }
}