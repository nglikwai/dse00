
const postBody = document.querySelector('#posts-body');
let page = 1;

const skeletonScreen = document.querySelector('#skeleton-screen')




const skeleton = `
    <div class='card pb-4'>
        <div>
            <div class="card-body" style="padding-bottom: 30px;">
            <table style="position: absolute; top:-2px ; right:10px; font-size:13px;color:#bbb">  
            <td><div class="heart"><i class="fa-solid fa-heart"></i> </div></td>                    
            <td><div class="chat"><i class="fa-solid fa-comment"></i>  </div>
            </td>
        </table>
                <span class="description">    
                ➥         
                </span>
            </div>
        </div>
    </div>
`

const pastpaperlover = `
<div class='card'>
<a href="https://hkdsepastpaperlover.com" target="_blank">
    <div>
        <div class="card-body" style="padding-bottom: 20px;">
            <h6 class="post-title"> Pastpaper Lover </h6>
            <table style="position: absolute; top:-2px ; right:10px; font-size:13px;color:#bbb">
                <td>
                    <div class="heart"><i class="fa-solid fa-heart"></i> 99</div>
                </td>
                <td>
                    <div class="chat"><i class="fa-solid fa-comment"></i>99 </div>
                </td>
            </table>
            <div style="display:flex">
                <span class="description" style="font-size:13px; color:#aaa; line-height: 200%;">
                    ➥ 如同學希望尋找更多不同的 Pastpaper 內容，歡迎瀏覽 <span
                        style="color:#cc0000">hkdsepastpaperlover.com</span>
                    本平台的資源仍在更新中，同時亦歡迎同學為我們提供試題，感謝。
                </span>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GhZi-oz5wjNP2_1ZKaPVK7t4Of6Isn_xT1YgoVA=s128-p-k-no"
                    style="height: 50px;width:50px;border-radius: 50%;opacity:0.65;" alt="" />
            </div>
        </div>
    </div>
</a>
</div>
`

const skeletons = skeleton + skeleton + skeleton + skeleton + skeleton + skeleton + skeleton + skeleton + skeleton + skeleton;

skeletonScreen.innerHTML = skeletons;

const makePosts = (posts, insertArea) => {
    skeletonScreen.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const div = document.createElement('div');
        let r = posts[i].reviews.length - 1;

        let lastReply = ''
        if (posts[i].reviews[0]) {
            if (posts[i].reviews[r].reply[0]) {
                lastReply = `➥ ${posts[i].reviews[r].reply[posts[i].reviews[r].reply.length - 1].substring(0, 40)}`
            } else {
                lastReply = `➥ ${posts[i].reviews[r].body.substring(0, 40)}`
            }
        } else if (posts[i].description !== '如題') {
            lastReply = `➥ ${posts[i].description.substring(0, 60)}`
        }

        div.innerHTML = `
        <div class='card pb-3'>
            <a href="/${posts[i]._id}">
                <div>
                    <div class="card-body pt-4" style="padding-bottom: 10px;">
                        <h6 class="post-title">                                    
                            ${posts[i].category !== '吹水' ? `<span class="category">${posts[i].category}</span>` : ''}
                                ${posts[i].title.substring(0, 40)}
                                <small class="text-muted" style="font-size:14px; font-weight:200"> - ${posts[i].author.username}</small>
                        </h6>
                        <table style="position: absolute; top:-2px ; right:10px; font-size:13px;color:#bbb">  
                            <td><div class="heart"><i class="fa-solid fa-heart"></i> ${posts[i].favour}</div></td>                    
                            <td><div class="chat"><i class="fa-solid fa-comment"></i> ${r + 1}</div>
                            </td>
                        </table>
                        <span class="description">
                        
                            ${lastReply}
                        </span>
                    </div>
                </div>
            </a>
        </div>`

        if (i==3){
            div.innerHTML += pastpaperlover;
        }
        insertArea.appendChild(div)
    }
}


async function renderPost(page) {
    try {

        const searchTerm = window.location.search;

        let baseUrl = 'https://www.dse00.com/apis/posts?';
        if (searchTerm !== '') {
            baseUrl = `https://www.dse00.com/apis/posts${searchTerm}&`;
        }

        const res = await axios.get(`${baseUrl}limit=10&page=${page}`);
        makePosts(res.data, postBody);


    } catch (error) {
        console.error(error);
    }
}




const myDiv = document.documentElement;

renderPost(page);

document.addEventListener('scroll', () => {
    if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
        page += 1;
        renderPost(page);
    }
})



