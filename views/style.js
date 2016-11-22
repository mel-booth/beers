const html = require('yo-yo')

const getStyles = require('../getStyles')

module.exports = Style

function Style(dispatch){
  const styleList = getStyles()
  styleList.filter(style, () => {
    console.log(style);
  })
}
