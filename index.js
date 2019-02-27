function createPost() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let body = document.getElementById('body').value;
  let createPostTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(createPostTemplate);
  let createPageTemplate = document.getElementById('page-template').innerHTML;
  let createCommentsTemplate = document.getElementById('comments-template').innerHTML;
  let pageTemplateFn = _.template(createPageTemplate);
  let commentsTemplateFn = _.template(createCommentsTemplate);
  document.getElementsByTagName('main')[0].innerHTML += pageTemplateFn();
  let postTemplateHTML = postTemplateFn({"title": title, "author": author, "body": body})
  let commentsTemplateHTML = commentsTemplateFn()
  let postHTML = document.getElementById('post')
  postHTML.innerHTML += postTemplateHTML
  let commentFooter = postHTML.getElementsByTagName('footer')[0].innerHTML += commentsTemplateFn()
  // commentFooter.innerHTML += commentsTemplateHTML
  // postHTML.appendChild(commentFooter)
}


function postComment(){
  let comment = document.getElementById('comment').value;
  let commenter = document.getElementById('commenter').value;
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById('comments');
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
  commentsDiv.innerHTML += templateHTML;
}
