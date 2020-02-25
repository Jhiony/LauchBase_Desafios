// Curso LauchBase - Desafio 1-2 (Objetos e vetores)

const programador =
    {        
        nome: "Jhiony",
        idade: "35"
    }

const tecnologias = 
    [
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"        
        },
        {
            nome: "C++",
            especialidade: "Desktop"        
        },
        {
            nome: "Python",
            especialidade: "Data Science"        
        }
    ]

    console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologias[0].nome} com especialidade em ${tecnologias[0].especialidade}.`)