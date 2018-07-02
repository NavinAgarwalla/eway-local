/*const axios = require('axios');
function contactinfo(state,district) 
{
    
    return axios.get(`http://192.168.2.11:7001/sap/opu/odata/sap/ZEWAYBILL_CONTACT_SRV/getContactListSet?$filter=State eq '"+ state +"' and District eq '" + district + "'`,
    {
      Header : {
				"Accept" : "application/json",
				"Content-Type" : "application/json",
				"X-Requested-With" : "XMLHttpRequest"
			         },
	    username: 'bcuser',
	    password: 'Password',
    }).then(({data}) => {
        let results = data.results;
        if (results.length === 0) {
        return [{
        type: 'quickReplies',
        content: {
          title: 'Sorry, but I could not find any results for your request :(',
          buttons: [{ title: 'Start over', value: 'Start over' }],
        }
        }];
    }
    const cards = results.slice(0, 10).map(navin => ([
    	 {type :'text', content : navin.State},
    	 {type :'text', content : navin.District},
    	 {type :'text', content : navin.Landline},
    	 {type :'text', content : navin.Mail},
    	 {type :'text', content : navin.Mobile},
    	 {type :'text', content : navin.OfficeHrs},
    	 {type :'text', content : navin.Tollfree},
        ]));

    return [
      {
        type: 'text',
        content: "Here's what I found for you!",
      },
      {
      	type: 'text',
        content: cards,
      },
    ];
  });
}
contactinfo("state","district");
module.exports = contactinfo;*/