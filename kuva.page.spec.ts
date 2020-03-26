import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KuvaPage } from './kuva.page';

describe('KuvaPage', () => {
  let component: KuvaPage;
  let fixture: ComponentFixture<KuvaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuvaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KuvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
