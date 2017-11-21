
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

import {Product} from "./product.model";


const OK = { message: 'ok' };

export class ProductServiceMock {

    product = { id: 1, name: 'My Thing', price: 100 };

    query(findText?: string): Observable<Array<Product>> {
        return Observable.of([this.product]);
    }

    get(id: number): Observable<Product> {
        return Observable.of(this.product);
    }

    add(product: Product): Observable<any> {
        return Observable.of(OK);
    }

    update(product: Product): Observable<any> {
        return Observable.of(OK);
    }

    delete(product: Product): Observable<any> {
        return Observable.of(OK);
    }

}