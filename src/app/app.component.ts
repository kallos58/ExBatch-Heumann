import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { homeIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KENDO_BUTTONS, KENDO_ICONS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public svgHome: SVGIcon = homeIcon;

  constructor( private router: Router ) {
   
  }
  
  goHome() {
    this.router.navigate(['/']);
  }

}
