import { Headers } from '@angular/http';

export class Config {
    headerOptions: any = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
}