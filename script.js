const slides = [

/* ========= SLIDE 1 - Home / Intro ========= */
{
  id:"home",
  footer:"full",
  html:`
  <div class="slide">

    <div class="slide-heading">
      A Framework for Exploring Biodiversity Spatial Planning Tools
    </div>

    <div class="center-constrain">
      <div class="center-constrain-inner">

        <div class="intro-panel">
          <h2>Analysis 101<br>A typology of tools</h2>

          <img src="assets/images/tot1.png" alt="Illustration">

          <p>
            Use this app as a framework to guide you towards the tools and methods that can help address your policy questions, with illustrative examples and links to further resources..
          </p>

          <div class="intro-panel-actions">
            <button class="start-btn" onclick="next()">Start Guided Tour</button>
            <div class="prototype-link">
              <a href="http://3.64.251.154/explorer/">
              ...or try the alternative NEA prototype →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="home-logos">
      <img src="assets/logos/norad.png" alt="Norad logo">
      <img src="assets/logos/unep-wcmc.png" alt="UNEP-WCMC logo">
      <img src="assets/logos/nea.png" alt="NEA logo">
    </div>

    <div class="home-footer-note">
      developed by UNEP-WCMC on behalf of Norad (the Norwegian Agency for Development Cooperation). This app is currently a prototype and therefore the contents are illustrative and may contain some errors or omissions.
    </div>

  </div>
  `
},

/* ========= SLIDE 2 - Overview Navigation ========= */
{
  id:"overview",
  footer:"full",
  html:`
  <div class="slide">

    <div class="slide-heading">
      A Framework for Exploring Biodiversity Spatial Planning Tools
    </div>

    <div class="nav-hint">
      Use <strong>❮</strong> and <strong>❯</strong> below to move through the guide page by page, or jump straight to a topic using the tabs. <strong>Tip:</strong> jumping via the tabs skips the pages in between, so you may miss some content — the ❮ ❯ arrows are the best way to see everything.
    </div>

    <div class="center-constrain">
      <div class="center-constrain-inner">

        <div class="nav-box">
          <h3>Overview Navigation</h3>
          <ul>
            <li><strong>Section 1:</strong> Understanding the policy context of an analysis</li>
            <li><strong>Section 2:</strong> Policy themes and the PSBR framework</li>
            <li><strong>Section 3:</strong> Tool typology navigation</li>
            <li><strong>Section 4:</strong> Tool selection pathways</li>
          </ul>
        </div>

        <div class="nav-box">
          <h3>Additional Resources</h3>
          <ul>
            <li>*Best Practices for working with spatial data</li>
            <li>*FAIR and CARE data principles</li>
            <li>*Gender and human rights considerations in GIS & Spatial Planning</li>
          </ul>
        </div>

      </div>
    </div>

    <div class="home-logos">
      <img src="assets/logos/norad.png" alt="Norad logo">
      <img src="assets/logos/unep-wcmc.png" alt="UNEP-WCMC logo">
      <img src="assets/logos/nea.png" alt="NEA logo">
    </div>

  </div>
  `
},

/* ========= SLIDE 3a (section 1 slides 3-6) ========= */
{
  id:"policy1",
  footer:"full",
html:`

    <div class="section-heading">
     - Section 1 -
    </div>

      <div class="slide-heading">
     Understanding the policy context of an analysis
    </div>

  <div class="slide slide-three">

    <div class="section-panel">

      <img src="assets/images/tot1.png" alt="Illustration">


  <div class="section-text">
     Introduction -> Define policy question(s)
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 3b (section 1 slides 3-6) ========= */
{
  id:"policy_intro",
  footer:"full",
html:`
      <div class="slide-heading">
      Introduction to the guide

      <p>
         There is a wealth of spatial planning tools and methods available to address questions in
     biodiversity conservation and environmental degradation, but knowing what's available and for
     what purpose can be confusing.</p>
   <p>
     This app is primarily aimed at beginner and intermediate users who may be unfamiliar with what's
     available. Using a typology of tool types, it offers guidance to help you identify the analyses
     and tools most relevant to your policy question, and introduces good practice principles
     (including data governance, gender and human rights considerations, and responsible spatial
     analysis) to support their use.
      </p>

      <div class="home-logos--bottom">
          <img src="assets/logos/norad.png" alt="Norad logo">
          <img src="assets/logos/unep-wcmc.png" alt="UNEP-WCMC logo">
          <img src="assets/logos/nea.png" alt="NEA logo">
        </div>
    </div>
`
},

/* ========= SLIDE 3c (section 1 slides 3-6) ========= */
{
  id:"policy_questions",
  footer:"full",
html:`

    <div class="medium2-slide-heading">
      Understanding the policy context of an analysis
    </div>
<div class="slide slide-3c">

  <!-- LEFT COLUMN -->
  <div class="slide-3c-left">
    <div class="context-title">
      What policy question(s) do you wish to address?
    </div>

  </div>

  <!-- RIGHT COLUMN -->
  <div class="slide-3c-right">

    <div class="snav-box question-list">
      <h3>Example Questions</h3>
      <ul>
        <li>Which areas face greatest biodiversity risk?</li>
        <li>How vulnerable are ecosystems to climate change?</li>
        <li>Which ecosystems are most sensitive to disturbance?</li>
        <li>Where should we prioritize conservation?</li>
        <li>How can we expand protected area networks?</li>
        <li>Where would Nature-based Solutions be most effective?</li>
        <li>What are our projects’ potential impacts on biodiversity?</li>
        <li>How do we assess cumulative impacts?</li>
        <li>How will this infrastructure development affect local biodiversity?</li>
        <li>Which species need management attention?</li>
        <li>How do we balance competing land uses?</li>
        <li>How can we sustainably manage natural resources while protecting biodiversity?</li>
        <li>What are the main drivers of habitat loss in our region?</li>
        <li>Which pressures are contributing most to ecosystem decline?</li>
      </ul>
    </div>

  </div>

</div>

`
},

/* ========= SLIDE 3d (section 1 slides 3-6) ========= */
{
  id:"policy_checklist",
  footer:"full",
html:`

    <div class="medium2-slide-heading">
      Understanding the policy context of an analysis
    </div>
<div class="slide slide-3c">

  <!-- LEFT COLUMN -->
  <div class="slide-3c-left">
    <div class="context-title">
      What previous analyses, relevant data and spatial outputs exist to inform your analysis?
    </div>

  </div>

  <!-- RIGHT COLUMN -->
  <div class="slide-3c-right">

    <div class="snav-box">
      <h3>Quick checklist and notes</h3>
      <ul class="checklist">
        <li>
          <label class="checklist-item">
            <input type="checkbox" id="chk-reviewed" onchange="policyNotesState.reviewed=this.checked; savePolicyNotes();">
            Reviewed existing analyses
          </label>
        </li>
        <li>
          <label class="checklist-item">
            <input type="checkbox" id="chk-inventoried" onchange="policyNotesState.inventoried=this.checked; savePolicyNotes();">
            Inventoried spatial data
          </label>
        </li>
        <li>
          <label class="checklist-item">
            <input type="checkbox" id="chk-gaps" onchange="policyNotesState.gaps=this.checked; savePolicyNotes();">
            Identified gaps
          </label>
        </li>
      </ul>
    </div>

<div class="notes-box">
  <strong>Policy Question:</strong>
  <div class="notes-editable policy-question-editable"
       id="policyQuestionText"
       contenteditable="true"
       data-placeholder="Type your own policy question here..."
       oninput="policyNotesState.policyQuestion=this.innerText; savePolicyNotes();">
  </div>
  <strong>Notes:</strong>
  <div class="notes-editable"
       id="policyNotesText"
       contenteditable="true"
       data-placeholder="Click here to type your notes..."
       oninput="policyNotesState.notes=this.innerText; savePolicyNotes();">
  </div>
</div>

<button class="download-btn" onclick="downloadPolicyNotes()">⬇ Download my notes</button>

  </div>

</div>

`
},

/* ========= SLIDE 4a (section 2 slides  - ) ========= */
{
  id:"psbr1",
  footer:"full",
html:`

    <div class="section-heading">
     - Section 2 -
    </div>

      <div class="slide-heading">
     Policy themes and the PSBR framework
    </div>

  <div class="slide slide-three">

    <div class="section-panel">

      <img src="assets/images/psbr2.png" alt="Illustration">

  <div class="section-text">
     Policy themes -> PSBR framework
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 4b – Policy Themes ========= */
{
  id:"psbr3",
  footer:"full",
  html:`

  <div class="slide-frame top">

    <div class="slide-heading">
      How can we classify tools <br>
      into a typology?
    </div>

    <div class="themes-wrapper">

      <div class="themes-box">

        <h2>Typology for classifying tools into policy themes</h2>

        <ul>
          <li><strong>a.</strong> Biodiversity & Ecosystem Sensitivity</li>
          <li><strong>b.</strong> Species & Habitat Trends</li>
          <li><strong>c.</strong> Indicators & Metrics</li>
          <li><strong>d.</strong> Change Monitoring & Modelling</li>
          <li><strong>e.</strong> Ecosystem Services & Valuation</li>
          <li><strong>f.</strong> Nature-Based Solutions & Adaptation</li>
          <li><strong>g.</strong> Conservation Planning</li>
        </ul>

      </div>

    </div>

  </div>

  `
},

/* ========= SLIDE 4c (section 1 slides ) ========= */
/* ========= SLIDE – PSBR Framework Interactive ========= */
{
  id:"psbr_framework",
  footer:"full",
  html:`

  <div class="slide-frame top">

    <div class="slide-heading">
      PSBR Framework & Tool Typology
    </div>

    <div class="medium-slide-heading psbr-subtitle">
      Pressure – State – Benefit – Response
    </div>

    <div class="psbr-hint">Hover or click any element to highlight the tools that serve it; click again to unpin.</div>

    <div class="psbr-interactive-layout">

      <!-- RADIAL DIAGRAM -->
      <div class="psbr-radial-wrap">

        <div class="psbr-radial">

          <svg viewBox="0 0 520 520" class="psbr-radial-svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="ahp" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#c94979"></path></marker>
              <marker id="ahs" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#009BD9"></path></marker>
              <marker id="ahb" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E5A100"></path></marker>
              <marker id="ahr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#AFCB27"></path></marker>
            </defs>
            <circle cx="260" cy="260" r="140" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="10"></circle>

            <!-- Wide invisible hit-target paths: the visible arcs below are
                 only 9px thick with fill="none", which is very hard to
                 accurately hover/click. These transparent 36px-wide paths
                 (same curve, drawn first / underneath) do all the actual
                 interaction handling, giving a much more forgiving target. -->
            <path data-el="pressure" onmouseenter="psbrHoverQuadrant('pressure')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('pressure')" d="M289 123 A140 140 0 0 1 397 231" fill="none" stroke="transparent" stroke-width="36" class="psbr-hit-target"></path>
            <path data-el="state" onmouseenter="psbrHoverQuadrant('state')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('state')" d="M397 289 A140 140 0 0 1 289 397" fill="none" stroke="transparent" stroke-width="36" class="psbr-hit-target"></path>
            <path data-el="benefit" onmouseenter="psbrHoverQuadrant('benefit')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('benefit')" d="M231 397 A140 140 0 0 1 123 289" fill="none" stroke="transparent" stroke-width="36" class="psbr-hit-target"></path>
            <path data-el="response" onmouseenter="psbrHoverQuadrant('response')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('response')" d="M123 231 A140 140 0 0 1 231 123" fill="none" stroke="transparent" stroke-width="36" class="psbr-hit-target"></path>

            <!-- Black outline layer: sits behind the colored arcs, wider
                 than them, so it peeks out as a crisp black rim when an
                 arc is active - makes the selection state pop clearly -->
            <path data-el="pressure" d="M289 123 A140 140 0 0 1 397 231" fill="none" stroke="#111" stroke-width="17" stroke-linecap="round" class="psbr-arc-outline"></path>
            <path data-el="state" d="M397 289 A140 140 0 0 1 289 397" fill="none" stroke="#111" stroke-width="17" stroke-linecap="round" class="psbr-arc-outline"></path>
            <path data-el="benefit" d="M231 397 A140 140 0 0 1 123 289" fill="none" stroke="#111" stroke-width="17" stroke-linecap="round" class="psbr-arc-outline"></path>
            <path data-el="response" d="M123 231 A140 140 0 0 1 231 123" fill="none" stroke="#111" stroke-width="17" stroke-linecap="round" class="psbr-arc-outline"></path>

            <!-- Visible decorative arcs on top - not directly interactive
                 (clicks pass through to the hit-targets above), but still
                 tagged with data-el so they dim/highlight correctly -->
            <path data-el="pressure" d="M289 123 A140 140 0 0 1 397 231" fill="none" stroke="#c94979" stroke-width="8" stroke-linecap="round" marker-end="url(#ahp)" class="psbr-arc-visible"></path>
            <path data-el="state" d="M397 289 A140 140 0 0 1 289 397" fill="none" stroke="#009BD9" stroke-width="8" stroke-linecap="round" marker-end="url(#ahs)" class="psbr-arc-visible"></path>
            <path data-el="benefit" d="M231 397 A140 140 0 0 1 123 289" fill="none" stroke="#E5A100" stroke-width="8" stroke-linecap="round" marker-end="url(#ahb)" class="psbr-arc-visible"></path>
            <path data-el="response" d="M123 231 A140 140 0 0 1 231 123" fill="none" stroke="#AFCB27" stroke-width="8" stroke-linecap="round" marker-end="url(#ahr)" class="psbr-arc-visible"></path>
          </svg>

          <div class="psbr-radial-center" id="psbrCenterText">
            <div>PSBR</div>
            <div>Framework</div>
          </div>

          <div class="psbr-radial-label pressure" data-el="pressure" onmouseenter="psbrHoverQuadrant('pressure')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('pressure')">
            <div class="psbr-radial-tag">Pressure</div>
            <div class="psbr-radial-desc">Less pressure helps<br>biodiversity to recover</div>
          </div>

          <div class="psbr-radial-label state" data-el="state" onmouseenter="psbrHoverQuadrant('state')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('state')">
            <div class="psbr-radial-tag">State</div>
            <div class="psbr-radial-desc">Enhanced biodiversity<br>delivers more benefits</div>
          </div>

          <div class="psbr-radial-label benefit" data-el="benefit" onmouseenter="psbrHoverQuadrant('benefit')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('benefit')">
            <div class="psbr-radial-tag">Benefit</div>
            <div class="psbr-radial-desc">Benefits generate support<br>for effective responses</div>
          </div>

          <div class="psbr-radial-label response" data-el="response" onmouseenter="psbrHoverQuadrant('response')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('response')">
            <div class="psbr-radial-tag">Response</div>
            <div class="psbr-radial-desc">Responses reduce pressure</div>
          </div>

        </div>

      </div>

      <!-- TOOL / ELEMENT MATRIX -->
      <div class="psbr-matrix-wrap">

        <table class="psbr-matrix">
          <thead>
            <tr>
              <th class="psbr-matrix-corner">Tool / Element</th>
              <th data-el="pressure" onmouseenter="psbrHoverQuadrant('pressure')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('pressure')" class="psbr-col-pressure">
                <div class="psbr-matrix-th-tag">Pressure</div>
                <div class="psbr-matrix-th-desc">Why are we losing biodiversity?</div>
              </th>
              <th data-el="state" onmouseenter="psbrHoverQuadrant('state')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('state')" class="psbr-col-state">
                <div class="psbr-matrix-th-tag">State</div>
                <div class="psbr-matrix-th-desc">How is biodiversity changing?</div>
              </th>
              <th data-el="benefit" onmouseenter="psbrHoverQuadrant('benefit')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('benefit')" class="psbr-col-benefit">
                <div class="psbr-matrix-th-tag">Benefit</div>
                <div class="psbr-matrix-th-desc">What are the implications?</div>
              </th>
              <th data-el="response" onmouseenter="psbrHoverQuadrant('response')" onmouseleave="psbrLeave()" onclick="psbrClickQuadrant('response')" class="psbr-col-response">
                <div class="psbr-matrix-th-tag">Response</div>
                <div class="psbr-matrix-th-desc">What is being done?</div>
              </th>
            </tr>
          </thead>
          <tbody>

            <tr data-row-el="pressure" data-row-id="a" onmouseenter="psbrHoverRow('pressure', 'a')" onmouseleave="psbrLeave()" onclick="psbrClickRow('pressure', 'a')">
              <td class="psbr-matrix-label"><span class="psbr-letter">a</span>Biodiversity & Ecosystem Sensitivity</td>
              <td class="psbr-dot-cell"><span class="psbr-dot pressure"></span></td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell">–</td>
            </tr>

            <tr data-row-el="pressure state" data-row-id="b" onmouseenter="psbrHoverRow('pressure state', 'b')" onmouseleave="psbrLeave()" onclick="psbrClickRow('pressure state', 'b')">
              <td class="psbr-matrix-label"><span class="psbr-letter">b</span>Species & Habitat Trends</td>
              <td class="psbr-dot-cell"><span class="psbr-dot pressure"></span></td>
              <td class="psbr-dot-cell"><span class="psbr-dot state"></span></td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell">–</td>
            </tr>

            <tr data-row-el="state response" data-row-id="c" onmouseenter="psbrHoverRow('state response', 'c')" onmouseleave="psbrLeave()" onclick="psbrClickRow('state response', 'c')">
              <td class="psbr-matrix-label"><span class="psbr-letter">c</span>Indicators & Metrics</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell"><span class="psbr-dot state"></span></td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell"><span class="psbr-dot response"></span></td>
            </tr>

            <tr data-row-el="pressure state response" data-row-id="d" onmouseenter="psbrHoverRow('pressure state response', 'd')" onmouseleave="psbrLeave()" onclick="psbrClickRow('pressure state response', 'd')">
              <td class="psbr-matrix-label"><span class="psbr-letter">d</span>Change Monitoring & Modelling</td>
              <td class="psbr-dot-cell"><span class="psbr-dot pressure"></span></td>
              <td class="psbr-dot-cell"><span class="psbr-dot state"></span></td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell"><span class="psbr-dot response"></span></td>
            </tr>

            <tr data-row-el="state benefit" data-row-id="e" onmouseenter="psbrHoverRow('state benefit', 'e')" onmouseleave="psbrLeave()" onclick="psbrClickRow('state benefit', 'e')">
              <td class="psbr-matrix-label"><span class="psbr-letter">e</span>Ecosystem Services & Valuation</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell"><span class="psbr-dot state"></span></td>
              <td class="psbr-dot-cell"><span class="psbr-dot benefit"></span></td>
              <td class="psbr-dot-cell">–</td>
            </tr>

            <tr data-row-el="benefit response" data-row-id="f" onmouseenter="psbrHoverRow('benefit response', 'f')" onmouseleave="psbrLeave()" onclick="psbrClickRow('benefit response', 'f')">
              <td class="psbr-matrix-label"><span class="psbr-letter">f</span>Nature-Based Solutions & Adaptation</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell"><span class="psbr-dot benefit"></span></td>
              <td class="psbr-dot-cell"><span class="psbr-dot response"></span></td>
            </tr>

            <tr data-row-el="benefit response" data-row-id="g" onmouseenter="psbrHoverRow('benefit response', 'g')" onmouseleave="psbrLeave()" onclick="psbrClickRow('benefit response', 'g')">
              <td class="psbr-matrix-label"><span class="psbr-letter">g</span>Conservation Planning</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell">–</td>
              <td class="psbr-dot-cell"><span class="psbr-dot benefit"></span></td>
              <td class="psbr-dot-cell"><span class="psbr-dot response"></span></td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>

  </div>

  `
},
/* ========= SLIDE 5a (section 3 slides  - ) ========= */
{
  id:"tools1",
  footer:"full",
  toolnav:false,
html:`

    <div class="section-heading">
     - Section 3 -
    </div>

      <div class="slide-heading">
     Tool typology navigation
    </div>

  <div class="slide slide-three">

    <div class="section-panel">

      <img src="assets/images/compass.png" alt="Illustration">

  <div class="section-text">
     Tool typology -> Tool navigations
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 5b – Generic software ========= */
{
  id:"genericsoftware",
  footer:"full",
  toolnav:true,
  html:`

  <div class="slide-frame top">

    <div class="medium2-slide-heading">
      Generic Software for Spatial Planning<br>
    </div>

    <div class="gs-wrapper">

      <div class="gs-box">

        <h2>General-purpose GIS, remote sensing, and data processing tools for biodiversity spatial planning workflows</h2>

        <ul>
    <li><strong>R:</strong> Open-source environment for statistical computing and spatial analysis.
    <li><strong>QGIS:</strong> Open-source desktop GIS for data editing and geoprocessing.
    <li><strong>ArcGIS:</strong> Commercial GIS platform for spatial analysis and enterprise data management.
    <li><strong>GDAL:</strong> Core geospatial library for raster/vector conversion and reprojection.
    <li><strong>FME:</strong> Spatial ETL platform for data integration and automation.
    <li><strong>ENVI:</strong> Remote sensing software for image classification and change detection.
    <li><strong>Google Earth Engine:</strong> Cloud platform for satellite data analysis and habitat mapping.
    <li><strong>Microsoft Planetary Computer:</strong> Cloud-based environment for remote sensing and biodiversity analyses.</li>
        </ul>

      </div>

    </div>

    <div class="gs-note">
      When working on specific tasks such as <strong>connectivity analysis</strong> or
      <strong>spatial prioritisation</strong>, it is often more efficient to use
      <strong>bespoke tools</strong> rather than building workflows from scratch in
      general-purpose GIS software.
    </div>

  </div>

  `

},

/* ================================
===============FLIP CARDS 1 Biodiversity and Ecosystem Sensitivity===============*/

{
  id: "toolsflip1",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="slide-heading">
        Which biodiversity issues are you seeking to address?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-bio">
            <div class="card-front">
              <h1>Biodiversity sensitivity</h1>

      <div class="card-image">
         <img src="assets/images/1.png" alt="Biodiversity">
      </div>

              <h1>(e.g. Mapping location of sensitive species / ecosystems)</h1>
              <button onclick="flip('card-bio')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.researchgate.net/profile/Ragnvald-Larsen/publication/339271662_MESA_Mapping_Environmentally_Sensitive_Assets_A_spatial_tool_to_support_environmental_management/links/5e46b36f458515072d9da3dc/MESA-Mapping-Environmentally-Sensitive-Assets-A-spatial-tool-to-support-environmental-management.pdf?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19" target="_blank">MESA</a>
        <div class="tool-desc">Mapping Environmentally Sensitive Assets. A spatial tool to support environmental management</div>
        </li>
        <li class="tool-item">
        <a href="https://avistep.birdlife.org/" target="_blank">AVISTEP</a>
        <div class="tool-desc">The Avian Sensitivity Mapping Tool for Energy Planning</div>
        </li>
        <li class="tool-item">
        <a href="https://www.ibat-alliance.org/" target="_blank">IBAT (Integrated Biodiversity Assessment Tool)</a>
        <div class="tool-desc">Data service on biodiversity, helping to assess threats & sensitivities to various species & ecosystems.</div>
        </li>
              </ul>
              <button onclick="flip('card-bio')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-pressures">
            <div class="card-front">
              <h1>Pressures on biodiversity</h1>
        <div class="card-image">
         <img src="assets/images/2.png" alt="Carbon Stocks">
      </div>

              <h1>(e.g. Fishing, deforestation, roads, pollution, climate change)</h1>
              <button onclick="flip('card-pressures')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://github.com/WIOSymphony/WIOSym_InfoChannel/wiki" target="_blank">WIO SYMPHONY TOOL</a>
        <div class="tool-desc">A tool for mapping  environmental pressures & impacts in the Western Indian Ocean</div>
        </li>
        <li class="tool-item">
        <a href="https://www.chloris.earth/" target="_blank">GLOBIO</a>
        <div class="tool-desc">A tool that models human impacts on biodiversity & ecosystems for policy support</div>
        </li>
        <li class="tool-item">
        <a href="https://globalfishingwatch.org/" target="_blank">GLOBAL FISHING WATCH</a>
        <div class="tool-desc">Tracks global fishing activities  to help identify illegal fishing & support sustainable fisheries</div>
        </li>
              </ul>
              <button onclick="flip('card-pressures')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-impacts">
            <div class="card-front">
              <h1>Impacts to biodiversity</h1>
        <div class="card-image">
         <img src="assets/images/3.png" alt="Impacts to biodiversity">
      </div>
              <h1>(e.g. Combining pressures & sensitivities to identify impact)</h1>
              <button onclick="flip('card-impacts')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://iiasa.ac.at/models-tools-data/globiom" target="_blank">GLOBIOM</a>
        <div class="tool-desc">Global Biosphere Management Model to assess competition for land use between agriculture, bioenergy, & forestry.</div>
        </li>
        <li class="tool-item">
        <a href="https://rshiny.science.strath.ac.uk/apps/StrathE2EApp/" target="_blank">StrathE2E-App</a>
        <div class="tool-desc">Models ecosystem dynamics & human impacts for marine management & conservation.</div>
        </li>
        <li class="tool-item">
        <a href="https://osmose-model.org/" target="_blank">OSMOSE</a>
        <div class="tool-desc">Modelling Marine Exploited Ecosystems used in marine & fisheries management.</div>
        </li>
              </ul>
              <button onclick="flip('card-impacts')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-health">
            <div class="card-front">
              <h1>Wildlife health</h1>
        <div class="card-image">
         <img src="assets/images/4.png" alt="Wildlife health">
      </div>
              <h1>(e.g. mapping & monitoring of zoonotic diseases) </h1>
              <button onclick="flip('card-health')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.onehealthcommission.org/en/resources__services/one_health_tools__toolkits/" target="_blank">ONE HEALTH TOOLS AND TOOLKITS </a>
        <div class="tool-desc">for geospatial analysis. </div>
        </li>
        <li class="tool-item">
        <a href="https://www.epa.gov/enviroatlas/enviroatlas-eco-health-relationship-browser" target="_blank">CO-HEALTH RELATIONSHIP BROWSER</a>
        <div class="tool-desc">Tool showing linkages between ecosystems, ecosystem services & human health.</div>
        </li>
        <li class="tool-item">
        <a href="https://smartconservationtools.org/en-us/" target="_blank">SMART</a>
        <div class="tool-desc">Spatial Monitoring & Reporting Tool created for wildlife health surveillance.</div>
        </li>
              </ul>
              <button onclick="flip('card-health')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 2 Species and Habitat Trends===============*/

{
  id: "toolsflip2",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="slide-heading">
        What type of natural capital do you want to analyse?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-species">
            <div class="card-front">
              <h1>Species</h1>

      <div class="card-image">
         <img src="assets/images/5.png" alt="Species">
      </div>
              <h1>i.e. species population sizes /ranges, species richness, community composition</h1>
              <button onclick="flip('card-species')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13354" target="_blank">STEPS R package</a>
        <div class="tool-desc">Spatially and temporally explicit population modelling.</div>
        </li>
        <li class="tool-item">
        <a href="https://cran.r-project.org/web/packages/BiodiversityR/BiodiversityR.pdf" target="_blank">Biodiversity R package</a>
        <div class="tool-desc">Statistical analysis of biodiversity, including species diversity, abundance, and suitability modeling.</div>
        </li>
        <li class="tool-item">
        <a href="https://biodiversityinformatics.amnh.org/open_source/maxent" target="_blank">MaxEnt</a>
        <div class="tool-desc">Modeling of species niches and distributions using machine-learning.</div>
        </li>
              </ul>
              <button onclick="flip('card-species')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-carbon">
            <div class="card-front">
              <h1>Carbon stocks</h1>
        <div class="card-image">
         <img src="assets/images/6.png" alt="Carbon Stocks">
      </div>
              <h1>Above and below-ground biomass, soil organic carbon</h1>
              <button onclick="flip('card-carbon')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.policysupport.org/costingnature" target="_blank">Co$ting Nature</a>
        <div class="tool-desc">Mapping supply and demand for 18 ecosystem services including carbon.</div>
        </li>
        <li class="tool-item">
        <a href="https://www.chloris.earth/" target="_blank">Chloris Geospatial</a>
        <div class="tool-desc">Measures above-ground biomass from space to estimate carbon removals and emissions.</div>
        </li>
        <li class="tool-item">
        <a href="https://www.fao.org/in-action/epic/ex-act-tool/suite-of-tools/ex-act/es/" target="_blank">EX-ACT Tool</a>
        <div class="tool-desc">Uses the IPCC methodology to estimate and track agricultural interventions' impact on GHG emissions.</div>
        </li>
              </ul>
              <button onclick="flip('card-carbon')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-habitat">
            <div class="card-front">
              <h1>Habitat / ecosystem extent</h1>
        <div class="card-image">
         <img src="assets/images/7.png" alt="Habitat / ecosystem extent">
      </div>
              <h1>i.e. the physical area covered by an ecological system</h1>
              <button onclick="flip('card-habitat')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.openforis.org/" target="_blank">OPEN FORIS</a>
        <div class="tool-desc">Portfolio of free open-source solutions for forest & land monitoring.</div>
        </li>
        <li class="tool-item">
        <a href="https://plugins.qgis.org/plugins/SemiAutomaticClassificationPlugin/" target="_blank">Semi-Automatic Classification QGIS plugin</a>
        <div class="tool-desc">Supervised classification tool for remote sensing of satellite images.</div>
        </li>
        <li class="tool-item">
        <a href="https://oceanwealth.org/" target="_blank">MAPPING OCEAN WEALTH</a>
        <div class="tool-desc">Datasets and tools for sharing understanding of the value of marine and coastal ecosystems.</div>
        </li>
              </ul>
              <button onclick="flip('card-habitat')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-condition">
            <div class="card-front">
              <h1>Habitat / ecosystem condition</h1>
        <div class="card-image">
         <img src="assets/images/8.png" alt="Habitat condition">
      </div>
      <div class="img-credit">Image credit:<br>UNEP-WCMC</div>
              <h1>i.e. how healthy or intact is the ecological system</h1>
              <button onclick="flip('card-condition')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://docs.trends.earth/en/latest/" target="_blank">Trends.Earth</a>
        <div class="tool-desc">Tracking land change.</div>
        </li>
        <li class="tool-item">
        <a href="https://remap-app.org/" target="_blank">REMAP app</a>
        <div class="tool-desc">Remote ecosystem and Assessment pipeline. A simple workflow to define your region of interest, develop a training set to train the classifier, assess your results and download your data.</div>
        </li>
        <li class="tool-item">
        <a href="https://sepal.io/" target="_blank">SEPAL</a>
        <div class="tool-desc">System for Earth Observation Data Access, Processing and Analysis for Land Monitoring.</div>
        </li>
              </ul>
              <button onclick="flip('card-condition')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 3 Indicators and Metrics===============*/

{
  id: "toolsflip3",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="slide-heading">
        Which types of indicators or metrics are relevant?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-indicator">
            <div class="card-front">
              <h1>Global & International </h1>

      <div class="card-image">
         <img src="assets/images/9.png" alt="Global & International Sustainability Frameworks">
      </div>
              <h1>Sustainability Frameworks</h1>
              <button onclick="flip('card-indicator')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://seea.un.org/content/using-seea-ea-calculating-selected-sdg-indicators" target="_blank">SEEA Guidance for SDG Indicator Calculation</a>
        <div class="tool-desc">(Guidance for SDG 6.6.1, 11.7.1, 15.1.1 and 15.3.1).</div>
        </li>
        <li class="tool-item">
        <a href="https://docs.trends.earth/en/latest/for_users/features/unccdreporting.html" target="_blank">TRENDS.EARTH</a>
        <div class="tool-desc">Tools for SDG 15.3.1 on Land Degradation.</div>
        </li>
        <li class="tool-item">
        <a href="https://mgci-docs.readthedocs.io/en/latest/overview.html" target="_blank">Spatial Tools for SDG 15.4.2</a>
        <div class="tool-desc">Mountain Green Cover & Degraded Mountain Land calculation tools.</div>
        </li>
              </ul>
              <button onclick="flip('card-indicator')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-BEHAF">
            <div class="card-front">
              <h1>Biodiversity & Ecosystem</h1>
        <div class="card-image">
         <img src="assets/images/10.png" alt="Carbon Stocks">
      </div>
              <h1>Health Assessment Frameworks</h1>
              <button onclick="flip('card-BEHAF')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.30x30.solutions/abouttoolkit/" target="_blank">30X30 Solutions Toolkit</a>
        <div class="tool-desc">Curated resources to help users find information & tools to help with the implementation of Target 3 of the Kunming-Montreal Global Biodiversity Framework </div>
        </li>
        <li class="tool-item">
        <a href="https://www.protectedplanet.net/" target="_blank">Protected Planet</a>
        <div class="tool-desc">provides the basis for monitoring and reporting on progress towards international environmental targets such as Target 3 of the Kunming-Montreal Global Biodiversity Framework (GBF) </div>
        </li>
              </ul>
              <button onclick="flip('card-BEHAF')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-nea">
            <div class="card-front">
              <h1>National Ecosystem</h1>
        <div class="card-image">
         <img src="assets/images/11.png" alt="National Ecosystem Monitoring & Reporting">
      </div>
              <h1>Monitoring & Reporting</h1>
              <button onclick="flip('card-nea')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.ecosystemassessments.net/resources/" target="_blank">NEA National Ecosystem Assessment</a>
        <div class="tool-desc">Curated resources specifically to support the to support the understanding & implementation of the national ecosystem assessment process.</div>
        </li>
        <li class="tool-item">
        <a href="https://openknowledge.fao.org/server/api/core/bitstreams/d020c63f-2e61-4b1c-a238-4b8c49d0833a/content" target="_blank">Volundary guidelines on National Forest Monitoring System (NFMS)</a>
        <div class="tool-desc">providing  a framework for countries  to track changes in forest ecosystems.</div>
        </li>
              </ul>
              <button onclick="flip('card-nea')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-metric">
            <div class="card-front">
              <h1>Science-based</h1>
        <div class="card-image">
         <img src="assets/images/12.png" alt="Science-based Environmental Indicators and metrics">
      </div>
              <h1>Environmental Indicators and metrics</h1>
              <button onclick="flip('card-metric')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://doi.org/10.1146/annurev-environ-121522-045106" target="_blank">Global Metrics for Terrestrial Biodiversity</a>
        <div class="tool-desc">Paper and associated database on how metrics differ or for what purpose they are best suited.</div>
        </li>
        <li class="tool-item">
        <a href="https://boninabox.geobon.org/" target="_blank">BON IN A BOX</a>
        <div class="tool-desc">A toolbox for countries & organizations to calculate variables & indicators.</div>
        </li>
              </ul>
              <button onclick="flip('card-metric')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 4 Change Monitoring and Modelling===============*/

{
  id: "toolsflip4",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="slide-heading">
        Do you want to monitor or model change or impacts?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-mon">
            <div class="card-front">
              <h1>Environmental Impact / Monitoring</h1>

      <div class="card-image">
         <img src="assets/images/13.png" alt="Environmental Impact / Monitoring">
      </div>
              <h1>e.g. data collection, analysis & reporting as part of an environmental impact assessment</h1>
              <button onclick="flip('card-mon')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.openforis.org/" target="_blank">OPEN FORIS</a>
        <div class="tool-desc">Suite of open-source solutions for forest & land monitoring.</div>
        </li>
        <li class="tool-item">
        <a href="https://www.collect.earth/" target="_blank">COLLECT EARTH</a>
        <div class="tool-desc">Open-source system for viewing & interpreting high-resolution satellite imagery.</div>
        </li>
        <li class="tool-item">
        <a href="https://docs.trends.earth/en/latest/" target="_blank">TRENDS.EARTH</a>
        <div class="tool-desc">Tracking land change.</div>
        </li>
        <li class="tool-item">
        <a href="https://smartconservationtools.org/en-us/" target="_blank">SMART:</a>
        <div class="tool-desc">Spatial Monitoring and Reporting Tool for forest & land monitoring.</div>
        </li>
        <li class="tool-item">
        <a href="https://ecopath.org/" target="_blank">Ecopath with Ecosim (EwE) </a>
        <div class="tool-desc">Suite of open source marine ecosystem modelling software.</div>
        </li>
              </ul>
              <button onclick="flip('card-mon')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-mod">
            <div class="card-front">
              <h1>Modeling change / impact of policies</h1>
        <div class="card-image">
         <img src="assets/images/14.png" alt="Modeling change / impact of policies">
      </div>
              <h1>e.g. tools for modeling potential futures or potential outcomes of implementation of different policy options</h1>
              <button onclick="flip('card-mod')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.policysupport.org/waterworld" target="_blank">WaterWorld</a>
        <div class="tool-desc">A tool for hydrological modeling of current & future land use, management & climate scenarios.</div>
        </li>
        <li class="tool-item">
        <a href="https://www.policysupport.org/costingnature" target="_blank">Co$ting Nature</a>
        <div class="tool-desc">Mapping supply & demand for 18 ecosystem services.</div>
        </li>
        <li class="tool-item">
        <a href="https://abc-map.fao.org/" target="_blank">ABC-Map (Adaptation, Biodiversity & Carbon Mapping Tool)</a>
        <div class="tool-desc">geospatial app assessing the  impact of policies on biodiversity, carbon stocks, & climate change risks.</div>
        </li>
        <li class="tool-item">
        <a href="https://interactive-atlas.ipcc.ch/" target="_blank">IPCC WGI Interactive Atlas)</a>
        <div class="tool-desc">Global climate data access & visualization tool.</div>
        </li>
              </ul>
              <button onclick="flip('card-mod')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 5 Ecosystem Services and Valuation===============*/

{
  id: "toolsflip5",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="medium3-slide-heading">
        Finding Ecosystem Service Tools
      </div>
	  <div class="medium4-slide-heading">
		Ecosystem services can be categorised into provisioning, regulating and cultural services but tools often cover multiple themes so here we provide example search catalogues and provide details from a few well-known example tools.

		</div>
      <section class="flipcard-row">

        <div class="flipcard2">
          <div class="card-inner" id="card-es">
            <div class="card-front">
              <h1></h1>

      <div class="card-image">
         <img src="assets/images/17.png" alt="">
      </div>
              <h1>Find ecosystem service tools</h1>
              <button onclick="flip('card-es')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.aboutvalues.net/method_navigator/" target="_blank">Values Methods Database</a>
        <div class="tool-desc">Finding suitable methods (and tools) for assessing ecosystem services</div>
        </li>
        <li class="tool-item">
        <a href="https://ecosystemsknowledge.net/resources/tool-assessor/" target="_blank">Ecosystem Knowledge Network</a>
        <div class="tool-desc"> A collection of ecosystem service and natural captical valuation tools.</div>
        </li>
        <li class="tool-item">
        <a href="https://naturalcapitalalliance.stanford.edu/software/invest/natcap-partnership-software-tools" target="_blank">NatCap Partnership Software & Tools</a>
        <div class="tool-desc">Curated Software & Tools for ecosystem services</div>
        </li>				

              </ul>
              <button onclick="flip('card-es')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-carbon">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/18.png" alt="Carbon Stocks">
      </div>
              <h1>ARIES: An AI-powered and digital software for rapid ecosystem service assessment and valuation</h1>
              <button onclick="flip('card-carbon')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://aries.integratedmodelling.org/" target="_blank">ARIES (ARtifical Intelligence for Environment & Sustainability)</a>
        <div class="tool-desc">AI-powered and digital software for rapid ecosystem service assessment and valuation. It gives equal emphasis to ecosystem service supply, demand and flow in order to quantify actual service provision and use by society (as opposed to quantifying potential service benefits).</div>
        </li>

              </ul>
              <button onclick="flip('card-carbon')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-habitat">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/15.png" alt="Habitat / ecosystem extent">
      </div>
              <h1>Co$tingNature: Mapping supply and demand for 18 ecosystem services at local to national scales globally </h1>
              <button onclick="flip('card-habitat')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.policysupport.org/costingnature" target="_blank">Co$ting Nature</a>
        <div class="tool-desc">Mapping supply & demand for 18 ecosystem services at local to national scales globally, including carbon.</div>
        </li>
              </ul>
              <button onclick="flip('card-habitat')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-condition">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/16.png" alt="Habitat condition">
      </div>
              <h1>InVEST: An open-source ecosystem services modeling platform to enable better decisions, everywhere.</h1>
              <button onclick="flip('card-condition')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://naturalcapitalalliance.stanford.edu/software/invest/invest-models" target="_blank">InVEST</a>
        <div class="tool-desc">Integrated Valuation of Ecosystem Services & Tradeoffs. Mapping of 19 ecosystem service to assess tradeoffs  & natural capital benefits associated with different management choices</div>
        </li>

              </ul>
              <button onclick="flip('card-condition')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 6 Climate Adaptation and NbS===============*/

{
  id: "toolsflip6",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="slide-heading">
        What tools are relevant to different Nature-based Solutions?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-nbs1">
            <div class="card-front">
              <h1></h1>

      <div class="card-image">
         <img src="assets/images/19.png" alt="tc">
      </div>
              <h1>Explore Tools for planning, designing, & implementing NbS</h1>
              <button onclick="flip('card-nbs1')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://research.wur.nl/en/datasets/nature-based-solutions-tools-catalogue/" target="_blank">NbS Tools Catalogue</a>
        <div class="tool-desc">Contains 70 tools (with objective to  increase) providing accessibility to data on NbS and climate resilience awareness of several tools that already exist to plan, design, & implement NbS.</div>
        </li>

              </ul>
              <button onclick="flip('card-nbs1')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-nbs2">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/20.png" alt="Carbon Stocks">
      </div>
              <h1>Climate resilience e.g. Early Warning Systems (flood & heatwave alerts), Climate Risk (vulnerability analysis)</h1>
              <button onclick="flip('card-nbs2')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://4returns.commonland.com/toolbox/aqueduct-floods/" target="_blank">1. Aqueduct Floods</a>
        <div class="tool-desc">measures and maps water-related flood risks globally</div>
        </li>
        <li class="tool-item">
        <a href="https://climate-adapt.eea.europa.eu/en/metadata/tools/dynamic-interactive-vulnerability-assessment-model-diva" target="_blank">2. Dynamic Interactive Vulnerability Assessment model (DIVA) </a>
        <div class="tool-desc">An integrated global model assessing the impacts of sea-level rise and development on coastal erosion, flooding, wetland loss, and salinity intrusion in deltas and estuaries.</div>
        </li>
              </ul>
              <button onclick="flip('card-nbs2')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-nbs3">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/21.png" alt="Habitat / ecosystem extent">
      </div>
              <h1>Restoration opportunities assessment e.g. restoring forests for soil stabilization and limiting soil erosion </h1>
              <button onclick="flip('card-nbs3')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://restor.eco/sites/?lat=26&lng=14.23&zoom=3" target="_blank">1. Restor</a>
        <div class="tool-desc">A geospatial platform to map & monitor restoration projects </div>
        </li>
        <li class="tool-item">
        <a href="https://www.wri.org/research/restoration-opportunities-assessment-methodology-roam/" target="_blank">2. ROAM</a>
        <div class="tool-desc">A framework for countries to conduct forest and landscape restoration opportunity assessments &  identify priority areas at a national or sub-national level. </div>
        </li>
              </ul>
              <button onclick="flip('card-nbs3')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-nbs4">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/22.png" alt="Habitat condition">
      </div>
              <h1>Ecosystem-based Adaptation i.e. helping people to adapt to climate change through ecosystem-based approaches </h1>
              <button onclick="flip('card-nbs4')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://ndcpartnership.org/knowledge-portal/climate-toolbox/eba-tools-navigator" target="_blank">EbA Tools Navigator</a>
        <div class="tool-desc">An interactive searchable database of tools and methods relevant to Ecosystem-based adaptation</div>
        </li>
              </ul>
              <button onclick="flip('card-nbs4')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 7 Conservation Planning===============*/

{
  id: "toolsflip7",
  footer: "full",
  toolnav:true,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->

    <div class="slide-frame top">

      <div class="slide-heading">
        What is the main focus of your conservation planning work?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-cp1">
            <div class="card-front">
              <h1></h1>

      <div class="card-image">
         <img src="assets/images/23.png" alt="Species">
      </div>
              <h1>Systematic Conservation Planning e.g.  identifying priority areas for protection based on quantitative targets)</h1>
              <button onclick="flip('card-cp1')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://prioritizr.net/" target="_blank">1. prioritizr: </a>
        <div class="tool-desc">Systematic Conservation Prioritization in R to build & solve conservation planning problems.</div>
        </li>
        <li class="tool-item">
        <a href="https://marxansolutions.org/" target="_blank">2. MARXAN</a>
        <div class="tool-desc">Suite of open-source software for systematic conservation planning includes connectivity,  and option to run using an online web interface. </div>
              </ul>
              <button onclick="flip('card-cp1')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-cp2">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/24.png" alt="Carbon Stocks">
      </div>
              <h1>Marine Spatial planning</h1>
              <button onclick="flip('card-cp2')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://marineplanning.org/tools/" target="_blank">1. MSP tools</a>
        <div class="tool-desc">Index of Marine Spatial Planning platforms & tools at The Nature Conservancy (TNC)</div>
        </li>
        <li class="tool-item">
        <a href="https://maritime-spatial-planning.ec.europa.eu/msp-resources/msp-tools" target="_blank">2. MSP in the EU</a>
        <div class="tool-desc">A tool to guide and assess marine spatial planning</div>
        </li>
        <li class="tool-item">
        <a href="https://msp4bio.eu/ese-management-framework/" target="_blank">3. Ecological-Socio-Economic (ESE) </a>
        <div class="tool-desc">Management Framework Tool-based guidance to support marine ecosystem protection and restoration through Marine Spatial Planning (MSP)</div>
        </li>
              </ul>
              <button onclick="flip('card-cp2')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-cp3">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/25.png" alt="Habitat / ecosystem extent">
      </div>
              <h1>Restoration prioritisation</h1>
              <button onclick="flip('card-cp3')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://plangea.earth/en" target="_blank">1. PLANGEA</a>
        <div class="tool-desc">Multicriteria optimization framework to identify global priority areas for restoration</div>
        </li>
        <li class="tool-item">
        <a href="https://unbiodiversitylab.org/en/maps-of-hope/" target="_blank">2. ELSA</a>
        <div class="tool-desc">Essential Life Support Areas systematic conservation planning (for four  nature-based actions protection, restoration, management and urban
greening). </div>
        </li>
              </ul>
              <button onclick="flip('card-cp3')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-cp4">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
         <img src="assets/images/26.png" alt="Habitat condition">
      </div>
              <h1>Connectivity analysis e.g. corridors connecting fragmented landscapes </h1>
              <button onclick="flip('card-cp4')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://conservationcorridor.org/corridor-toolbox/programs-and-tools/tools-decision-table/" target="_blank">1. Connectivity Tools Guide</a>
        <div class="tool-desc">Tools summary filterable by category, data use, platform, interface & data input.</div>
        </li>
        <li class="tool-item">
        <a href="https://linkagemapper.org/" target="_blank">2. Linkage Mapper </a>
        <div class="tool-desc">An open-source toolbox for wildlife habitat connectivity analysis</div>
        </li>
        <li class="tool-item">
        <a href="https://circuitscape.org/" target="_blank">3. Circuitscape</a>
        <div class="tool-desc">A connectivity analysis tool using circuit theory to predict movement, gene flow, and genetic differentiation in landscapes..</div>
        </li>
              </ul>
              <button onclick="flip('card-cp4')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ========= SLIDE 6a (section 4 slides  - ) ========= */
{
  id:"pathways1",
  footer:"full",
html:`

    <div class="section-heading">
     - Section 4 -
    </div>

      <div class="slide-heading">
     Tool Selection Pathways
    </div>

  <div class="slide slide-three">

    <div class="section-panel">

      <img src="assets/images/section4b.png" alt="Illustration">

  <div class="section-text">
     Question -> Tool pathways
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 6b (section 4 slides  - ) ========= */

{
  id:"pathways_workflow",
  footer:"full",
  toolnav:true,
  html:`

<div class="slide-frame top">

<div class="slide-heading">
Match Your Question to Tool Types
</div>

<div class="medium-slide-heading">
Navigate from policy question to the most appropriate tool type
</div>

<div class="workflow">

<div class="workflow-card">

<div class="workflow-step-header">
<div class="step-icon green">1</div>
<h2>Policy Question</h2>
</div>

<p>
What decision needs to be made?<br>
What conservation problem are you trying to solve?
</p>

</div>

<div class="workflow-arrow">➜</div>

<div class="workflow-card">

<div class="workflow-step-header">
<div class="step-icon yellow">2</div>
<h2>PSBR Framework</h2>
</div>

<p>
Which components of the Pressure–State–Benefit–Response framework are relevant?
</p>

</div>

<div class="workflow-arrow">➜</div>

<div class="workflow-card">

<div class="workflow-step-header">
<div class="step-icon orange">3</div>
<h2>Tool Typology</h2>
</div>

<p>
Navigate to the relevant tool category and explore example tools.
</p>

</div>

</div>

</div>

`
},

/* ========= SLIDE 6c (section 4 slides  - ) ========= */

{
  id:"exaample1",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">EXAMPLE 1</div>
      <div class="example-title">Risk & Vulnerability</div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question">
      "Which ecosystems in my country are most vulnerable to climate change?"
      </div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>
          </div>

              <div class="step-title">
                  (a) Biodiversity & Ecosystem Sensitivity
              </div>

              <div class="step-text">
                  Assess baseline vulnerability of ecosystems and species.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading">
                  CONSIDER THE STATE AND DISTRIBUTION OF NATURAL CAPITAL
              </div>
          </div>

              <div class="step-title">
                  (b) Species & Habitat Trends
              </div>

              <div class="step-text">
                  Understand which species and habitats show sensitivities,
                  decline or impacts.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading">
                  EXPLORE
              </div>
          </div>

              <div class="step-title">
                  (d) Change Monitoring & Modelling
              </div>

              <div class="step-text">
                  Model future climate scenarios and ecosystem responses.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong> and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},

/* ========= SLIDE 6d (section 4 slides  - ) ========= */

{
  id:"exaample2",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">EXAMPLE 2</div>
      <div class="example-title">Conservation Planning</div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question">
      "Where should we locate new protected areas to meet biodiversity targets?"
      </div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>
          </div>

              <div class="step-title">
                  (g) Conservation Planning
              </div>

              <div class="step-text">
                  Identify priority areas for protection.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading">
                  ALSO EXPLORE
              </div>
          </div>

              <div class="step-title">
                  (b) Species & Habitat Trends (e) Ecosystem Services & Valuation
              </div>

              <div class="step-text">
                  Understand state and distribution of natural capital and which ecosystem services these provide
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading">
                  CONSIDER WHAT METRICS AND INDICATORS ARE RELEVANT
              </div>
          </div>

              <div class="step-title">
                  (c) Indicators & Metrics
              </div>

              <div class="step-text">
                  Use to inform conservation planning analysis and track progress towards conservation goals.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>, <strong>Benefit</strong> and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},

/* ========= SLIDE 6e (section 4 slides  - ) ========= */

{
  id:"exaample3",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">EXAMPLE 3</div>
      <div class="example-title">Impact Assessment</div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question">
      "How will this infrastructure development affect local biodiversity?"
      </div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>
          </div>

              <div class="step-title">
                  (a) Biodiversity & Ecosystem Sensitivity
              </div>

              <div class="step-text">
                  Understand the location of sensitive species and impacts on biodiversity.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading">
                  ALSO EXPLORE
              </div>
          </div>

              <div class="step-title">
                  (b) Species & Habitat Trends (e) Ecosystem Services & Valuation
              </div>

              <div class="step-text">
                  Understand state and distribution of natural capital and impacts on ecosystem services.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading">
                  CONSIDER MODELLING OR MONITORING POTENTIAL IMPACTS
              </div>
          </div>

              <div class="step-title">
                  (d) Change Monitoring & Modelling
              </div>

              <div class="step-text">
                  Look at data collection and analysis as part of an environmental impact assessment.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>, <strong>Benefit</strong> and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},

/* ========= SLIDE 6F (section 4 slides  - ) ========= */

{
  id:"exaample4",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">EXAMPLE 4</div>
      <div class="example-title">Resource Management</div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question">
      "How can we sustainably manage our forest resources while protecting biodiversity?"
      </div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>
          </div>

              <div class="step-title">
                  (b) Species & Habitat Trends (e) Ecosystem Services & Valuation
              </div>

              <div class="step-text">
                  Understand state and distribution of natural capital and the ecosystem services they provide.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading">
                  ALSO EXPLORE
              </div>
          </div>

              <div class="step-title">
                  (g) Conservation Planning
              </div>

              <div class="step-text">
                  To identify priority areas for sustainable management of forests.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading">
                  CONSIDER BIODIVERSITY AND ECOSYSTEM SENSITIVITY
              </div>
          </div>

              <div class="step-title">
                  (a) Biodiversity & Ecosystem Sensitivity
              </div>

              <div class="step-text">
                  To help understand pressures that may be a barrier to sustainable management.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>, <strong>Benefit</strong> and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},

/* ========= SLIDE 6g (section 4 slides  - ) ========= */

{
  id:"exaample5",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">EXAMPLE 5</div>
      <div class="example-title">Degradation Drivers</div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question">
      "What are the main drivers of habitat loss in our coastal regions?"
      </div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>
          </div>

              <div class="step-title">
                  (a) Biodiversity & Ecosystem Sensitivity
              </div>

              <div class="step-text">
                  Identify the pressures driving habitat loss and which ecosystems are most sensitive to them.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading">
                  ALSO EXPLORE
              </div>
          </div>

              <div class="step-title">
                  (b) Species & Habitat Trends
              </div>

              <div class="step-text">
                  Understand the distribution of species and natural capital, and how it has changed over time.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading">
                  CONSIDER TOOLS FOR MONITORING CHANGE
              </div>
          </div>

              <div class="step-title">
                  (d) Change Monitoring & Modelling
              </div>

              <div class="step-text">
                  Environmental impact assessment and monitoring of habitat change and pressures.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong> and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},
/* ========= SLIDE 6h (section 4 slides  - ) ========= */
{
  id:"exaample6",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">EXAMPLE 6</div>
      <div class="example-title">National Adaptation Planning</div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question">
      "Are nature-based solutions a viable alternative to grey infrastructure for coastal climate adaptation?"
      </div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>
          </div>

              <div class="step-title">
                  (a) Biodiversity & Ecosystem Sensitivity
              </div>

              <div class="step-text">
                  Identify which coastal ecosystems, such as mangroves, coral reefs and wetlands, are most sensitive to climate impacts like sea-level rise and storm surge.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading">
                  ALSO EXPLORE
              </div>
          </div>

              <div class="step-title">
                  (f) Nature-Based Solutions & Adaptation
              </div>

              <div class="step-text">
                  Explore ecosystem-based adaptation options, such as mangrove restoration, that can buffer coastal communities from climate impacts.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading">
                  CONSIDER MODELLING FUTURE SCENARIOS
              </div>
          </div>

              <div class="step-title">
                  (d) Change Monitoring & Modelling
              </div>

              <div class="step-text">
                  Model future sea-level rise and coastal erosion scenarios to inform where adaptation measures will be most effective.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>, <strong>Benefit</strong> and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},
/* ========= SLIDE 6i - Blank interactive example (fill your own) ========= */
{
  id:"exampleBlank1",
  footer:"full",
  toolnav:true,
  html:`

<div class="example-slide">

  <div class="example-header">
      <div class="example-tag">YOUR EXAMPLE</div>
      <div class="example-title editable-field" id="blankTitle" contenteditable="true" oninput="saveBlankExample()" data-placeholder="Give your example a title..."></div>
  </div>

  <div class="policy-box">
      <div class="policy-label">Policy Question:</div>

      <div class="policy-question editable-field" id="blankQuestion" contenteditable="true" oninput="saveBlankExample()" data-placeholder="Type your own policy question here..."></div>
  </div>

  <div class="example-panel">

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">1</div>
          <div class="step-heading editable-field" id="blankStep1Heading" contenteditable="true" oninput="saveBlankExample()" data-placeholder="STEP INSTRUCTION (e.g. START BY EXPLORING TOOLS FOR)"></div>
          </div>

              <div class="step-title editable-field" id="blankStep1Title" contenteditable="true" oninput="saveBlankExample()" data-placeholder="(?) Typology category"></div>

              <div class="step-text editable-field" id="blankStep1Text" contenteditable="true" oninput="saveBlankExample()" data-placeholder="Why is this tool type relevant to your question?"></div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">2</div>
          <div class="step-heading editable-field" id="blankStep2Heading" contenteditable="true" oninput="saveBlankExample()" data-placeholder="STEP INSTRUCTION (e.g. ALSO EXPLORE)"></div>
          </div>

              <div class="step-title editable-field" id="blankStep2Title" contenteditable="true" oninput="saveBlankExample()" data-placeholder="(?) Typology category"></div>

              <div class="step-text editable-field" id="blankStep2Text" contenteditable="true" oninput="saveBlankExample()" data-placeholder="Why is this tool type relevant to your question?"></div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-content">

          <div class="step-heading-row">
          <div class="step-number">3</div>
          <div class="step-heading editable-field" id="blankStep3Heading" contenteditable="true" oninput="saveBlankExample()" data-placeholder="STEP INSTRUCTION (e.g. CONSIDER)"></div>
          </div>

              <div class="step-title editable-field" id="blankStep3Title" contenteditable="true" oninput="saveBlankExample()" data-placeholder="(?) Typology category"></div>

              <div class="step-text editable-field" id="blankStep3Text" contenteditable="true" oninput="saveBlankExample()" data-placeholder="Why is this tool type relevant to your question?"></div>

          </div>

      </div>

  </div>

  <div class="example-footer editable-field" id="blankFooter" contenteditable="true" oninput="saveBlankExample()" data-placeholder="→ Find these tool types in the ... areas of the PSBR Framework."></div>

  <div class="blank-example-actions">
      <button class="clear-btn" onclick="clearBlankExample()">Clear</button>
      <button class="download-btn" onclick="downloadBlankExample()">⬇ Save my example</button>
  </div>

</div>

`
},
{
  id:"resources1",
  footer:"full",
html:`

    <div class="section-heading">
     - Additional Resources -
    </div>

      <div class="slide-heading">

    </div>

  <div class="slide slide-three">

    <div class="section-panel">

      <img src="assets/images/resources.png" alt="Illustration">

  <div class="section-text">
     Best practice -> Principles
    </div>

    </div>

  </div>
`
},

/* ============== SLIDE 8a ================ */
{
id:"bestpractice1",
footer:"full",

html:`

<div class="slide-frame top">

<div class="medium2-slide-heading bp-slide-heading">
Best Practices for Working with Spatial Data
</div>

<div class="bp-grid">

<div class="bp-card">
<div class="bp-accent bp-green"></div>

<div class="bp-content">

<h2>👥 Stakeholder Engagement</h2>

<ul>
<li>Engage decision-makers early in the tool selection process.</li>

<li>Include communities, technical experts and policy-makers throughout implementation.</li>

<li>Gather feedback regularly to improve the workflow and build ownership.</li>

<li>Adopt high-quality Free, Prior and Informed Consent (FPIC) processes when working with Indigenous Peoples, all communities, groups and individuals.</li>
</ul>

<div class="bp-resource">
Further guidance:<br>

<a href="https://www.unsdglearn.org/courses/stakeholder-engagement/"
target="_blank">
Stakeholder engagement and how to strengthen multistakeholder participation
</a>

</div>
</div>
</div>

<div class="bp-card">
<div class="bp-accent bp-green"></div>

<div class="bp-content">

<h2>🗄 Data Quality Assessment</h2>

<ul>
<li>Evaluate data availability, completeness and reliability.</li>

<li>Understand uncertainty and potential sources of bias.</li>

<li>Plan data cleaning and validation before analysis begins.</li>
</ul>
<br>
<div class="bp-resource">
Further guidance:<br>

<a href="https://unbiodiversitylab.org/wp-content/uploads/2021/01/Global-Biodiversity-Data-Fitness-Assessment.pdf"
target="_blank">
Global Biodiversity Data Fitness Assessment
</a>

</div>

</div>
</div>

<div class="bp-card">
<div class="bp-accent bp-brown"></div>

<div class="bp-content">

<h2>🎓 Training & Capacity Building</h2>

<ul>
<li>Invest in staff training and spatial analysis skills.</li>

<li>Develop clear documentation and standard workflows.</li>

<li>Create knowledge transfer plans for long-term sustainability.</li>

<li>Deliver training that incorporates Indigenous Peoples, all communities, groups and individuals, local knowledge, and participatory methods.</li>
</ul>

<div class="bp-resource">
Further guidance:<br>

<a href="https://elearning.staging.wordpress-linode.linode.unep-wcmc.org/courses/oil-for-development-e-learning-module-1/"
target="_blank">
Module 1: An introduction to Spatial data for Biodiversity
</a>
<br>
<a href="https://elearning.staging.wordpress-linode.linode.unep-wcmc.org/courses/oil-for-development-e-learning-module-1-2/"
target="_blank">
Module 2: The role of Environmental data in area-based planning
</a>
</div>
</div>
</div>

<div class="bp-card">
<div class="bp-accent bp-brown"></div>

<div class="bp-content">

<h2>👥 Data Principles & Informed Consent</h2>

<ul>
<li><strong>Fair</strong> — minimise bias in data collection and analysis.</li>

<li><strong>Care</strong> — protect sensitive biodiversity and community information.</li>

<li><strong>Consent</strong> — ensure appropriate permissions for data use.</li>
<br><br>
</ul>

<div class="bp-resource">
↓ Explore the FAIR and CARE Principles in more detail on the following slides.
</div>

</div>

</div>

</div>

</div>

`
},

/*=================side 8b ======================*/
/* ================================
===============FLIP CARDS 8b FAIR===============*/

{
  id: "fairflip1",
  footer: "full",
  toolnav:false,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->
  <div class="slide-frame top">

  <div class="slide-heading">
  FAIR Principles
  </div>

  <div class="medium-slide-heading">
  To improve the infrastructure supporting the reuse of data
  </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-FINDABLE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/f.png" alt="FINDABLE">
      </div>
      <h2>FINDABLE</h2>
              <button onclick="flip('card-FINDABLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>FINDABLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data and metadata are easy to find for both humans and computers, with persistent identifiers (PIDs)<br><br><em>Example: A global protected-area dataset is published with a DOI, rich metadata, and standard keywords, and is indexed in repositories. Researchers can easily discover the dataset by searching for terms such as terrestrial or marine protected areas, IUCN category, or a specific country or region.</em></div>
        </li>
              </ul>
              <button onclick="flip('card-FINDABLE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-ACCESSIBLE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/a.png" alt="ACCESSIBLE">
      </div>
      <h2>ACCESSIBLE</h2>
              <button onclick="flip('card-ACCESSIBLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>ACCESSIBLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Protocols exist to retrieve data, defining how it can be accessed<br><br><em>Example: species occurrence records can be retrieved through a documented API, such as GBIF's data portal, rather than requiring a manual request to the data holder.</em></div>
        </li>
              </ul>
              <button onclick="flip('card-ACCESSIBLE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-INTEROPERABLE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/i.png" alt="INTEROPERABLE">
      </div>
      <h2>INTEROPERABLE</h2>
              <button onclick="flip('card-INTEROPERABLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>INTEROPERABLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data integrates with other data for analysis, using standard formats<br><br><em>Example: Data are shared in standard geospatial formats (e.g., GeoPackage, GeoTIFF or GeoJSON) and use a common coordinate reference system, enabling them to be used seamlessly across different GIS software.</em></div>
        </li>
              </ul>
              <button onclick="flip('card-INTEROPERABLE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-REUSABLE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/r.png" alt="REUSABLE">
      </div>
      <h2>REUSABLE</h2>
              <button onclick="flip('card-REUSABLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>REUSABLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data is well documented to be replicated in different settings<br><br><em>Example: a dataset is published with a clear license and methodology notes, allowing a different country team to repeat the same analysis using their own local data.</em></div>
        </li>
              </ul>
              <button onclick="flip('card-REUSABLE')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 8c CARE===============*/

{
  id: "careflip1",
  footer: "full",
  toolnav:false,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->
  <div class="slide-frame top">

  <div class="slide-heading">
  CARE Principles
  </div>

  <div class="medium-slide-heading care-subtitle">
  Guiding Data Governance for Indigenous Peoples, All Communities, Groups and Individuals
  </div>

      <section class="flipcard-row">

        <div class="flipcard2">
          <div class="card-inner" id="card-COLLECTIVE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/c.png" alt="COLLECTIVE">
      </div>
      <h2>COLLECTIVE BENEFIT</h2>
              <button onclick="flip('card-COLLECTIVE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>COLLECTIVE BENEFIT</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data ecosystems should be designed and governed so that Indigenous Peoples, all communities, groups and individuals can actively derive value, drive innovation and share in the benefits generated from data collected about them, not just have it extracted for others' gain.</div>
        </li>
              </ul>
              <button onclick="flip('card-COLLECTIVE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-AUTHORITY">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/a.png" alt="AUTHORITY">
      </div>
      <h2>AUTHORITY TO CONTROL</h2>
              <button onclick="flip('card-AUTHORITY')">Flip</button>
            </div>
            <div class="card-back">
              <h4>AUTHORITY TO CONTROL</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">The rights of Indigenous Peoples, all communities, groups and individuals to govern their own data must be recognised and upheld. They should retain meaningful authority over how their data is accessed, used, shared and represented, at every stage.</div>
        </li>
              </ul>
              <button onclick="flip('card-AUTHORITY')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-RESPONSIBILITY">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/r.png" alt="RESPONSIBILITY">
      </div>
      <h2>RESPONSIBILITY</h2>
              <button onclick="flip('card-RESPONSIBILITY')">Flip</button>
            </div>
            <div class="card-back">
              <h4>RESPONSIBILITY</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Those who collect, hold or use this data carry a responsibility to do so in ways that actively support the self-determination, dignity and long-term wellbeing of the Indigenous Peoples, all communities, groups and individuals it relates to.</div>
        </li>
              </ul>
              <button onclick="flip('card-RESPONSIBILITY')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-ETHICS">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/e.png" alt="ETHICS">
      </div>
      <h2>ETHICS</h2>
              <button onclick="flip('card-ETHICS')">Flip</button>
            </div>
            <div class="card-back">
              <h4>ETHICS</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data practices must be grounded in the worldviews, values and lived experiences of Indigenous Peoples, all communities, groups and individuals, with their rights and wellbeing considered and protected throughout the entire data lifecycle, from collection to reuse. </div>
        </li>
              </ul>
              <button onclick="flip('card-ETHICS')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
	
	</section>

		  <div class="further-reading-footer">
			CARE Principles developed by the Global Indigenous Data Alliance's CARE Principles, extended here to reflect applicability also to all communities, groups and individuals.
		  </div>

		</div>
	</div>
</div>
  `
},

/* ================================
===============FLIP CARDS 8d Gender and human rights===============*/

{
  id: "genderflip1",
  footer: "full",
  toolnav:false,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->
  <div class="slide-frame top">

  <div class="medium2-slide-heading">
  Gender Considerations and Human Rights
  </div>

  <div class="medium4-slide-heading">
  Tools such as gender analysis frameworks and human rights-based approaches help address inequalities, promote inclusion, and ensure policies and projects respect, protect and advance human rights for all.
  </div>

      <section class="flipcard-row">

        <div class="flipcard2">
          <div class="card-inner" id="card-gender">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/gender_guidelines.png" alt="gender">
      </div>
      <h1>Guidelines and frameworks for understanding how to apply gender considerations in spatial analysis and planning</h1>
              <button onclick="flip('card-gender')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc">1. <a href="https://unhabitat.org/gender-mainstreaming-in-spatial-planning" target="_blank">UN-Habitat Guidelines for Gender Mainstreaming in Spatial Planning.</a> Recommendations and best practice guidance on integrating gender equality into urban planning<br>
2. <a href="https://www.efdinitiative.org/publications/poverty-and-gender-considerations-marine-spatial-planning-conceptual-framework" target="_blank">Marine Spatial Planning (MSP) Gender and Poverty Framework</a>. Guidance on integrating gender equality and poverty reduction into the marine spatial planning process.<br> 3. <a href="https://data.unwomen.org/sites/default/files/documents/Publications/CEGS/Geoespatial%20Framework.pdf" target="_blank">Theoretical-Methodological framework for Geospatial analysis and gender statistic</a>. An approach for integrating gender statistics into geospatial analysis. </div>
        </li>
              </ul>
              <button onclick="flip('card-gender')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-servir">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/gender_geospatial_v2_ai.png" alt="servir">
      </div>
      <h1>Gender analysis tools that guides service design and programming to ensure both women and men benefit equally from geospatial services.</h1>
              <button onclick="flip('card-servir')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc"><a href="https://genderandenvironment.org/gender-analysis-tool/" target="_blank">SERVIR Gender Analysis Tool.</a> Identifies gender-specific vulnerabilities to climate change and maps access to resources like water and land. It integrates with GIS for spatial analysis and visualises data to highlight disparities, supporting gender-sensitive climate adaptation and policy-making. Ideal for practitioners focused on gender equity and environmental resilience.</div>
        </li>
              </ul>
              <button onclick="flip('card-servir')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-g3">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/human_rights_approach.png" alt="DIHR Human Rights Tools">
      </div>
      <h1>Human Rights-based approaches including tool for searching treaties and court decisions relevant to the environment, including spatial planning</h1>
              <button onclick="flip('card-g3')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc">1. <a href="https://environment.humanrights.dk/" target="_blank"><strong>Human Rights and Environment Explorer</strong></a> Danish Institute for Human Rights (DIHR) tool for searching treaties and court decisions relevant to the environment, including spatial planning.</div>
        </li>
        <li class="tool-item">
        <div class="tool-desc">2. <a href="https://www.humanrights.dk/tools/human-rights-land-navigator" target="_blank"><strong>Human Rights and Land Navigator</strong></a> DIHR tool that helps identify which human rights standards are relevant to land-related decisions, including land use and tenure.</div>
        </li>
              </ul>
              <button onclick="flip('card-g3')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard2">
          <div class="card-inner" id="card-g4">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/ethics_data.png" alt="g4">
      </div>
      <h1>Ethical considerations in data collection, analysis, and decision-making</h1>
              <button onclick="flip('card-g4')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc"><a href="https://www.researchgate.net/publication/327546201_Ethical_Considerations_When_Using_Geospatial_Technologies_for_Evidence_Generation" target="_blank">Ethical Considerations When Using Geospatial Technologies for Evidence Generation.</a>
Includes a checklist for ethical use of geospatial technologies for evidence generation</div>
        </li>
              </ul>
              <button onclick="flip('card-g4')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div>
  `
},

/* ================================
===============FLIP CARDS 8e Human Rights & Land Resources===============*/

{
  id: "hrlandresources1",
  footer: "full",
  toolnav:false,
  html: `

<div class="slide tools-section">
  <!-- tools content & buttons -->
  <div class="slide-frame top">

  <div class="medium2-slide-heading">
  Further reading
  </div>

      <div class="further-reading-footer">
        <a href="https://datascience.codata.org/articles/10.5334/dsj-2026-003" target="_blank">Implementing the FAIR and CARE Principles Simultaneously: Emerging Insights from IPBES</a>
		<br><br>
        <a href="https://www.openglobalrights.org/geospatial-technology-can-improve-human-rights-documentation/" target="_blank">Open Global Rights: How geospatial technology can improve human rights documentation</a>
		<br><br>
		<a href="https://iucn.org/sites/default/files/2023-09/30x30-target-framework.pdf" target="_blank">WWF and IUCN guidance on inclusive, equitable and effective implementation of Target 3 (30x30), covering rights-based approaches to expanding protected and conserved areas.</a>
		<br><br>
		<a href="https://accountability-framework.org/about/about-the-afi/" target="_blank">A shared roadmap for ethical supply chains, including guidance for assessing and addressing human rights impacts of land use change</a>
		<br><br>
		<a href="https://iccs.org.uk/conservation-equity-and-rights/conservation-and-human-rights-an-introduction/" target="_blank">Guidance from Oxford University's Interdisciplinary Centre for Conservation Science (ICCS) and Forest Peoples Programme (FPP) on applying a Human Rights-Based Approach (HRBA) in conservation, including in spatial planning</a>
      </div>

    </div>
</div>
  `
},

/* ========= SLIDE 9 – Maintaining Good Spatial Analysis Practice ========= */
{
id:"bestpractice2",
footer:"full",

html:`

<div class="slide-frame top">

<div class="medium2-slide-heading closing-heading">
A Few Last Tips
</div>

<!-- Compass visual, echoing the Tool Typology navigation section -->
<div class="closing-visual closing-visual-top">
  <img src="assets/images/compass.png" alt="Tool typology compass">
  <p class="closing-tagline">You've navigated the full tool typology. Keep these practices in mind as you explore tools to support your work.</p>
</div>

<div class="practice-flow">
<div class="practice-step">
    <div class="practice-text">
        <h2>Don't be afraid to explore, or ask for help</h2>
    </div>
</div>
<div class="practice-step">
    <div class="practice-text">
        <h2>Test your workflow</h2>
        <p>
        Trial your workflow using a small area before applying it at full scale.
        </p>
    </div>
</div>
<div class="practice-step">
    <div class="practice-text">
        <h2>Validate your outputs</h2>
        <p>
        Compare results with independent datasets, expert knowledge or field observations wherever possible.
        </p>
    </div>
</div>
<div class="practice-step">
    <div class="practice-text">
        <h2>Iteratively refine</h2>
        <p>
        Update your workflow as new datasets, methods and stakeholder feedback become available.
        </p>
    </div>
</div>
<div class="practice-step">
    <div class="practice-text">
        <h2>Document decisions</h2>
        <p>
        Record assumptions, data sources and analytical choices to ensure transparency and reproducibility.
        </p>
		  <br>
    </div>
</div>
</div>
<div class="practice-footer2">
<h4>We hope you have found this useful. With so many tools available, this typology provides a practical way to identify those most relevant to your work, guided by good practice in data governance, gender and human rights, and responsible spatial analysis. Remember to allow time to test, validate, refine, and document your analyses and take this typology of tools resource with you as you continue exploring.</h4>

</div>

</div>

`
},

/* ========= SLIDE 9 ========= */
{
  id:"disclaimer",
  footer:"full",
  html:`
    <div class="slide">
      <h1>Disclaimer</h1>
<p>
2.1. The contents of this website do not necessarily reflect the views or policies of UNEP, its contributory organizations or editors or Member States.
</p>
<p>
2.2. The designations employed and the presentations of material on this Site do not imply the expression of any opinion whatsoever on the part of UNEP or contributory organizations, editors or publishers concerning the legal status of any country, territory, city area or its authorities, or concerning the delimitation of its frontiers or boundaries or the designation of its name, frontiers or boundaries.
</p>
<p>
3. The mention of a commercial entity or product on this Site does not imply any endorsement by UNEP.
</p>
<p>
4. Materials provided on this Site are provided "as is" and UNEP specifically does not make any warranties or representations as to the accuracy or completeness of any such Materials.
</p>
<p>
5. Under no circumstances shall UNEP be liable for any loss, damage, liability or expense incurred or suffered that is claimed to have resulted from the use of this Site, including, without limitation, any fault, error, omission, interruption or delay with respect thereto.
</p>
<p>
6. The use of this Site is at the User's sole risk. Under no circumstances, including, but not limited to negligence, shall UNEP or its affiliates be liable for any direct, indirect, incidental, special or consequential damages, even if the UNEP has been advised of the possibility of such damages.
</p>
<p>
7. As a condition of use of this Site, the User agrees to indemnify UNEP and its affiliates from and against any and all actions, claims, losses, damages, liabilities and expenses (including reasonable attorneys' fees) arising out of the User's use of this Site, including, without limitation, any claims alleging facts that if true would constitute a breach by the User of these Terms and Conditions. If the User is dissatisfied with any Material on this Site or with any of its Terms and Conditions of Use, the User's sole and exclusive remedy is to discontinue using the Site.
</p>
<p>
8. This Site may contain links and references to third-party web sites. The linked sites are not under the control of UNEP and UNEP is not responsible for, nor does it endorse, any of their content.
</p>
<p>
Please see full terms and conditions of use here https://www.unep-wcmc.org/en/terms-conditions
      </p>
    </div>
  `
}

];

let current = 0;

// Holds the user's checklist/notes state so it survives navigating away
// from and back to the policy_checklist slide, and survives an accidental
// page refresh. Backed by sessionStorage, which clears automatically
// when the browser tab is closed - matching "persist until the user exits."
const POLICY_NOTES_KEY = "policyNotesState";

function loadPolicyNotes(){
  try {
    const saved = sessionStorage.getItem(POLICY_NOTES_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    // sessionStorage unavailable (e.g. opened via file://) - fall back to defaults
  }
  return { reviewed: false, inventoried: false, gaps: false, policyQuestion: "", notes: "" };
}

function savePolicyNotes(){
  try {
    sessionStorage.setItem(POLICY_NOTES_KEY, JSON.stringify(policyNotesState));
  } catch (e) {
    // sessionStorage unavailable - state will only persist in memory for this session
  }
}

let policyNotesState = loadPolicyNotes();

function flip(id) {
  document.getElementById(id).classList.toggle("flipped");
}

/* ============================================================
   PSBR Framework radial diagram + matrix table cross-highlighting.
   Hovering or clicking a quadrant (on the radial diagram or the
   matrix header) highlights every matrix row that touches that
   quadrant. Hovering or clicking a matrix row highlights that one
   row plus every quadrant it touches (some rows, like Change
   Monitoring & Modelling, touch three at once). Clicking pins the
   selection so it survives after the mouse moves away; clicking
   the same thing again unpins it.
============================================================ */
let psbrPinnedQuadrants = null;
let psbrPinnedRowId = null;

const PSBR_QUESTIONS = {
  pressure: 'Why are we losing biodiversity?',
  state: 'How is the state of biodiversity changing?',
  benefit: 'What are the implications of biodiversity losses?',
  response: 'What is done about biodiversity losses?'
};

function psbrUpdateCenterText(quadrants){
  const centerEl = document.getElementById('psbrCenterText');
  if(!centerEl) return;
  if(quadrants && quadrants.length === 1 && PSBR_QUESTIONS[quadrants[0]]){
    const q = quadrants[0];
    centerEl.innerHTML = `<div>${q.toUpperCase()}</div><div class="psbr-center-question">${PSBR_QUESTIONS[q]}</div>`;
  } else {
    centerEl.innerHTML = `<div>PSBR</div><div>Framework</div>`;
  }
}

function psbrApplyHighlight(quadrants, rowId){
  const svgPaths = document.querySelectorAll('.psbr-radial-svg path[data-el]');
  const radialLabels = document.querySelectorAll('.psbr-radial-label[data-el]');
  const matrixHeaders = document.querySelectorAll('.psbr-matrix th[data-el]');
  const matrixRows = document.querySelectorAll('.psbr-matrix tbody tr[data-row-el]');
  const allEls = [...svgPaths, ...radialLabels, ...matrixHeaders];

  psbrUpdateCenterText(quadrants);

  if(!quadrants || quadrants.length === 0){
    allEls.forEach(el => el.classList.remove('psbr-dim', 'psbr-active'));
    matrixRows.forEach(row => row.classList.remove('psbr-dim', 'psbr-active'));
    return;
  }

  allEls.forEach(el => {
    const key = el.getAttribute('data-el');
    if(quadrants.includes(key)){
      el.classList.add('psbr-active');
      el.classList.remove('psbr-dim');
    } else {
      el.classList.remove('psbr-active');
      el.classList.add('psbr-dim');
    }
  });

  matrixRows.forEach(row => {
    const thisRowId = row.getAttribute('data-row-id');
    const isActive = rowId
      ? (thisRowId === rowId)
      : (row.getAttribute('data-row-el') || '').split(' ').some(q => quadrants.includes(q));
    if(isActive){
      row.classList.add('psbr-active');
      row.classList.remove('psbr-dim');
    } else {
      row.classList.remove('psbr-active');
      row.classList.add('psbr-dim');
    }
  });
}

function psbrHoverQuadrant(q){
  if(q){
    psbrApplyHighlight([q], null);
  } else {
    psbrApplyHighlight(psbrPinnedQuadrants, psbrPinnedRowId);
  }
}

function psbrClickQuadrant(q){
  const alreadyPinned = psbrPinnedQuadrants && psbrPinnedQuadrants.length === 1 &&
                         psbrPinnedQuadrants[0] === q && !psbrPinnedRowId;
  if(alreadyPinned){
    psbrPinnedQuadrants = null;
    psbrPinnedRowId = null;
  } else {
    psbrPinnedQuadrants = [q];
    psbrPinnedRowId = null;
  }
  psbrApplyHighlight(psbrPinnedQuadrants, psbrPinnedRowId);
}

function psbrHoverRow(quadrantsStr, rowId){
  psbrApplyHighlight(quadrantsStr.split(' '), rowId);
}

function psbrClickRow(quadrantsStr, rowId){
  if(psbrPinnedRowId === rowId){
    psbrPinnedQuadrants = null;
    psbrPinnedRowId = null;
  } else {
    psbrPinnedQuadrants = quadrantsStr.split(' ');
    psbrPinnedRowId = rowId;
  }
  psbrApplyHighlight(psbrPinnedQuadrants, psbrPinnedRowId);
}

function psbrLeave(){
  psbrApplyHighlight(psbrPinnedQuadrants, psbrPinnedRowId);
}

function downloadPolicyNotes(){
  const items = [
    { id: "chk-reviewed", label: "Reviewed existing analyses" },
    { id: "chk-inventoried", label: "Inventoried spatial data" },
    { id: "chk-gaps", label: "Identified gaps" }
  ];

  let checklistText = items.map(item => {
    const checked = document.getElementById(item.id)?.checked;
    return `[${checked ? "x" : " "}] ${item.label}`;
  }).join("\n");

  const questionEl = document.getElementById("policyQuestionText");
  const questionText = questionEl ? questionEl.innerText.trim() : "";

  const notesEl = document.getElementById("policyNotesText");
  const notesText = notesEl ? notesEl.innerText.trim() : "";

  const content =
`Analysis 101: A typology of tools
Policy context checklist and notes
Downloaded: ${new Date().toLocaleString()}

Checklist:
${checklistText}

Policy Question:
${questionText || "(no policy question entered)"}

Notes:
${notesText || "(no notes entered)"}
`;

  downloadTextFile("policy-context-notes.txt", content);
}

const BLANK_EXAMPLE_FIELDS = [
  "blankTitle", "blankQuestion",
  "blankStep1Heading", "blankStep1Title", "blankStep1Text",
  "blankStep2Heading", "blankStep2Title", "blankStep2Text",
  "blankStep3Heading", "blankStep3Title", "blankStep3Text",
  "blankFooter"
];

const BLANK_EXAMPLE_KEY = "blankExampleState";

function saveBlankExample(){
  const state = {};
  BLANK_EXAMPLE_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    state[id] = el ? el.innerText : "";
  });
  try {
    sessionStorage.setItem(BLANK_EXAMPLE_KEY, JSON.stringify(state));
  } catch (e) {
    // sessionStorage unavailable - field content will only persist in the DOM for this render
  }
}

function restoreBlankExample(){
  let state = {};
  try {
    const saved = sessionStorage.getItem(BLANK_EXAMPLE_KEY);
    if (saved) state = JSON.parse(saved);
  } catch (e) {
    // sessionStorage unavailable - fields stay blank
  }
  BLANK_EXAMPLE_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = state[id] || "";
  });
}

