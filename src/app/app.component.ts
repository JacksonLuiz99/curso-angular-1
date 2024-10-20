import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Jackson';

  userData = {
    email: 'jacksoncuiaba99@gmail.com',
    role: 'Admin',
  }



  title = 'curso-angular-1';
}
