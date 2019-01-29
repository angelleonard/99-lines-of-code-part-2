//let friends = ['Matt', 'Eliana', 'Noelle', 'Clare', 'Katie'];

//for (let i = 0; i < friends.length; i++) {
       //each friend is friends[i]
       for (let j = 99; j > 0; j--) {
              if (j > 1) {
                     result1a = (j + " lines of code in the file, " + j + " lines of code. Matt strikes one out, clears it all out, " + [j - 1] + " lines of code in the file");
              } else {
                     result1 = (j + " line of code in the file, " + j + " line of code. Matt  strikes one out, clears it all out, no more lines of code in the file.")
                     break;
              }


              
       }


//for (let i = 0; i < friends.length; i++) {
       //each friend is friends[i]
       for (let j = 99; j > 0; j--) {
              if (j > 1) {
                     result2 = (j + " lines of code in the file, " + j + " lines of code.  Eliana strikes one out, clears it all out, " + [j - 1] + " lines of code in the file");
              } else {
                     result2 = (j + " line of code in the file, " + j + " line of code. Eliana strikes one out, clears it all out, no more lines of code in the file.")
                     break;
              }


              
       }


//for (let i = 0; i < friends.length; i++) {
       //each friend is friends[i]
       for (let j = 99; j > 0; j--) {
              if (j > 1) {
                     result3 = (j + " lines of code in the file, " + j + " lines of code. Noelle strikes one out, clears it all out, " + [j - 1] + " lines of code in the file");
              } else {
                     result3 = (j + " line of code in the file, " + j + " line of code. Noelle strikes one out, clears it all out, no more lines of code in the file.")
                     break;
              }


              
       }

       for (let j = 99; j > 0; j--) {
              if (j > 1) {
                     result4 = (j + " lines of code in the file, " + j + " lines of code. Clare strikes one out, clears it all out, " + [j - 1] + " lines of code in the file");
              } else {
                     result4 = (j + " line of code in the file, " + j + " line of code. Clare strikes one out, clears it all out, no more lines of code in the file.")
                     break;
              }


              
       }

       for (let j = 99; j > 0; j--) {
              if (j > 1) {
                     result5 = (j + " lines of code in the file, " + j + " lines of code. Katie strikes one out, clears it all out, " + [j - 1] + " lines of code in the file");
              } else {
                     result5 = (j + " line of code in the file, " + j + " line of code. Katie strikes one out, clears it all out, no more lines of code in the file.")
                     break;
              }


              
       }




// Create button
let button = document.getElementById('my-btn');
button.addEventListener('click', function () {
       // Create first Div
       let div1 = document.createElement('name1');
       div1.className = ('friend')
       document.body.appendChild(div1);
       let header1 = document.createElement('h3');
       div1.append(header1);
       let name1 = document.createTextNode('Matt');
       header1.appendChild(name1);
       let para1 = document.createElement('p1');
       div1.appendChild(para1);
       let text1 = document.createTextNode(result1);
       para1.appendChild(text1);
       let para1a = document.createElement('p1a');
       div1.appendChild(para1a);
       let text1a = document.createTextNode(result1a);
       para1a.appendChild(text1a);
       // Create second Div
       let div2 = document.createElement('name2');
       div2.className = ('friend')
       document.body.appendChild(div2);
       let header2 = document.createElement('h3');
       div2.append(header2);
       let name2 = document.createTextNode('Eliana');
       header2.appendChild(name2);
       let para2 = document.createElement('p2');
       div2.appendChild(para2);
       let text2 = document.createTextNode(result2);
       para2.appendChild(text2);
       // Create third Div
       let div3 = document.createElement('name3');
       div3.className = ('friend')
       document.body.appendChild(div3);
       let header3 = document.createElement('h3');
       div3.append(header3);
       let name3 = document.createTextNode('Noelle');
       let para3 = document.createElement('p3');
       div3.appendChild(para3);
       let text3 = document.createTextNode(result3);
       para3.appendChild(text3);
       header3.appendChild(name3);
       // Create fourth Div
       let div4 = document.createElement('name4');
       div4.className = ('friend')
       document.body.appendChild(div4);
       let header4 = document.createElement('h3');
       div4.append(header4);
       let name4 = document.createTextNode('Clare');
       header4.appendChild(name4);
       let para4 = document.createElement('p4');
       div4.appendChild(para4);
       let text4 = document.createTextNode(result4);
       para4.appendChild(text4);
       // Create fifth Div
       let div5 = document.createElement('name5');
       div5.className = ('friend')
       document.body.appendChild(div5);
       let header5 = document.createElement('h3');
       div5.append(header5);
       let name5 = document.createTextNode('Katie');
       header5.appendChild(name5);
       let para5 = document.createElement('p5');
       div5.appendChild(para5);
       let text5 = document.createTextNode(result5);
       para5.appendChild(text5);




      

})