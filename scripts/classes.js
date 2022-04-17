class StyledElement {
  constructor (cssClass, elName='div') {
    this.element = document.createElement(elName)
    this.element.classList.add(...cssClass.split(' '))
    document.getElementById('wrapper').appendChild(this.element)
  }

  set id(id) {
    this.element.id = id
  }

  set text(text) {
    this.element.innerHTML = text
  }

  set add(el) {
    this.element.appendChild(el.element)
  }

  set addHtml(html) {
    this.element.innerHTML += html
  }

  hide() {
    this.element.style.display = 'none'
  }
  show(t='block') {
    this.element.style.display = t
  }

  addGroup(topic, mainText) {
    this.element.innerHTML += `<div class="group"><span class="topic">${topic}</span><div class="mainText">${mainText}</div></div>`
  }

  putRadio(name, value, groupName) {
    let id = 'id-' + name.toLowerCase().split(' ').join('-')
    const radio = `<input type="radio" value="${value}" name="${groupName}" style="display: none;" id="${id}"><label class="radioGroup" name="${groupName}" for="${id}">${name}</label>`
    this.element.innerHTML += radio
  }

  putCheckbox(name, value, groupName) {
    let id = 'id-' + name.toLowerCase().split(' ').join('-')
    const checkbox = `<input type="checkbox" value="${value}" name="${groupName}" style="display: none;" id="${id}"><label class="checkboxGroup" name="${groupName}" for="${id}"><img title="${name}" src="icons/${value}.png"></label>`
    this.element.innerHTML += checkbox
  }

  updateCheckboxes(groupName) {
    this.checkboxesGroupName = groupName
    const checkboxes = this.element.querySelectorAll(`input[name="${groupName}"]`)
    const labels = this.element.querySelectorAll(`label[name="${groupName}"]`)
    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i]
        const label = labels[i]
        checkbox.addEventListener('change', function() {
          allColors = []

          for (let j = 0; j < checkboxes.length; j++) {
            const checkbox = checkboxes[j]
            if (checkbox.checked) allColors.push(allObjects[checkbox.value])
          }
          if (allColors.length === 0) allColors = [[0,0,0,255]]


          if (this.checked) {
            label.classList.add('checkboxChecked')
          }
          else {
            label.classList.remove('checkboxChecked')
          }
        })
    }
  }

  updateRadios(groupName) {
    this.radiuosGroupName = groupName
    const radios = this.element.querySelectorAll(`input[name="${groupName}"]`)
    const labels = this.element.querySelectorAll(`label[name="${groupName}"]`)
    radios[0].checked = true
    labels[0].classList.add('radioChecked')
    for (let i = 0; i < radios.length; i++) {
        const radio = radios[i]
        const label = labels[i]
        radio.addEventListener('change', function() {
          label.classList.add('radioChecked')
          for (let j = 0; j < radios.length; j++) {
            const radio = radios[j]
            const label = labels[j]
            if (radio.id != this.id) label.classList.remove('radioChecked')
          }
        })
    }
  }

  addSaver(id, text, classes) {
    this.element.innerHTML += `<a class="userBtn ${classes}" id="${id}">${text}</a>`

    document.getElementById(id).addEventListener('click', function(e) {
      const downloadLink = document.getElementById(id)
      downloadLink.setAttribute('download', 'image.png')
      const canvas = document.getElementById('defaultCanvas0')
      const dataURL = canvas.toDataURL('image/png')
      downloadLink.setAttribute('href', dataURL)
    })
  }
  fileDragandDropHandler(id, text, classes) {
    this.element.innerHTML += `<div id="${id}" class="${classes}" style="display: shown;" accept="image/png, image/jpeg">\n<span class="${classes}--prompt">${text}</span>\n</div>`
    document.getElementById(id).addEventListener('dragover', function(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    })
    document.getElementById(id).addEventListener('drop', function(e) {
      e.stopPropagation()
      e.preventDefault()
      const files = e.dataTransfer.files
      if (FileReader && files && files.length) {
        const fr = new FileReader()
        if(!files[0].type.match('image.png') && !files[0].type.match('image.jpeg')) {
          alert('File type not supported')
          return
        }
        fr.onload = function () {
            document.getElementById(id).src = fr.result
            myImg = fr.result
            load = true
        }
        fr.readAsDataURL(files[0])
    }
    })
  }
  addLoader(id, text, classes) {
    this.element.innerHTML += `<input type="file" name="${id}" id="${id}" accept="image/png, image/jpeg" style="display: none;"><label for="${id}" class="userBtn ${classes}" id="${id}-label">${text}</label>`
    document.getElementById(id).addEventListener('change', function(e) {
      const tgt = e.target || window.event.target
      const files = tgt.files

      // FileReader support
      if (FileReader && files && files.length) {
        const fr = new FileReader()
        fr.onload = function () {
            document.getElementById(id).src = fr.result
            myImg = fr.result
            load = true
        }
        fr.readAsDataURL(files[0])
    }

      // Not supported
      else {
          console.error('Your browser doesn\'t support FileReader')
      }
    })

  }

  get currentRadioValue() {
    return Array.from(this.element.querySelectorAll(`input[name="${this.radiuosGroupName}"]`)).filter(el => el.checked)[0].value
  }

  set pressed(f) {
    this.element.addEventListener('click', f)
  }
}
