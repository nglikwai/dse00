const yylamdiv = document.querySelector('#yylamdiv');
const friendActivity = document.querySelector('#friend-activity');
const friendList = document.querySelector('#friends-list');


async function callyylam() {
    try {
        const res = await axios.get('https://www.dse00.com/apis/yylam');
        const i = Math.floor(Math.random() * 95)
        yylamdiv.innerHTML = `<i class="fa-solid fa-comment-dots"></i> ${res.data[i].title}`;
    } catch (error) {
        console.error(error);
    }
}

async function createFriendList() {
    try {
        const res = await axios.get('https://www.dse00.com/apis/getfriendlist');
        let i = 0;
        for (let friend of res.data.friendList) {
            let div = document.createElement('div')
            div.setAttribute('class', 'friend-name')
            div.innerHTML = `<i class="fa-solid fa-circle" style="font-size:8px; margin-right:5px; color:rgb(180, 227, 187)"></i><a href="/users/user/${friend._id}"> ${friend.username.toUpperCase()}</a>`;
            friendList.append(div)
            i++
            if (i == 5) return
        }
    } catch (error) {
        console.error(error);
    }
}

async function createFriendActivity() {
    try {
        const res = await axios.get('https://www.dse00.com/apis/friendactivities');
        // https://www.dse00.com/apis/friendactivities

        friendActivity.innerHTML = '';

        for (let review of res.data) {
            const act = document.createElement('div');
            act.setAttribute('class', 'friend-activity')
            act.innerHTML = `
                <div style='display:flex; align-items:center;'>
                <a href="/users/user/${review.author._id}"> <img src="/files/profileLogo.png" style="width:22px; height:24px ; margin: 0 8px 0  0;"/>   </a>
            
                <a href="/${review.post} " style="display:flex"><span style="font-size: 13px; color: #999;">${review.body.substring(0, 32)}
                    <span style=" font-size: 11px; color: #ccc;">- ${review.author.username.toUpperCase()}</span>            
                </span> </a> 
                </div>
           
         `
            friendActivity.appendChild(act)

        }

    } catch (error) {
        console.error(error);
    }
}

callyylam();
createFriendList()
createFriendActivity();
