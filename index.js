window.addEventListener('load', function () {

    var types = {
        Cnpj: 'cnpj',
        Cpf: 'cpf',
        CreditCard: 'credit_card',
        Date: 'date',
        Fone: 'fone'
    };
    
    for (var index_element in document.getElementsByTagName('input')) {

        var element = document.getElementsByTagName('input')[index_element];
        
        for (var index in element.attributes) {

            if (element.attributes[index].name !== 'i-mask') {
                continue;
            }
    
            switch (element.attributes[index].value) {
                
                case types['Cnpj']:
                    element.setAttribute('mask', new Cnpj(element));
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
        }
    }
});