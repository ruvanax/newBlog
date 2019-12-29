import { Express, Router } from 'express';

import IPathRoute from '../core/IPathRoute';
import UserRoute from './UserRoute';
import PostRoute from './PostRoute'

export default class AppRoutes {
    private routeList: IPathRoute[] = [
        {path: '/rest/users', router: UserRoute},
        {path: '/rest/posts', router: PostRoute}
    ];

    mount(expApp: Express): void {
        this.routeList.forEach((item: IPathRoute) => {
            expApp.use(
                item.path,
                item.router.createRouter(Router)
            );
        });
    }
}