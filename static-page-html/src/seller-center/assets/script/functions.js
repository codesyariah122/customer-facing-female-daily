const backTo = () => {
  // document.querySelector('.firsts__content').style.visibility = "hidden"
  document.querySelector('#link-menu-topik').style.visibility = "hidden"
  document.querySelector('#question-topic') ? document.querySelector('#question-topic').style.visibility = "hidden" : null
  document.querySelector('#breadcrumb-nav').style.visibility = "hidden"
  document.querySelector('.topic__content-desktop').style.visibility = "hidden"
  document.querySelector('#sub-menu-elem').style.visibility = "hidden"
  document.querySelector('#topic-contents') ? document.querySelector('#topic-contents').style.visibility = "hidden" : null
  document.querySelector('#param-title-heading').style.visibility = "hidden"
  contentLoading.style.display = 'block'
  removedomMenuQuestions(activeTarget, param)
  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1500)
}

const redirectPage = (params, query) => {
  if (params) {
    window.location.href = `topics.html?q=${params}`
  } else {
    window.location.href = query
  }
}

function removedomMenuQuestions(targets, param) {
  targets.map((d, idx) => {
    const link = d.childNodes
    if (d.getAttribute('data-menu') === param) {
      link[1].classList.remove('active-left-menu')
    }
  })
}

function domMenuQuestions(param, targets, dom, headingValue) {
  if (targets) {
    targets.map((d, idx) => {
      const link = d.childNodes
      if (d.getAttribute('data-menu') === param) {
        link[1].classList.add('active-left-menu')
      }
    })
    const title = param.charAt(0).toUpperCase() + param.slice(1)

    document.title = `Seller Center | Topik - ${title}`

    dom.textContent = headingValue
  }
}

function domQuestionsContent(selector, data, queryParam, param) {
  const menus = data.map(d => d)
  const menu = menus.filter(d => d.target === queryParam[0])[0]
  const contents = menus.map(d => d.data)
  const newEl = document.createElement('div')
  const loads = contents.map(d => d)[0]

  if (queryParam[1]) {
    const findContent = loads.filter(d => d.id === queryParam[1])[0]
    selector[0].textContent = findContent.title
    newEl.innerHTML = `
          <div class="md:col-start-1 md:col-end-7 col-span-full w-80 md:w-full leading-10 font-semibold">
            ${findContent.contents}
          </div>
          <div class="mt-6 md:col-start-1 col-end-7 lg:mt-12 lg:mb-36 max-w-screen-xl">
            <a href="questions.html?q=${param}&topic=${queryParam[0]}&page=${queryParam[1] <= 1 && loads.length <= 2 ? findContent.id += 1 : findContent.id -= 1}" class="${queryParam[1] <= 1 && loads.length <= 2 ? 'float-right mr-14 md:mr-0' : 'float-left md:ml-0 ml-16' } inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              ${queryParam[1] > 1 && loads.length <= 2 ? '<i class="fa fa-arrow-left fa-fw fa-lg"></i> Prev' : 'Next <i class="fa fa-arrow-right fa-fw fa-lg"></i>'}
            </a>
          </div>
        `
    selector[1].appendChild(newEl)
  } else {
    const findContent = loads.map(d => d)[0]
    selector[0].textContent = findContent.title
    newEl.innerHTML = `
          <div class="md:col-start-1 md:col-end-7 col-span-full w-80 md:w-full leading-loose font-semibold">
            ${findContent.contents}
          </div>
          <div class="mt-6 md:col-start-1 col-end-7 md:mt-12 md:mb-36 md:max-w-screen-xl">
            <a href="questions.html?q=${param}&topic=${queryParam[0]}&page=${findContent.id += 1}" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium float-right mr-14 md:mr-0 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next <i class="fa fa-arrow-right fa-fw fa-lg"></i>
            </a>
          </div>
        `
    selector[1].appendChild(newEl)
  }
}

function targetClass(param, targets, dom, headingValue) {
  const filterHeading = headingValue.map(d => d)
  switch (param) {

    case 'product':
      domMenuQuestions(param, targets, dom, filterHeading.filter((d, idx) => idx === 3)[0])
      const subMenuProduct = subMenu.map(d => d.target === 'product' ? d.data : null)[0]

      subMenuProduct.map(product => {
        showQuestionList('li', product, 'sub-menu-elem', param)
      })
      break;

    default:
      document.title = "Seller Center"
      break;
  }
}


function cleanString(string) {
  const regex = /[^a-z0-9]/gi;
  const search = string.search(regex)
  const firstString = string.slice(0, search)
  const secondString = string.slice(search + 1)
  return search > 0 ?
    `${firstString} ${secondString}`
    : string
}

// Show questions Element
function showQuestionList(el, data, dom, param) {
  let subMenu = document.createElement(el)
  switch (param) {
    case 'product':
      subMenu.classList.add("relative", "mb-3", "right-menu", 'border-b', 'border-gray-200', 'dark:border-gray-700', 'w-full')
      subMenu.innerHTML = `
        <a class="flex items-center text-1xl py-4 px-6 h-12  text-gray-700 text-ellipsis font-semibold whitespace-nowrap rounded cursor-pointer hover:text-indigo-800" data-mdb-ripple="true" href="topics.html?q=${param}&topic=${data.query}" data-mdb-ripple-color="dark">${data.title}</a>`
      document.getElementById(dom).appendChild(subMenu)
      break;

    case 'upload-product':
      subMenu.classList.add("md:mb-3", "mb-5", "ml-5", "right-menu", 'border-b', 'border-gray-200', 'dark:border-gray-700', 'md:w-90')
      subMenu.innerHTML = `
      <a class="text-1xl mx-auto text-gray-700 leading-loose font-semibold rounded cursor-pointer hover:text-indigo-800" data-mdb-ripple="true" href="questions.html?q=${param}&topic=${data.query}" data-mdb-ripple-color="dark">${data.title}</a>`
      document.getElementById('question-topic').appendChild(subMenu)
      break;

    default:
      console.log("Default Param / Empty Content")
  }
}


function fontSize() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return "font-size: 11px;"
  } else {
    return "font-size: 16px;"
  }
}


const alertSuccess = document.querySelector('.alert-success')
alertSuccess !== null ? alertSuccess.style.display = 'none' :

function kirimKeluhan() {
  const contentForm = document.querySelector('.content-form')
  const topik = document.getElementById('topik')
  const message = document.getElementById('message')
  if (topik.value === null || topik.value === '') {
    console.log('Pilih Topik terlebih dahulu')
    return 0
  }

  contentForm.style.visibility = "hidden"

  alertSuccess.style.display = 'block'

}

function closeModal() {
  document.location.reload()
}


function liveChat() {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    topic: document.getElementById('topic').value,
    description: document.getElementById('description').value
  }
  if (data.name === "" || data.email === "" || data.topic === "" || data.description === "") {
    console.log('Input is empty')
    requestChat.style.display = 'none'
    activeChat.style.display = 'block'
    clearForm()
  } else {
    requestChat.style.display = 'none'
    activeChat.style.display = 'block'
    clearForm()
  }
}

function clearForm() {
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('topic').value = ''
  document.getElementById('description').value = ''
}
