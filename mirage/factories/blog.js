import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    title() {
        return faker.lorem.sentence();
    },

    description() {
        return faker.lorem.paragraphs(10);
    },

    updated() {
        return faker.date.past();
    },

    author() {
        return `${faker.name.firstName()} ${faker.name.lastName()}`;
    },

    imageSm() {
        return `https://loremflickr.com/500/320/nature,mountains/?image=${faker.random.number(300)}`;
    },

    imageLg() {
        return `https://loremflickr.com/700/520/nature,mountains/?image=${faker.random.number(300)}`;
    },

    imageAlt() {
        return faker.lorem.words();
    }
});
