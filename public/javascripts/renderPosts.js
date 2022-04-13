const postBody = document.querySelector('#posts-body');



async function renderPost() {
    try {
        const res = await axios.get('http://localhost:4000/apis/posts');

        console.log(res.data[149])

        postBody.innerHTML = '';

        for (let post of res.data) {
            const div = document.createElement('div');
            div.setAttribute('class', 'card pb-3');
            let r = post.reviews.length - 1;
            div.innerHTML = `<a href="/${post._id}">
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
            </a>`
            postBody.appendChild(div)
        }
    } catch (error) {
        console.error(error);
    }
}

renderPost();
