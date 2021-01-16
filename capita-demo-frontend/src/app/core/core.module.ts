import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from "./http.service";
import { ContextStoreService } from "./context-store.service";
import { LoginGuard } from "./login.guard";

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
    ],
    providers: [
        HttpService,
        ContextStoreService,
        LoginGuard
    ]
})
export class CoreModule {

}