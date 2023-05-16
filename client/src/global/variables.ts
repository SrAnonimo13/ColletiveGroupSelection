export namespace Routes {
    export const HOME = '/home';
    export const CREATE_GROUP = '/group/register';
    export const GROUP_SELECTION = '/group/selection';

    export const DEFAULT = HOME;

    export function addQuery(route: string, querys: { [name: string]: string }) {
        const names = Object.keys(querys);

        const queryString = names
            .map(name => `${name}=${querys[name]}`)
            .join('&')

        return `${route}?${queryString}`;
    }
}