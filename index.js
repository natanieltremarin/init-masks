window.addEventListener('load', function () {

    var types = {
        Cnpj: 'cnpj',
        Cpf: 'cpf',
        CreditCard: 'credit_card',
        Date: 'date',
        Fone: 'fone'
    };

    for (var index_element in document.getElementsByTagName('form')) {
        
        var form = document.getElementsByTagName('form')[index_element];

        form.onsubmit = function () {
            
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

        masks.create(element);
    }
});