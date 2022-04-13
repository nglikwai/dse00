
const firstPostsBody = document.querySelector('#first-posts-body');
const postBody = document.querySelector('#posts-body');


const adsense = ` 
<div class="card adsense">
<script async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6622218753379872"
    crossorigin="anonymous"></script>
<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-gw-3+1f-3d+2z"
    data-ad-client="ca-pub-6622218753379872" data-ad-slot="8821319250"></ins>
<script>
    (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>`


const makePosts = (posts, insertArea, startIndex) => {
    insertArea.innerHTML = '';
    for (let i = startIndex; i < posts.length; i++) {
        const div = document.createElement('div');
        let r = posts[i].reviews.length - 1;

        div.innerHTML = `
        ${i === 6 ? adsense : ''}
        <div class='card pb-3'>
            <a href="/${posts[i]._id}">
                <div>
                    <div class="card-body" style="padding-bottom: 10px;">
                        <h6 class="post-title">                                    
                            ${posts[i].category !== '吹水' ? `<span class="category">${posts[i].category}</span>` : ''}
                                ${posts[i].title.substring(0, 40)}
                                <small class="text-muted" style="font-size:14px; font-weight:200"> - ${posts[i].author.username}</small>
                        </h6>
                        <table style="position: absolute; top:-2px ; right:10px; font-size:13px;color:#bbb">
                            <td><span style="color:#ff8d8d">♥ </span></td>
                            <td>${posts[i].favour}</td>
                            <td></td>
                            <td><span style="font-size:12px"> <i class="fa-regular fa-comment"></i></span></td>
                            <td> ${r + 1}</td>
                        </table>
                        <span class="description">
                            ${posts[i].reviews[0] ? `➥ ${posts[i].reviews[r].body.substring(0, 40)}` : ''}
                        </span>
                    </div>
                </div>
            </a>
        </div>`
        insertArea.appendChild(div)
    }
}


async function renderPost() {
    try {

        const searchTerm = window.location.search;

        let baseUrl = 'https://www.dse00.com/apis/posts?';
        if (searchTerm !== '') {
            baseUrl = `https://www.dse00.com/apis/posts${searchTerm}&`;
        }
        const firstRes = await axios.get(`${baseUrl}limit=6`);
        makePosts(firstRes.data, firstPostsBody, 0);
        const res = await axios.get(`${baseUrl + searchTerm}`);
        makePosts(res.data, postBody, 6);


    } catch (error) {
        console.error(error);
    }
}

renderPost();

