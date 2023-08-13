const articleComplete = document.getElementById("article article-opened");
const articleButton = document.getElementById("article-listing-button-open");

// @ts-ignore
articleButton.addEventListener("click", function (e) {
  checkStatus();
});

function checkStatus() {
  // @ts-ignore
  if (articleButton.id === "article-listing-button-open") {
    // @ts-ignore
    articleButton.id = "article-listing-button-close";
    // @ts-ignore
    articleButton.innerText = "View Less";
    render();

    // @ts-ignore
  } else if (articleButton.id === "article-listing-button-close") {
    // @ts-ignore
    articleButton.id = "article-listing-button-open";
    // @ts-ignore
    articleButton.innerText = "View More";
    // @ts-ignore
    articleComplete.innerHTML = "";
  }
}

function render() {
  let articles = `<section class="article article-opened" id="article article-opened">
            <article class="article-post" id="article-post">
                <img src="/images/blog-image-02.png" alt="Computer screen with React symbol and code.">
                <p class="article-date" id="article-date">JULY 23, 2022</p>
                <h2 class="article-title" id="article-title">Blog one</h2>
                <p class="article-body-preview" id="article-body-preview">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>   
            </article>
              <article class="article-post" id="article-post">
                <img src="/images/blog-image-03.png" alt="Girl dressed casually on the beach in a sunny day.">
                <p class="article-date" id="article-date">JULY 23, 2022</p>
                <h2 class="article-title" id="article-title">Blog two</h2>
                <p class="article-body-preview" id="article-body-preview">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>   
            </article>
            <article class="article-post" id="article-post">
                <img src="/images/blog-image-04.png" alt="Laptop on wook desk with the message:&quot;I design and develop experiences that make people's lives simple.&quot;">
                <p class="article-date" id="article-date">JULY 23, 2022</p>
                <h2 class="article-title" id="article-title">Blog three</h2>
                <p class="article-body-preview" id="article-body-preview">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>   
            </article>
            </section>
             `;

  // @ts-ignore
  articleComplete.innerHTML = articles;
}

/* function seeMoreLess() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("see");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "View More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View Less";
    moreText.style.display = "block";
    moreText.style.flexWrap = "wrap"
  }
}   */
