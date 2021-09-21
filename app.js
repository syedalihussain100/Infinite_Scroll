console.log('hello javascript');

let Container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json();
    console.log(data);

    data.map((currElm, index) => {
        const htmldata = `
        <div class="posts">
        <p class="post_id">${postCount++}</p>
        <h2 class="title">${currElm.title}</h2>
        <p class="description">${currElm.body}</p>
    </div>
      `
        Container.insertAdjacentHTML('beforeend', htmldata)
    })
}
let check = document.querySelector('.check');
getPost()
const showData = () => {
   check.classList.add('check');
    setTimeout(() => {
        check.classList.remove('check')
        setTimeout(() => {
            pageCount++
            getPost()
        }, 3000);
    }, 1000);
}


window.addEventListener('scroll', () => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = document.documentElement;
    //   if else condition to scroll here;
    if (scrollTop + clientHeight >= scrollHeight) {
        console.log('iam a bottom');
        showData()
    }
})