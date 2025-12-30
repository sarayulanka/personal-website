# Design Brainstorming: Sarayu Lanka Portfolio Website

## Design Philosophy Exploration

<response>
<probability>0.07</probability>
<text>
### Approach 1: "Bio-Digital Fusion" - Organic Modernism

**Design Movement**: Biomorphic Design meets Swiss Modernism - inspired by the intersection of biology and technology, mirroring Sarayu's computational biology focus.

**Core Principles**:
- Asymmetric organic shapes contrasted with rigid geometric grids
- Data visualization aesthetics borrowed from scientific journals
- Fluid motion that mimics cellular processes and neural networks
- Clean information hierarchy with biological metaphors

**Color Philosophy**: 
Primary palette draws from microscopy and lab environments - deep teals (oklch(0.55 0.12 200)), warm amber accents (oklch(0.72 0.15 65)) for highlights, crisp whites, and charcoal blacks. The reasoning: teal evokes both digital screens and biological staining, while amber represents energy and discovery. Background uses subtle gradients that shift like agar in petri dishes.

**Layout Paradigm**: 
Diagonal flow architecture - content flows at 8-degree angles creating dynamic movement down the page. Sections overlap like microscope slides. Hero section features a split-diagonal composition with text on one plane and visual on another. Avoid centered layouts entirely - everything anchors to flowing diagonal axes.

**Signature Elements**:
- Animated SVG "cell division" transitions between sections
- Floating "data points" that track mouse movement like particles in Brownian motion
- Organic blob shapes as section dividers with CSS clip-path
- Monospace code snippets embedded in flowing prose like RNA sequences

**Interaction Philosophy**:
Interactions should feel like scientific discovery - hover states reveal "layers" of information (like peeling back microscope slides), scroll triggers gentle parallax that mimics looking through a microscope at different focal depths, buttons have liquid morphing effects.

**Animation**:
- Section entrances: Elements slide in diagonally with staggered timing (100ms delays)
- Continuous subtle animations: Floating particles, pulsing glows on accent elements
- Scroll-triggered: Parallax on background elements, fade-in-up for content blocks
- Micro-interactions: Elastic hover scales (1.05), color shifts on focus, ripple effects on clicks
- Transition timing: cubic-bezier(0.34, 1.56, 0.64, 1) for playful bounce

**Typography System**:
- Display: "Space Grotesk" (700 weight) for headings - geometric but warm
- Body: "IBM Plex Sans" (400, 500) for readability with technical credibility
- Accent/Code: "JetBrains Mono" for technical details and certifications
- Scale: 3.5rem / 2rem / 1.125rem / 1rem with 1.6 line-height for body
- Hierarchy: Bold all-caps micro-labels (0.75rem, letter-spacing: 0.1em) for section tags
</text>
</response>

<response>
<probability>0.06</probability>
<text>
### Approach 2: "Kinetic Academia" - Brutalist Editorial

**Design Movement**: Neo-Brutalism meets Editorial Magazine Design - raw, bold, unapologetically structured, inspired by academic publications and zines.

**Core Principles**:
- Extreme typographic hierarchy with oversized display text
- High contrast black/white base with single electric accent color
- Grid-breaking layouts that challenge conventional portfolio structure
- Raw, unpolished aesthetic that emphasizes content authenticity

**Color Philosophy**:
Stark monochrome foundation (pure black oklch(0.15 0 0) and off-white oklch(0.98 0 0)) with a single electric accent - hot magenta (oklch(0.65 0.28 340)) used sparingly for emphasis. The reasoning: academic rigor demands clarity, the magenta represents creative disruption and youthful energy breaking through formal structures. No gradients - only solid blocks of color.

**Layout Paradigm**:
Modular block system - page divided into irregular rectangular zones that shift and stack responsively. Large typographic elements break container boundaries. Hero section uses extreme scale contrast: name at 15vw overlapping a small portrait. Sections arranged in magazine-style columns that break and reform.

**Signature Elements**:
- Oversized section numbers (01, 02, 03) in outline stroke style
- Thick border frames (8px solid black) around key content blocks
- Rotated text labels at -90 degrees along section edges
- Brutalist "stamps" or badges for certifications with rough edges

