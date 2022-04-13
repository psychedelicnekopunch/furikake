
import page from 'page'

import IndexContoller from '/js/Interfaces/Controllers/IndexContoller.js'
import ButtonContoller from '/js/Interfaces/Controllers/ButtonContoller.js'
import FormContoller from '/js/Interfaces/Controllers/FormContoller.js'


const index = new IndexContoller
const button = new ButtonContoller
const form = new FormContoller


page('/', index.index)
page('/button', button.index)
page('/form', form.index)

page()
