// ============================================
// MATHEMATICS LAWS & DEFINITIONS - JAVASCRIPT
// ============================================

// Data: All laws, definitions, and formulas
const laws = [
    // ===== UNIT 5: LINEAR ALGEBRA =====
    
    // Lesson 1: Linear Inequalities
    {
        id: 'law-1-1',
        title: 'Addition/Subtraction Property of Inequalities',
        content: 'If x > y, then x + a > y + a\nIf x > y, then x - a > y - a\n\nThis rule applies to all inequality symbols: <, >, ≤, ≥\n\nMeaning: Adding or subtracting the same number to both sides of an inequality preserves the inequality.',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'law-1-2',
        title: 'Multiplication Property of Inequalities (Positive)',
        content: 'If x > y and a > 0, then ax > ay\nIf x > y and a > 0, then x/a > y/a\n\nMeaning: Multiplying or dividing both sides by a positive number preserves the inequality.',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'law-1-3',
        title: 'Multiplication Property of Inequalities (Negative)',
        content: 'If x > y and a < 0, then ax < ay\nIf x > y and a < 0, then x/a < y/a\n\nMeaning: When multiplying or dividing by a negative number, the inequality sign reverses.',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'def-1-1',
        title: 'Linear Inequality Definition',
        content: 'A linear inequality is a mathematical statement that compares two linear expressions using inequality symbols: <, >, ≤, or ≥\n\nExamples:\n• 2x + 1 > 5\n• 3x - 2 ≤ 7\n• -x + 4 < 2',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'def-1-2',
        title: 'Solution Set Definition',
        content: 'The solution set of an inequality is the set of all values that satisfy the inequality.\n\nFor example, for x > 2:\n• In R: The solution set is ]2, ∞[\n• In R²: The solution set is the region to the right of the line x = 2',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'formula-1-1',
        title: 'Compound Inequality Solution',
        content: 'For compound inequalities: a < expression < b\n\nSolve by applying operations to all three parts:\n-3 ≤ 2x - 1 < 5\n-3 + 1 ≤ 2x - 1 + 1 < 5 + 1\n-2 ≤ 2x < 6\n-1 ≤ x < 3\n\nSolution Set: [-1, 3[',
        unit: 'unit5',
        type: 'formula'
    },

    // Lesson 2: Systems of Linear Inequalities
    {
        id: 'def-2-1',
        title: 'System of Linear Inequalities Definition',
        content: 'A system of linear inequalities consists of two or more linear inequalities that must be satisfied simultaneously.\n\nThe solution set is the region that satisfies ALL inequalities in the system (the intersection of all solution regions).',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'law-2-1',
        title: 'Graphical Solution Method for Systems',
        content: 'Steps to solve a system of inequalities graphically:\n\n1. Treat each inequality as a linear equation and graph the line\n2. Use a solid line for ≤ or ≥ inequalities\n3. Use a dashed line for < or > inequalities\n4. Shade the region that satisfies each inequality\n5. The solution is the overlapped region of all shaded areas',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'law-2-2',
        title: 'Test Point Method',
        content: 'To determine which side of a line to shade:\n\n1. Choose a test point not on the line (usually the origin (0,0))\n2. Substitute the point into the inequality\n3. If the inequality is true, shade the region containing the test point\n4. If the inequality is false, shade the opposite region',
        unit: 'unit5',
        type: 'law'
    },

    // Lesson 3: Linear Programming
    {
        id: 'def-3-1',
        title: 'Linear Programming Definition',
        content: 'Linear programming is a mathematical method for finding the maximum or minimum value of a linear objective function subject to a system of linear constraints (inequalities).\n\nComponents:\n• Objective Function: The function to maximize or minimize\n• Constraints: The system of inequalities\n• Feasible Region: The region satisfying all constraints',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'law-3-1',
        title: 'Optimization Principle',
        content: 'The maximum or minimum value of a linear objective function occurs at a vertex (corner point) of the feasible region.\n\nProcedure:\n1. Graph the feasible region\n2. Find all vertices (corner points)\n3. Evaluate the objective function at each vertex\n4. The largest value is the maximum; the smallest is the minimum',
        unit: 'unit5',
        type: 'law'
    },

    // Lesson 4: Inverse Function
    {
        id: 'def-4-1',
        title: 'Inverse Function Definition',
        content: 'The inverse function of f, denoted f⁻¹, is a function such that:\n• f(f⁻¹(x)) = x for all x in the domain of f⁻¹\n• f⁻¹(f(x)) = x for all x in the domain of f\n\nThe graph of f⁻¹ is the reflection of the graph of f across the line y = x.',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'law-4-1',
        title: 'Inverse Function Existence Condition',
        content: 'A function has an inverse if and only if it is one-to-one (injective).\n\nA function is one-to-one if:\n• Each output corresponds to exactly one input\n• It passes the horizontal line test (any horizontal line intersects the graph at most once)',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'formula-4-1',
        title: 'Finding the Inverse Function',
        content: 'To find f⁻¹(x) from f(x):\n\n1. Replace f(x) with y: y = f(x)\n2. Swap x and y: x = f(y)\n3. Solve for y\n4. Replace y with f⁻¹(x)\n\nExample: If f(x) = 2x + 3\n• y = 2x + 3\n• x = 2y + 3\n• x - 3 = 2y\n• y = (x - 3)/2\n• f⁻¹(x) = (x - 3)/2',
        unit: 'unit5',
        type: 'formula'
    },

    // Lesson 5: Exponential Equations
    {
        id: 'def-5-1',
        title: 'Exponential Equation Definition',
        content: 'An exponential equation is an equation in which the variable appears in the exponent.\n\nGeneral form: aˣ = b, where a > 0, a ≠ 1\n\nExamples:\n• 2ˣ = 8\n• 3ˣ⁺¹ = 27\n• 5²ˣ = 125',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'law-5-1',
        title: 'Exponential Equation Solution Method',
        content: 'If aˣ = aʸ, then x = y (where a > 0, a ≠ 1)\n\nThis principle allows us to solve exponential equations by expressing both sides with the same base.',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'formula-5-1',
        title: 'Solving Exponential Equations',
        content: 'Example: Solve 2ˣ = 8\n\n1. Express both sides with the same base: 2ˣ = 2³\n2. Apply the law: x = 3\n\nExample: Solve 3ˣ⁺¹ = 27\n\n1. Express: 3ˣ⁺¹ = 3³\n2. Apply: x + 1 = 3\n3. Solve: x = 2',
        unit: 'unit5',
        type: 'formula'
    },

    // Lesson 6: Logarithmic Function
    {
        id: 'def-6-1',
        title: 'Logarithm Definition',
        content: 'The logarithm of a number y to base a is the exponent x such that aˣ = y.\n\nNotation: logₐ(y) = x if and only if aˣ = y\n\nWhere:\n• a is the base (a > 0, a ≠ 1)\n• y is the argument (y > 0)\n• x is the logarithm',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'def-6-2',
        title: 'Common Logarithm',
        content: 'The common logarithm is logarithm with base 10.\n\nNotation: log(x) = log₁₀(x)\n\nExample: log(100) = 2 because 10² = 100',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'def-6-3',
        title: 'Natural Logarithm',
        content: 'The natural logarithm is logarithm with base e (approximately 2.71828).\n\nNotation: ln(x) = logₑ(x)\n\nExample: ln(e) = 1 because e¹ = e',
        unit: 'unit5',
        type: 'definition'
    },
    {
        id: 'law-6-1',
        title: 'Logarithmic Function Definition',
        content: 'The logarithmic function with base a is defined as:\n\nf(x) = logₐ(x), where a > 0, a ≠ 1, x > 0\n\nProperties:\n• Domain: (0, ∞)\n• Range: (-∞, ∞)\n• It is the inverse of the exponential function f(x) = aˣ',
        unit: 'unit5',
        type: 'law'
    },

    // Lesson 7: Properties of Logarithms
    {
        id: 'law-7-1',
        title: 'Product Rule of Logarithms',
        content: 'logₐ(xy) = logₐ(x) + logₐ(y)\n\nThe logarithm of a product equals the sum of the logarithms.\n\nExample: log₂(8 × 4) = log₂(8) + log₂(4) = 3 + 2 = 5',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'law-7-2',
        title: 'Quotient Rule of Logarithms',
        content: 'logₐ(x/y) = logₐ(x) - logₐ(y)\n\nThe logarithm of a quotient equals the difference of the logarithms.\n\nExample: log₂(8/4) = log₂(8) - log₂(4) = 3 - 2 = 1',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'law-7-3',
        title: 'Power Rule of Logarithms',
        content: 'logₐ(xⁿ) = n · logₐ(x)\n\nThe logarithm of a power equals the exponent times the logarithm of the base.\n\nExample: log₂(8³) = 3 · log₂(8) = 3 × 3 = 9',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'law-7-4',
        title: 'Change of Base Formula',
        content: 'logₐ(x) = log_b(x) / log_b(a)\n\nThis allows conversion between different logarithmic bases.\n\nExample: log₂(8) = log₁₀(8) / log₁₀(2)',
        unit: 'unit5',
        type: 'law'
    },
    {
        id: 'formula-7-1',
        title: 'Logarithm Special Values',
        content: 'logₐ(1) = 0 (because a⁰ = 1)\nlogₐ(a) = 1 (because a¹ = a)\nlogₐ(aˣ) = x\naˡᵒᵍₐ⁽ˣ⁾ = x',
        unit: 'unit5',
        type: 'formula'
    },

    // ===== UNIT 6: TRIGONOMETRY =====

    // Lesson 1: Trigonometric Identities
    {
        id: 'law-6-1-1',
        title: 'Pythagorean Identity',
        content: 'sin²(A) + cos²(A) = 1\n\nThis fundamental identity holds for all angles A.\n\nVariations:\n• 1 + tan²(A) = sec²(A)\n• 1 + cot²(A) = csc²(A)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-1-2',
        title: 'Reciprocal Identities',
        content: 'csc(A) = 1/sin(A)\nsec(A) = 1/cos(A)\ncot(A) = 1/tan(A)\n\nAlso:\ntan(A) = sin(A)/cos(A)\ncot(A) = cos(A)/sin(A)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-1-3',
        title: 'Even-Odd Identities',
        content: 'sin(-A) = -sin(A) (odd function)\ncos(-A) = cos(A) (even function)\ntan(-A) = -tan(A) (odd function)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-1-4',
        title: 'Cofunction Identities',
        content: 'sin(90° - A) = cos(A)\ncos(90° - A) = sin(A)\ntan(90° - A) = cot(A)\n\nOr in radians:\nsin(π/2 - A) = cos(A)\ncos(π/2 - A) = sin(A)',
        unit: 'unit6',
        type: 'law'
    },

    // Lesson 2: Solving Trigonometric Equations
    {
        id: 'def-6-2-1',
        title: 'Trigonometric Equation Definition',
        content: 'A trigonometric equation is an equation that contains trigonometric functions.\n\nExamples:\n• sin(x) = 1/2\n• cos(2x) = -1\n• tan(x) - 1 = 0\n\nThe solution includes all angles that satisfy the equation.',
        unit: 'unit6',
        type: 'definition'
    },
    {
        id: 'law-6-2-1',
        title: 'General Solution for sin(x) = a',
        content: 'If sin(x) = a where |a| ≤ 1:\n\n• x = α + 360°k or x = 180° - α + 360°k (in degrees)\n• x = α + 2πk or x = π - α + 2πk (in radians)\n\nWhere α is the reference angle and k is any integer.',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-2-2',
        title: 'General Solution for cos(x) = a',
        content: 'If cos(x) = a where |a| ≤ 1:\n\n• x = ±α + 360°k (in degrees)\n• x = ±α + 2πk (in radians)\n\nWhere α is the reference angle and k is any integer.',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-2-3',
        title: 'General Solution for tan(x) = a',
        content: 'If tan(x) = a:\n\n• x = α + 180°k (in degrees)\n• x = α + πk (in radians)\n\nWhere α is the reference angle and k is any integer.',
        unit: 'unit6',
        type: 'law'
    },

    // Lesson 3: Sine Law and Cosine Law
    {
        id: 'law-6-3-1',
        title: 'Sine Law',
        content: 'In any triangle ABC:\n\na/sin(A) = b/sin(B) = c/sin(C)\n\nWhere:\n• a, b, c are the sides opposite to angles A, B, C respectively\n• This law is used when you know:\n  - Two angles and one side (AAS or ASA)\n  - Two sides and an angle opposite one of them (SSA)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-3-2',
        title: 'Cosine Law',
        content: 'In any triangle ABC:\n\na² = b² + c² - 2bc·cos(A)\nb² = a² + c² - 2ac·cos(B)\nc² = a² + b² - 2ab·cos(C)\n\nThis law is used when you know:\n• Two sides and the included angle (SAS)\n• All three sides (SSS)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'formula-6-3-1',
        title: 'Cosine Law for Finding Angles',
        content: 'Rearranging the cosine law to find angles:\n\ncos(A) = (b² + c² - a²) / (2bc)\ncos(B) = (a² + c² - b²) / (2ac)\ncos(C) = (a² + b² - c²) / (2ab)',
        unit: 'unit6',
        type: 'formula'
    },

    // Lesson 4: Solving Triangles
    {
        id: 'def-6-4-1',
        title: 'Solving a Triangle Definition',
        content: 'Solving a triangle means finding all unknown sides and angles of the triangle.\n\nGiven information can be:\n• SSS: Three sides\n• SAS: Two sides and included angle\n• ASA: Two angles and included side\n• AAS: Two angles and non-included side\n• SSA: Two sides and non-included angle (ambiguous case)',
        unit: 'unit6',
        type: 'definition'
    },
    {
        id: 'law-6-4-1',
        title: 'Ambiguous Case (SSA)',
        content: 'When given two sides and an angle opposite one of them (SSA):\n\nLet a, b be the known sides and A be the known angle opposite side a.\n\nNumber of solutions depends on:\n• If A ≥ 90°: One solution if a ≥ b, no solution if a < b\n• If A < 90°: \n  - No solution if a < b·sin(A)\n  - One solution if a = b·sin(A) or a ≥ b\n  - Two solutions if b·sin(A) < a < b',
        unit: 'unit6',
        type: 'law'
    },

    // Lesson 6: Sum and Difference Formulas
    {
        id: 'law-6-6-1',
        title: 'Sine Addition Formula',
        content: 'sin(A + B) = sin(A)cos(B) + cos(A)sin(B)\nsin(A - B) = sin(A)cos(B) - cos(A)sin(B)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-6-2',
        title: 'Cosine Addition Formula',
        content: 'cos(A + B) = cos(A)cos(B) - sin(A)sin(B)\ncos(A - B) = cos(A)cos(B) + sin(A)sin(B)',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-6-3',
        title: 'Tangent Addition Formula',
        content: 'tan(A + B) = (tan(A) + tan(B)) / (1 - tan(A)tan(B))\ntan(A - B) = (tan(A) - tan(B)) / (1 + tan(A)tan(B))\n\nNote: The formulas are valid when the denominators are not zero.',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'formula-6-6-1',
        title: 'Product-to-Sum Formulas',
        content: 'cos(A + B) + cos(A - B) = 2cos(A)cos(B)\nsin(A + B) + sin(A - B) = 2sin(A)cos(B)',
        unit: 'unit6',
        type: 'formula'
    },

    // Lesson 7: Double Angle Formulas
    {
        id: 'law-6-7-1',
        title: 'Double Angle Formula for Sine',
        content: 'sin(2A) = 2sin(A)cos(A)\n\nExample: sin(2 × 15°) = 2sin(15°)cos(15°) = sin(30°) = 1/2',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-7-2',
        title: 'Double Angle Formulas for Cosine',
        content: 'cos(2A) = cos²(A) - sin²(A)\ncos(2A) = 2cos²(A) - 1\ncos(2A) = 1 - 2sin²(A)\n\nAll three forms are equivalent and can be used depending on the given information.',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'law-6-7-3',
        title: 'Double Angle Formula for Tangent',
        content: 'tan(2A) = (2tan(A)) / (1 - tan²(A))\n\nNote: The formula is valid when 1 - tan²(A) ≠ 0',
        unit: 'unit6',
        type: 'law'
    },
    {
        id: 'formula-6-7-1',
        title: 'Half Angle Formulas',
        content: 'sin(A/2) = ±√((1 - cos(A))/2)\ncos(A/2) = ±√((1 + cos(A))/2)\ntan(A/2) = ±√((1 - cos(A))/(1 + cos(A)))\n\nThe sign depends on the quadrant of A/2.',
        unit: 'unit6',
        type: 'formula'
    }
];

