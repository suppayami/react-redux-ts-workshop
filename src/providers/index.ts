export interface CounterProviders {
    sleep: (miliseconds: number) => Promise<void>
}

export interface Providers {
    counterProviders: CounterProviders,
}

export const defaultProviders: Providers = {
    counterProviders: {
        sleep: (miliseconds: number) => new Promise<void>(resolve => setTimeout(resolve, miliseconds)),
    },
}