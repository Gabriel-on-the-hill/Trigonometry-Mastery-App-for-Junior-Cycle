/**
 * data/module5.js
 * Content for Module 5: Practical Problems
 */

window.module5 = {
    id: "module5",
    title: "5. Practical Problems",
    description: "Learn how to extract right-angled triangles from word problems and diagrams.",
    
    lessonHTML: `
        <h3>Angles of Elevation and Depression</h3>
        <p>When solving word problems, constructing the right triangle is the hardest part. The key is understanding how angles are measured:</p>
        <ul>
            <li><strong>Angle of Elevation:</strong> Looking UP from a flat horizontal line.</li>
            <li><strong>Angle of Depression:</strong> Looking DOWN from a flat horizontal line.</li>
        </ul>
        <p><em>Pro-Tip:</em> Because horizontal lines are parallel, the angle of depression from a bird down to a person is exactly the same as the angle of elevation from the person up to the bird (Alternate 'Z' angles).</p>

        <h3>Double Triangles</h3>
        <p>Examiners love combining two triangles. Be prepared to:</p>
        <ol>
            <li>Find a shared side linking the two triangles.</li>
            <li>Use the information in Triangle A to find the length of that shared side.</li>
            <li>Use that shared side as a known value in Triangle B to find the final answer.</li>
        </ol>
    `,
    
    questions: [
        {
            id: "m5_q1",
            type: "numeric",
            text: "<strong>Question 1: Leinster Rugby Stand (Part 1)</strong><br>An architect's view of Leinster Rugby's proposed new North Stand is given.<br>Specifications: $|AB| = 5\\text{m}$, $|AC| = 15\\text{m}$, $|\\angle DAB| = 40^\\circ$. The line $ABC$ is perfectly horizontal, with a right angle at $B$.<br><br>Find $|AD|$ correct to two decimal places.",
            diagramConfig: null, // Diagram is a bit too complex for the basic right angle SVG generator, so we rely on the text description which is sufficiently clear.
            correctAnswer: 6.53,
            tolerance: 0.01,
            hintHTML: "Focus on triangle $ABD$. You know the Adjacent ($AB = 5\\text{m}$) and the angle ($40^\\circ$). You want the Hypotenuse ($AD$). Use CAH.",
            solutionHTML: "<strong>Triangle ABD:</strong><br>Adjacent = $5$, Angle = $40^\\circ$. Find Hypotenuse ($AD$).<br>$$ \\cos(40^\\circ) = \\frac{5}{AD} $$<br>Swap the variables (Unknown on bottom trap!):<br>$$ AD = \\frac{5}{\\cos(40^\\circ)} $$<br>$$ AD = 6.527... $$<br><br>Correct to 2 decimal places: **6.53**"
        },
        {
            id: "m5_q2",
            type: "numeric",
            text: "<strong>Question 2: Leinster Rugby Stand (Part 2)</strong><br>Using the same specifications: $|AB| = 5\\text{m}$, $|AC| = 15\\text{m}$, $|\\angle DAB| = 40^\\circ$.<br><br>Find $|DC|$ correct to two decimal places.<br><em>Hint: You'll need to find the shared vertical side $|DB|$ first!</em>",
            diagramConfig: null,
            correctAnswer: 10.84,
            tolerance: 0.05, // Generous tolerance due to intermediate rounding
            hintHTML: "<strong>Step 1:</strong> In triangle $ABD$, find Opposite $|DB|$ using Tan.<br><strong>Step 2:</strong> In triangle $DBC$, you now know vertical $|DB|$. The horizontal base $|BC|$ is $|AC| - |AB| = 15 - 5 = 10$. Use Pythagoras to find the hypotenuse $|DC|$.",
            solutionHTML: "<strong>Step 1: Find shared side $DB$</strong><br>In triangle $ABD$:<br>$$ \\tan(40^\\circ) = \\frac{DB}{5} $$<br>$$ DB = 5 \\times \\tan(40^\\circ) \\approx 4.195\\text{m} $$<br><br><strong>Step 2: Find $BC$</strong><br>Since $AC = 15$ and $AB = 5$, the remainder is $BC = 15 - 5 = 10\\text{m}$.<br><br><strong>Step 3: Pythagoras in triangle $DBC$</strong><br>We have a right-angled triangle with legs $4.195$ and $10$. We want hypotenuse $DC$.<br>$$ DC^2 = (4.195)^2 + 10^2 $$<br>$$ DC^2 = 17.598 + 100 $$<br>$$ DC^2 = 117.598 $$<br>$$ DC = \\sqrt{117.598} = 10.844... $$<br><br>Correct to 2 decimal places: **10.84**"
        },
        {
            id: "m5_q3",
            type: "numeric",
            text: "<strong>Question 3: Boat and Cliff</strong><br>A boat is anchored off the coast near $100\\text{m}$ high cliffs in Co. Kerry. The angle of elevation from the boat up to the cliff top is $15^\\circ$.<br>The next day the boat moves further towards land and anchors again. This time the angle of elevation is $38^\\circ$.<br><br>How far did the boat move? Give your answer correct to the nearest metre.",
            diagramConfig: null,
            correctAnswer: 245,
            tolerance: 0.5,
            hintHTML: "This is a double triangle problem! Calculate the horizontal distance from the base of the cliff on Day 1, then calculate it for Day 2. Subtract the two distances. Use TOA.",
            solutionHTML: "<strong>Day 1 Distance ($d_1$):</strong><br>Opposite = $100$, Angle = $15^\\circ$. Find Adjacent ($d_1$).<br>$$ \\tan(15^\\circ) = \\frac{100}{d_1} \\implies d_1 = \\frac{100}{\\tan(15^\\circ)} \\approx 373.2\\text{m} $$<br><br><strong>Day 2 Distance ($d_2$):</strong><br>Opposite = $100$, Angle = $38^\\circ$. Find Adjacent ($d_2$).<br>$$ \\tan(38^\\circ) = \\frac{100}{d_2} \\implies d_2 = \\frac{100}{\\tan(38^\\circ)} \\approx 128.0\\text{m} $$<br><br><strong>Distance Moved:</strong><br>$$ 373.2 - 128.0 = 245.2\\text{m} $$<br><br>Correct to the nearest metre: **245**"
        },
        {
            id: "m5_q4",
            type: "numeric",
            text: "<strong>Question 4: Lighthouse (Part 1 - Distance)</strong><br>A boat sails due east from the base, A, of a $30\\text{m}$ high lighthouse [AD]. At point B, the angle of depression of the boat from the top of the lighthouse is $68^\\circ$.<br>Ten seconds later the boat is at point C and the angle of depression is now $33^\\circ$.<br><br>Find $|BC|$, the distance the boat has travelled in this time. (Correct to 2 decimal places)",
            diagramConfig: null,
            correctAnswer: 34.07,
            tolerance: 0.05,
            hintHTML: "Remember Alternate Angles (Z-angles): The angle of depression DOWN from the lighthouse equals the angle of elevation UP from the boat. So the angle at B is $68^\\circ$ and the angle at C is $33^\\circ$. Find $|AB|$ and $|AC|$, then subtract.",
            solutionHTML: "<strong>Find $|AB|$:</strong><br>Opposite = $30$, Angle = $68^\\circ$.<br>$$ \\tan(68^\\circ) = \\frac{30}{|AB|} \\implies |AB| = \\frac{30}{\\tan(68^\\circ)} \\approx 12.12\\text{m} $$<br><br><strong>Find $|AC|$:</strong><br>Opposite = $30$, Angle = $33^\\circ$.<br>$$ \\tan(33^\\circ) = \\frac{30}{|AC|} \\implies |AC| = \\frac{30}{\\tan(33^\\circ)} \\approx 46.19\\text{m} $$<br><br><strong>Find $|BC|$:</strong><br>$$ |BC| = |AC| - |AB| = 46.19 - 12.12 = 34.07\\text{m} $$"
        },
        {
            id: "m5_q5",
            type: "numeric",
            text: "<strong>Question 5: Brittas Bay Geometry</strong><br>The beach at Brittas Bay slopes downwards at a constant angle of $12^\\circ$ to the horizontal. How far out into the sea can a man walk before the water covers his head? (Correct to 1 d.p.)<br><em>Make assumption as necessary: assume the average man is 1.8m tall, and you are calculating the horizontal distance from the shoreline.</em>",
            diagramConfig: null,
            correctAnswer: 8.5,
            tolerance: 0.1,
            hintHTML: "If the man's height is $1.8\\text{m}$, that is the vertical 'Opposite' side of the resulting water triangle. The angle of slope is $12^\\circ$. You want the horizontal 'Adjacent' distance. Use TOA.",
            solutionHTML: "<strong>Assumption:</strong> Head drops perfectly vertically by $1.8\\text{m}$.<br>Opposite = $1.8$, Angle = $12^\\circ$. Find horizontal Adjacent ($x$).<br>$$ \\tan(12^\\circ) = \\frac{1.8}{x} $$<br>Unknown on bottom trap:<br>$$ x = \\frac{1.8}{\\tan(12^\\circ)} $$<br>$$ x = 8.468... $$<br><br>Correct to 1 decimal place: **8.5**"
        },
        {
            id: "m5_q6",
            type: "numeric",
            text: "<strong>Question 6: Skate Park Ramp</strong><br>The city council decides to construct a ramp for the local skate park. Skaters advised: <em>\"We want a ramp that is $3\\text{m}$ high at the top, but we don't want the angle of elevation to be more than $20^\\circ$.\"</em><br>The council's design has a ratio of max height to ramp length of $3 : 8$.<br><br>First, calculate the angle of elevation of this design (correct to 1 decimal place) to see if it fits the request.",
            diagramConfig: null,
            correctAnswer: 22.0,
            tolerance: 0.1,
            hintHTML: "<em>Note: \"Explain your answer\" means explain using Maths!</em><br>\"Ramp length\" refers to the slanted part (the Hypotenuse). So Opposite = 3, Hypotenuse = 8. Use inverse Sine.",
            solutionHTML: "<strong>Step 1: Calculate the Angle</strong><br>Opposite = $3$, Hypotenuse = $8$.<br>$$ \\sin(A) = \\frac{3}{8} = 0.375 $$<br>$$ A = \\sin^{-1}(0.375) \\approx 22.02^\\circ $$<br><br><strong>Step 2: Explain</strong><br>The angle of elevation is **22.0°**. Since $22.0^\\circ > 20^\\circ$, this design **does NOT** fit with the skaters' requests."
        },
        {
            id: "m5_q7",
            type: "numeric",
            text: "<strong>Question 7: Canopy Roof</strong><br>Mark wants to build a canopy roof. His Canadian friend says it is best to build a roof with a pitch greater than $40^\\circ$ so snow will not accumulate.<br>Mark's design is an isosceles triangle with a total horizontal span of $8\\text{m}$ and a central height of $3.5\\text{m}$.<br><br>Calculate the pitch angle of Mark's roof (correct to 1 decimal place).",
            diagramConfig: null,
            correctAnswer: 41.2,
            tolerance: 0.1,
            hintHTML: "Split the roof down the middle to make a right-angled triangle. The adjacent base for one side will be half of $8\\text{m}$. The opposite height is $3.5\\text{m}$. Use TOA.",
            solutionHTML: "<strong>Step 1: Isolate a Right Triangle</strong><br>Base of right triangle = $8 \\div 2 = 4\\text{m}$.<br>Height (Opposite) = $3.5\\text{m}$.<br><br><strong>Step 2: Calculate Angle</strong><br>$$ \\tan(A) = \\frac{3.5}{4} = 0.875 $$<br>$$ A = \\tan^{-1}(0.875) \\approx 41.18...^\\circ $$<br><br><strong>Step 3: Explain</strong><br>The roof pitch is **41.2°**. Since $41.2^\\circ > 40^\\circ$, Mark **HAS** followed the advice."
        }
    ]
};
