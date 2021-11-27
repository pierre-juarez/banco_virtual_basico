app.component('footer-banco',{
    props : ['year','web','developer'],
    /*html*/
    template: `
    <footer class="page-footer font-small text-white bg-dark postion-absolute fixed-bottom-sm">          
      <div class="footer-copyright text-center py-3">© Copyright {{ year }}, Todos los derechos reservados a
        <a :href="web" target="_blank"> {{ developer }}</a>
      </div>      
    </footer>`,
    // template : `<div class="bg-dark text-white mt-2 py-3">
    //                 <h3>{{ texto }} - {{ valor }}</h3>
    //                 <p>{{ fecha }}</p>
    //             </div>`,
    data(){
        return {
            texto: 'Footer de mi sitio web'            
        }
    }
});