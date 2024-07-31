class Aluno {


    constructor(nome, matricula, dataDeNascimento){


        this.nome = nome;
        this.matricula = matricula;
        this.dataDeNascimento = dataDeNascimento;
    }

}

class Professor {


    constructor(nome, siape, formacao){

        this.nome = nome;
        this.siape = siape;
        this.formacao = formacao;
    }
}

class Diciplina {
     
    constructor (nome, ano, professor,){

        this.nome = nome;
        this.ano = ano;
        this.professor =professor;
        this.alunos = [];
    }

    adicionarAluno(aluno){

        if (aluno instanceof Aluno){
            this.alunos.push(aluno);
        } else {
            console.error(' aqui só é permitido aluno, seu puto, mais atenção carai!.')
        }
    }
}