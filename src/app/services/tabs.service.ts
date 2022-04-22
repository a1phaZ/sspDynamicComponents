import { Injectable }        from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  chapter: string;
  state: ITabsState = {
    default: {
      slot: 'bottom',
      structure: {
        header: [
          {component: 'headerComponent', data: {text: 'Это динамический заголовок'}},
        ],
        content: [],
        footer: []
      },
      tabList: [
        {
          tab: 'init',
          iconName: 'calendar',
          label: 'Speakers',
          badgeCount: 6,
          structure: {
            header: [
              {component: 'headerComponent', data: {text: 'Это динамический заголовок'}},
            ],
            content: [],
            footer: []
          }
        },
        {
          tab: 'speakers',
          iconName: 'person-circle',
          label: 'Schedule',
          badgeCount: 6,
          structure: {
            header: [
              {component: 'headerComponent', data: {text: 'Это динамический заголовок 2'}},
            ],
            content: [],
            footer: []
          }
        },
        {
          tab: 'map',
          iconName: 'map',
          label: 'Map',
          badgeCount: 6,
          structure: {
            header: [
              {component: 'headerComponent', data: {text: 'Это динамический заголовок 3'}},
            ],
            content: [],
            footer: []
          }
        },
        {
          tab: 'about',
          iconName: 'information-circle',
          label: 'About',
          badgeCount: 6,
          structure: {
            header: [],
            content: [],
            footer: []
          }
        }
      ]
    }
  };

  constructor(

  ) {
  }

  getTabs(key) {
    const _key = key ? key : 'default';
    return this.state[_key];
  }

  setChapter(chapter) {
    this.chapter = chapter;
  }

  getChapter() {
    return this.chapter;
  }
}

export interface ITabsState {
  [key: string]: ITabs;
}

export interface ITabs {
  slot: string;
  tabList: ITab[];
  structure: IStructure;
}

export interface ITab {
  tab: string;
  iconName: string;
  label: string;
  badgeCount: number;
  structure?: IStructure;
}

export interface IStructure {
  header: TStructure[];
  content: TStructure[];
  footer: TStructure[];
}

export type TStructure = {
  component: any;
  data: any;
};
