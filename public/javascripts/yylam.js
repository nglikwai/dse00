const yylamdiv = document.querySelector('#yylamdiv');


async function callyylam() {
        try {
          const res = await axios.get('https://www.dse00.com/apis/yylam');
          const i = Math.floor(Math.random()*80)
          yylamdiv.innerText = `${res.data[i].title} - ${res.data[i].author} `;
        } 
        catch (error) {
          console.error(error);
        }
      }

callyylam()
