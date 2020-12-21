import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import moment from 'moment';
import faker from 'faker';

module('Integration | Component | blog-card', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    const blog = this.server.create('blog');
    this.set('blog', blog);

    await render(hbs`<BlogCard @blog={{this.blog}} />`);

    assert.dom('[data-test-blog-card-container]').exists();
    assert.dom('[data-test-blog-image]').exists();
    assert.dom('[data-test-blog-title]').hasText(blog.title);
    assert.dom('[data-test-blog-updated]').hasText(moment(blog.updated).fromNow());
    assert.dom('[data-test-blog-description]').exists();
  });

  test('it renders with truncated description', async function(assert) {
    const blog = this.server.create('blog', {
      description: faker.lorem.paragraphs(5),
    });
    const truncatedDescription = `${blog.description.slice(0, 300)}...`;
    this.set('blog', blog);
  
    await render(hbs`<BlogCard @blog={{this.blog}} />`);

    assert.dom('[data-test-blog-description]').matchesText(truncatedDescription);
  });

  test('it renders with full description', async function(assert) {
    const blog = this.server.create('blog', {
      description: faker.lorem.sentence(1),
    });
    this.set('blog', blog);
  
    await render(hbs`<BlogCard @blog={{this.blog}} />`);

    assert.dom('[data-test-blog-description]').matchesText(blog.description);
  });
});
