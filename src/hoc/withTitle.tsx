import React from 'react'

interface WithTitleComponentProps {
    title: string
}

export const withTitle = <T extends object>(Component: React.ComponentType<T>) => {
    return class extends React.Component<WithTitleComponentProps & T> {
        public render() {
            return <div>
                <h1>{this.props.title}</h1>
                <Component {...this.props} />
            </div>
        }
    }
}