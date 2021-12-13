var masks = {
    applied: [],

    create: function (element) {

        element.onchange = function (event) {
            event.target.attributes.mask.value.value(event.target.value);
        }
        
        switch (element.attributes['i-mask'].value) {
            
            case types['Cnpj']:
                
                this.aplied[event.target.name] = new Cnpj(element);
                break;

            case types['Cpf']:

                this.aplied[event.target.name] = new Cpf(element);
                break;

            case types['CreditCard']:
                
                this.aplied[event.target.name] = new CreditCard(element);
                break;

            case types['Data']:

                this.aplied[event.target.name] = new Data(element);
                break;

            case types['Fone']:

                this.aplied[event.target.name] = new Fone(element);
                break;
        }
    },
};