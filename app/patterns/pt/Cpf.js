import { Base } from '../Base.js';

export class Cpf extends Base {

    set value(input_data) {
        this.data = input_data.replace(/[^0-9]/g, '');

        var patern = [
            '',
            '.',
            '.',
            '-'
        ];

        var parts = [
            this.data.substr(0, 3),
            this.data.substr(3, 3),
            this.data.substr(6, 3),
            this.data.substr(9, 2)
        ];

        this.parse(parts, patern);
    };

    get value() {
        return this.data;
    };
}