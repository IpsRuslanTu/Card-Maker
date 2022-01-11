export type ContentType = ImageType | TextType | ArtObjType;

export type ImageType = {
    // kind: 'image'
    src: string
    // id: string
    width?: string
    height?: string
    x: number
    y: number
    selected: boolean
}

export type TextType = {
    // kind: 'text'
    // id: string
    width?: string
    height?: string
    x: string
    y: string
    text: string,
    fontWeight: string,
    fontSize: string
    fontColor: string
    fontFamily: string
}

export type ArtObjType = {
    // kind: 'artobj'
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