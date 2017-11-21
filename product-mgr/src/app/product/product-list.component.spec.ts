import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import {ProductAddComponent} from "./product-add.component";
import {ProductService} from "./product.service";
import {ProductServiceMock} from "./product.service.mock";

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule
      ],
      declarations: [ ProductListComponent,
                      ProductAddComponent ],
      providers: [
          { provide: ProductService, useClass: ProductServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('ngOnInit', () => {

        component.ngOnInit();

        expect(component.products).toBeTruthy();
        expect(component.products.length).toBe(1);
    });



});
