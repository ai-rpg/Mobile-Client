import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdventureListComponent } from './adventures/adventure-list/adventure-list.component';
import { AdventureListResolverService } from './adventures/services/adventure-list-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'chat-room', loadChildren: () => import('./chat-room/chat-room.module').then(m => m.ChatRoomPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'adventure',
    component: AdventureListComponent,
    resolve:{
      adventureList : AdventureListResolverService
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
