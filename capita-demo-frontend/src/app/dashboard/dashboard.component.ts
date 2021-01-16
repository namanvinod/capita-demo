import { Component } from "@angular/core";
import { HttpService } from "../core/http.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashBoardComponent {

    constructor(private http: HttpService) {}

    ideaData = this.http.get('http://localhost:1010/api/ideas');
    // ideaData = [{
    //     ideaId: 1,
    //     ideaName: 'ASD ASFF',
    //     desc: 'QQQQ QWWEEE RRTTRRYTEWW'
    // },
    // {
    //     ideaId: 2,
    //     ideaName: 'FGV DDD',
    //     desc: 'GGGTHH RRTTRRYTEWW'
    // }]
}