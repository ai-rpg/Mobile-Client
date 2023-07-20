import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { AdventureService } from './services/adventure.service';
import { AdventureListResolverService } from './services/adventure-list-resolver.service';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
@NgModule({

  declarations: [AdventureListComponent],
  imports: [],
  providers: [
    AdventureService,
    AdventureListResolverService
  ]

})
export class AdventureModule { }
