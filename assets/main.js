import './style.css'
import { markdown as nestMarkdown } from './data/js.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <svg id="markmap" style="width:100%; height:100vh"></svg>  
  </div>
  <div id="buttons">
    <a href="https://github.com/JeanKei/graphJS/tree/main?tab=readme-ov-file" class="home">Home</a>
  </div>
`

let mm = window.markmap
let { Transformer, Markmap, loadCSS, loadJS } = mm

function domRenderMarkdownMind(ele, markdown) {
  const transformer = new Transformer();
  const { root, features } = transformer.transform(markdown);
  const { styles, scripts } = transformer.getUsedAssets(features);

  if (styles) loadCSS(styles);
  if (scripts) loadJS(scripts, { getMarkmap: () => mm });

  Markmap.create(ele, null, root);
}

let ele = document.querySelector('#markmap')
domRenderMarkdownMind(ele, nestMarkdown)

