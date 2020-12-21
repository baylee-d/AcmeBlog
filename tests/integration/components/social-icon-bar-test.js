import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | social-icon-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<SocialIconBar />`);
    assert.dom('[data-test-social-icon-bar]').exists();
    assert.dom('[data-test-social-link]').exists({ count: 3 });
  });
});
