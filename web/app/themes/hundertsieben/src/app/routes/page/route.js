import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PageRoute extends Route {
  // Services
  @service store;


  // Hooks
  async model({ page_slug }) {
    let pages = await this.store.query('page', {
      slug: page_slug,
      _fields: 'id,title,content,acf',
    });

    return pages.firstObject;
  }
}
