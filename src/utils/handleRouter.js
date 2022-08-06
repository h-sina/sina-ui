const routes = [
  { path: '/index', content: 'index' },
  { path: '/index1', content: 'index1' },
]
class HistoryRouter {
  constructor(routes) {
    this.el = document.querySelector('#router-view')
    this.init(routes)
  }

  init (routes) {
    const onChange = this.change.bind(this)
    // const old = window.onload
    window.onload = function () {
      const linkList = document.querySelectorAll('a[href]')
      linkList.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
          history.pushState({}, '', link.getAttribute('href'))
          onChange()
        })
      })
      // window.onload = old
    }
    const mapper = {}
    for (const route of routes) {
      mapper[route.path] = route
    }
    this.mapper = mapper
    window.addEventListener('popstate', onChange)
  }

  change (e) {
    // 这里不知为什么href获取的路径是整个路径值 而不是/index那部分 所以做了切割
    const path = location.href.split('5501')[1]
    if (path) {
      this.el.innerHTML = this.mapper[path].content
    }
  }
}

export const router = new HistoryRouter(routes)
console.log(router)