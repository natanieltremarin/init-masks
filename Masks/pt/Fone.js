class Fone extends Base {

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

        this.element.value = '';

        for (var position in parts.filter(
            function (value) {
                if (parseInt(value) > 0) return value;
            })) {
            this.element.value += patern[position] + parts[position];
        }
    };

    get value() {
        return this.data;
    };
}