export enum AppRoute {
  Home = '/',
}

export interface RouteDefinition {
  path: AppRoute;
  render: () => HTMLElement;
}

export class Router {
  private readonly routes: Map<AppRoute, () => HTMLElement>;
  private readonly outlet: HTMLElement;
  private readonly baseUrl: string;

  public constructor(outlet: HTMLElement, routes: ReadonlyArray<RouteDefinition>) {
    this.outlet = outlet;
    this.routes = new Map(
      routes.map((route: RouteDefinition): [AppRoute, () => HTMLElement] => [route.path, route.render]),
    );
    this.baseUrl = import.meta.env.BASE_URL;

    window.addEventListener('popstate', (): void => {
      this.renderCurrentRoute();
    });
  }

  public start(): void {
    this.renderCurrentRoute();
  }

  public navigate(path: AppRoute): void {
    const nextUrl: string = this.toAbsoluteUrl(path);
    window.history.pushState({}, '', nextUrl);
    this.renderCurrentRoute();
  }

  private toAbsoluteUrl(path: AppRoute): string {
    const normalizedBase: string = this.baseUrl.endsWith('/') ? this.baseUrl : `${this.baseUrl}/`;
    const normalizedPath: string = path.startsWith('/') ? path.slice(1) : path;
    return `${normalizedBase}${normalizedPath}`;
  }

  private getPathname(): string {
    const pathname: string = window.location.pathname;
    const normalizedBase: string = this.baseUrl.endsWith('/') ? this.baseUrl.slice(0, -1) : this.baseUrl;

    if (normalizedBase !== '' && pathname.startsWith(normalizedBase)) {
      const strippedPath: string = pathname.slice(normalizedBase.length);
      return strippedPath === '' ? AppRoute.Home : strippedPath;
    }

    return pathname === '' ? AppRoute.Home : pathname;
  }

  private isAppRoute(path: string): path is AppRoute {
    return (Object.values(AppRoute) as string[]).includes(path);
  }

  private renderCurrentRoute(): void {
    const pathname: string = this.getPathname();
    const routePath: AppRoute = this.isAppRoute(pathname) ? pathname : AppRoute.Home;
    const renderPage: (() => HTMLElement) | undefined = this.routes.get(routePath);

    if (!renderPage) {
      return;
    }

    this.outlet.replaceChildren(renderPage());
  }
}
