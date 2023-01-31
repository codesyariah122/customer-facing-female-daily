const query = window.location.search
const urlParam = new URLSearchParams(query)
const param = urlParam.get('q')
const headingTitleList = document.getElementById('param-title-heading')
const leftMenu = document.getElementById('link-menu-topik')
const contentLoading = document.querySelector('.content__loading')
const topicContents = document.getElementById('topic-contents')
const activeChat = document.querySelector('.active-chat')
const requestChat = document.querySelector('.request-chat')
let activeTarget = []
let dataHeading = []

if (contentLoading !== null) contentLoading.style.display = 'none'

const dataMenu = document.querySelectorAll('.left-menu')

for (const menu of dataMenu) {
  activeTarget.push(menu)
  dataHeading.push(menu.getAttribute('data-heading'))
}

targetClass(param, activeTarget, headingTitleList, dataHeading)

// side nav setup
const sideNav = document.querySelector('.side-nav')
// scrollPosition(0, sideNav)

// Topics content
const rightMenu = document.getElementById('sub-menu-topic')
const topicSubmenu = document.getElementById('question-topic')
const questionSubTopic = document.getElementById('question-sub-topic')
const subQuestionParam = urlParam.get('topic')
const questionContentPage = parseInt(urlParam.get('page'))

if (topicSubmenu) topicSubmenu.style.visibility = "hidden"

if (questionSubTopic) questionSubTopic.style.visibility = "hidden"

switch (subQuestionParam) {
  case 'upload-product':
    $('#sub-menu-elem').hide('slow')
    topicSubmenu.style.visibility = "visible"
    const menus = subMenu.map(d => d).filter(d => d.target === param)
    const filterTopics = menus.map(d => d.data)[0]
    const subMenusTopics = filterTopics.filter(d => d.query === subQuestionParam)[0]
    headingTitleList.textContent = subMenusTopics.title
    topicQuestions.map(d => {
      if (d.target === subQuestionParam) {
        d.data.map(d => {
          showQuestionList('li', d, topicSubmenu, subQuestionParam)
        })
      }
    })
    break;

  case 'bagaimana-cara-upload-produk':
    const selectClass = [headingTitleList, topicContents]
    const subParam = [subQuestionParam, questionContentPage]
    domQuestionsContent(selectClass, contentQuestions, subParam, param)
    break;

  default:
    null
}

activeChat.style.display = 'none'
