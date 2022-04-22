import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IStructure, TabsService }  from '../../services/tabs.service';
import { ComponentsService }        from '../../services/components.service';

@Component({
  selector: 'app-boilerplate',
  templateUrl: './boilerplate.page.html',
  styleUrls: ['./boilerplate.page.scss'],
})
export class BoilerplatePage implements OnInit {

  structure: IStructure;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tabsService: TabsService,
    public componentsService: ComponentsService
  ) {
    this.activatedRoute.paramMap
      .subscribe((queryParams: ParamMap) => {
        this.structure =
          this.tabsService
            .getTabs(this.tabsService.getChapter())
            .tabList
            .find(tab => tab.tab === queryParams.get('path'))
            .structure;
      });
  }

  ngOnInit() {

  }

}
