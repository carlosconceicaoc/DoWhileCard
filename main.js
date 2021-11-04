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

changeSocialMedia()
