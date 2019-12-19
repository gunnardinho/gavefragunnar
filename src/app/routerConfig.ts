import { Routes } from '@angular/router';
import { ElinorComponent } from './elinor/elinor.component';
import { SiblingsComponent } from './siblings/siblings.component';

const appRoutes: Routes = [
    {
        path: 'elinor',
        component: ElinorComponent
    },
    {
        path: 'siblings',
        component: SiblingsComponent
    }
];

export default appRoutes;
