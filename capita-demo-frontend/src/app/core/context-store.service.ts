import { BehaviorSubject } from "rxjs";

export class ContextStoreService {
    private _userAuth = new BehaviorSubject({isLoggedIn: false});
    userAuth = this._userAuth.asObservable();

    setLoginStatus(isLoggedIn) {
        this._userAuth.next({ isLoggedIn });
    }
}