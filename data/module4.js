/**
 * data/module4.js
 * Content for Module 4: Finding Angles
 */

window.module4 = {
    id: "module4",
    title: "4. Finding Angles and Minutes",
    description: "Learn how to use inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) to find missing angles, and convert to minutes.",
    
    lessonHTML: `
        <h3>Using Inverse Trig Functions</h3>
        <p>If you end up with an equation like $\\cos(x) = \\frac{\\sqrt{3}}{2}$, you must use the <strong>inverse function</strong> to find the angle $x$.</p>
        <p>This is written as $x = \\cos^{-1}(\\frac{\\sqrt{3}}{2})$.</p>
        <div style="background: #f8fafc; padding: 1rem; border: 1px solid var(--border); border-radius: 0.5rem; margin-bottom: 1.5rem;">
            <p><strong>Calculator Steps:</strong></p>
            <ul>
                <li><strong>Casio:</strong> Press <code>Shift</code>, then <code>cos</code></li>
                <li><strong>Sharp:</strong> Press <code>2nd Function</code>, then <code>cos</code></li>
            </ul>
        </div>

        <h3>Changing Decimals to Minutes</h3>
        <p>Sometimes angles need to be written in Degrees and Minutes instead of decimals. There are 60 minutes in 1 degree.</p>
        <p><em>Example: Change $37.36^\\circ$ to the nearest minute.</em></p>
        <ul>
            <li><strong>Casio:</strong> Type $37.36$ = then press the Degrees/Minutes/Seconds button <code>° ' "</code> (which looks like commas, 2 buttons above number 8).</li>
            <li><strong>Sharp:</strong> Type $37.36$, press <code>2nd Function</code>, then <code>DMS</code>.</li>
        </ul>
        <div style="background: #fffbeb; padding: 1rem; border-left: 4px solid var(--accent); border-radius: 0 0.5rem 0.5rem 0; margin-top: 1.5rem;">
            <h4>Rounding like Time!</h4>
            <p>Your calculator shows $37^\\circ 21' 36''$.</p>
            <p>The 37 is the degrees, the 21 is the minutes, and the 36 is the seconds. <strong>If your seconds value is 30 or greater, you round the minutes up.</strong> If it is less than 30, you round down.</p>
            <p>Since $36 \\ge 30$, we round up: <strong>$37^\\circ 22'$</strong></p>
        </div>
    `,
    
    questions: [
        {
            id: "m4_q1",
            type: "numeric",
            text: "<strong>Question 1:</strong><br>Find the measure of the angle $x$, correct to one decimal place.",
            diagramConfig: { base: 12, height: 6, labelHyp: " ", labelBase: "2", labelHeight: "1", angleA: "x" },
            correctAnswer: 26.6,
            tolerance: 0.1,
            hintHTML: "Label the sides from angle $x$. You have the Opposite (1) and the Adjacent (2). Use TOA and the $\\tan^{-1}$ function.",
            solutionHTML: "<strong>Step 1: Choose Ratio</strong><br>Opposite = 1, Adjacent = 2. Use TOA.<br>$$ \\tan(x) = \\frac{1}{2} $$<br><br><strong>Step 2: Solve</strong><br>$$ x = \\tan^{-1}(0.5) $$<br>$$ x = 26.565...^\\circ $$<br><br>Correct to 1 decimal place: **26.6°**"
        },
        {
            id: "m4_q2",
            type: "numeric",
            text: "<strong>Question 2:</strong><br>In the right-angled triangle $ABC$ (right-angled at $B$), $|BC| = 1$ and $|AB| = \\sqrt{3}$.<br>Find $|\\angle BAC|$ exactly.",
            diagramConfig: { base: 6, height: 10, labelHyp: "", labelBase: "1", labelHeight: "\\sqrt{3}", angleB: "?", flipY: false, flipX: true },
            correctAnswer: 30,
            tolerance: 0,
            hintHTML: "If the right angle is at $B$, and we want $\\angle BAC$ (angle at $A$), then $BC$ is the Opposite and $AB$ is the Adjacent.",
            solutionHTML: "<strong>Step 1: Choose Ratio</strong><br>We are looking from angle $A$.<br>Opposite = $|BC| = 1$<br>Adjacent = $|AB| = \\sqrt{3}$<br>$$ \\tan(A) = \\frac{\\text{opp}}{\\text{adj}} = \\frac{1}{\\sqrt{3}} $$<br><br><strong>Step 2: Solve</strong><br>$$ A = \\tan^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) $$<br>$$ A = 30^\\circ $$"
        },
        {
            id: "m4_q3",
            type: "numeric",
            text: "<strong>Question 3:</strong><br>Calculate the measure of the angle $B$, correct to the nearest degree.",
            diagramConfig: { base: 6, height: 15, labelHyp: "41", labelBase: "9", labelHeight: "40", angleB: "B", flipX: true },
            correctAnswer: 77,
            tolerance: 0,
            hintHTML: "You have all three sides. You can use Sin, Cos, or Tan! Just make sure to label Opposite, Adjacent, and Hypotenuse correctly relative to angle B.",
            solutionHTML: "<strong>Step 1: Choose Ratio</strong><br>Let's use Tan.<br>Relative to angle B:<br>Opposite = 40<br>Adjacent = 9<br>$$ \\tan(B) = \\frac{40}{9} $$<br><br><strong>Step 2: Solve</strong><br>$$ B = \\tan^{-1}\\left(\\frac{40}{9}\\right) $$<br>$$ B = 77.319...^\\circ $$<br><br>Correct to the nearest degree: **77**"
        },
        {
            id: "m4_q4",
            type: "dms",
            text: "<strong>Question 4:</strong><br>Change $50.27^\\circ$ to the nearest minute.",
            diagramConfig: null,
            correctAnswer: [50, 16], // [degrees, minutes]
            hintHTML: "Type $50.27$ into your calculator, press `=`. Then press the `° ' \"` button (or 2nd Function + DMS). Check the seconds: if it's 30 or more, round the minutes up!",
            solutionHTML: "<strong>Using the calculator:</strong><br>Type $50.27$ and convert to DMS using the `° ' \"` button.<br>The calculator shows: $50^\\circ 16' 12''$<br><br><strong>Rounding:</strong><br>The seconds value is 12. Since $12 < 30$, we round down (keep it as 16).<br>Answer: **$50^\\circ 16'$**"
        },
        {
            id: "m4_q5",
            type: "dms",
            text: "<strong>Question 5:</strong><br>Change $50.38^\\circ$ to the nearest minute.",
            diagramConfig: null,
            correctAnswer: [50, 23],
            hintHTML: "Multiply $0.38$ by $60$. If the seconds are 30 or more, round up!",
            solutionHTML: "$0.38 \\times 60 = 22.8$<br>This means $22$ minutes and $0.8$ minutes (or $48$ seconds).<br>Since $48 \\geq 30$, we round up the minutes to 23.<br>Answer: **$50^\\circ 23'$**"
        },
        {
            id: "m4_q6",
            type: "numeric",
            text: "<strong>Question 6:</strong><br>Evaluate $\\sin 35^\\circ 7'$ to four decimal places.",
            diagramConfig: null,
            correctAnswer: 0.5752,
            tolerance: 0.0001,
            hintHTML: "Use your calculator. Press Sin, then 35, then the °'\" button, then 7, then the °'\" button again, then =.",
            solutionHTML: "Using the calculator: $\\sin(35^\\circ 7') = 0.575239...$<br>Rounded to 4 decimal places: **0.5752**"
        }
    ]
};
