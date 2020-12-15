      // de code waar mensen kunnen zeggen hoeveel pizza"s ze wilen
          var v_kleinpizza = prompt("hoeveel kleine pizza's wil je hebben?");
          var v_mediumpizza = prompt("hoeveel medium pizza's wil je hebben?");
          var v_grootpizza = prompt("hoeveel grootte pizza's wil je hebben?");

          // de prijs per soort pizza
          const c_klein = 5 ;
          const c_medium = 7 ;
          const c_groot = 10 ;
          //hoe hij het geld op telt 
          document.write ("aantal kleine pizza's: " + v_kleinpizza)
          document.write ('<br> prijs klein: &euro; ' + v_kleinpizza * c_klein )
          document.write ("<br><br>aantal medium pizza's: " + v_mediumpizza)
          document.write ('<br> prijs medium: &euro; ' + v_mediumpizza * c_medium )
          document.write ("<br><br>aantal grootte pizza's: " + v_grootpizza)
          document.write ('<br> prijs groot: &euro; ' + v_grootpizza * c_groot )
          // de totalen kosten
          var v_totaal =  v_kleinpizza * c_klein + v_mediumpizza * c_medium + v_grootpizza * c_groot;
          document.write ('<br> <hr> totaal prijs: &euro; ' + v_totaal )