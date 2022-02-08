const DB_QUIZ = [
	{
			question: "Apakah Bumi Itu Bulat?",
			answers:['Iya, bulat','Tidak, datar','Saya tidak perduli']
	},
	{

		 		question: "Berapa 1+1x5x0?",
			answers:['5', '0', '1'] 
	},
	{

			question: "Berapa 5 + 3?",
			answers:['9', '8', '7'],
	}
	]

	const CORRECT_ANSWER = [0, 2, 1]

	function startQuiz() {
		document.getElementById('awal').style.display = "none"
		document.getElementById('isi').style.display = "block"
	}

	let current_q = 0
	let total_score = 0
	let saved_answer = []

	document.addEventListener("DOMContentLoaded", function(event) {
		setupQuestion()
	});


	function setupQuestion() {
		document.getElementById('question').innerText = DB_QUIZ[current_q]['question']
		document.getElementById('choiceText0').innerText = DB_QUIZ[current_q]['answers'][0]
		document.getElementById('choiceText1').innerText = DB_QUIZ[current_q]['answers'][1]
		document.getElementById('choiceText2').innerText = DB_QUIZ[current_q]['answers'][2]
	}

	function nextQuestion() {
		current_q++

		saveAnswer()

		if (current_q > DB_QUIZ.length - 1)

			stopQuiz()

		resetState()
		setupQuestion()

	}

		function resetState() {
			const choosedAnswer = document.querySelector('input[name="choices"]:checked')
				if(choosedAnswer != null)
				choosedAnswer.checked = false
		}

		function stopQuiz() {
			checkScore()
			
		document.getElementById('isi').style.display = "none"
		document.getElementById('penutup').style.display = "block"
		return
		}

		function saveAnswer() {
			const answer = document.querySelector('input[name="choices"]:checked');
			if (answer != null) {
				saved_answer.push(parseInt(answer.getAttribute('data-id')))
				
			} else {
				saved_answer.push(0)
			}
		}

		function checkScore() {
			for (i = 0; i < saved_answer.length; i++){
				if (saved_answer[i] == CORRECT_ANSWER[i])
				total_score += 100
			}
		}