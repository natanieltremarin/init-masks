import { Base } from '../Base.js';

export class Fone extends Base {

    set value(input_data) {
        this.data = input_data.replace(/[^0-9]/g, '');

        if (this.data.length > 10) {

            var patern = [
                '(',
                ') ',
                ' ',
                '-'
            ];

            var parts = [
                this.data.substr(0, 2),
                this.data.substr(2, 1),
                this.data.substr(3, 4),
                this.data.substr(7, 4)
            ];

        } else {

            var parts = [
                this.data.substr(0, 2),
                this.data.substr(2, 4),
                this.data.substr(6, 4)
            ];

            var patern = [
                '(',
                ') ',
                '-'
            ];
        }

        this.parse(parts, patern);
    };

    get value() {
        return this.data;
    };
}