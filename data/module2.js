/**
 * data/module2.js
 * Content for Module 2: Trigonometric Ratios (Sin, Cos, Tan)
 */

window.module2 = {
    id: "module2",
    title: "2. Trigonometric Ratios (Sin, Cos, Tan)",
    description: "Learn how to use SOH CAH TOA to deal with angles in right-angled triangles.",
    
    lessonHTML: `
        <h3>SOH CAH TOA</h3>
        <p>In the Formulae and Tables Booklet you will see formulas like $\\sin A = \\frac{a}{c}$, but the letters $a, b,$ and $c$ can be very confusing.</p>
        <p>Therefore, you must learn the rules a different way:</p>
        <div style="display: flex; gap: 2rem; justify-content: center; margin: 1.5rem 0; font-size: 1.2rem; background: #fffbeb; padding: 1rem; border-radius: 0.5rem; border: 1px solid #fcd34d;">
            <div>$$ \\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}} $$</div>
            <div>$$ \\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}} $$</div>
            <div>$$ \\tan = \\frac{\\text{opposite}}{\\text{adjacent}} $$</div>
        </div>
        
        <p style="text-align:center; font-weight:bold; font-size: 1.5rem; color: var(--secondary);">SOH CAH TOA</p>
        <p style="text-align:center; font-style:italic;">or</p>
        <p style="text-align:center; font-weight:bold; color: var(--primary);"><strong>S</strong>illy <strong>O</strong>ld <strong>H</strong>arry, <strong>C</strong>aught <strong>A</strong> <strong>H</strong>uge, <strong>T</strong>rout <strong>O</strong>ut <strong>A</strong>ngling</p>

        <h4 style="margin-top:2rem;">How to label the sides:</h4>
        <ul style="margin-bottom: 1.5rem;">
            <li><strong style="color:var(--secondary);">Hypotenuse:</strong> The side across from the right angle. (Always the longest side).</li>
            <li><strong style="color:var(--primary);">Opposite:</strong> The side across from the angle we are using.</li>
            <li><strong style="color:var(--teal);">Adjacent:</strong> The "other" side (the one touching the angle).</li>
        </ul>

        <div style="background: #eff6ff; padding: 1rem; border-left: 4px solid var(--primary); border-radius: 0 0.5rem 0.5rem 0; margin-top: 2rem;">
            <h4>Crucial Calculator Checks!</h4>
            <p>You need to make sure your calculator is in <strong>'degrees' mode</strong>.</p>
            <ul>
                <li><strong>Casio:</strong> There should be a little <strong>'D'</strong> at the top of the screen.</li>
                <li><strong>Sharp:</strong> There should be a little <strong>'DEG'</strong> at the top of the screen.</li>
            </ul>
            <p>If it is not in degrees mode: <br>Casio: Press <code>Shift</code>, <code>Mode</code>, <code>3</code>.<br>Sharp: Press <code>Setup</code>, <code>0</code>, <code>0</code>.</p>
        </div>
    `,
    
    questions: [
        // Placeholder for questions until provided by user. 
        // I will add one foundational question to test understanding of the lesson.
        {
            id: "m2_q1",
            type: "mcq", 
            text: "<strong>Question 1:</strong> Based on the lesson, which mnemonic correctly helps you remember the ratio for Tangent?",
            diagramConfig: null, // No diagram needed for this MCQ
            options: [
                "Two Ostriches Arriving",
                "Trout Out Angling",
                "Tom Often Asks",
                "Trout And Oysters"
            ],
            correctAnswer: "Trout Out Angling",
            hintHTML: "Think of the Silly Old Harry phrase.",
            solutionHTML: "The phrase is '<strong>T</strong>rout <strong>O</strong>ut <strong>A</strong>ngling', corresponding to Tangent = Opposite / Adjacent."
        }
    ]
};
