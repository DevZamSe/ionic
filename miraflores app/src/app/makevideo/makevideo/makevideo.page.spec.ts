import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakevideoPage } from './makevideo.page';

describe('MakevideoPage', () => {
  let component: MakevideoPage;
  let fixture: ComponentFixture<MakevideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakevideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakevideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
