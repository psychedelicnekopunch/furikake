
import page from 'page'

import IndexContoller from '/js/interfaces/controllers/IndexContoller.js'
import ButtonContoller from '/js/interfaces/controllers/ButtonContoller.js'
import FormContoller from '/js/interfaces/controllers/FormContoller.js'


const index = new IndexContoller
const button = new ButtonContoller
const form = new FormContoller


page('/', index.index)
page('/button', button.index)
page('/form', form.index)

page()
