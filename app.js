/**
 * app.js
 * Core application logic for Trigonometry app
 */

const AppStore = {
    modules: [],
    currentModuleId: null,
    currentQuestionIndex: 0,
    scores: {},
    
    init() {
        // Load data from window namespace
        if (window.module1) this.modules.push(window.module1);
        if (window.module2) this.modules.push(window.module2);
        if (window.module3) this.modules.push(window.module3);
        if (window.module4) this.modules.push(window.module4);
        if (window.module5) this.modules.push(window.module5);
        
        // Load saved scores
        const saved = localStorage.getItem('trigonometry_scores');
        if (saved) {
            this.scores = JSON.parse(saved);
        } else {
            // Init scores object
            this.modules.forEach(m => {
                this.scores[m.id] = { completed: false, qScores: {} };
            });
            this.saveScores();
        }

        this.renderHome();
    },

    saveScores() {
        localStorage.setItem('trigonometry_scores', JSON.stringify(this.scores));
    },

    renderHome() {
        const list = document.getElementById('module-list');
        list.innerHTML = "";
        
        this.modules.forEach((mod, idx) => {
            const status = this.scores[mod.id]?.completed ? "✅ Completed" : "⏳ In Progress";
            const completedClass = this.scores[mod.id]?.completed ? "completed" : "";
            
            // Allow all modules to be clickable for now
            const html = `
                <div class="module-card ${completedClass}" onclick="AppStore.openModule('${mod.id}')">
                    <div class="mc-info">
                        <h3>${mod.title}</h3>
                        <p>${mod.description}</p>
                    </div>
                    <div class="mc-status" style="font-size: 0.9rem; font-weight: 600;">
                        ${status}
                    </div>
                </div>
            `;
            list.innerHTML += html;
        });

        document.getElementById('home-view').classList.remove('hidden');
        document.getElementById('module-view').classList.add('hidden');
    },

    openModule(id) {
        this.currentModuleId = id;
        this.currentQuestionIndex = 0;
        const mod = this.modules.find(m => m.id === id);
        
        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('module-view').classList.remove('hidden');
        
        // Show lesson first
        document.getElementById('lesson-container').classList.remove('hidden');
        document.getElementById('practice-container').classList.add('hidden');
        document.getElementById('complete-container').classList.add('hidden');
        
        document.getElementById('lesson-content').innerHTML = mod.lessonHTML;
        
        this.updateMath();
    },

    startPractice() {
        document.getElementById('lesson-container').classList.add('hidden');
        document.getElementById('practice-container').classList.remove('hidden');
        this.renderQuestion();
    },

    renderQuestion() {
        const mod = this.modules.find(m => m.id === this.currentModuleId);
        const q = mod.questions[this.currentQuestionIndex];
        
        // Reset feedback
        document.getElementById('feedback').className = "feedback-box";
        document.getElementById('hint-box').className = "feedback-box feedback-hint";
        document.getElementById('solution-box').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
        document.getElementById('next-btn').classList.add('hidden');
        
        // Update Headers
        document.getElementById('current-q-num').innerText = this.currentQuestionIndex + 1;
        document.getElementById('total-q-num').innerText = mod.questions.length;
        
        // Render Text
        document.getElementById('question-text').innerHTML = q.text;
        
        // Render SVG if applicable
        const diagContainer = document.getElementById('diagram-container');
        if (q.diagramConfig) {
            diagContainer.style.display = "flex";
            if (window.Diagrams) window.Diagrams.drawRightTriangle(diagContainer, q.diagramConfig);
        } else {
            diagContainer.style.display = "none";
        }
        
        // Build Input UI depending on type
        const ansArea = document.getElementById('answer-area');
        ansArea.innerHTML = "";
        
        if (q.type === 'numeric') {
            ansArea.innerHTML = `<input type="number" step="any" id="ans-input" placeholder="Enter number..." onkeypress="checkEnter(event)">`;
        } else if (q.type === 'surd') {
            ansArea.innerHTML = `<div style="display:flex; align-items:center; gap:0.5rem; font-size: 1.25rem;">
                $\\sqrt{}$ <input type="number" id="ans-input" placeholder="number inside" style="width:100px;" onkeypress="checkEnter(event)">
            </div>`;
        } else if (q.type === 'dms') {
            ansArea.innerHTML = `<div style="display:flex; align-items:center; gap:0.5rem; font-size: 1.25rem;">
                <input type="number" id="ans-deg" style="width:70px;" onkeypress="checkEnter(event)">$^{\\circ}$
                <input type="number" id="ans-min" style="width:70px;" onkeypress="checkEnter(event)">$'$
            </div>`;
        }
        
        this.updateMath();
        
        // Track Attempts
        this.currentAttempts = 0;
    },

    checkAnswer() {
        const mod = this.modules.find(m => m.id === this.currentModuleId);
        const q = mod.questions[this.currentQuestionIndex];
        
        let isCorrect = false;

        if (q.type === 'dms') {
            const deg = parseFloat(document.getElementById('ans-deg').value || 0);
            const min = parseFloat(document.getElementById('ans-min').value || 0);
            isCorrect = (deg === q.correctAnswer[0] && min === q.correctAnswer[1]);
        } else {
            const inputVal = document.getElementById('ans-input')?.value.trim();
            if (!inputVal && inputVal !== "0") return; // empty

            if (q.customLogic) {
                isCorrect = q.customLogic(inputVal);
            } else {
                const userNum = parseFloat(inputVal);
                const target = parseFloat(q.correctAnswer);
                const tol = q.tolerance !== undefined ? q.tolerance : 0.01;
                isCorrect = Math.abs(userNum - target) <= tol;
            }
        }

        this.currentAttempts++;
        const feedback = document.getElementById('feedback');
        
        if (isCorrect) {
            feedback.innerHTML = "<strong>✅ Correct!</strong> Well done.";
            feedback.className = "feedback-box feedback-correct show";
            this.handleQuestionSuccess(true);
        } else {
            const hint = document.getElementById('hint-box');
            const sol = document.getElementById('solution-box');
            
            if (this.currentAttempts === 1) {
                feedback.innerHTML = "<strong>❌ Not quite.</strong> Try again.";
                feedback.className = "feedback-box feedback-incorrect show";
                hint.innerHTML = `<strong>💡 Hint:</strong> ${q.hintHTML}`;
                hint.classList.add('show');
            } else if (this.currentAttempts >= 2) {
                feedback.innerHTML = `<strong>❌ Incorrect.</strong> The correct answer involves solving appropriately.`;
                feedback.className = "feedback-box feedback-incorrect show";
                document.getElementById('solution-content').innerHTML = q.solutionHTML;
                sol.classList.remove('hidden');
                this.handleQuestionSuccess(false);
            }
        }
        this.updateMath();
    },

    handleQuestionSuccess(wasRight) {
        document.getElementById('submit-btn').classList.add('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
        
        // Save score if first attempt passing
        if (!this.scores[this.currentModuleId].qScores) {
            this.scores[this.currentModuleId].qScores = {};
        }
        // Save best score for this question
        const qId = this.modules.find(m=>m.id === this.currentModuleId).questions[this.currentQuestionIndex].id;
        const pts = (wasRight && this.currentAttempts === 1) ? 1 : 0; // 1 pt if right on first try
        
        // Keep highest score
        const existing = this.scores[this.currentModuleId].qScores[qId] || 0;
        this.scores[this.currentModuleId].qScores[qId] = Math.max(pts, existing);
        this.saveScores();
    },

    nextQuestion() {
        const mod = this.modules.find(m => m.id === this.currentModuleId);
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < mod.questions.length) {
            this.renderQuestion();
        } else {
            this.finishModule();
        }
    },

    finishModule() {
        document.getElementById('practice-container').classList.add('hidden');
        document.getElementById('complete-container').classList.remove('hidden');
        
        // Calculate Score
        const modScores = this.scores[this.currentModuleId].qScores || {};
        let total = 0;
        let earned = 0;
        const mod = this.modules.find(m => m.id === this.currentModuleId);
        mod.questions.forEach(q => {
            total++;
            earned += (modScores[q.id] || 0);
        });
        
        this.scores[this.currentModuleId].completed = true;
        this.saveScores();
        
        document.getElementById('score-text').innerHTML = `You earned <strong>${earned}</strong> points out of <strong>${total}</strong>.`;
    },

    updateMath() {
        if (window.renderMathInElement) {
             window.renderMathInElement(document.body, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false}
                ]
            });
        }
    }
};

// Listeners
function checkEnter(e) {
    if (e.key === 'Enter') AppStore.checkAnswer();
}

function returnToHome() {
    AppStore.renderHome();
}

function startPractice() {
    AppStore.startPractice();
}

function checkAnswer() {
    AppStore.checkAnswer();
}

function nextQuestion() {
    AppStore.nextQuestion();
}

// Parent logic
function openParentDashboard() {
    window.location.href = 'parent.html';
}

// Boot
window.onload = () => {
    AppStore.init();
};
