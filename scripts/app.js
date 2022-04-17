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

// picture
const main = new StyledElement('main shadow')

// picture size
const imgSize = new StyledElement('imgSize')

// drag and drop area
const dropArea = new StyledElement('dropArea')
dropArea.fileDragandDropHandler('dropper', 'Drag and Drop PNG and JPEG imag format here', 'dropAreaBox')



// load button
const loadContent = new StyledElement('loadContent dataInteraction')
loadContent.addLoader('loader', 'Upload', 'shadow')

// save button
const saveContent = new StyledElement('saveContent dataInteraction')
saveContent.addSaver('saver', 'Download', 'shadow')

// canvas
const img = new StyledElement('img', 'img')

// image size warning
const warningSize = new StyledElement('warningSize')
warningSize.text = 'Do not load huge pictures, it may unresponsive while converting'

// adding all stuff above (++)
main.add = imgSize
main.add = img
main.add = warningSize

// whole header
const headContainer = new StyledElement('headContainer shadow')

// logo
const head = new StyledElement('head')
head.addHtml = 'IMG to MSAV'

// ++
headContainer.add = head

// info
const info = new StyledElement('info shadow')

const infoBefore = new StyledElement('infoContainer') // before converting
const infoAfter = new StyledElement('infoContainer') // after converting
const infoConverting = new StyledElement('infoContainer') // while converting

infoConverting.hide()
infoConverting.addHtml = '<span style="padding: 47px 0;">Converting...</span><span style="padding: 23px 0;">Please wait as the system converts your image.</span>'

infoBefore.text = 'Press the button to start converting.'
// convert button
const btnConvert = new StyledElement('btn', 'button')
btnConvert.addHtml = 'Convert'
btnConvert.pressed = () => {
  infoBefore.hide()
  infoConverting.show('flex')
  const top = headContainer.element.getBoundingClientRect().bottom+2
  if (top < 0) window.scrollTo({ top: top+window.scrollY, behavior: 'smooth' })
  setTimeout(() => makeImg(),0)
  setTimeout(() => {
    infoConverting.hide()
    infoAfter.show('flex')
  },0)
}
infoBefore.add = btnConvert

infoAfter.hide()
infoAfter.text = 'Conversion Done, you can save your image.'
// reload button
const btnReload = new StyledElement('btn', 'button')
btnReload.addHtml = 'Revert to original'
btnReload.pressed = () => {
  myImg = lastImg
  load = true
  infoAfter.hide()
  infoBefore.show('flex')
}
infoAfter.add = btnReload
// ++
info.add = infoBefore
info.add = infoConverting
info.add = infoAfter

// all stuff from options
const settings = new StyledElement('settings shadow')

// only options (title)
const options = new StyledElement('options')

// title
const optionsTitle = new StyledElement('optionsTitle')
optionsTitle.text = 'Convert\'s options'

// options buttons (input radio)
const optionsRadios = new StyledElement('optionsRadios')

optionsRadios.putRadio('flat tiles', 0, 'options')
optionsRadios.putRadio('all tiles', 1, 'options')
optionsRadios.putRadio('custom', -1, 'options')
optionsRadios.updateRadios('options')

// gamma correction slider
const gamma = new StyledElement('gamma')
gamma.addHtml = 'Gamma: <span id="gammaValue">1</span>'
gamma.addHtml = `<input class="slider" id="sliderGamma" type="range" min="0.1" max="2" value="1" step=".02">`

// ++
options.add = optionsTitle
options.add = gamma
options.add = optionsRadios

// hidden custom options
const optionsCustom = new StyledElement('optionsCustom')

const allStuffName = Object.keys(allObjects)
for (let icon of allStuffName) {
  optionsCustom.putCheckbox(icon.split('-').join(' '), icon, 'custom')
}
optionsCustom.updateCheckboxes('custom')

// ++
settings.add = options
settings.add = optionsCustom

// side bar
const sideBarInfo = new StyledElement('sideBarInfo shadow')

sideBarInfo.addGroup('help', 'Load your image, press convert button and wait for process. You can apply some options below.')
sideBarInfo.addGroup('import in game', 'To make an image a mindustry map go to <div class="command">1. editor</div><div class="command">2. new map</div><div class="command">3. menu (in map editor)</div><div class="command">4. import</div><div class="command">5. import image file</div><div class="command">6. and open converted image</div>')
sideBarInfo.addGroup('note', 'Don\'t make nsfw and furry arts.')

// footer
const footer = new StyledElement('footer shadow')
footer.addHtml = `<div class="center">
  <div>Contacts</div>
  <div>Discord:&nbspOriginal Made by&nbsp<span class="link">L' kk#6790</span></div>
  <div>Github:&nbsp<a class="link" target="_blank" href="https://github.com/WilloIzCitron">WilloIzCitron</a>&nbsp|&nbspOriginal Made By:&nbsp<a class="link" target="_blank" href="https://github.com/Lkk9">Lkk9</a>&nbsp|&nbsp<a class="link" target="_blank" href="https://github.com/WilloIzCitron/pngToMsav">Source Code</a></div>
  <div class="cop" style="user-select: none;">Copyright (c) 2022 Copyright Holder All Rights Reserved.</div>
</div>`

// dynamic stuff
setInterval(() => {

  gammaCorrection = document.getElementById('sliderGamma').value
  document.getElementById('gammaValue').innerHTML = gammaCorrection

  const src = document.getElementById('defaultCanvas0')?.toDataURL('image/png')
  img.element.src = !!src ? src : ''

  if (myImg?.width > 1 && myImg?.height > 1) {
    imgSize.element.innerHTML = `${myImg?.width}X${myImg?.height} px`
    img.show()
  }

  if (myImg.width*myImg.height > 500**2)
    warningSize.show()
  else
    warningSize.hide()

  let currentOption = +optionsRadios.currentRadioValue
  optionsCustom.hide()
  if (currentOption === 0) {
    allColors = Object.values(allObjects).splice(14, 42)
  } else if (currentOption === 1) {
    allColors = Object.values(allObjects)
  } else if (currentOption === -1) {
    optionsCustom.show('grid')
  }
}, 0)
