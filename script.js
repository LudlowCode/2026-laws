
function markQuiz() {
    //Dictionaries to store correct answers etc. Could have been a 2D array, but this might be more readable.
    var answers = {
        q1: "gdpr",
        q2: "ico",
        q3: "erasure",
        q4: "religion",
        q5: "storage-limitation"
    };

    var correctFeedback = {
        q1: "DPA 2018 aligns with the UK GDPR framework.",
        q2: "The ICO is a crown body and (as of 2026) its head (The Data Commissioner) is John Edwards",
        q3: "The right to erasure applies in specific circumstances.",
        q4: "Religion is sensitive data because of its potential for misuse.",
        q5: "Keep data no longer than necessary = storage limitation."
    };

    var incorrectFeedback = {
        q1: "It implements the UK GDPR framework.",
        q2: "This is not the organisation that is in charge of enforcement.",
        q3: "One right is the right to erasure (with conditions).",
        q4: "Sensitive personal data is a category of personal information that requires higher protection due to its potential for misuse",
        q5: "This is the storage limitation principle."
    };

    var score = 0;
    const total = 5;
    ;



    //Radio: get the selected radio button
    const q1SelectedElement = document.querySelector('input[name="q1"]:checked');

    if (q1SelectedElement.value === answers['q1']) {
        score++;
        setFeedback("q1", true, correctFeedback['q1']);
    } else {
        setFeedback("q1", false, incorrectFeedback['q1']);
    }

    //Select: get selected value
    const q2Select = document.getElementById("q2-select");

    if (q2Select.value === answers['q2']) {
        score++;
        setFeedback("q2", true, correctFeedback['q2']);
    } else {
        setFeedback("q2", false, incorrectFeedback['q2']);
    }

    // --- Q3 (radio) ---
    const q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value === answers['.q3']) {
        score++;
        setFeedback("q3", true, correctFeedback['q3']);
    } else {
        setFeedback("q3", false, incorrectFeedback['q3']);
    }

    // --- Q4 (select) ---
    const q4Select = document.getElementById("q4-select");
    if (q4Select.value === answers['q4']) {
        score++;
        setFeedback("q4", true, correctFeedback['q4']);
    } else {
        setFeedback("q4", false, incorrectFeedback['q4']);
    }

    // --- Q5 (radio) ---
    const q5Selected = document.querySelector('input[name="q5"]:checked');
    if (q5Selected && q5Selected.value === answers['q5']) {
        score++;
        setFeedback("q5", true, correctFeedback['q5']);
    } else {
        setFeedback("q5", false, incorrectFeedback['q5']);
    }

    // Update score display
    const scoreEl = document.getElementById("score");
    scoreEl.textContent = `Score: ${score} / ${total}`;
}

function resetQuiz() {
    // Clear radios
    document.querySelectorAll('input[type="radio"]').forEach(r => (r.checked = false));
    
    // Reset selects
    var selects = document.getElementsByTagName('select')
    for(var i=0; i<selects.length; i++){
        selects[i].selectedIndex = 0
    }

    // Clear feedback and colors
    ["q1", "q2", "q3", "q4", "q5"].forEach(id => {
        const sectionEl = document.getElementById(id);
        const feedbackEl = document.getElementById(id + "-feedback");
        sectionEl.classList.remove("correct", "incorrect");
        feedbackEl.classList.remove("correct-text", "incorrect-text");
        feedbackEl.textContent = "";
    });
    // Clear score
    document.getElementById("score").textContent = "";
}

function setFeedback(questionID, isCorrect, message) {
    const questionElement = document.getElementById(questionID);
    const feedbackElement = document.getElementById(questionID + "-feedback");

    // Clear any previous state
    questionElement.classList.remove("correct", "incorrect");
    feedbackElement.classList.remove("correct-text", "incorrect-text");

    if (isCorrect) {
        questionElement.classList.add("correct");
        feedbackElement.classList.add("correct-text");
        feedbackElement.textContent = "✅ Correct: " + message;
    } else {
        questionElement.classList.add("incorrect");
        feedbackElement.classList.add("incorrect-text");
        feedbackElement.textContent = "❌ Incorrect: " + message;
    }
}
