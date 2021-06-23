import { Component, ContentChild, Directive, OnInit } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appMainLayoutContent]',
})
export class MainLayoutContentDirective extends CdkPortal {
}

@Directive({
  selector: '[appMainLayoutToolbar]',
})
export class MainLayoutToolbarDirective extends CdkPortal {
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  /**
   * template para establecer el contenido customizado de la pagina
   */
  @ContentChild(MainLayoutContentDirective, { static: true })
  templateContent: MainLayoutContentDirective;

  /**
   * template para establecer el toolbar
   */
  @ContentChild(MainLayoutToolbarDirective, { static: true })
  templateToolbar: MainLayoutToolbarDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

}