// State
let currentUnitFilter = 'all';
let currentTypeFilter = 'all';
let currentSearch = '';
let expandedItems = new Set();

// DOM Elements
const searchInput = document.getElementById('search-input');
const unitFilterButtons = document.querySelectorAll('.filter-btn');
const typeFilterButtons = document.querySelectorAll('.filter-btn-type');
const lawsList = document.getElementById('laws-list');
const noResults = document.getElementById('no-results');
const resultsShown = document.getElementById('results-shown');
const resultsTotal = document.getElementById('results-total');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderLaws();
    resultsTotal.textContent = laws.length;
});

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderLaws();
    });

    // Unit filter buttons
    unitFilterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            unitFilterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentUnitFilter = e.target.dataset.filter;
            renderLaws();
        });
    });

    // Type filter buttons
    typeFilterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            typeFilterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentTypeFilter = e.target.dataset.type;
            renderLaws();
        });
    });
}

// ============================================
// FILTERING AND SEARCH
// ============================================

function getFilteredLaws() {
    return laws.filter(law => {
        // Filter by unit
        const matchesUnit = currentUnitFilter === 'all' || law.unit === currentUnitFilter;

        // Filter by type
        const matchesType = currentTypeFilter === 'all' || law.type === currentTypeFilter;

        // Filter by search term
        const matchesSearch = 
            law.title.toLowerCase().includes(currentSearch) ||
            law.content.toLowerCase().includes(currentSearch);

        return matchesUnit && matchesType && matchesSearch;
    });
}

