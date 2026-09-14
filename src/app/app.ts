import { AppRoute, Router, type RouteDefinition } from '@/app/router';
import { createHomePage } from '@/pages/home/home-page';

export class App {
  public start(): void {
    const root: HTMLDivElement = document.createElement('div');
    root.id = 'app';
    document.body.append(root);

    const routes: ReadonlyArray<RouteDefinition> = [
      {
        path: AppRoute.Home,
        render: createHomePage,
      },
    ];

    const router: Router = new Router(root, routes);
    router.start();
  }
}
