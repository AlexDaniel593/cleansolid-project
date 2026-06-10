import { SubscriptionBloc } from './subscription-bloc';
import { UserService } from './user-service';
import { Mailer } from './mailer';
import { User } from './user';

class UserBloc {
    private userService: UserService;
    private mailer: Mailer;

    constructor( userService: UserService, mailer: Mailer ) {
        this.userService = userService;
        this.mailer = mailer;
    }

    getUser( id: number ) {
        return this.userService.loadUser( id );
    }

    createUser( user: User ) {
        this.userService.saveUser( user );
        this.mailer.sendEmail( user.name, 'Bienvenido' );
    }

}

const userService = new UserService();
const mailer = new Mailer();
const subscriptionBloc = new SubscriptionBloc();

const userBloc = new UserBloc( userService, mailer );

userBloc.getUser(10);
userBloc.createUser({ id: 10, name: 'Fernando' });
subscriptionBloc.onAddSubscription(1234);
