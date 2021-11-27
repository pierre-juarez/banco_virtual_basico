const app = Vue.createApp({
    data(){
        return {
            titulo: 'Mi banco virtual con Vue Js',
            cantidad : 1000,
            enlace : 'https://youtube.com',
            estado_cuenta: false,
            servicios : ['Transferencias', 'Pagos', 'Giros', 'Depósitos'],
            desactivar : false
        }
    },
    methods:{
        agregarSaldo(){
            if(this.cantidad > 0){
                if(this.desactivar){ this.desactivar = false; }
            }
            this.cantidad = this.cantidad + 100;
        },
        restarSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar = true;
                alert('Ya no tienes saldo:(');
                return;
            }
            this.cantidad = this.cantidad - valor;
        },
        desactivarCuenta(){
            this.estado_cuenta = true;
            this.desactivar = true;
        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad >= 500 ? 'text-primary' : 'text-danger';
        },
        tituloMayusculas(){
            return this.titulo.toUpperCase();
        },
        mensajeCantidad(){
            if(this.cantidad === 0){
                mensaje = 'Chale, ya no tienes dinero😢';
            }else if(this.cantidad > 0 && this.cantidad < 500){
                mensaje = 'Uy, nos estamos quedando sin dinero😱';
            }else{
                mensaje = 'Fiuuu, estás "fuertecito"😂😎';
            }
            return mensaje;
        }
    }
});