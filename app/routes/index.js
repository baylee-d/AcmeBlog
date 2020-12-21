import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model() {
        return this.store.findAll('blog').then(blogs => blogs.sortBy('updated').reverse());
    }
}
