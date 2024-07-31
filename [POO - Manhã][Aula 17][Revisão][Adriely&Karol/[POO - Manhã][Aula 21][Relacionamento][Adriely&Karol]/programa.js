let alunoA = new Aluno('Adriely', '20242003', '05-03-2007');
let alunoB = new Aluno('Karol', '2550323', '26-08-2007');
let alunoC = new Aluno('Eduardo', '5938475', '24-01-2007');

let professor = new Professor('David', '25503', 'Doutorado');

let disciplinaBD = new Diciplina('Banco de Dados', '2024', professor);

console.log(disciplinaBD); //Aqui a disciplina ainda não tem aluno

disciplinaBD.adicionarAluno(alunoB);
disciplinaBD.adicionarAluno(alunoA);
disciplinaBD.adicionarAluno(alunoC);

console.log(disciplinaBD); //Aqui a disciplina terá 3 alunos