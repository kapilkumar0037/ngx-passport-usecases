import { ISidebar } from './models';

export class CoreConstants {
  public static sidebar: ISidebar[] = [
    {
      title: 'Default passport filed',
      description:
        'Passport field with first country in the list selected by default',
      route: '/default'
    },
    {
      title: 'Selected country specified',
      description:
        'India is selected by default',
      route: '/selected'
    },
    {
      title: 'Country list without some countries',
      description:
        'Albania not in the list',
      route: '/without'
    },
    {
      title: 'Display only specific countries',
      description:
        'only India, USA and Afganistan are in list',
      route: '/specific'
    },
    {
      title: 'Config properties demo',
      description:
        'Demo of all config propeties availabe',
      route: '/config'
    }
  ];
}
