fetch('https://randomuser.me/api/').
then(res => res.json()).
then(data => userData(data));

function userData(userInfo){
    const h1=document.getElementById('username');
    const img=document.getElementById('userimg');
    console.log(userInfo);
    h1.innerText=`${userInfo.results[0].name.title} ${userInfo.results[0].name.first} ${userInfo.results[0].name.last}`;

    img.src=`${userInfo.results[0].picture.large}`;
    console.log(img)
}

setInterval(() => {
    location.reload()
}, 3000);

