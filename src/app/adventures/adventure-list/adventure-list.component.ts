import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AdventureModel } from '../../api/adventure-service/models/adventure-model'

@Component({
  selector:'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.scss']
})

export class AdventureListComponent implements OnInit, OnDestroy{
  adventureList: AdventureModel[];
  private destroyed$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute) {
    this.adventureList = new Array<AdventureModel>();
  }

  public ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        console.log(data.adventureList)
        this.adventureList = data['adventureList'] as AdventureModel[];
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
