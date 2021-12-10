var masks = {
    applied: [],
    index: 0,

    create: function (element) {

        element.onchange = function (event) {
            event.target.attributes.mask.value.value(event.target.value);
        }
        
        switch (element.attributes['i-mask'].value) {
            
            case types['Cnpj']:
                element.setAttribute('mask', this.index);
                new Cnpj(element)
                break;

            case types['Cpf']:
                element.setAttribute('mask', new Cpf(element));
                break;

            case types['CreditCard']:
                element.setAttribute('mask', new CreditCard(element));
                break;

            case types['Data']:
                element.setAttribute('mask', new Data(element));
                break;

            case types['Fone']:
                element.setAttribute('mask', new Fone(element));
                break;
        }

        this.index++;
    },

    getPatern: function () {
        
        return {
            element: null,
            class: null
        };
    },
};