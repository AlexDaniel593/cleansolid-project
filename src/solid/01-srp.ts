import { SubscriptionBloc } from './subscription-bloc';

interface User {
    id: number;
    name: string;
}

class UserBloc {

    loadUser( id: number ) {
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        console.log('Guardando en base de datos:', user );
    }

    notifyUser() {
        console.log('Enviando correo a los usuarios');
    }

}

const userBloc = new UserBloc();
const subscriptionBloc = new SubscriptionBloc();

userBloc.loadUser(10);
userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
