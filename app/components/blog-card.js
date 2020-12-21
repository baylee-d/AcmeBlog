import Component from '@glimmer/component';

export default class CounterComponent extends Component {
    isLoading = true;

    get truncatedString() {
        if (this.args.blog.description.length <= 300) {
            return this.args.blog.description;
        } else {
            return this.args.blog.description.slice(0, 300).concat('...');
        }
    }
}