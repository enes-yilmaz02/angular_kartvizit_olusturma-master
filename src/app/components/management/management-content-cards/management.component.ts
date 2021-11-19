import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/content',        title: 'Anasayfa',      class: '' },
    { path: '/main',           title: 'Profil',        class: '' },
    { path: '/property',       title: 'Emlaklar',      class: '' },
    { path: '/agenty',         title: 'Ajanslar',      class: '' },
    { path: '/about',          title: 'Hakkında ',     class: '' },
    { path: '/contact',        title: 'İletişim ',     class: '' }
  
    
];

@Component({
    moduleId: module.id,
    selector: 'management-cmp',
    templateUrl: 'management.component.html',
})

export class ManagementComponent implements OnInit {
    public menuItems: any[] | undefined;
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}