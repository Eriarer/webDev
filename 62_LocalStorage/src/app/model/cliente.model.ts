export interface Cliente {
    id: number;
    name: string;
    cif: string;
    direccion: string;
    grupo: number;
}

export interface Grupo {
    id: number;
    name: string;
}