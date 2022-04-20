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
        for (let friend of res.data.friendList) {
            let div = document.createElement('div')
            div.setAttribute('class', 'friend-name')
            div.innerHTML = `<span style="font-size:5px; margin-right:5px">🟢</span><a href="/users/user/${friend._id}"> ${friend.username.toUpperCase()}</a>`;
            friendList.append(div)
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
            <a href="/${review.post} ">
                <span style="font-size: 13px; color: #aaa;">
                    <img src="/files/profileLogo.png" style="width:22px; height:24px ; margin:0;"/>  ${review.body.substring(0, 32)}
                </span>
            </a> -
            <a href="/users/user/${review.author._id}"> 
                <span style=" font-size: 11px; color: #ccc;">${review.author.username.toUpperCase()}</span>
            </a>`
            friendActivity.appendChild(act)
        }

    } catch (error) {
        console.error(error);
    }
}

callyylam();
createFriendList()
createFriendActivity();
