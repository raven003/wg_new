import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {

}