function clearBlankExample(){
  BLANK_EXAMPLE_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = "";
  });
  try {
    sessionStorage.removeItem(BLANK_EXAMPLE_KEY);
  } catch (e) {
    // sessionStorage unavailable - nothing further to clear
  }
}

function downloadBlankExample(){
  const get = id => document.getElementById(id)?.innerText.trim() || "";

  const content =
`Analysis 101: A typology of tools
Your own worked example
Downloaded: ${new Date().toLocaleString()}

Title: ${get("blankTitle") || "(no title entered)"}

Policy Question:
${get("blankQuestion") || "(no question entered)"}

Step 1: ${get("blankStep1Heading") || "(no heading entered)"}
${get("blankStep1Title") || "(no typology category entered)"}
${get("blankStep1Text") || "(no explanation entered)"}

Step 2: ${get("blankStep2Heading") || "(no heading entered)"}
${get("blankStep2Title") || "(no typology category entered)"}
${get("blankStep2Text") || "(no explanation entered)"}

Step 3: ${get("blankStep3Heading") || "(no heading entered)"}
${get("blankStep3Title") || "(no typology category entered)"}
${get("blankStep3Text") || "(no explanation entered)"}

${get("blankFooter") || "(no PSBR summary entered)"}
`;

  downloadTextFile("my-policy-question-example.txt", content);
}

