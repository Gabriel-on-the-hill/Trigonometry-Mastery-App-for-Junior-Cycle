/**
 * data/module3.js
 * Content for Module 3: Finding Side Lengths
 */

window.module3 = {
    id: "module3",
    title: "3. Finding Side Lengths",
    description: "Learn how to use Sin, Cos, and Tan to find the length of a side when you know a side and an angle.",
    
    lessonHTML: `
        <h3>The 3-Step Selection Process</h3>
        <p>When you need to find a missing side and you are given an angle (other than $90^\\circ$), you use Trigonometry (SOH CAH TOA).</p>
        
        <ol>
            <li><strong>Label the triangle:</strong> Start from the given angle and label the <em>Hypotenuse</em>, <em>Opposite</em>, and <em>Adjacent</em>.</li>
            <li><strong>Identify what you know and need:</strong> State which side length you know, and which side you are trying to find.</li>
            <li><strong>Choose the ratio:</strong> Pick the SOH, CAH, or TOA formula that links those two sides together.</li>
        </ol>

        <div style="background: #fffbeb; padding: 1rem; border-left: 4px solid var(--accent); border-radius: 0 0.5rem 0.5rem 0; margin-top: 1.5rem;">
            <h4>Important: The "Unknown on Bottom" Trap</h4>
            <p><strong>Easy case (x on top):</strong><br>
            If $\\cos(30^\\circ) = \\frac{x}{10}$, then $x = 10 \\times \\cos(30^\\circ)$.</p>
            <p><strong>Hard case (x on bottom):</strong><br>
            If $\\cos(40^\\circ) = \\frac{5}{x}$, you must carefully swap the variables.<br>
            $x = \\frac{5}{\\cos(40^\\circ)}$.</p>
        </div>
    `,
    
    questions: [
        {
            id: "m3_q1",
            type: "numeric",
            text: "<strong>Question 1:</strong><br>Find $x$, correct to three decimal places.",
            diagramConfig: { base: 12, height: 6, labelHyp: "40", labelBase: "x", labelHeight: "", angleA: "45°", flipX: false },
            correctAnswer: 28.284,
            tolerance: 0.001,
            hintHTML: "Label the sides relative to the 45° angle. You know the Hypotenuse (40) and you want to find the Adjacent (x). Use CAH.",
            solutionHTML: "<strong>Step 1: Choose Ratio</strong><br>We want Adjacent ($x$) and we know Hypotenuse ($40$).<br>CAH: $\\cos(A) = \\frac{\\text{adj}}{\\text{hyp}}$<br><br><strong>Step 2: Solve</strong><br>$$ \\cos(45^\\circ) = \\frac{x}{40} $$<br>Multiply both sides by 40:<br>$$ x = 40 \\times \\cos(45^\\circ) $$<br>$$ x = 28.28427... $$<br><br>Correct to 3 decimal places: **28.284**"
        },
        {
            id: "m3_q2",
            type: "numeric",
            text: "<strong>Question 2:</strong><br>Find $x$, correct to one decimal place.<br><em>Note: Be careful with your algebra at the end of this question!</em>",
            // Triangle: angle 30 at bottom, opp is top horizontal (Wait, look at snapshot carefully: long vertical side, short top horizontal. The angle is at the bottom vertex. Top horizontal is opposite. Vertical is adjacent. Let's verify: 
            // the snapshot shows right angle at top right. Angle 30 at bottom vertex. Top horizontal is 17. Right vertical is x. So 17 is opposite, x is adjacent. Yes.)
            // My diagram renderer uses standard bottom-left right angle. So if I draw it:
            diagramConfig: { base: 6, height: 12, labelOpp: "17", labelAdj: "x", labelHyp: "", angleB: "30°", labelBase: "17", labelHeight: "x", highlightHeight: true },
            correctAnswer: 29.4,
            tolerance: 0.1,
            hintHTML: "Label the sides relative to the 30° angle. 17 is the Opposite. $x$ is the Adjacent. Use TOA. This is the 'Unknown on Bottom' trap!",
            solutionHTML: "<strong>Step 1: Choose Ratio</strong><br>We know Opposite ($17$) and want Adjacent ($x$).<br>TOA: $\\tan(A) = \\frac{\\text{opp}}{\\text{adj}}$<br><br><strong>Step 2: Solve</strong><br>$$ \\tan(30^\\circ) = \\frac{17}{x} $$<br>Because $x$ is on the bottom, we multiply to bring it up, then divide by $\\tan(30^\\circ)$:<br>$$ x \\times \\tan(30^\\circ) = 17 $$<br>$$ x = \\frac{17}{\\tan(30^\\circ)} $$<br>$$ x = 29.444... $$<br><br>Correct to 1 decimal place: **29.4**"
        }
    ]
};
