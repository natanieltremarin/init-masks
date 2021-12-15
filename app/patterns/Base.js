export class Base {
    data;
    element;

    constructor(element) {
        this.element = element;
        this.data = '';
    };

    parse(parts, patern) {
        this.element.value = '';

        for (var position in parts.filter(
            function (value) {
                if (typeof parseInt(value) === 'number') return value;
            })) {
            this.element.value += patern[position] + parts[position];
        }
    };
}