// ============================================
// RENDERING
// ============================================

function renderLaws() {
    const filtered = getFilteredLaws();
    
    // Update results count
    resultsShown.textContent = filtered.length;

    // Show/hide no results message
    if (filtered.length === 0) {
        lawsList.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    // Render law items
    lawsList.innerHTML = filtered.map(law => createLawElement(law)).join('');

    // Attach event listeners to newly created elements
    attachLawListeners();
}

function createLawElement(law) {
    const isExpanded = expandedItems.has(law.id);
    const unitLabel = law.unit === 'unit5' ? 'Unit 5' : 'Unit 6';
    const typeLabel = law.type.charAt(0).toUpperCase() + law.type.slice(1);
    
    return `
        <div class="law-item" data-id="${law.id}">
            <button class="law-header" data-id="${law.id}">
                <div class="law-header-content">
                    <div class="law-badges">
                        <span class="law-badge ${law.unit}">${unitLabel}</span>
                        <span class="law-badge ${law.type}">${typeLabel}</span>
                    </div>
                    <h3 class="law-title">${escapeHtml(law.title)}</h3>
                </div>
                <div class="law-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${isExpanded 
                            ? '<polyline points="18 15 12 9 6 15"></polyline>'
                            : '<polyline points="6 9 12 15 18 9"></polyline>'
                        }
                    </svg>
                </div>
            </button>
            <div class="law-content ${isExpanded ? '' : 'hidden'}">
                ${escapeHtml(law.content)}
            </div>
        </div>
    `;
}

function attachLawListeners() {
    const headers = document.querySelectorAll('.law-header');
    headers.forEach(header => {
        header.addEventListener('click', (e) => {
            const itemId = header.dataset.id;
            toggleLaw(itemId);
        });
    });
}

// ============================================
// TOGGLE EXPAND/COLLAPSE
// ============================================

function toggleLaw(id) {
    if (expandedItems.has(id)) {
        expandedItems.delete(id);
    } else {
        expandedItems.add(id);
    }
    renderLaws();
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Focus search on Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Clear search on Escape
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        currentSearch = '';
        renderLaws();
    }
});
