import { ContainerPosition } from '../interfaces';
import { PositionType } from 'dist/angular-bootstrap-toasts/lib/Models/toast-container.models';

export class ContainerPositionModel implements ContainerPosition {

    public position: PositionType   = 'topRight';
    public marginLeft: string       = '15px';
    public marginRight: string      = '15px';
    public marginBottom: string     = '15px';
    public marginTop: string        = '15px';

}
