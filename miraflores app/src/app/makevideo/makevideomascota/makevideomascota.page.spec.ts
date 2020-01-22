import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakevideomascotaPage } from './makevideomascota.page';

describe('MakevideomascotaPage', () => {
  let component: MakevideomascotaPage;
  let fixture: ComponentFixture<MakevideomascotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakevideomascotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakevideomascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
