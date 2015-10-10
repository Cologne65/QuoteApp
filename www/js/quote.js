  function quotes()
    {
      // Menge der gewählten Checkboxen zählen 
      var inputElems = $('input:checkbox:checked').length;
      // Einträge der Quoten in Variablen speichern
      // Eingabe mit Komma zum Berechnen in Punkt umwandeln
      var q1a = $('#q1').val();
      var q1 = q1a.replace(/[,]/,'.');
      var q2a = $('#q2').val();
      var q2 = q2a.replace(/[,]/,'.');
      var q3a = $('#q3').val();
      var q3 = q3a.replace(/[,]/,'.');
      var q4a = $('#q4').val();
      var q4 = q4a.replace(/[,]/,'.');
      var q5a = $('#q5').val();
      var q5 = q5a.replace(/[,]/,'.');
      // Werte der Variablen in ein Array speichern
      var myQuotes = [q1,q2,q3,q4,q5];
      // Da die Quotenfelder durch eine 1 vorbelegt sind,
      // werden diese Einträge (mit Werte 1) im Array gelöscht.
      // Das ist notwendig, damit für die Berechnung
      // das jeweilige Element im Array angesprochen
      // werden kann.
      myQuotes = $.grep(myQuotes, function( n,i ) {
        return n > 1;
      });
      // Wenn keine Checkbox aktiviert ist
      if(inputElems == 0)
      {
        alert("Bitte Anzahl der Gewinne markieren!");
      }
      // Wenn eine Checkbox...
      if(inputElems == 1)
      {
        // durch die Werte im Array iterieren
        for(i=0;i<myQuotes.length;i++)
        {
          // 1 x Einzelkombinationen
          // 0.7 = 70 Cent Einsatz
          var a = myQuotes[0]*0.7;          
          var d = a; // ist hier noch unnötig, soll aber gleich mit den anderen Berechnungen sein
          // auf 2 Nachkommastellen umrechnen und runden
          var e = Math.round(d*100)/100;
        }
        // Ausgabe der Berechnung am Bildschirm
        document.getElementById('sum').innerHTML = e;
      }
      // Wenn zwei Checkboxen...
      if(inputElems == 2)
      {
        for(i=0;i<myQuotes.length;i++)
        {
          // 2 x Einzelkombinationen
          var a = myQuotes[0]*0.7;
          var b = myQuotes[1]*0.7;
          // 1 x 2er Kombinationen
          var aa = myQuotes[0] * myQuotes[1] * 0.7;
          // Addieren der Kombinationen
          var d = a+b+aa;
          var e = Math.round(d*100)/100;
        }
        document.getElementById('sum').innerHTML = e;
      }
      // Wenn drei Checkboxen...
      if(inputElems == 3)
      {
        for(i=0;i<myQuotes.length;i++)
        {
          // 3 x Einzelkombinationen
          var a = myQuotes[0]*0.7;
          var b = myQuotes[1]*0.7;
          var c = myQuotes[2]*0.7;
          // 3 x 2er Kombinationen
          var aa = myQuotes[0] * myQuotes[1] * 0.7;
          var bb = myQuotes[0] * myQuotes[2] * 0.7;
          var cc = myQuotes[1] * myQuotes[2] * 0.7;
          // 1 x 3er Kombination
          var aaa = myQuotes[0] * myQuotes[1] * myQuotes[2] * 0.7;
          
          var d = a+b+c+aa+bb+cc+aaa;
          var e = Math.round(d*100)/100;
        }
        document.getElementById('sum').innerHTML = e;
      }
      // Wenn vier Checkboxen...
      if(inputElems == 4)
      {
        for(i=0;i<myQuotes.length;i++)
        {
          // 4 x Einzelkombinationen
          var a = myQuotes[0]*0.7;
          var b = myQuotes[1]*0.7;
          var c = myQuotes[2]*0.7;
          var d = myQuotes[3]*0.7;
          // 6 x 2er Kombinationen
          var aa = myQuotes[0] * myQuotes[1] * 0.7;
          var bb = myQuotes[0] * myQuotes[2] * 0.7;
          var cc = myQuotes[0] * myQuotes[3] * 0.7;
          var dd = myQuotes[1] * myQuotes[2] * 0.7;
          var ee = myQuotes[1] * myQuotes[3] * 0.7;
          var ff = myQuotes[2] * myQuotes[3] * 0.7;
          // 3 x 3er Kombination
          var aaa = myQuotes[0] * myQuotes[1] * myQuotes[2] * 0.7;
          var bbb = myQuotes[0] * myQuotes[2] * myQuotes[3] * 0.7;
          var ccc = myQuotes[1] * myQuotes[2] * myQuotes[3] * 0.7;
          // 1 x 4er Kombination
          var aaaa = myQuotes[0] * myQuotes[1] * myQuotes[2] * myQuotes[3] * 0.7;
          
          var d = a+b+c+d+aa+bb+cc+dd+ee+ff+aaa+bbb+ccc+aaaa;
          var e = Math.round(d*100)/100;
        }
        document.getElementById('sum').innerHTML = e;
      }
      // Wenn fünf Checkboxen...
      if(inputElems == 5)
      {
        for(i=0;i<myQuotes.length;i++)
        {
          // 5 x Einzelkombinationen
          var a = myQuotes[0]*0.7;
          var b = myQuotes[1]*0.7;
          var c = myQuotes[2]*0.7;
          var d = myQuotes[3]*0.7;
          var e = myQuotes[4]*0.7;
          // 10 x 2er Kombinationen
          var aa = myQuotes[0] * myQuotes[1] * 0.7;
          var bb = myQuotes[0] * myQuotes[2] * 0.7;
          var cc = myQuotes[0] * myQuotes[3] * 0.7;
          var dd = myQuotes[0] * myQuotes[4] * 0.7;
          var ee = myQuotes[1] * myQuotes[2] * 0.7;
          var ff = myQuotes[1] * myQuotes[3] * 0.7;
          var gg = myQuotes[1] * myQuotes[4] * 0.7;
          var hh = myQuotes[2] * myQuotes[3] * 0.7;
          var ii = myQuotes[2] * myQuotes[4] * 0.7;
          var jj = myQuotes[3] * myQuotes[4] * 0.7;
          // 10 x 3er Kombination
          var aaa = myQuotes[0] * myQuotes[1] * myQuotes[2] * 0.7;
          var bbb = myQuotes[0] * myQuotes[1] * myQuotes[3] * 0.7;
          var ccc = myQuotes[0] * myQuotes[1] * myQuotes[4] * 0.7;
          var ddd = myQuotes[0] * myQuotes[2] * myQuotes[3] * 0.7;
          var eee = myQuotes[0] * myQuotes[2] * myQuotes[4] * 0.7;
          var fff = myQuotes[0] * myQuotes[3] * myQuotes[4] * 0.7;
          var ggg = myQuotes[1] * myQuotes[2] * myQuotes[3] * 0.7;
          var hhh = myQuotes[1] * myQuotes[2] * myQuotes[4] * 0.7;
          var iii = myQuotes[1] * myQuotes[3] * myQuotes[4] * 0.7;
          var jjj = myQuotes[2] * myQuotes[3] * myQuotes[4] * 0.7;
          // 5 x 4er Kombination
          var aaaa = myQuotes[0] * myQuotes[1] * myQuotes[2] * myQuotes[3] * 0.7;
          var bbbb = myQuotes[0] * myQuotes[1] * myQuotes[2] * myQuotes[4] * 0.7;
          var cccc = myQuotes[0] * myQuotes[1] * myQuotes[3] * myQuotes[4] * 0.7;
          var dddd = myQuotes[0] * myQuotes[2] * myQuotes[3] * myQuotes[4] * 0.7;
          var eeee = myQuotes[1] * myQuotes[2] * myQuotes[3] * myQuotes[4] * 0.7;
          // 1 x 5er Kombination
          var aaaaa = myQuotes[0] * myQuotes[1] * myQuotes[2] * myQuotes[3] * myQuotes[4] * 0.7;
          
          var d = a+b+c+d+e+aa+bb+cc+dd+ee+ff+gg+hh+ii+jj+aaa+bbb+ccc+ddd+eee+fff+ggg+hhh+iii+jjj+aaaa+bbbb+cccc+dddd+eeee+aaaaa;
          var e = Math.round(d*100)/100;
        }
        document.getElementById('sum').innerHTML = e;
      }
     }