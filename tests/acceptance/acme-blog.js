import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import moment from 'moment';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    const model = this.server.createList('blog', 10);
    this.set('model', model);

    await visit('/');

    assert.equal(currentURL(), '/');

    /* Check header and navbar text*/
    assert.dom('[data-test-page-header]').hasText('Acme Corp');
    assert.dom('[data-test-navbar]').hasText('Blogs');

    /* Check blog list and cards all exist */
    assert.dom('[data-test-blog-list-container]').exists();
    assert.dom('[data-test-blog-card-container]').exists({ count: 10 });
  });

  test('visiting blog view', async function(assert) {
    const model = this.server.create('blog');
    this.set('model', model);

    await visit('/');

    assert.equal(currentURL(), '/');

    /* Check that blog list exists and only contains the one blog */
    assert.dom('[data-test-blog-list-container]').exists();
    assert.dom('[data-test-blog-card-container]').exists({ count: 1 });

    /* Go to blog view page */
    await click('[data-test-blog-link]');
    assert.equal(currentURL(), `/${model.id}`);

    /* Check header and navbar exist on detail page */
    assert.dom('[data-test-page-header]').hasText('Acme Corp');
    assert.dom('[data-test-navbar]').hasText('Blogs');

    /* Check blog elements exist */
    assert.dom('[data-test-blog-container]').exists();
    assert.dom('[data-test-blog-title]').hasText(model.title);
    assert.dom('[data-test-blog-author]').hasText(`By ${model.author}`);
    assert.dom('[data-test-blog-updated]').hasText(moment(model.updated).fromNow());
    assert.dom('[data-test-blog-image]').exists();
    assert.dom('[data-test-blog-description]').hasText(model.description);

    /* Check link in navbar */
    await click('[data-test-blogs-link]');
    assert.equal(currentURL(), '/');
  });
});
