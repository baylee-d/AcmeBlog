import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | blog-list', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    const model = this.server.create('blog');
    this.set('model', model);

    await render(hbs`<BlogList @model={{this.model}} />`);
    assert.dom('[data-test-blog-list-container]').exists();
  });
});
