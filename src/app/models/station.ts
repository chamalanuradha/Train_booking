export interface IStation {
    "stationID": number;
    "stationName": string;
    "stationCode":  string
}

export interface ResponseModel{
    message: string;
    result: boolean;
    data :any
}