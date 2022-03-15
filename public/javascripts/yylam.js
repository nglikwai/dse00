async function callyylam() {
        try {
          const response = await axios.get('https:/www.dse00.com/apis/yylam');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

      callyylam()