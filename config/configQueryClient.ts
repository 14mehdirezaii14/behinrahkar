export const configQueryClient = {
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 60 * 100,
            cacheTime: 5 * 60 * 60 * 100,
            refetchOnWindowFocus: false
        }
    }
}