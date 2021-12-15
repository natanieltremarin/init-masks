import { Base } from '../Base.js';

export class CreditCard extends Base {

    set value(input_data) {
        this.data = input_data.replace(/[^0-9]/g, '');

        if (this.data.length < 16) {

            var patern = [
                '',
                ' ',
                ' '
            ];

            var parts = [
                this.data.substr(0, 4),
                this.data.substr(4, 6),
                this.data.substr(10, 5),
            ];

        } else {

            var patern = [
                '',
                ' ',
                ' ',
                ' '
            ];

            var parts = [
                this.data.substr(0, 4),
                this.data.substr(4, 4),
                this.data.substr(8, 4),
                this.data.substr(12, 4),
            ];
        }

        this.parse(parts, patern);
    };

    get value() {
        return this.data;
    };
}