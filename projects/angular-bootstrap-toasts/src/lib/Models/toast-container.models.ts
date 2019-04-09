export type PositionType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface PositionModel {
    position?: PositionType;

    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
}
