import { Component, OnInit }                                from '@angular/core';
import { ActivatedRoute, ParamMap, Router }                 from '@angular/router';
import { IStructure, ITab, ITabs, ITabsState, TabsService } from '../../services/tabs.service';
import { ComponentsService }                                from '../../services/components.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tabs: ITabs;
  structure: IStructure;

  constructor(
    private router: Router,
    private tabsService: TabsService,
    private activatedRoute: ActivatedRoute,
    public componentsService: ComponentsService,
  ) {
    this.activatedRoute.paramMap
      .subscribe((queryParams: ParamMap) => {
        const chapter = queryParams.get('chapter');
        this.tabsService.setChapter(chapter);
        this.tabs = this.tabsService.getTabs(chapter);
        this.structure = this.tabs.structure;
      });
  }

  ngOnInit() {
  }

}
