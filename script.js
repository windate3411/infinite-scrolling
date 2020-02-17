const postContainer = document.getElementById('posts-container')
const loading = document.querySelector('.loader')
const filter = document.getElementById('filter')

const limit = 3
let page = 1

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
  const data = await res.json()
  return data
}


// show posts at Dom
async function showPosts() {
  const posts = await getPosts()

  posts.forEach(post => {
    const postEl = document.createElement('div')
    postEl.classList.add('post')
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
      <div class="post-info">
        <div class="post-title">${post.title}</div>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postContainer.appendChild(postEl)
  });
}

window.addEventListener('load', () => {
  console.log('hi');
})

showPosts()