**Interaction Philosophy**:
Interactions should feel immediate and tactile - no easing, instant state changes like flipping magazine pages. Hover states are bold underlines or background floods. Clicks trigger sharp scale jumps. Navigation is prominent and always accessible with large touch targets.

**Animation**:
- Section entrances: Hard cuts with no fade - elements snap into place
- Scroll-triggered: Fixed position elements that create layering depth as you scroll
- Micro-interactions: Instant color inversions on hover (black↔white), sharp 2px translations
- Transition timing: linear or steps(3) for mechanical feel - no curves
- Accent reveals: Magenta wipes across elements from left to right on interaction

**Typography System**:
- Display: "Archivo Black" (900 weight) for massive headings - compressed and bold
- Body: "Inter" (400, 600) for clean readability - but set tight (line-height: 1.4)
- Accent: "Courier Prime" for technical details - monospace with character
- Scale: 12rem (hero) / 4rem / 1.5rem / 1rem with aggressive size jumps
- Hierarchy: ALL CAPS for headings, sentence case for body, underlines for emphasis instead of italics
</text>
</response>

<response>
<probability>0.08</probability>
<text>
### Approach 3: "Luminous Depth" - Glassmorphic Futurism

**Design Movement**: Glassmorphism meets Depth Design - layered translucent surfaces with atmospheric lighting, inspired by holographic interfaces and depth-of-field photography.

**Core Principles**:
- Multiple translucent layers creating spatial depth
- Soft glows and ambient lighting effects throughout
- Floating card-based content with backdrop blur
- Atmospheric color gradients that shift with scroll position

**Color Philosophy**:
Deep navy base (oklch(0.18 0.05 250)) transitioning to midnight purple (oklch(0.22 0.08 280)) with luminous accents - cyan (oklch(0.75 0.15 210)) and soft coral (oklch(0.72 0.12 35)). The reasoning: deep backgrounds create canvas for glowing elements, cyan represents technology/code, coral adds warmth and approachability. Everything sits on gradient meshes that subtly animate.

**Layout Paradigm**:
Floating island architecture - content exists on translucent cards that hover at different z-depths. Hero section features a large frosted glass panel with content, overlapping a dynamic gradient background. Sections don't touch edges - they float with generous margins. Parallax creates true depth perception.

**Signature Elements**:
- Frosted glass cards with backdrop-filter: blur(20px) and subtle borders
- Soft glow effects (box-shadow with large blur radius and color)
- Gradient mesh backgrounds that animate on scroll
- Floating orbs or light particles in the background using CSS gradients

**Interaction Philosophy**:
Interactions should feel weightless and smooth - elements float and glow on hover, creating sense of depth. Hover states lift elements closer (increased blur, larger shadow). Scroll feels like moving through atmospheric layers. Buttons have soft pulsing glows.

**Animation**:
- Section entrances: Fade-in with gentle upward float (20px), staggered by 150ms
- Continuous animations: Slow gradient rotation (360deg over 20s), subtle floating (3px up/down over 4s)
- Scroll-triggered: Parallax at multiple speeds for depth layers, blur intensity changes
- Micro-interactions: Smooth scale (1.02) and glow intensity increase on hover
- Transition timing: cubic-bezier(0.4, 0, 0.2, 1) for smooth, natural motion

**Typography System**:
- Display: "Outfit" (600, 700) for modern, geometric headings with optical balance
- Body: "Inter" (400, 500) for clean readability - slightly increased letter-spacing
- Accent: "Fira Code" for technical content with ligatures enabled
- Scale: 4.5rem / 2.5rem / 1.25rem / 1rem with generous 1.7 line-height
- Hierarchy: Light weight (300) for large display text to feel airy, medium (500) for body, bold (700) for emphasis
</text>
</response>

## Selected Approach

**Chosen: Approach 1 - "Bio-Digital Fusion" (Organic Modernism)**

This approach perfectly embodies Sarayu's identity as an aspiring computational biologist - the fusion of organic biological forms with digital precision mirrors her interdisciplinary passion. The diagonal flow creates visual interest while maintaining professionalism, and the scientific aesthetic adds credibility for academic/employer audiences.
</text>
</invoke>
