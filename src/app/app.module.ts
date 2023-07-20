import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SocketIoModule } from 'ngx-socket-io';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule as AdventureApiModule } from './api/adventure-service/api.module'
import { ApiModule as AuthApiModule } from './api/auth-service/api.module';
import { AdventureModule } from './adventures/adventure.module'

// <2>
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AdventureModule,
    HttpClientModule,
    SocketIoModule.forRoot(environment.socketIoConfig),
    AdventureApiModule.forRoot({ rootUrl: 'https://9899-airpg-airpg-xkz8qjm8neu.ws-eu102.gitpod.io'}),
    AuthApiModule.forRoot({rootUrl: 'https://9898-airpg-airpg-nnvibl9eqxg.ws-eu101.gitpod.io/'})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
