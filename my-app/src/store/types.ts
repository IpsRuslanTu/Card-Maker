export type ImageType = {
    src: string
    id: string
    width?: string
    height?: string
    x: number
    y: number
}

export type TextType = {
    id: string
    width?: string
    height?: string
    x: number
    y: number
    text: string
    fontSize: number
    fontColor: string
    fontFamily: string
}

export type ArtObjType = {
    id: string
    width?: string
    height?: string
    x: number
    y: number
    figure: FigureType
}

export enum FigureType {
    circle, rect, triangle
}