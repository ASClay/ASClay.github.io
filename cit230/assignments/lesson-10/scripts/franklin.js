
    var section = document.querySelector('article');
    var requestURL = 'https://asclay.github.io/cit230/assignments/lesson-9/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var townData = request.response;
      showTown(townData);
    }
    function showTown(jsonObj) {
      var town = jsonObj['towns'];
      for(var i = 0; i < 1; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = town[i].name;
        myPara1.textContent = 'Motto: ' + town[i].motto;
        myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
        myPara3.textContent = 'Events:';
        var event = town[i].events;
        for(var j = 0; j < event.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = event[j];
          myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
      }
    }