const yylamdiv = document.querySelector('#yylamdiv');
const friendActivity = document.querySelector('#friend-activity');


async function callyylam() {
    try {
        const res = await axios.get('https://www.dse00.com/apis/yylam');
        const i = Math.floor(Math.random() * 95)
        yylamdiv.innerHTML = `<i class="fa-solid fa-comment-dots"></i> ${res.data[i].title}`;
    } catch (error) {
        console.error(error);
    }
}

async function createFriendActivity() {
    try {
        const res = await axios.get('https://www.dse00.com/apis/friendlist');
        const makePosts = (res) => {
            friendActivity.innerHTML = '';
            for (let review of res.data.reviews) {
                const act = document.createElement('div');
                act.setAttribute('class', 'friend-activity')
                act.innerHTML = `<a href="/${review.post} "><span style="font-size: 13px; color: #aaa;">
                <i class="fa-regular fa-comment-dots"></i>  ${review.body.substring(0, 32)}
            </span></a> -
        <a href="/users/user/${review.author._id}"> <span style=" font-size: 11px; color: #ccc;">
                ${review.author.username.toUpperCase()}
            </span>
        </a>`
                friendActivity.appendChild(act)
            }
        }
    } catch (error) {
        console.error(error);
    }
}

callyylam();
createFriendActivity();