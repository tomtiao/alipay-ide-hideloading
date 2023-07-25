Page({
  handleTap() {    
    my.showLoading()
    fakeFetch()
    .finally(() => {
      my.hideLoading({
        page: this
      })
    })

    my.navigateTo({
      url: '/pages/content/index'
    })
  }
});

const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}