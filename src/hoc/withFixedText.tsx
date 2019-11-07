import React from 'react'

interface HasTextComponentProps {
    text: string
}

export const withFixedText = (text: string) =>
    <T extends HasTextComponentProps>(Component: React.ComponentType<T>) => {
        return class extends React.Component<Omit<T, keyof HasTextComponentProps>> {
            public render() {
                return <Component text={text} {...this.props as T} />
            }
        }
    }