const query = window.location.search
const urlParam = new URLSearchParams(query)
const param = urlParam.get('q')
const headingTitleList = document.getElementById('param-title-heading')
const leftMenu = document.getElementById('link-menu-topik')
const contentLoading = document.querySelector('.content__loading')
const topicContents = document.getElementById('topic-contents')
const collapseContentWidth = document.querySelector('.topic__collapse-content')
let activeTarget = []
let dataHeading = []

if (contentLoading !== null) contentLoading.style.display = 'none'

const dataMenu = document.querySelectorAll('.left-menu')

for (const menu of dataMenu) {
  activeTarget.push(menu)
  dataHeading.push(menu.getAttribute('data-heading'))
}

subTopics(param, activeTarget, headingTitleList, dataHeading)

// side nav setup
const sideNav = document.querySelector('.side-nav')

// Topics content
const rightMenu = document.getElementById('sub-menu-topic')
const topicSubmenu = document.getElementById('question-topic')
const questionSubTopic = document.getElementById('question-sub-topic')
const subQuestionParam = urlParam.get('topic')
const questionContentPage = parseInt(urlParam.get('page'))

if (topicSubmenu) topicSubmenu.style.visibility = "hidden"

if (questionSubTopic) questionSubTopic.style.visibility = "hidden"

switch (subQuestionParam) {
  case 'delivery-method':
    $('#sub-menu-elem').hide('slow')
    topicSubmenu.style.visibility = "visible"
    const topics = topicQuestions.map(d => d)
    const menus = topics.filter(d => d.target === subQuestionParam)
    const dataMenus = menus.map(d => d.data)[0]
    headingTitleList.textContent = 'Delivery Method'
    dataMenus.map(data => subTopicMenuContent(data))
    document.querySelector('.main__content').classList.remove('md:h-screen')
    document.querySelector('.main__content').classList.add('md:h-36')
    break;
  case 'do-you-deliver-on-weekend-or-public-holidays':
    const selectClass = [headingTitleList, topicContents]
    const subParam = [subQuestionParam, questionContentPage]
    domQuestionsContent(selectClass, contentQuestions, subParam, param)
    document.querySelector('.main__content').classList.add('md:h-screen')
    break;
}


function subTopicMenuContent(data) {
  const listEl = document.createElement('li')
  listEl.classList.add("relative", "mb-3", "right-menu", 'border-b', 'border-gray-200', 'dark:border-gray-700', 'w-full')
  listEl.innerHTML = `
    <a class="flex items-center text-1xl py-4 px-6 h-12 text-gray-700 text-ellipsis font-semibold rounded cursor-pointer hover:text-indigo-800" data-mdb-ripple="true" href="questions.html?q=${param}&topic=${data.query}" data-mdb-ripple-color="dark">${data.title}</a>
  `
  document.getElementById('question-topic').appendChild(listEl)
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  if (collapseContentWidth !== null) collapseContentWidth.classList.add('w-80')
} else {
  if (collapseContentWidth !== null) collapseContentWidth.classList.add('w-full')
}
