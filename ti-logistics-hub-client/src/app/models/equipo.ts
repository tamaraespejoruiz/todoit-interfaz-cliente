export class Equipo {
    constructor(public idClient?:string, 
                public marca:string = '',
                public modelo:string = '',
                public falla:string = '') {
                    this.idClient = idClient;
                    this.marca = marca;
                    this.modelo = modelo;
                    this.falla = falla;
                }
};