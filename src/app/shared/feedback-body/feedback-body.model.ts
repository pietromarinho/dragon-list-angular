export class SnackBody {
    type: SnackType;
    data: any;
}

export class ErrorResponse {
    message: string;
    code: number;
    status: string;
    objectName: string;
    errors: ErrorObject[];
}

export class ErrorObject {
    message: string;
    field: string;
    parameter: any;
}

export enum MessageType {
    SAVE = 'Item salvo!',
    DELETE = 'Item deletado!',
    UPDATE = 'Item alterado!',
}

export enum SnackType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO'
}