/* ============================================================
   Shared download helper.
   iOS Safari supports the <a download> trick, but gives no
   visible confirmation (no "Download complete" banner like
   desktop/Android) - it just quietly saves to Files, which
   looks like nothing happened. Where available, we use the
   native Share Sheet instead (Web Share API), which shows an
   explicit, unmistakable UI ("Save to Files", AirDrop, etc.).
   Either way, we show an on-screen confirmation afterwards so
   there's never ambiguity about whether it worked.
============================================================ */
function downloadTextFile(filename, content){
  if (navigator.share && navigator.canShare) {
    try {
      const file = new File([content], filename, { type: "text/plain" });
      if (navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: filename })
          .then(() => showDownloadToast("Saved — check where you chose to save it."))
          .catch(err => {
            if (err && err.name === "AbortError") return; // user cancelled the share sheet, respect that
            fallbackDownload(filename, content);
          });
        return;
      }
    } catch (e) {
      // fall through to standard download
    }
  }
  fallbackDownload(filename, content);
}

function fallbackDownload(filename, content){
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showDownloadToast("Downloaded — check your Downloads folder or Files app.");
}

function showDownloadToast(message){
  let toast = document.getElementById("download-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "download-toast";
    toast.className = "download-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showDownloadToast._timer);
  showDownloadToast._timer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 4000);
}

