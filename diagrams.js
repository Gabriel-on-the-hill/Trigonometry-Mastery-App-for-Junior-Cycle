/**
 * diagrams.js
 * SVG utility for generating right-angled triangles dynamically.
 */

const Diagrams = {
    // Hardcoded colors (CSS var() does NOT work inside SVG attributes)
    COLORS: {
        stroke: "#0f172a",     // --text-main
        primary: "#0ea5e9",    // --primary
        secondary: "#f43f5e",  // --secondary
        teal: "#14b8a6",       // --teal
        accent: "#f59e0b",     // --accent
        fillLight: "rgba(14, 165, 233, 0.06)"
    },

    /**
     * Renders an SVG right-angled triangle into a specified container.
     * @param {HTMLElement} container - The DOM element to append the SVG to.
     * @param {Object} config - Configuration object.
     */
    drawRightTriangle(container, config) {
        container.innerHTML = ""; // Clear existing
        
        const C = this.COLORS;
        const W = 350, H = 250;
        
        // Default relative dimensions if not provided
        let b = config.base || 150;
        let h = config.height || 100;
        
        // Scale to fit nicely while maintaining aspect ratio
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
        svg.setAttribute("width", W);
        svg.setAttribute("height", H);
        svg.classList.add("triangle-draw");
        svg.style.width = "100%";
        svg.style.maxWidth = "400px";
        svg.style.height = "auto";

        // Draw Right Angle Square
        const sqSize = 15;
        const dx = config.flipX ? -1 : 1;
        const dy = config.flipY ? 1 : -1;
        
        const rectPath = `M ${x0} ${y0 + dy*sqSize} L ${x0 + dx*sqSize} ${y0 + dy*sqSize} L ${x0 + dx*sqSize} ${y0} L ${x0} ${y0}`;
        const rightAngle = document.createElementNS("http://www.w3.org/2000/svg", "path");
        rightAngle.setAttribute("d", rectPath);
        rightAngle.setAttribute("fill", "none");
        rightAngle.setAttribute("stroke", C.stroke);
        rightAngle.setAttribute("stroke-width", "1.5");
        svg.appendChild(rightAngle);

        // Draw Triangle
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", `${x0},${y0} ${x1},${y1} ${x2},${y2}`);
        polygon.setAttribute("fill", C.fillLight);
        polygon.setAttribute("stroke", C.stroke);
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
            text.setAttribute("font-family", "'Inter', 'KaTeX Math', serif");
            text.setAttribute("font-size", isAngle ? "16" : "20");
            text.setAttribute("font-weight", "600");
            text.setAttribute("font-style", "italic");
            text.setAttribute("fill", isHyp ? C.secondary : C.primary);
            svg.appendChild(text);
        };

        // Labels positioning logic
        const offset = 22;
        
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
            let ax = x1 + (config.flipX ? 35 : -35);
            let ay = y1 + (config.flipY ? 10 : -10);
            addLabel(config.angleA, ax, ay, false, true);
            // Draw subtle arc
            const rx = config.flipX ? x1 + 25 : x1 - 25;
            const arc = document.createElementNS("http://www.w3.org/2000/svg", "path");
            arc.setAttribute("d", `M ${rx} ${y1} Q ${x1 + (config.flipX?25:-25)} ${y1+(config.flipY?15:-15)} ${x1 + (config.flipX?20:-20)} ${y1+(config.flipY?20:-20)}`);
            arc.setAttribute("fill", "none");
            arc.setAttribute("stroke", C.primary);
            arc.setAttribute("stroke-width", "1.5");
            svg.appendChild(arc);
        }
        
        // Angle at (x2, y2) - vertical acute angle
        if (config.angleB) {
            let bx2 = x2 + (config.flipX ? -10 : 10);
            let by2 = y2 + (config.flipY ? -35 : 35);
            addLabel(config.angleB, bx2, by2, false, true);
        }

        container.appendChild(svg);
        
        // KaTeX rendering for math in container
        try {
            if (window.renderMathInElement) {
                 window.renderMathInElement(container, {
                    delimiters: [
                        {left: "$$", right: "$$", display: true},
                        {left: "$", right: "$", display: false}
                    ],
                    throwOnError: false
                });
            }
        } catch(e) { console.warn("Diagram KaTeX:", e); }
    }
};
