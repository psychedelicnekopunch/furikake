
import page from 'page'

import IndexContoller from '/js/interfaces/controllers/IndexContoller.js'
import ButtonContoller from '/js/interfaces/controllers/ButtonContoller.js'


const index = new IndexContoller
const button = new ButtonContoller


page('/', index.index)
page('/button', button.index)

page()
