import { Base } from '../Base.js';

export class Data extends Base {

    set value(input_data) {
        this.data = input_data.replace(/[^0-9]/g, '');

        var patern = [
            '',
            '/',
            '/'
        ];

        var parts = [
            this.data.substr(0, 2),
            this.data.substr(2, 2),
            this.data.substr(4, 4)
        ];

        this.parse(parts, patern);
    };

    get value() {
        return new Date(
            this.data.substr(4, 4) + '-'
            + this.data.substr(2, 2) + '-'
            + this.data.substr(0, 2) + '00:00:0000'
        );
    };
}