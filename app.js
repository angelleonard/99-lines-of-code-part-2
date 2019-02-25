document.addEventListener('DOMContentLoaded', function () {
       let button = document.getElementById('my-btn');

       button.addEventListener('click', function () {
              let friends = ['Matt', 'Eliana', 'Noelle', 'Clare', 'Katie'];

              for (let i = 0; i < friends.length; i++) {
                     for (let j = 99; j > 0; j--) {
                            if (j > 1) {
                                   line = ([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out,clears it all out ' + [j - 1] + ' lines of code in the file');


                            } else if (j = 1) {
                                   line = ([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                            }

                           
                            let div = document.createElement('div');
                            div.className = 'maindiv'
                            document.body.appendChild(div);

                            let divFriend = document.createElement('div');
                            divFriend.className = "friend";
                            div.appendChild(divFriend);
                            
                            let header = document.createElement('h3');
                            header.innerText = friends[i];
                            divFriend.appendChild(header);
                            
                            let para = document.createElement('p');
                            para.className = 'song';
                            //para.innerText = line;

                            div.innerText = line;
                     }
              }
       })
})