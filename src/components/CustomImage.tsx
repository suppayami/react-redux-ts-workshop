import React from 'react'

interface CustomImageProps {
    source: string
}

export const CustomImage: React.FunctionComponent<CustomImageProps> = ({ source }) => {
    return <img src={source} className="App-logo" alt="logo" />
}