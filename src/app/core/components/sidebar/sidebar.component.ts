import { Component } from '@angular/core';
import { ISidebar } from '../../models';
import { CoreConstants } from '../../constants';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterModule, CommonModule],
  standalone: true
})
export class SidebarComponent {
  sidebar: ISidebar[] = CoreConstants.sidebar;
}
