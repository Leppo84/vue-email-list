console.log("ciao mondo");

const mayL = new Vue ({
    el : "#may-l",
    data : {
        mailAddress:"",
        mailList:[],
    },
    mounted(){
        for (let i = 0; i < 10; i++) {                
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((mailRan) => {
                const mailThat = mailRan.data.response;
                console.log(mailThat);
                this.mailAddress = mailThat;
                this.mailList.push(mailThat);
            });
        }
    }
});

// {"success":true,"response":"aracely.batz@keeling.com"}