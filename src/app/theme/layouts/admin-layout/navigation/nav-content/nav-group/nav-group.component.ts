// Angular import
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

// project import
import { NavigationItem } from '../../navigation';
import { SharedModule } from 'src/app/theme/shared/shared.module';
// import { NavCollapseComponent } from '../nav-collapse/nav-collapse.component';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-group',
  standalone: true,
  imports: [CommonModule, SharedModule, NavItemComponent,],
  // , NavCollapseComponent
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  // public props

  @Input() item!: NavigationItem;

  constructor(private location: Location) {}
  role : string;

  ngOnInit() {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);

    this.role = user.role;
    
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const pre_parent = up_parent?.parentElement;
      const last_parent = up_parent?.parentElement?.parentElement?.parentElement?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (pre_parent?.classList.contains('coded-hasmenu')) {
        pre_parent.classList.add('coded-trigger');
        pre_parent.classList.add('active');
      }

      if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        if (pre_parent?.classList.contains('coded-hasmenu')) {
          pre_parent.classList.add('coded-trigger');
        }
      }
      last_parent.classList.add('active');
    }
  }
}
