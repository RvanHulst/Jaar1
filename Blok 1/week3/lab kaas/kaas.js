const uitleg = 'Typ ja of nee.';
var vraag = 'is de kaas geel?';
var antwoord = prompt(vraag + ' ' + uitleg);



if (antwoord === 'ja') {
vraag = 'Zitten er gaten in?';
antwoord =prompt(vraag + uitleg);

    if (antwoord === 'ja') {
        vraag = 'is de kaas belachelijk duur?';
        antwoord =prompt(vraag + uitleg);

        if (antwoord === 'ja') {
            alert('Emmenthaler');
        }
        else {
            alert('Leerdammer');
        }
    }
    else if(antwoord === 'nee') {
        vraag = 'Is de kaas hard als steen?';
        antwoord =prompt(vraag + uitleg);

        if (antwoord === 'ja') {
            alert('Pamnigiano Reggiano');
        }
        else {
            alert('Goudse kaas');
        }
    }
    else alert('invalid input')
}

else if(antwoord ==='nee') {
vraag = 'Heeft de kaas blauwe schimmels';
antwoord =prompt(vraag + uitleg);
    
    if (antwoord === 'ja') {
        vraag = 'Heeft de kaas een korst?';
        antwoord =prompt(vraag + uitleg);

        if (antwoord === 'ja') {
            alert('Bleu de Rochbaron');
        }
        else {
            alert('Foume dAmbert');
        }
    }
    else if(antwoord === 'nee') {
        vraag = 'Heeft de kaas een korst?';
        antwoord =prompt(vraag + uitleg);

        if (antwoord === 'ja') {
            alert('Camembert');
        }
        else {
            alert('Mozzarella');
        }
    }
    else alert('invalid input')

}