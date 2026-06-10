import { User } from './user';

export class UserService {

    loadUser( id: number ) {
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        console.log('Guardando en base de datos:', user );
    }

}
