// camalCase
// PascalCase
// snake_case
const linksSocialMedia = {
  github: 'carlosconceicaoc',
  facebook: 'carloseduardosconceicao',
  instagram: 'santiagokadu',
  twitter: 'santiagokadu'
}

function changeSocialMedia() {
  let github = document.getElementsByClassName('github')[0]
  github.href = `https://${github.getAttribute('class')}.com/${
    linksSocialMedia['github']
  }`

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    const urlSocialMedia = linksSocialMedia[social]

    li.children[0].href = `https://${social}.com/${urlSocialMedia}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => renderInfos(data))
}

function renderInfos(json) {
  userName.textContent = json.name
  userLogin.textContent = json.login
  userGitHub.href = json.html_url
  bio.textContent = json.bio
  avatar.src = json.avatar_url
}

getGitHubProfileInfos()
changeSocialMedia()
