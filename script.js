window.onload = () => {

    const form = document.getElementById("formulario");


    form.onsubmit = (e) =>{

        const cidadeEntrega  = document.getElementById("cidade-entrega").value;
        const cidadeRetirada  = document.getElementById("cidade-retirada").value;
        const tipoCarro  = document.getElementById("tipo-carro").value;
        const dataRetirada = new Date(document.getElementById("data-retirada").value).getTime();
        const dataEntrega =  new Date(document.getElementById("data-entrega").value).getTime();

        const precoTipoCarro = { 
            basico: 119,
            ar: 199,
            executivo: 299
        };

        let dataAtual = new Date().getTime();
        if(dataRetirada < dataAtual | !dataEntrega){
            e.preventDefault();
            return
        }
        if(dataEntrega < dataRetirada | !dataEntrega){
            e.preventDefault();
            return
        }


        let preco = precoTipoCarro[tipoCarro]
        if(cidadeRetirada !== cidadeEntrega){
            preco += 300;
        }


        alert(`O custo do carro sera R$ ${preco}`);
    }
}