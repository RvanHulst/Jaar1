const uitleg = 'Typ ja of nee.';
var vraag = 'Heeft u zin in de game?';
var antwoord = prompt(vraag + ' ' + uitleg);

if (antwoord === 'ja') {
    vraag = 'Het spel gaat beginnen bent u a klaar voor?';
    antwoord =prompt(vraag + uitleg);
    
        if (antwoord === 'ja', 'nee') {
            vraag = 'je wordt waker gemaakt door de koning hem zelf omdat zijn voedsel er nog niet is en je krijgt de missie om het voedsel te vinden. ga je het doen of niet?';
            alert('U doel in het spel is om ja of nee te antwoorden op de vragen die u gesteld kunnen worden. Het eten van de koning is al 10 minuten te laar en u moet uitvinden wat er gebeurd is.')
            antwoord =prompt(vraag + uitleg);

            if (antwoord === 'ja') {
                alert('u staat op en gaat meteen aankleden en rent naar de bakker, u komt niks raars tegen onderweg');
            }
            else {
                alert('de koning wordt boos en pakt zijn zwaard en steekt je dood. je bent dood Goodjob! GAME OVER!');
            }
        }
            if (antwoord === 'ja') {
                vraag = 'Gelooft u de bakker? het kan zijn kop kosten als die liegt tegen de hand van de koning';
                alert('U komt aan bij de bakker en die zegt dat bandieten het brood hebben gestolen en dat hij het totaal niet vergeten was.')
                antwoord =prompt(vraag + uitleg);

                if (antwoord === 'ja') {
                    alert('de bakker dankt u, je loopt terug naar de koning en meldt dat bandieten het brood hebben gestolen en niet dat de bakker het vergeten was. U en de bakker worden beiden voor de rest van je leven in ze cell gegooid en sterven naar 39 jaar! GAME OVER');
                }
                else {
                    alert('de koning wordt boos wordt boos op de bakker en laat heb opgesloten worden in de cellen waar die de rest van zijn leven zal rotten. de koning vraagt nu als u een eitje voor hem gaat maken');
                }
            }
            else if (antwoord === 'nee') {
                vraag = 'Gaat u een eitje maken voor de koning?';
                antwoord =prompt(vraag + uitleg);

                if (antwoord === 'ja') {
                    alert('De koning is super blij en danktje voor het heerlijken eten, Hij geeft je een miljard goud stukken en je leeft nog 12 jaar voordat je dood gaat aan de plaag! YOU WON');
                }
                else {
                    alert('de koning wordt boos en vermoordt je met een lepel! GAME OVER');
                }
            }
    }

    else if(antwoord ==='nee') {
        vraag = 'U heeft geen zin in het spel? Weet u het zeker?';
        antwoord =prompt(vraag + uitleg);
            
            if (antwoord === 'ja') {
                vraag = 'Weet u het heel zeker ik heb veel moeite hier voor gedaan';
                antwoord =prompt(vraag + uitleg);
        
                if (antwoord === 'ja') {
                    alert('Okay u krijgt u zin GAME OVER!');
                }
                else {
                    alert('U bent te laat GAME OVER');
                }
            }
            else if(antwoord === 'nee') {
                vraag = 'U snapt wel dat het niet netjes is om nee te zeggen en daarna wel te zeggen dat u zin heeft?';
                antwoord =prompt(vraag + uitleg);
        
                if (antwoord === 'ja') {
                    alert('Okay dan snappen we elkaar! GAME OVER!');
                }
                else {
                    alert('GAME OVER!');
                }
            }
            else alert('invalid input')
        
        }