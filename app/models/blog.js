import Model, { attr } from '@ember-data/model';

export default class BlogModel extends Model {
    @attr('string') title;
    @attr('string') description;
    @attr('string') author;
    @attr('string') updated;
    @attr('string') imageSm;
    @attr('string') imageLg;
    @attr('string') imageAlt
}
