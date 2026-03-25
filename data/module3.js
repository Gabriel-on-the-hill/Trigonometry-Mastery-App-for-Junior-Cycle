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

        <div style="background: white; border-radius: 1rem; border: 1px solid var(--border); padding: 1.5rem; margin-top: 2rem; margin-bottom: 2rem; font-family: 'Outfit', sans-serif;">
            <h4 style="text-align: center; color: var(--primary); margin-bottom: 1.5rem; font-size: 1.25rem;">The Strategy Flowchart</h4>
            
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="background: var(--text-main); color: white; padding: 0.5rem 1.5rem; border-radius: 99px; font-weight: bold; z-index: 2;">Right-Angled Triangle</div>
                <div style="width: 2px; height: 20px; background: var(--border);"></div>
                <div style="width: 80%; height: 2px; background: var(--border);"></div>
                <div style="display: flex; width: 80%; justify-content: space-between;">
                    <div style="width: 2px; height: 20px; background: var(--border);"></div>
                    <div style="width: 2px; height: 20px; background: var(--border);"></div>
                </div>
                
                <div style="display: flex; width: 90%; justify-content: space-between; align-items: stretch; gap: 1rem;">
                    
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: bold; width: 100%; text-align: center;">Find a SIDE</div>
                        <div style="width: 2px; height: 15px; background: var(--border);"></div>
                        <div style="background: #f8fafc; border: 2px solid #e2e8f0; width: 100%; border-radius: 8px; padding: 0.75rem; font-size: 0.9rem; text-align: left;">
                            <p style="text-align:center; font-weight:bold; margin-bottom:0.75rem; color: var(--text-muted);">What else do you know?</p>
                            <div style="border-left: 4px solid var(--accent); padding-left: 0.5rem; margin-bottom: 0.75rem;">
                                <strong>Two other sides:</strong><br>
                                Use Pythagoras<br>
                                <span style="color:var(--text-muted);">$a^2 + b^2 = c^2$</span>
                            </div>
                            <div style="border-left: 4px solid var(--teal); padding-left: 0.5rem;">
                                <strong>1 side & 1 angle:</strong><br>
                                Use SOH CAH TOA
                            </div>
                        </div>
                    </div>
                    
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                        <div style="background: var(--secondary); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: bold; width: 100%; text-align: center;">Find an ANGLE</div>
                        <div style="width: 2px; height: 15px; background: var(--border);"></div>
                        <div style="background: #fff1f2; border: 2px solid #fecdd3; width: 100%; border-radius: 8px; padding: 0.75rem; font-size: 0.9rem; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                            <strong style="color: var(--secondary); margin-bottom: 0.5rem;">Two sides known:</strong>
                            <div style="font-weight: 600;">Use Inverse<br>SOH CAH TOA</div>
                            <span style="color:var(--text-muted); font-size:0.8rem; margin-top:0.25rem;">($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$)</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

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
