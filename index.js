let cestaBasica = [
     {
        "nome": "Arroz",
        "peso": "1kg",
        "preco": 5.00
     },

    {
        "nome": "Macarrão",
        "peso": "1kg",
        "preco": 3.00
    },
    {
        "nome": "Tomate",
        "peso": "500g",
        "preco": 3.00
    },
    {
        "nome": "Carne",
        "peso": "1kg",
        "preco": 100.00
    },
]

let total = 0
for(let alimento of cestaBasica){
   
    total+=alimento.preco
    
}

console.log("The price of this basic supply is: R$"+ total)

