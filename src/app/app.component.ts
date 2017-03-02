import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent { 
  name = 'ngStockholm'; 
}
