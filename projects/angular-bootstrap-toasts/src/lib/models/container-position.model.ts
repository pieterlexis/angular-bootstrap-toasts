import { ContainerPosition } from '../interfaces';
import { ContainerPositionType } from '../shared';

export class ContainerPositionModel implements ContainerPosition {

    public position: ContainerPositionType  = 'topRight';
    public marginLeft: string               = '15px';
    public marginRight: string              = '15px';
    public marginBottom: string             = '15px';
    public marginTop: string                = '15px';

}
