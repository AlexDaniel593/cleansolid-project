import { SubscriptionBloc } from './subscription-bloc';
import { UserService } from './user-service';

class UserBloc {

    notifyUser() {
        console.log('Enviando correo a los usuarios');
    }

}

const userBloc = new UserBloc();
const userService = new UserService();
const subscriptionBloc = new SubscriptionBloc();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
