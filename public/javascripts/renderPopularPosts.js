const PopularRegion = document.querySelector('.popular-container');

const insert = `
<div class="popular-item">
<div class="popular-background"></div>

<div class="upper-float">
    <div class="tag" style="width:60px; height:25px;"></div>

    <div class="chatbox">
        <div class="chat" style="width:60px; "><i class="fa-solid fa-comment"></i> </div>
    </div>
</div>
<div class="popular-title" style="width:100%; height:40px;"></div>
</div>
`

PopularRegion.innerHTML = insert + insert + insert + insert + insert + insert;

async function renderPopularPost() {
    try {

        const res = await axios.get('https://www.dse00.com/apis/popularposts');
        PopularRegion.innerHTML = '';

        for (let post of res.data) {
            const div = document.createElement('div');
            div.innerHTML = `
                <a href="/${post._id}">
                 <div class="popular-item">
                    <div class="popular-background"></div>

                    <div class="upper-float">
                        <div class="tag" style="width:60px; height:25px;">${post.category}</div>
                        <div class="popular-name">${post.author.username}</div>
                        <div class="chatbox">
                            <div class="chat"><i class="fa-solid fa-comment"></i> ${post.popular}</div>
                        </div>
                    </div>
                    <div class="popular-title">${post.title}</div>
                </div>
                </a>

        `
            PopularRegion.appendChild(div);
        }



    } catch (error) {
        console.error(error);
    }
}

renderPopularPost()