      // de code waar mensen kunnen zeggen hoeveel pizza"s ze wilen
          var kleinPizza = prompt("hoeveel kleine pizza's wil je hebben?");
          var mediumPizza = prompt("hoeveel medium pizza's wil je hebben?");
          var grootPizza = prompt("hoeveel grootte pizza's wil je hebben?");
          // de prijs per soort pizza
          const prijsKlien = 5 ;
          const prijsMedium = 7 ;
          const prijsGroot = 10 ;
          //hoe hij het geld op telt 
          console.log("aantal kleine pizza's: " + kleinPizza + "," + " prijs kleine pizza's: " + kleinPizza * prijsKlien + " euro")
          console.log("aantal medium pizza's: " +  mediumPizza + "," + " prijs medium pizza's: " + mediumPizza * prijsMedium + " euro")
          console.log("aantal grote pizza's: " +  grootPizza + "," + " prijs grote pizza's: " + grootPizza * prijsGroot + " euro")
         // de totalen kosten
          var totaalBedrag =  kleinPizza * prijsKlien + mediumPizza * prijsMedium + grootPizza * prijsGroot;
          console.log('totaal prijs: ' + totaalBedrag + " euro" )