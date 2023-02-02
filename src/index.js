import "./styles.css";
import "./avatar.png";

const form = document.querySelector("#tweet-form");
const tweetText = document.querySelector("#tweet-text");
const tweetsSection = document.querySelector("#tweets");
const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const commentList = document.querySelector(".comment-list");
const dateTimeSpan = document.querySelector(".date-time");
const currentDate = new Date();
const dateString = currentDate.toLocaleDateString();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweet = tweetText.value;

  if (!tweet) {
    return;
  }

  const tweetElement = document.createElement("div");
  tweetElement.innerText = tweet;
  tweetElement.style.backgroundColor = "lightgray";
  tweetElement.style.padding = "1rem";
  tweetElement.style.marginBottom = "1rem";
  tweetElement.style.borderRadius = "0.5rem";
  tweetElement.style.display = "flex";

  let likes = 0;
  const likeButton = document.createElement("button");
  likeButton.innerText = `👍 ${likes}`;
  likeButton.style.float = "right";
  likeButton.style.marginLeft = "1rem";
  likeButton.style.padding = "0.5rem";
  likeButton.style.borderRadius = "0.5rem";
  likeButton.style.backgroundColor = "skyblue";
  likeButton.style.color = "white";
  likeButton.style.cursor = "pointer";

  likeButton.addEventListener("click", () => {
    likes++;
    likeButton.innerText = `👍 ${likes}`;
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "🗑️";
  deleteButton.style.float = "right";
  deleteButton.style.marginLeft = "1rem";
  deleteButton.style.padding = "0.5rem";
  deleteButton.style.borderRadius = "0.5rem";
  deleteButton.style.backgroundColor = "skyblue";
  deleteButton.style.color = "white";
  deleteButton.style.cursor = "pointer";

  deleteButton.addEventListener("click", () => {
    tweetElement.remove();
  });

  tweetElement.appendChild(likeButton);
  tweetElement.appendChild(deleteButton);
  tweetsSection.prepend(tweetElement);
  tweetText.value = "";
  dateTimeSpan.textContent = "(" + dateString + ")";
});

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newComment = document.createElement("li");
  newComment.textContent = commentInput.value;
  commentList.appendChild(newComment);
  commentInput.value = "";
});
