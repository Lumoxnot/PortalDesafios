const questions = [
    {
        question: "(1) Qual é o plural de 'coração'?",
        options: ["coraçãos", "corações", "coraçães", "coraçãos"],
        answer: "corações"
    },
    {
        question: "(2) Qual é o plural de 'cão'?",
        options: ["Cãos", "Cães", "Caons", "Caos"],
        answer: "Cães"
    },
    {
        question: "(3) Qual das palavras abaixo está escrita corretamente?",
        options: ["Exclarecer", "Esclarecer", "Eclarecer", "Exclareçer"],
        answer: "Esclarecer"
    },
    {
        question: "(4) Qual a forma verbal correta para a frase: 'Ele _______ (cantar) muito bem'?",
        options: ["canta", "cantamos", "cantam", "canto"],
        answer: "canta"
    },
    {
        question: "(5) Qual o antônimo de 'feliz'?",
        options: ["Alegre", "Triste", "Contente", "Feliz"],
        answer: "Triste"
    },
    {
        question: "(6) Como se escreve o número 15 por extenso?",
        options: ["Dez e cinco", "Quinze", "Doze", "Vinte"],
        answer: "Quinze"
    },
    {
        question: "(7) Qual das palavras abaixo está no diminutivo?",
        options: ["Casa", "Casinha", "Casarão", "Casa grande"],
        answer: "Casinha"
    },
    {
        question: "(8) Complete a frase: 'Eles _______ (beber) água todos os dias.'",
        options: ["bebe", "bebem", "bebemos", "bebes"],
        answer: "bebem"
    },
    {
        question: "(9) Qual a classificação gramatical da palavra 'alegremente'?",
        options: ["Substantivo", "Verbo", "Advérbio", "Adjetivo"],
        answer: "Advérbio"
    },
    {
        question: "(10) Qual é a forma correta do verbo 'ser' no presente para 'eu'?",
        options: ["sou", "somos", "é", "são"],
        answer: "sou"
    },
    {
        question: "(11) Qual a forma correta de se referir a dois homens?",
        options: ["Eles", "Elas", "Ele", "Ela"],
        answer: "Eles"
    },
    {
        question: "(12) Complete a frase: 'Nós _______ (partir) para a viagem amanhã.'",
        options: ["parto", "partimos", "partem", "partes"],
        answer: "partimos"
    },
    {
        question: "(13) Qual dos seguintes é um pronome pessoal?",
        options: ["Casa", "Ela", "Alegre", "Azul"],
        answer: "Ela"
    },
    {
        question: "(14) Qual a correta conjugação do verbo 'falar' na primeira pessoa do singular (eu)?",
        options: ["fala", "falo", "falamos", "falam"],
        answer: "falo"
    },
    {
        question: "(15) Qual das palavras abaixo está escrita incorretamente?",
        options: ["Acento", "Acerto", "Acertação", "Assento"],
        answer: "Acertação"
    },
    {
        question: "(16) Qual é o feminino de 'garçom'?",
        options: ["Garçonete", "Garçom", "Garçon", "Garçona"],
        answer: "Garçonete"
    },
    {
        question: "(17) Complete a frase: 'O _______ (correr) rápido.'",
        options: ["meninos corre", "meninos correu", "menino corre", "meninos correndo"],
        answer: "menino corre"
    },
    {
        question: "(18) Qual das opções abaixo é uma preposição?",
        options: ["E", "Ou", "Entre", "Mas"],
        answer: "Entre"
    },
    {
        question: "(19) Qual a forma plural correta de 'lápis'?",
        options: ["Lápises", "Lápis", "Lápisse", "Lápisso"],
        answer: "Lápis"
    },
    {
        question: "(20) Complete a frase: 'A criança _______ (estudar) todos os dias.'",
        options: ["estuda", "estudam", "estudamos", "estude"],
        answer: "estuda"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer = 30;
let interval;

function showQuestion() {
    clearInterval(interval);
    timer = 30;
    document.getElementById('timer').textContent = timer;
    interval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer === 0) {
            checkAnswer(null);
        }
    }, 1000);

    const questionContainer = document.querySelector('.question-container');
    questionContainer.querySelector('.question').textContent = questions[currentQuestionIndex].question;
    const optionsContainer = questionContainer.querySelector('.options');
    optionsContainer.innerHTML = '';
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    clearInterval(interval);
    if (answer === questions[currentQuestionIndex].answer) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = questions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    document.querySelector('.container').innerHTML = `
        <h1>Resultado</h1>
        <p>Você acertou ${correctAnswers} de ${totalQuestions} questões.</p>
   
        <p>Sua porcentagem de acertos foi de ${percentage.toFixed()}%.</p>
    `;
}

showQuestion();