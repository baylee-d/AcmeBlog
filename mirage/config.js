export default function() {
  this.urlPrefix = '';
  this.namespace = '';
  this.timing = 400;

  this.get('/blogs');

  this.get('/blogs/:id');

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
