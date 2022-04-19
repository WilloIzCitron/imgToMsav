// pallete
const color = {
  textLight: '#ffffff',
  textDark: '#000000',
  regular: '#ffffff',
  main: '#fca311',
  background: '#e5e5e5',
  header: '#000000',
  link: '#14213d'
}

// guide
const main = new StyledElement('main shadow')
main.addHtml = '<div class="guide"><div class="guide-header"><h1 class="guide-header-text">Guide</h1></div><div class="guide-content"><div class="guide-content-group"><div class="topic">How to use</div><div class="guide-content-mainText"><img src="assets/mainmenu.png"><br>1. Upload Your image on Upload button or drag a file to drag and drop box <br>2. Press Convert<br>3. After converting, Press download button to save your image</div></div><div class="guide-content-group"></div></div>'

// whole header
const headContainer = new StyledElement('headContainer shadow')

// logo
const head = new StyledElement('head')
head.addHtml = 'IMG to MSAV'

// ++
headContainer.add = head

// only options (title)
const options = new StyledElement('options')
// side bar
const sideBarInfo = new StyledElement('sideBarInfo shadow')


// footer
const footer = new StyledElement('footer shadow')
footer.addHtml = `<div class="center">
  <div>Contacts</div>
  <div>Discord:&nbspOriginal Made by&nbsp<span class="link">L' kk#6790</span></div>
  <div>Github:&nbsp<a class="link" target="_blank" href="https://github.com/WilloIzCitron">WilloIzCitron</a>&nbsp|&nbspOriginal Made By:&nbsp<a class="link" target="_blank" href="https://github.com/Lkk9">Lkk9</a>&nbsp|&nbsp<a class="link" target="_blank" href="https://github.com/WilloIzCitron/pngToMsav">Source Code</a></div>
  <div class="cop" style="user-select: none;">Copyright (c) 2022 Copyright Holder All Rights Reserved.</div>
</div>`

