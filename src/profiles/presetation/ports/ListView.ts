
export interface ListView<T> {
    setItems(profiles: T): void
    setIsLoading(isLoading: boolean): void
}
