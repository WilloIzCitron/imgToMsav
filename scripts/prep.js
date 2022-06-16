let lastImg
let myImg = 'icons/default.png'
let allColors = []
let gammaCorrection = 1

const allObjects = {
  // walls
  'spore-wall': [139, 86, 149, 255],
	'dirt-wall': [112, 70, 64, 255],
	'dacite-wall': [160, 161, 184, 255],
	'ice-wall': [211, 209, 255, 255],
	'stone-wall': [122, 122, 127, 255],
	'dune-wall': [90, 89, 89, 255],
	'sand-wall': [255, 223, 188, 255],
	'salt-wall': [244, 248, 255, 255],
	'shrubs': [112, 187, 103, 255],
	'shale-wall': [114, 116, 160, 255],
	'spore-pine': [146, 78, 148, 255],
	'snow-pine': [238, 247, 255, 255],
	'pine': [90, 159, 92, 255],
	'dark-metal': [126, 128, 143, 255],
  'regolith-wall': [202, 154, 90, 255],
  'yellow-stone-wall': [164, 111, 72, 255],
  'rhyolite-wall': [117, 69, 57, 255],
  'carbon-wall': [68, 76, 81, 255],
  'ferric-stone-wall': [109, 99, 92, 255],
  'beryllic-stone-wall': [78, 93, 80, 255],
  'arkyic-wall': [103, 132, 86, 255],
  'crystalline-stone-wall': [106, 90, 105, 255],
  'crystalline-stone-wall': [251, 220, 227, 255],
  'red-stone-wall': [187, 83, 89, 255],
  'graphitic-wall': [80, 90, 107, 255],
  // plates (24)
	'deep-water': [61, 73, 128, 255],
	'water': [71, 84, 143, 255],
	'tainted-water': [74, 57, 114, 255],
	'deep-tainted-water': [53, 41, 83, 255],
	'dark-sand-tainted-water': [57, 50, 74, 255],
	'sand-water': [116, 104, 122, 255],
	'dark-sand-water': [53, 55, 81, 255],
	'tar': [22, 24, 23, 255],
	'cryofluid': [84, 157, 181, 255],
	'slag': [196, 99, 50, 255],
	'space': [5, 0, 18, 255],
	'stone': [66, 66, 71, 255],
	'craters': [67, 67, 71, 255],
	'char': [60, 60, 66, 255],
	'basalt': [49, 47, 47, 255],
	'hot-rock': [67, 56, 49, 255],
	'magma-rock': [104, 74, 53, 255],
	'sand': [167, 137, 111, 255],
	'dark-sand': [48, 46, 46, 255],
	'dirt': [79, 49, 42, 255],
	'mud': [41, 24, 21, 255],
	'dacite': [120, 121, 134, 255],
	'grass': [84, 132, 73, 255],
	'salt': [188, 189, 191, 255],
	'snow': [179, 183, 187, 255],
	'ice': [162, 162, 194, 255],
	'ice-snow': [156, 158, 187, 255],
	'shale': [74, 70, 101, 255],
	'moss': [86, 54, 92, 255],
	'spore-moss': [86, 56, 104, 255],
	'metal-floor-1': [85, 87, 96, 255],
	'damaged-metal-floor': [83, 84, 94, 255],
	'metal-floor-2': [80, 81, 90, 255],
	'metal-floor-3': [90, 91, 101, 255],
	'metal-floor-4': [93, 95, 106, 255],
	'metal-floor-5': [108, 88, 76, 255],
	'dark-panel-1': [61, 63, 72, 255],
	'dark-panel-2': [65, 62, 69, 255],
	'dark-panel-3': [59, 60, 69, 255],
	'dark-panel-4': [67, 69, 79, 255],
	'dark-panel-5': [70, 67, 75, 255],
	'dark-panel-6': [78, 69, 76, 255],
  'rhyolite': [91, 57, 46, 255],
  'rhyolite-crater': [89, 55, 44, 255],
  'rough-rhyolite': [81, 50, 43, 255],
  'regolith': [114, 75, 54, 255],
  'yellow-stone': [116, 77, 54, 255],
  'carbon-stone': [34, 38, 43, 255],
  'ferric-stone': [56, 50, 49, 255],
  'ferric-craters': [60, 53, 51, 255],
  'beryllic-stone': [41, 48, 43, 255],
  'crystalline-stone': [45, 39, 47, 255],
  'crystal-floor': [58, 47, 67, 255],
  'yellow-stone-plates': [129, 93, 56, 255],
  'red-stone': [139, 61, 65, 255],
  'dense-red-stone': [146, 71, 68, 255],
  'red-ice': [193, 174, 168, 255],
  'arkycite-floor': [85, 112, 59, 255],
  'arkyic-stone': [56, 73, 50, 255],
  'redmat': [69, 43, 42, 255],
  'bluemat': [45, 39, 64, 255],
  'core-zone': [107, 91, 75, 255],
  // ores
  'copper': [217, 157, 115, 255],
  'lead': [140, 127, 169, 255],
  'scrap': [119, 119, 119, 255],
  'coal': [39, 39, 39, 255],
  'titanium': [141, 161, 227, 255],
  'thorium': [249, 163, 199, 255]
}
let load = false
let preloaded = false
function preload() {
  lastImg = myImg
  myImg = loadImage(myImg)
  load = false
  preloaded = true
}

function draw() {
  if (load) {
      preload()
    } else if (preloaded) {
      createCanvas(myImg.width, myImg.height)
      image(myImg, 0, 0)
      if (myImg.width > 1 && myImg.height > 1) preloaded = false
    }
}

function makeImg() {

  const canvas = document.getElementById('defaultCanvas0')
  const ctx = canvas.getContext('2d')
  const imageData = ctx.getImageData(0.0, 0.0, canvas.width, canvas.height)
  const data = imageData.data

  for (let i = 0; i < data.length; i+=4) {

    const curPixel = [data[i], data[i+1], data[i+2], 255].map((c, p) => p == 3 ? 255 : 255 * Math.pow((c / 255), 1/gammaCorrection))

    let nextPixel = [[0,0,0,255]]
    let val = Infinity
    for (let k = 0; k < allColors.length; k++) {
      const curValue = curPixel.map((x, l) => l == 3 ? 255 : Math.abs(x - allColors[k][l])).reduce((a, b) => a + b)
      if (curValue < val) {
        nextPixel = allColors[k]
        val = curValue
      }
    }

    data[i] = nextPixel[0]
    data[i+1] = nextPixel[1]
    data[i+2] = nextPixel[2]
    data[i+3] = 255
  }
  ctx.putImageData(imageData, 0, 0)

}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true})(navigator.userAgent||navigator.vendor||window.opera)
  return check
}