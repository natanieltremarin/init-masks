import { Base } from '../Base.js';

export class Cnpj extends Base {

    set value(input_data) {
        this.data = input_data.replace(/[^0-9]/g, '');

        var patern = [
            '',
            '.',
            '.',
            '/',
            '-'
        ];

        var parts = [
            this.data.substr(0, 2),
            this.data.substr(2, 3),
            this.data.substr(5, 3),
            this.data.substr(8, 4),
            this.data.substr(12, 2)
        ];

        this.parse(parts, patern);
    };

    get value() {
        return this.data;
    };
}