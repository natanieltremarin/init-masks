class Masks {
    applied = [];
    types = {
        Cnpj: 'cnpj',
        Cpf: 'cpf',
        CreditCard: 'credit_card',
        Data: 'date',
        Fone: 'fone'
    };

    constructor() {
        var _this = this;

        for (var index_element in document.getElementsByTagName('form')) {


            var form = document.getElementsByTagName('form')[index_element];

            if (typeof form !== 'object') {
                continue;
            }

            form.onsubmit = function (event) {
                return _this.parseSubmit(event);
            };
        }

        for (var index_element in document.getElementsByTagName('input')) {

            var element = document.getElementsByTagName('input')[index_element];

            if (typeof element !== 'object') {
                continue;
            }

            if (element.attributes['i-mask'].value === undefined) {
                continue;
            }

            this.create(element);
        }
    };

    create(element) {

        var _this = this;

        element.onkeyup = function (event) {
            _this.apply(event)
        };

        switch (navigator.language.split('-').shift()) {

            case 'pt':

                switch (element.attributes['i-mask'].value) {

                    case this.types['Cnpj']:

                        this.applied[element.name] = new Cnpj(element);
                        break;

                    case this.types['Cpf']:

                        this.applied[element.name] = new Cpf(element);
                        break;

                    case this.types['CreditCard']:

                        this.applied[element.name] = new CreditCard(element);
                        break;

                    case this.types['Data']:

                        this.applied[element.name] = new Data(element);
                        break;

                    case this.types['Fone']:

                        this.applied[element.name] = new Fone(element);
                        break;
                }

                break;

            case 'es':

                break;

            case 'en':

                break;
        }
    };

    apply(event) {
        this.applied[event.target.name].value = event.target.value;
    };

    parseSubmit(event) {

        for (var position in event.target.elements) {

            if (typeof event.target.elements[position] !== 'object') {
                continue;
            }

            if (event.target.elements[position].name === undefined) {
                continue;
            }

            if (this.applied[event.target.elements[position].name] === undefined) {
                continue;
            }

            event.target.elements[position].value = this.applied[event.target.elements[position].name].value;
        }
    }
}

window.addEventListener('load', function () {
    var masks = new Masks();
});