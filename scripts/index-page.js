import BandSiteApi from './band-site-api.js';

const apiKey = '3c710c1a-8ca8-4bae-93af-65c38573275d';
const bandSiteApi = new BandSiteApi(apiKey);

function displayComments(comments) {
  const commentContainer = document.querySelector('.comment__default-comment');
  commentContainer.innerHTML = ''; // Clear existing comments
  comments.forEach(comment => {
    const defaultContainer = document.createElement('div');
    defaultContainer.classList.add('comment__default');
    commentContainer.appendChild(defaultContainer);

    // image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('comment__image-container-one');
    defaultContainer.appendChild(imageContainer);

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('comment__header');
    defaultContainer.appendChild(headerContainer);

    // image
    const image = document.createElement('div');
    image.classList.add('comment__header--image-one');
    imageContainer.appendChild(image);

    // name
    const name = document.createElement('h2');
    name.classList.add('comment__header--name');
    name.innerText = comment.name;
    headerContainer.appendChild(name);

    // date
    const date = document.createElement('h3');
    date.classList.add('comment__header--date');
    date.innerText = new Date(comment.timestamp).toLocaleDateString();
    headerContainer.appendChild(date);

    // comment container
    const textContainer = document.createElement('div');
    textContainer.classList.add('comment__text-container-default');
    defaultContainer.appendChild(textContainer);

    // comment
    const commentText = document.createElement('p');
    commentText.classList.add('comment__text-container-default--comment');
    commentText.innerText = comment.comment;
    textContainer.appendChild(commentText);
  });
}

async function loadComments() {
  const comments = await bandSiteApi.getComment();
  displayComments(comments);
}

document.addEventListener('DOMContentLoaded', loadComments);

const form = document.querySelector('.comment__input-container');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value
  };

  await bandSiteApi.postComment(newComment);
  event.target.reset();
  loadComments(); 
});
