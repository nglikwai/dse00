const yylamdiv = document.querySelector('#yylamdiv');


async function callyylam() {
        try {
          const res = await axios.get('https://www.dse00.com/apis/yylam');
          console.log(res);
          const i = Math.floor(Math.random()*30)
          yylamdiv.innerText = `${res.data[i].title}`;
        } 
        catch (error) {
          console.error(error);
        }
      }

callyylam()
