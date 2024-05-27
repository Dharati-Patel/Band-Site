//Default comments array
let comments = [
    {
      name: "Victor Pinto",
      date: "11/02/2023",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Christina Cabrera",
      date: "10/28/2023",
      comment:
        "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
      name: "Isaac Tadesse",
      date: "10/20/2023",
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];
  
  //Function star
  function displayComments(arr) {
    
    let commentContainer = document.querySelector(".comment__default-comment");
  
    for (let i = 0; i < arr.length; i++) {
      
      let defaultContainer = document.createElement("div");
      defaultContainer.classList.add("comment__default");
      commentContainer.appendChild(defaultContainer);
  
      //image container
      let imageContainer = document.createElement("div");
      imageContainer.classList.add("comment__image-container-one");
      defaultContainer.appendChild(imageContainer);
  
      
      let headerContainer = document.createElement("div");
      headerContainer.classList.add("comment__header");
      defaultContainer.appendChild(headerContainer);
  
      //image
      let image = document.createElement("div");
      image.classList.add("comment__header--image-one");
      imageContainer.appendChild(image);
  
      //name
      let name = document.createElement("h2");
      name.classList.add("comment__header--name");
      name.innerText = arr[i]["name"];
      headerContainer.appendChild(name);
  
      //date
      let date = document.createElement("h3");
      date.classList.add("comment__header--date");
      date.innerText = arr[i]["date"];
      headerContainer.appendChild(date);
  
      //comment container
      let textContainer = document.createElement("div");
      textContainer.classList.add("comment__text-container-default");
      defaultContainer.appendChild(textContainer);
  
      //comment
      let comment = document.createElement("p");
      comment.classList.add("comment__text-container-default--comment");
      comment.innerText = arr[i]["comment"];
      textContainer.appendChild(comment);
    }
  }
  displayComments(comments);
  
  
  const form = document.querySelector(".comment__input-container");
  
  form.addEventListener("submit", submitEvent => {
    
   submitEvent.preventDefault();

    alert("Submit");
  
    const newComment = {};
    newComment.name = submitEvent.target.name.value;
    newComment.comment = submitEvent.target.comment.value;
  
    let commentContainer = document.querySelector(".comment__default-comment");
  
    
    let defaultContainer = document.createElement("div");
    defaultContainer.classList.add("comment__default");
    commentContainer.appendChild(defaultContainer);
  
    
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("comment__image-container-one");
    defaultContainer.appendChild(imageContainer);
  
    
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("comment__header");
    defaultContainer.appendChild(headerContainer);
  
    //image
    let image = document.createElement("div");
    image.classList.add("comment__header--image-one");
    imageContainer.appendChild(image);
  
    //name
    let name = document.createElement("h2");
    name.classList.add("comment__header--name");
    name.innerText = newComment.name;
    headerContainer.appendChild(name);
  
    //setting the current date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
  
    today = mm + "/" + dd + "/" + yyyy;
  
    //date
    let date = document.createElement("h3");
    date.innerText = today;
    date.classList.add("comment__header--date");
    headerContainer.appendChild(date);
  
    //text container
    let textContainer = document.createElement("div");
    textContainer.classList.add("comment__text-container-default");
    defaultContainer.appendChild(textContainer);
  
    //comment
    let comment = document.createElement("p");
    comment.classList.add("comment__text-container-default--comment");
    comment.innerText = newComment.comment;
    textContainer.appendChild(comment);
  
    
    let top = document.querySelector(".comment__default-comment");
    top.insertBefore(defaultContainer, top.childNodes[0]);
  
    
    let clearInput = document.querySelector(".comment__input-container");
    //clearInput.reset();
  });