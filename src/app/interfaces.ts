export interface Iarticulo {
    'nombre': string;
    'descripcion': string;
    'precio': number;
    'key': string;
    'id_propietario':number;
}

export interface Imotor extends Iarticulo {
    'vehiculo': string;
    'kilometros': number;
    'anyos': number;
}

export interface Iinmobiliaria extends Iarticulo {
    'numeroHabitaciones': number;
    'localidad': string;
}

export interface Itecnologia extends Iarticulo {
    'estado': string;
}
