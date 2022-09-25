export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};
export type Direction = 'up' | 'down' | 'right' | 'left';
export interface ColorProps {
    readonly [key: string]: string;
}
export interface StringColorProps {
    id?: string;
    label?: string;
    color?: string;
    primary?: string;
    secondary?: string;
}