const slide = document.getElementById("slide");
const footer = document.getElementById("footer");

let disclaimerTimer = null;

function render(){
  slide.innerHTML = slides[current].html;
  slide.scrollTop = 0;
  renderFooter();
  if(slides[current].id === 'policy_checklist'){
    restorePolicyNotes();
  }
  if(slides[current].id === 'exampleBlank1'){
    restoreBlankExample();
  }

  // Auto-return to home after 5 minutes if left sitting on the
  // disclaimer slide (e.g. a kiosk/public display use case)
  if(disclaimerTimer){
    clearTimeout(disclaimerTimer);
    disclaimerTimer = null;
  }
  if(slides[current].id === 'disclaimer'){
    disclaimerTimer = setTimeout(() => {
      goHome();
    }, 5 * 60 * 1000);
  }
}

function restorePolicyNotes(){
  const reviewed = document.getElementById('chk-reviewed');
  const inventoried = document.getElementById('chk-inventoried');
  const gaps = document.getElementById('chk-gaps');
  const questionEl = document.getElementById('policyQuestionText');
  const notesEl = document.getElementById('policyNotesText');
  if(reviewed) reviewed.checked = policyNotesState.reviewed;
  if(inventoried) inventoried.checked = policyNotesState.inventoried;
  if(gaps) gaps.checked = policyNotesState.gaps;
  if(questionEl) questionEl.innerText = policyNotesState.policyQuestion || "";
  if(notesEl) notesEl.innerText = policyNotesState.notes;
}

