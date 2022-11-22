import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'game',
        loadChildren: () => import('./routes/game/game.module').then(m => m.GameModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'news',
        loadChildren: () => import('./routes/news/news.module').then(m => m.NewsModule)
    },
    {
        path: 'create',
        loadChildren: () => import('./routes/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'title',
        loadChildren: () => import('./routes/title/title.module').then(m => m.TitleModule)
    },
    {
        path: '',
        redirectTo: '/title',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
