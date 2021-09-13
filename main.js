function clock(){
    let a;
    let date;
    let time;
    const options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
    setInterval(() => {
        nd = new Date();
         date = nd.toLocaleDateString(undefined, options);
        time = nd.getHours() + ':' + nd.getMinutes() + ':' + nd.getSeconds();
        document.getElementById('realtime').innerHTML = time + '<br> On ' + date;
    },1000);
    

}