function renderFooter(){
  footer.innerHTML = `
    <button class="start-btn" onclick="next()">Start Navigation</button>
    </button>
  `;

  // Intro slide (only start button)

  if(slides[current].footer === "start"){
    footer.innerHTML = `
        <button class="start-btn" onclick="next()">
            Start Guided Tour
        </button>
    `;
    return;
}

footer.innerHTML = `

 ${slides[current].toolnav ? `
  <div class="tool-nav">

     <button
      class="${slides[current].id === 'genericsoftware' ? 'active' : ''}"
      onclick="jump('genericsoftware')">
      Generic Software
    </button>

    <button
      class="${slides[current].id === 'toolsflip1' ? 'active' : ''}"
      onclick="jump('toolsflip1')">
      Biodiversity and Ecosystem Sensitivity
    </button>

    <button
      class="${slides[current].id === 'toolsflip2' ? 'active' : ''}"
      onclick="jump('toolsflip2')">
      Species and Habitat Trends
    </button>

    <button
      class="${slides[current].id === 'toolsflip3' ? 'active' : ''}"
      onclick="jump('toolsflip3')">
      Indicators and Metrics
    </button>

    <button
      class="${slides[current].id === 'toolsflip4' ? 'active' : ''}"
      onclick="jump('toolsflip4')">
      Change Monitoring and Modelling
    </button>

    <button
      class="${slides[current].id === 'toolsflip5' ? 'active' : ''}"
      onclick="jump('toolsflip5')">
      Ecosystem Services and Valuation
    </button>

    <button
      class="${slides[current].id === 'toolsflip6' ? 'active' : ''}"
      onclick="jump('toolsflip6')">
      Climate Adaptation and NbS
    </button>

    <button
      class="${slides[current].id === 'toolsflip7' ? 'active' : ''}"
      onclick="jump('toolsflip7')">
      Conservation Planning
    </button>

  </div>
` : ""}

  <div class="footer-main">

    <div class="footer-left" onclick="back()">&#10094;</div>

  <div class="footer-center">

  <button
    class="${slides[current].id === 'home' ? 'active-main' : ''}"
    onclick="goHome()">Home</button>

  <button
    class="${slides[current].id.startsWith('policy') ? 'active-main' : ''}"
    onclick="jump('policy1')">Policy</button>

  <button
    class="${slides[current].id.startsWith('psbr') ? 'active-main' : ''}"
    onclick="jump('psbr1')">PSBR</button>

  <button
    class="${slides[current].id.startsWith('tools') ? 'active-main' : ''}"
    onclick="jump('tools1')">Tools</button>

  <button
    class="${slides[current].id.startsWith('pathways') ? 'active-main' : ''}"
    onclick="jump('pathways1')">Pathways</button>

  <button
    class="${slides[current].id.startsWith('resources') ? 'active-main' : ''}"
    onclick="jump('resources1')">Resources</button>

  <button
    class="${slides[current].id === 'disclaimer' ? 'active-main' : ''}"
    onclick="jump('disclaimer')">Disclaimer</button>

</div>

    <div class="footer-right" onclick="next()">&#10095;</div>

  </div>
`;
}

function next(){ if(current < slides.length-1){ current++; } else { current = 0; } render(); }
function back(){ if(current > 0){ current--; render(); } }
function goHome(){ current = 0; render(); }
function jump(id){ current = slides.findIndex(s=>s.id===id); render(); }

render();
