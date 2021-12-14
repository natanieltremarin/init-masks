class Data extends Base {

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

        this.element.value = '';

        for (var position in parts.filter(
            function (value) {
                if (typeof parseInt(value) === 'number') return value;
            })) {
            this.element.value += patern[position] + parts[position];
        }
    };

    get value() {
        return new Date(
            this.data.substr(4, 4) + '-'
            + this.data.substr(2, 2) + '-'
            + this.data.substr(0, 2)
        );
    };
}