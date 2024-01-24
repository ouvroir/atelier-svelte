fetch("./src/data.json")
  .then((res) => res.json())
  .then((data) => {
    const parser = new window.DOMParser();
    const ul = document.querySelector("#posts");

    data.forEach((p) => {
      console.log(p);
      let li = createPostElement(p);
      li = parser.parseFromString(li, "text/html");
      li = li.querySelector(".post-li");
      ul.append(li);
    });
  })
  .catch((err) => console.log(err));

function createPostElement({ title, author, date, description }) {
  return `
        <li class="post-li" />
            <a href="/">
                <h3 class="post-li-title">${title}</h3>
                <div class="post-li-author">${author}</div>
                <p class="post-li-desc">${description}</p>
            <a/>
        </li>
    `;
}

// <div class="post-li-date">${date}</div>
