const firstPostsBody = document.querySelector('#first-posts-body');
const postBody = document.querySelector('#posts-body');


const adsense = ` 
<div class="card  adsense">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6622218753379872" crossorigin="anonymous"></script>
        <ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-gw-3+1f-3d+2z"
            data-ad-client="ca-pub-6622218753379872" data-ad-slot="8821319250"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>`


const makePosts = (response, insertArea) => {
    insertArea.innerHTML = '';
    let i = 0;
    for (let post of response.data) {
        const div = document.createElement('div');
        let r = post.reviews.length - 1;

        div.innerHTML = `
        ${i % 6 === 0 ? adsense : ''}
        <div class='card pb-3'>
            <a href="/${post._id}">
                <div>
                    <div class="card-body" style="padding-bottom: 10px;">
                        <h6 class="post-title">                                    
                            ${post.category !== '吹水' ? `<span class="category">${post.category}</span>` : ''}
                                ${post.title.substring(0, 40)}
                                <small class="text-muted" style="font-size:14px; font-weight:200"> - ${post.author.username}</small>
                        </h6>
                        <table style="position: absolute; top:-2px ; right:10px; font-size:13px;color:#bbb">
                            <td><span style="color:#ff8d8d">♥ </span></td>
                            <td>${post.favour}</td>
                            <td></td>
                            <td><span style="font-size:12px"> <i class="fa-regular fa-comment"></i></span></td>
                            <td> ${r + 1}</td>
                        </table>
                        <span class="description">
                            ${post.reviews[0] ? `➥ ${post.reviews[r].body.substring(0, 40)}` : ''}
                        </span>
                    </div>
                </div>
            </a>
        </div>`
        insertArea.appendChild(div)
        i++;
    }
}


async function renderPost() {
    try {

        const searchTerm = window.location.search;
        const firstRes = await axios.get(`https://www.dse00.com/apis/posts?limit=6`);
        makePosts(firstRes, firstPostsBody);
        const res = await axios.get(`https://www.dse00.com/apis/posts${searchTerm}`);
        makePosts(res, postBody);


    } catch (error) {
        console.error(error);
    }
}

renderPost();
