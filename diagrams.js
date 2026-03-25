/**
 * diagrams.js
 * SVG utility for generating right-angled triangles dynamically.
 */

const Diagrams = {
    /**
     * Renders an SVG right-angled triangle into a specified container.
     * @param {HTMLElement} container - The DOM element to append the SVG to.
     * @param {Object} config - Configuration object.
     * config = {
     *   base: 150, height: 100, // proportional lengths
     *   flipX: false, flipY: false, // orientation
     *   labelHyp: "x", labelBase: "4", labelHeight: "3", // Side labels
     *   angleA: null, angleB: null, // "30°", "θ"
     *   highlightHyp: false, highlightBase: false, highlightHeight: false
     * }
     */
    drawRightTriangle(container, config) {
        container.innerHTML = ""; // Clear existing
        
        const W = 350, H = 250;
        
        // Default relative dimensions if not provided
        let b = config.base || 150;
        let h = config.height || 100;
        
        // Scale to fit nicely in 300x200 while maintaining aspect ratio
        const scale = Math.min((W - 80) / b, (H - 80) / h);
        b *= scale;
        h *= scale;
        
        // Define points. Standard is bottom-left (right angle), bottom-right, top-left.
        let x0 = W/2 - b/2;
        let y0 = H/2 + h/2; // bottom-left (right angle)
        let x1 = x0 + b;
        let y1 = y0;        // bottom-right
        let x2 = x0;
        let y2 = y0 - h;    // top-left
        
        // Flip logic
        if (config.flipX) {
            x0 = W/2 + b/2; x1 = x0 - b; x2 = x0;
        }
        if (config.flipY) {
            y0 = H/2 - h/2; y1 = y0; y2 = y0 + h;
        }

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
        svg.classList.add("triangle-draw");
        svg.style.width = "100%";
        svg.style.maxWidth = "400px";

        // Draw Right Angle Square
        const sqSize = 15;
        const dx = config.flipX ? -1 : 1;
        const dy = config.flipY ? 1 : -1;
        
        const rectPath = `M ${x0} ${y0 + dy*sqSize} L ${x0 + dx*sqSize} ${y0 + dy*sqSize} L ${x0 + dx*sqSize} ${y0} L ${x0} ${y0}`;
        const rightAngle = document.createElementNS("http://www.w3.org/2000/svg", "path");
        rightAngle.setAttribute("d", rectPath);
        rightAngle.setAttribute("fill", "none");
        rightAngle.setAttribute("stroke", "var(--text-main)");
        rightAngle.setAttribute("stroke-width", "1.5");
        svg.appendChild(rightAngle);

        // Draw Triangle
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", `${x0},${y0} ${x1},${y1} ${x2},${y2}`);
        polygon.setAttribute("fill", config.fill ? "rgba(14, 165, 233, 0.05)" : "none");
        polygon.setAttribute("stroke", "var(--text-main)");
        polygon.setAttribute("stroke-width", "2.5");
        polygon.setAttribute("stroke-linejoin", "round");
        svg.appendChild(polygon);
        
        // Helper func for labels
        const addLabel = (txt, x, y, isHyp, isAngle=false) => {
            if (!txt) return;
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.textContent = txt;
            text.setAttribute("x", x);
            text.setAttribute("y", y);
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("font-family", "Katex Math, serif"); // matches Katex roughly
            text.setAttribute("font-size", isAngle ? "16" : "20");
            text.setAttribute("font-style", "italic");
            text.setAttribute("fill", isHyp ? "var(--secondary)" : "var(--primary)");
            svg.appendChild(text);
        };

        // Labels positioning logic
        const offset = 20;
        
        // Base label (bottom side)
        let bx = (x0 + x1) / 2;
        let by = y0 + (config.flipY ? -offset : offset);
        addLabel(config.labelBase, bx, by, config.highlightBase);
        
        // Height label (vertical side)
        let hx = x0 + (config.flipX ? offset : -offset);
        let hy = (y0 + y2) / 2;
        addLabel(config.labelHeight, hx, hy, config.highlightHeight);
        
        // Hypotenuse label (slanted side)
        let px = (x1 + x2) / 2 + (config.flipX ? -offset : offset);
        let py = (y1 + y2) / 2 + (config.flipY ? offset : -offset);
        addLabel(config.labelHyp, px, py, config.highlightHyp || true); // Hyp is usually highlighted

        // Angles (optional)
        // Angle at (x1, y1) - horizontal acute angle
        if (config.angleA) {
            let ax = x1 + (config.flipX ? 35 : -35); // pull inside
            let ay = y1 + (config.flipY ? 10 : -10);
            addLabel(config.angleA, ax, ay, false, true);
            // Draw subtle arc
            const rx = config.flipX ? x1 + 25 : x1 - 25;
            const arc = document.createElementNS("http://www.w3.org/2000/svg", "path");
            // Basic approximation of the arc
            arc.setAttribute("d", `M ${rx} ${y1} Q ${x1 + (config.flipX?25:-25)} ${y1+(config.flipY?15:-15)} ${x1 + (config.flipX?20:-20)} ${y1+(config.flipY?20:-20)}`);
            arc.setAttribute("fill", "none");
            arc.setAttribute("stroke", "var(--primary)");
            svg.appendChild(arc);
        }
        
        // Angle at (x2, y2) - vertical acute angle
        if (config.angleB) {
            let bx = x2 + (config.flipX ? -10 : 10);
            let by = y2 + (config.flipY ? -35 : 35);
            addLabel(config.angleB, bx, by, false, true);
        }

        container.appendChild(svg);
        
        // If there's katex, render the newly added math elements
        if (window.renderMathInElement) {
             window.renderMathInElement(container, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false}
                ]
            });
        }
    }
};
