/**
 * data/module1.js
 * Content for Module 1: Pythagoras' Theorem
 */

window.module1 = {
    id: "module1",
    title: "1. The Theorem of Pythagoras",
    description: "Learn how to use $a^2 + b^2 = c^2$ to find missing sides in right-angled triangles.",
    
    lessonHTML: `
        <h3>Is it a right-angled triangle?</h3>
        <p>If <strong>yes</strong>, and you know the length of two sides and are looking for the third side, use the Theorem of Pythagoras to find the solution:</p>
        <div style="text-align:center; font-size: 1.5rem; margin: 1rem 0; padding: 1rem; background: #eff6ff; border-radius: 0.5rem; color: var(--primary);">
            $$ c^2 = a^2 + b^2 $$
        </div>
        <p><strong>Nitty-Gritty Point:</strong> Be careful with the letters $a, b,$ and $c$. The examiner might label the triangle differently. A much safer way to remember Pythagoras is:</p>
        <div style="text-align:center; font-weight: bold; margin: 1rem 0;">
            $$ (\\text{longest side})^2 = (\\text{other side})^2 + (\\text{other side})^2 $$
        </div>
        <p>The <strong>longest side (hypotenuse)</strong> is always the one directly across from the right angle block.</p>
        <ul>
            <li><strong>Finding the longest side ($c$):</strong> Square the other two, Add them, Square root the answer.</li>
            <li><strong>Finding a shorter side ($a$ or $b$):</strong> Square the other two, <strong>Subtract</strong> them, Square root the answer.</li>
        </ul>
    `,
    
    questions: [
        {
            id: "m1_q1",
            type: "numeric", // Needs number answer
            text: "<strong>Question 1:</strong> Find the length of $x$.",
            diagramConfig: { base: 4, height: 3, labelHyp: "x", labelBase: "4", labelHeight: "3" },
            correctAnswer: 5,
            tolerance: 0,
            hintHTML: "You are looking for the hypotenuse (the longest side). Use: <br>$$ x^2 = 3^2 + 4^2 $$",
            solutionHTML: "$$ x^2 = 3^2 + 4^2 $$<br>$$ x^2 = 9 + 16 $$<br>$$ x^2 = 25 $$<br>$$ x = \\sqrt{25} $$<br>$$ x = 5 $$"
        },
        {
            id: "m1_q2",
            type: "numeric",
            text: "<strong>Question 2:</strong> Find the length of $y$.",
            diagramConfig: { base: 12, height: 5, flipX: true, labelHyp: "13", labelBase: "12", labelHeight: "y", highlightHyp: false },
            correctAnswer: 5,
            tolerance: 0,
            hintHTML: "You are looking for a <strong>shorter side</strong>, so you must subtract.<br>$$ 13^2 = 12^2 + y^2 $$",
            solutionHTML: "$$ 13^2 = 12^2 + y^2 $$<br>$$ 169 = 144 + y^2 $$<br>$$ 169 - 144 = y^2 $$<br>$$ 25 = y^2 $$<br>$$ \\sqrt{25} = y $$<br>$$ 5 = y $$"
        },
        {
            id: "m1_q3",
            type: "surd",
            text: "<strong>Question 3:</strong> Find $z$, in surd form.",
            diagramConfig: { base: 6, height: 4, labelHyp: "7", labelBase: "z", labelHeight: "4", highlightHyp: false },
            correctAnswer: "sqrt(33)", // Handled internally
            inputPrompt: "Type the number under the square root: √[____]",
            customLogic: function(val) { return parseFloat(val) === 33; },
            hintHTML: "You are looking for a shorter side. Subtract!<br>$$ 7^2 = 4^2 + z^2 $$",
            solutionHTML: "$$ 7^2 = 4^2 + z^2 $$<br>$$ 49 = 16 + z^2 $$<br>$$ 49 - 16 = z^2 $$<br>$$ 33 = z^2 $$<br>$$ \\sqrt{33} = z $$<br>Since it asks for 'surd form', leave it as $\\sqrt{33}$."
        },
        {
            id: "m1_q4",
            type: "numeric",
            text: "<strong>Question 4:</strong> Triangle $abc$ is an isosceles right-angled triangle with $|ac| = |bc|$, $|ab| = \\sqrt{72}$ and $|\\angle acb| = 90^\\circ$. Find $|bc|$.",
            diagramConfig: { base: 6, height: 6, labelHyp: "\\sqrt{72}", labelBase: "b", labelHeight: "a", angleA: "", angleB: "" },
            correctAnswer: 6,
            tolerance: 0.01,
            hintHTML: "Since it is isosceles, the two short sides are the same length. Call them both $x$.<br>$$ (\\sqrt{72})^2 = x^2 + x^2 $$",
            solutionHTML: "Let $|ac| = |bc| = x$.<br>$$ x^2 + x^2 = (\\sqrt{72})^2 $$<br>$$ 2x^2 = 72 $$<br>$$ x^2 = 36 $$<br>$$ x = \\sqrt{36} $$<br>$$ x = 6 $$<br>So, $|bc| = 6$."
        },
        {
            id: "m1_q5",
            type: "numeric",
            text: "<strong>Question 5:</strong> The lengths of the sides of a right-angled triangle are $x+1$, $x+2$, and hypotenuse $2x+2$.<br>Solve the equation to find $x$ correct to 2 decimal places.",
            diagramConfig: { base: 6, height: 4, labelHyp: "2x+2", labelBase: "x+2", labelHeight: "x+1" },
            correctAnswer: 0.37,
            tolerance: 0.01,
            hintHTML: "Use Pythagoras to form an equation:<br>$$ (2x+2)^2 = (x+1)^2 + (x+2)^2 $$<br>Multiply out carefully, then use the $-b$ formula.",
            solutionHTML: "$$ (2x+2)^2 = (x+1)^2 + (x+2)^2 $$<br>$$ 4x^2 + 8x + 4 = (x^2 + 2x + 1) + (x^2 + 4x + 4) $$<br>$$ 4x^2 + 8x + 4 = 2x^2 + 6x + 5 $$<br>Bring everything to one side:<br>$$ 2x^2 + 2x - 1 = 0 $$<br>Use the quadratic formula where $a=2, b=2, c=-1$:<br>$$ x = \\frac{-2 \\pm \\sqrt{2^2 - 4(2)(-1)}}{2(2)} $$<br>$$ x = \\frac{-2 \\pm \\sqrt{4 + 8}}{4} = \\frac{-2 \\pm \\sqrt{12}}{4} $$<br>$$ x = 0.366... \\text{ or } x = -1.366... $$<br>Since a side length cannot be negative when we plug $x$ back in, we use $x \approx 0.366$.<br>Correct to 2 decimal places: **0.37**."
        },
        {
            id: "m1_q6",
            type: "numeric",
            text: "<strong>Question 6 (Real Life Context):</strong> A kite is held by a string 13m long. When blown in the wind it is 9m above the ground. How far is the person from the point directly below the kite, correct to the nearest metre?",
            diagramConfig: { base: 10, height: 9, labelHyp: "13m", labelHeight: "9m", labelBase: "d", flipX: true },
            correctAnswer: 9,
            tolerance: 0,
            hintHTML: "Assuming the ground is flat and the vertical height drops precisely to a right angle, we have a triangle with hypotenuse 13 and one side 9. Find the base.",
            solutionHTML: "Let the distance be $d$.<br>$$ 13^2 = 9^2 + d^2 $$<br>$$ 169 = 81 + d^2 $$<br>$$ 169 - 81 = d^2 $$<br>$$ 88 = d^2 $$<br>$$ d = \\sqrt{88} \\approx 9.38 $$<br>To the nearest metre, $d = 9\\text{m}$."
        },
        {
            id: "m1_q7",
            type: "numeric",
            text: "<strong>Question 7 (Double Triangle):</strong><br>Show that Sutton is 14km further from Birmingham than Walsall is from Birmingham.<br><br><em>(Enter the distance from Birmingham to Sutton to verify your working:)</em>",
            diagramConfig: { base: 10, height: 10, labelHyp: "26km", labelBase: "x", labelHeight: "10km", angleA: "90°" }, 
            correctAnswer: 24,
            tolerance: 0,
            hintHTML: "Triangle 1 (Oldbury): Right-angled with legs 8km and 6km. Find hypotenuse (Walsall to Birmingham).<br>Triangle 2: Right-angled at Birmingham. Hypotenuse is 26km. One leg is the distance you just found. Find the other leg (Birmingham to Sutton).",
            solutionHTML: "<strong>Step 1: Distance Walsall to Birmingham (W-B)</strong><br>$$ (W-B)^2 = 8^2 + 6^2 $$<br>$$ (W-B)^2 = 64 + 36 = 100 $$<br>$$ W-B = 10\\text{km} $$<br><br><strong>Step 2: Distance Birmingham to Sutton (B-S)</strong><br>The triangle (Walsall, Birmingham, Sutton) has a right angle at Birmingham. The longest side is 26km.<br>$$ 26^2 = 10^2 + (B-S)^2 $$<br>$$ 676 = 100 + (B-S)^2 $$<br>$$ 576 = (B-S)^2 $$<br>$$ B-S = \\sqrt{576} = 24\\text{km} $$<br><br><strong>Final Check:</strong> Distance to Sutton = 24km. Distance to Walsall = 10km. $24 - 10 = 14\\text{km}$ further."
        },
        {
            id: "m1_q8",
            type: "numeric",
            text: "<strong>Question 8:</strong><br>The height of a wooden goal post is $2.5\\text{m}$ and the width is $7\\text{m}$. James wants to play a prank by nailing <strong>X-bars</strong> on the goal diagonally.<br>What is the minimum total length of wood that James needs to make the prank a success, correct to the nearest metre?",
            diagramConfig: { base: 14, height: 5, labelHyp: "diagonal", labelBase: "7m", labelHeight: "2.5m" },
            correctAnswer: 15,
            tolerance: 0,
            hintHTML: "The 'X' is made of two identical diagonals. Create a right-angled triangle with height 2.5m and width 7m to find the length of one diagonal. Then multiply by 2.",
            solutionHTML: "<strong>Step 1: Length of one diagonal ($x$)</strong><br>$$ x^2 = 2.5^2 + 7^2 $$<br>$$ x^2 = 6.25 + 49 $$<br>$$ x^2 = 55.25 $$<br>$$ x = \\sqrt{55.25} \\approx 7.433\\text{m} $$<br><br><strong>Step 2: Total length of wood</strong><br>There are TWO wooden diagonals forming the 'X'.<br>$$ \\text{Total} = 2 \\times 7.433 = 14.866\\text{m} $$<br><br>Correct to the nearest metre: **15m**."
        }
    ]
};
