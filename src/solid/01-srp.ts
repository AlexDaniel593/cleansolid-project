import { SubscriptionBloc } from './subscription-bloc';
import { UserService } from './user-service';
import { Mailer } from './mailer';

class UserBloc {

}

const userBloc = new UserBloc();
const userService = new UserService();
const mailer = new Mailer();
const subscriptionBloc = new SubscriptionBloc();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });
mailer.sendEmail('fernando@google.com', 'Bienvenido');
subscriptionBloc.onAddSubscription(1234);
