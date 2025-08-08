import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'lastofus'];

  let extensions = ['.com', '.net', '.us', '.io'];

  const list = document.getElementById('domain-list');

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let baseDomain = pronoun[i] + adj[j] + noun[k];

        for (let e = 0; e < extensions.length; e++) {
          let domain = baseDomain + extensions[e];

       

          let ext = extensions[e].slice(1); 

          if (baseDomain.toLowerCase().endsWith(ext) && ext !== 'com') {
         
            domain = baseDomain.slice(0, -ext.length) + '.' + ext;
          }

          console.log(domain);

          if (list) {
            let li = document.createElement('li');
            li.textContent = domain;
            list.appendChild(li);
          }
        }
      }
    }
  }
};
