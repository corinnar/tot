const slides = [

/* ========= SLIDE 1 – INTRO (LOCKED) ========= */
{
  id:"home",
  footer:"start",
  html:`
    <div class="slide-home">

      <div class="home-title">
        <h1>Analysis 101: A typology of tools</h1>
        <h2>A Framework for Exploring Biodiversity Spatial Planning Tools</h2>
      </div>

      <div class="home-illustration">
        <img src="assets/images/home.png" alt="Analysis 101 illustration">
      </div>

      <div class="home-bottom-band">

        <div class="home-logos">
          <img src="assets/logos/norad.png" alt="Norad logo">
          <img src="assets/logos/unep-wcmc.png" alt="UNEP-WCMC logo">
          <img src="assets/logos/nea.png" alt="NEA logo">
        </div>

        <div class="home-credit">
          developed by UNEP-WCMC on behalf of Norad<br>
          (the Norwegian Agency for Development Cooperation)
        </div>

        <div class="home-note">
          Note: This is a prototype app; contents are illustrative and may contain
          errors or omissions.

    <div class="prototype-link">

    <a href="http://3.64.251.154/explorer/">
    ...or try the alternative NEA prototype →
    </a>

    </div>
        </div>

      </div>

    </div>
  `
},

/* ========= SLIDE 2 (overview)========= */
{
  id:"overview",
  footer:"full",
html:`
  <div class="slide">

    <div class="slide-heading">
      A Framework for Exploring Biodiversity Spatial Planning Tools
    </div>

    <div class="slide-two">

      <!-- LEFT COLUMN -->
      <div>

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
            <li>*Terms and definitions</li>
          </ul>
        </div>

      </div>

      <!-- RIGHT COLUMN -->
      <div class="intro-panel">
        <h2>Analysis 101<br>A typology of tools</h2>

        <img src="assets/images/home_small.png" alt="Illustration">

        <p>
          Use this app to explore where your ‘policy question(s)’ fit within
          the conservation landscape, or to guide you towards the types
          of tools and methods that can help address those questions.
        </p>
      </div>

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
     Understanding the policy contect of an analysis
    </div>

  <div class="slide slide-three">

    <div class="section-panel">

      <img src="assets/images/home.png" alt="Illustration">

  <div class="section-text">
     Introduction -> Define policy question(s)
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 3b (section 1 slides 3-6) ========= */
{
  id:"policy2",
  footer:"full",
html:`
      <div class="slide-heading">
      Introduction to the guide

      <p>
         There are a wealth of spatial planning tools and methods available to answer many of the questions
     related to  biodiversity conservation and environmental degradation. Knowing what tools are available
     and for what purpose can be confusing</p>
   <p>
     This app is primarily aimed at beginner and intermediate users who may not be familiar with what is
     available and who need guidance to gain a greater understanding of the types of analyses and tools that
     could potentially support their work.
      </p>

      <div class="home-logos--bottom">
          <img src="assets/logos/norad.png" alt="Norad logo">
          <img src="assets/logos/unep-wcmc.png" alt="UNEP-WCMC logo">
          <img src="assets/logos/nea.png" alt="NEA logo">
        </div>
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 3c (section 1 slides 3-6) ========= */
{
  id:"policy2",
  footer:"full",
html:`

    <div class="slide-heading">
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

    <div class="snav-box">
      <h3>Risk & Vulnerability</h3>
      <ul>
        <li>Which areas face greatest biodiversity risk?</li>
        <li>How vulnerable are ecosystems to climate change?</li>
      </ul>
    </div>

    <div class="snav-box">
      <h3>Conservation & Planning</h3>
      <ul>
        <li>Where should we prioritize conservation?</li>
        <li>How can we expand protected area networks?</li>
      </ul>
    </div>

    <div class="snav-box">
      <h3>Impact Assessment</h3>
      <ul>
        <li>What are our projects’ potential impacts on biodiversity?</li>
        <li>How do we assess cumulative impacts?</li>
      </ul>
    </div>

    <div class="snav-box">
      <h3>Resource Management</h3>
      <ul>
        <li>Which species need management attention?</li>
        <li>How do we balance competing land uses?</li>
      </ul>
    </div>

  </div>

</div>

`
},

/* ========= SLIDE 3d (section 1 slides 3-6) ========= */
{
  id:"policy2",
  footer:"full",
html:`

    <div class="slide-heading">
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
      <ul>
        <li class="tick">Reviewed existing analyses</li>
        <li class="tick">Inventoried spatial data</li>
    <li class="tick">Identified gaps</li>
      </ul>
    </div>

<div class="notes-box">
  <strong>Notes:</strong><br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
  .............................................................................................................................................................<br>
</div>

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

/* ========= SLIDE 4b (section 1 slides ) ========= */
/* ========= SLIDE – PSBR Framework Interactive ========= */
{
  id:"psbr_framework",
  footer:"full",
  html:`

  <div class="slide-frame top">

    <div class="slide-heading">
      PSBR Framework & Tool Typology
    </div>

    <div class="psbr-layout">

      <!-- LEFT COLUMN -->
      <div class="psbr-column">

        <div class="snav-box psbr-box pressure">
          <h3>Pressure</h3>
          <ul>
            <li>a. Biodiversity & Ecosystem Sensitivity</li>
            <li>b. Species & Habitat Trends</li>
            <li>d. Change Monitoring & Modelling</li>
          </ul>
        </div>

        <div class="snav-box psbr-box response">
          <h3>Response</h3>
          <ul>
            <li>c. Indicators & Metrics</li>
            <li>d. Change Monitoring & Modelling</li>
            <li>f. Nature-Based Solutions & Adaptation</li>
            <li>g. Conservation Planning</li>
          </ul>
        </div>

      </div>

      <!-- CENTER IMAGE -->
      <div class="psbr-center">

        <div class="psbr-question top">
          Why are we losing biodiversity?
        </div>

        <div class="psbr-question left">
          What is done about<br>
      biodiversity losses?
        </div>

        <div class="psbr-question right">
          How is the state of<br>
      biodiversity changing?
        </div>

        <div class="psbr-question bottom">
          What are the implications of<br>
      biodiversity losses?
        </div>

        <div class="psbr-question2 top">
          Less pressure helps<br>
      biodiversity to recover
        </div>

        <div class="psbr-question2 left">
          Responses<br>
      reduce<br>
      pressure
        </div>

        <div class="psbr-question2 right">
          Enhanced<br>
      biodiversity<br>
      delivers more<br>
      benefits
        </div>

        <div class="psbr-question2 bottom">
          Benefits generate support<br>
      for effective responses
        </div>

        <img src="assets/images/psbr2.png"
             alt="PSBR Framework"
             class="psbr-image">

      </div>

      <!-- RIGHT COLUMN -->
      <div class="psbr-column">

        <div class="snav-box psbr-box state">
          <h3>State</h3>
          <ul>
            <li>b. Species & Habitat Trends</li>
            <li>c. Indicators & Metrics</li>
            <li>d. Change Monitoring & Modelling</li>
            <li>e. Ecosystem Services & Valuation</li>
          </ul>
        </div>

        <div class="snav-box psbr-box benefit">
          <h3>Benefit</h3>
          <ul>
            <li>e. Ecosystem Services & Valuation</li>
            <li>f. Nature-Based Solutions & Adaptation</li>
            <li>g. Conservation Planning</li>
          </ul>
        </div>

      </div>

    </div>

  </div>

  `
},

/* ========= SLIDE 4c – Policy Themes ========= */
{
  id:"psbr3",
  footer:"full",
  html:`

  <div class="slide-frame top">

    <div class="slide-heading">
      Policy themes for classifying<br>
      tools into a typology
    </div>

    <div class="themes-wrapper">

      <div class="themes-box">

        <h2>Proposed typology for classifying ttols by policy themes</h2>

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
         <img src="assets/images/b_image1.png" alt="Biodiversity">
         <div class="img-credit">
          Image credit:<br> created by Wagiman<br>from Noun Project
        </div>
      </div>
              <h1>(e.g. Mapping location of sensitive species / ecosystems)</h1>
              <button onclick="flip('card-bio')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13354" target="_blank">MESA</a>
        <div class="tool-desc">Mapping Environmentally Sensitive Assets. A spatial tool to support environmental management</div>
        </li>
        <li class="tool-item">
        <a href="https://cran.r-project.org/web/packages/BiodiversityR/BiodiversityR.pdf" target="_blank">AVISTEP</a>
        <div class="tool-desc">The Avian Sensitivity Mapping Tool for Energy Planning</div>
        </li>
        <li class="tool-item">
        <a href="https://biodiversityinformatics.amnh.org/open_source/maxent" target="_blank">IBAT (Integrated Biodiversity Assessment Tool)</a>
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
        <img src="assets/images/b_image2.png" alt="Carbon Stocks">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>(e.g. Fishing, deforestation, roads, pollution, climate change)</h1>
              <button onclick="flip('card-pressures')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.policysupport.org/costingnature" target="_blank">WIO SYMPHONY TOOL</a>
        <div class="tool-desc">A tool for mapping  environmental pressures & impacts in the Western Indian Ocean</div>
        </li>
        <li class="tool-item">
        <a href="https://www.chloris.earth/" target="_blank">GLOBIO</a>
        <div class="tool-desc">A tool that models human impacts on biodiversity & ecosystems for policy support</div>
        </li>
        <li class="tool-item">
        <a href="https://www.fao.org/in-action/epic/ex-act-tool/suite-of-tools/ex-act/es/" target="_blank">GLOBAL FISHING WATCH</a>
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
        <img src="assets/images/b_image3.png" alt="Impacts to biodiversity">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>(e.g. Combining pressures & sensitivities to identify impact)</h1>
              <button onclick="flip('card-impacts')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.openforis.org/" target="_blank">GLOBIOM</a>
        <div class="tool-desc">Global Biosphere Management Model to assess competition for land use between agriculture, bioenergy, & forestry.</div>
        </li>
        <li class="tool-item">
        <a href="https://plugins.qgis.org/plugins/SemiAutomaticClassificationPlugin/" target="_blank">StrathE2E-App</a>
        <div class="tool-desc">Models ecosystem dynamics & human impacts for marine management & conservation.</div>
        </li>
        <li class="tool-item">
        <a href="https://oceanwealth.org/" target="_blank">OSMOSE</a>
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
        <img src="assets/images/b_image4.png" alt="Wildlife health">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>(e.g. mapping & monitoring of zoonotic diseases) </h1>
              <button onclick="flip('card-health')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://docs.trends.earth/en/latest/" target="_blank">ONE HEALTH TOOLS AND TOOLKITS </a>
        <div class="tool-desc">for geospatial analysis. </div>
        </li>
        <li class="tool-item">
        <a href="https://remap-app.org/" target="_blank">CO-HEALTH RELATIONSHIP BROWSER</a>
        <div class="tool-desc">Tool showing linkages between ecosystems, ecosystem services & human health.</div>
        </li>
        <li class="tool-item">
        <a href="https://sepal.io/" target="_blank">SMART</a>
        <div class="tool-desc">Spatial Monitoring & Reporting Tool created for wildlife health surveillance.</div>
        </li>
              </ul>
              <button onclick="flip('card-health')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div
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
         <img src="assets/images/nc_image1.png" alt="Species">
         <div class="img-credit">
          Image credit:<br> created by Wagiman<br>from Noun Project
        </div>
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
        <img src="assets/images/nc_image2.png" alt="Carbon Stocks">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/nc_image3.png" alt="Habitat / ecosystem extent">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/nc_image4.png" alt="Habitat condition">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
</div
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
         <img src="assets/images/i_image1.png" alt="Global & International Sustainability Frameworks">
         <div class="img-credit">
          Image credit:<br> created by Wagiman<br>from Noun Project
        </div>
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
        <img src="assets/images/i_image2.png" alt="Carbon Stocks">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/i_image3.png" alt="National Ecosystem Monitoring & Reporting">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>Monitoring & Reporting</h1>
              <button onclick="flip('card-nea')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.openforis.org/" target="_blank">NEA National Ecosystem Assessment</a>
        <div class="tool-desc">Curated resources specifically to support the to support the understanding & implementation of the national ecosystem assessment process.</div>
        </li>
        <li class="tool-item">
        <a href="https://plugins.qgis.org/plugins/SemiAutomaticClassificationPlugin/" target="_blank">Volundary guidelines on National Forest Monitoring System (NFMS)</a>
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
        <img src="assets/images/i_image4.png" alt="Science-based Environmental Indicators and metrics">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
</div
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
         <img src="assets/images/m_image1.png" alt="Environmental Impact / Monitoring">
         <div class="img-credit">
          Image credit:<br> Image credit: created by Wagiman from Noun Project
        </div>
      </div>
              <h1>e.g. data collection, analysis & reporting as part of an environmental impact assessment</h1>
              <button onclick="flip('card-mon')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13354" target="_blank">OPEN FORIS</a>
        <div class="tool-desc">Suite of open-source solutions for forest & land monitoring.</div>
        </li>
        <li class="tool-item">
        <a href="https://cran.r-project.org/web/packages/BiodiversityR/BiodiversityR.pdf" target="_blank">COLLECT EARTH</a>
        <div class="tool-desc">Open-source system for viewing & interpreting high-resolution satellite imagery.</div>
        </li>
        <li class="tool-item">
        <a href="https://biodiversityinformatics.amnh.org/open_source/maxent" target="_blank">TRENDS.EARTH</a>
        <div class="tool-desc">Tracking land change.</div>
        </li>
        <li class="tool-item">
        <a href="https://biodiversityinformatics.amnh.org/open_source/maxent" target="_blank">SMART:</a>
        <div class="tool-desc">Spatial Monitoring and Reporting Tool for forest & land monitoring.</div>
        </li>
        <li class="tool-item">
        <a href="https://biodiversityinformatics.amnh.org/open_source/maxent" target="_blank">Ecopath with Ecosim (EwE) </a>
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
        <img src="assets/images/m_image2.png" alt="Modeling change / impact of policies">
        <div class="img-credit">Image credit:<br> adapted from images by Suncheli Project, Alena Artemova, WEBTECHOPS LLP, Jihoon Choi, Eike von Pidoll and Mrfa Studio from Noun Project
        </div></div>
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
</div
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

      <div class="slide-heading">
        Which ecosystem services do you want to analyse?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-es">
            <div class="card-front">
              <h1></h1>

      <div class="card-image">
         <img src="assets/images/es_image1.png" alt="">
         <div class="img-credit">
          Image credit:<br> created by Wagiman<br>from Noun Project
        </div>
      </div>
              <h1>Mapping & modelling different types of ecosystem sercices, provisioning, regulating and cultural serrvices</h1>
              <button onclick="flip('card-es')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.aboutvalues.net/method_navigator/" target="_blank">Values Methods Database</a>
        <div class="tool-desc">Finding suitable methods for assessing ecosystem services. Users can filter at a number of levels e.g. by one of the 4 types of ecosystem service or individual ecosystem services.</div>
        </li>
        <br>
        <li class="tool-item">
        <a href="https://ecosystemsknowledge.net/resources/tool-assessor/" target="_blank">Ecosystem Knowledge Network</a>
        <div class="tool-desc"> A collection of ecosystem service and natural captical valuation tools with details on required input data and expected outputs.</div>
        </li>

              </ul>
              <button onclick="flip('card-es')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-carbon">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
        <img src="assets/images/es_image2.png" alt="Carbon Stocks">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>Mapping & modelling different types of ecosystem sercices, provisioning, regulating and cultural serrvices</h1>
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

        <div class="flipcard">
          <div class="card-inner" id="card-habitat">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
        <img src="assets/images/es_image3.png" alt="Habitat / ecosystem extent">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>Mapping & modelling different types of ecosystem sercices, provisioning, regulating and cultural serrvices</h1>
              <button onclick="flip('card-habitat')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://www.policysupport.org/costingnature" target="_blank">Co$ting Nature</a>
        <div class="tool-desc">Mapping supply & demand for 18 ecosystem services at local to national scales globally, including carbon.</div>
        </li>
        <li class="tool-item">
        <a href="https://www.policysupport.org/waterworld" target="_blank">WaterWorld</a>
        <div class="tool-desc">Policy support tool for hydrological modeling of baseline (current) & future scenarios for land use, land management & climate change.</div>
        </li>
              </ul>
              <button onclick="flip('card-habitat')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-condition">
            <div class="card-front">
              <h1></h1>
        <div class="card-image">
        <img src="assets/images/es_image4.png" alt="Habitat condition">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
              <h1>Mapping & modelling different types of ecosystem sercices, provisioning, regulating and cultural serrvices</h1>
              <button onclick="flip('card-condition')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://naturalcapitalalliance.stanford.edu/software/invest/invest-models" target="_blank">InVEST</a>
        <div class="tool-desc">Integrated Valuation of Ecosystem Services & Tradeoffs. Mapping of 19 ecosystem service to assess tradeoffs  & natural capital benefits associated with different management choices</div>
        </li>
        <li class="tool-item">
        <a href="https://naturalcapitalalliance.stanford.edu/software/invest/natcap-partnership-software-tools" target="_blank">NatCap Partnership Software & Tools</a>
        <div class="tool-desc">Curated Software & Tools for ecosystem services</div>
        </li>
              </ul>
              <button onclick="flip('card-condition')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div
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
        What Nature-based Solutions (NbS) are relevant?
      </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-nbs1">
            <div class="card-front">
              <h1></h1>

      <div class="card-image">
         <img src="assets/images/nbs_image1.png" alt="tc">
         <div class="img-credit">
          Image credit:<br> created by Wagiman<br>from Noun Project
        </div>
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
        <img src="assets/images/nbs_image2.png" alt="Carbon Stocks">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/nbs_image3.png" alt="Habitat / ecosystem extent">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/nbs_image4.png" alt="Habitat condition">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
</div
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
         <img src="assets/images/cp_image1.png" alt="Species">
         <div class="img-credit">
          Image credit:<br> created by Wagiman<br>from Noun Project
        </div>
      </div>
              <h1>Systematic Conservation Planning e.g.  identifying priority areas for protection based on quantitative targets)</h1>
              <button onclick="flip('card-cp1')">Flip</button>
            </div>
            <div class="card-back">
              <h3>Example tools</h3>
              <ul>
        <li class="tool-item">
        <a href="https://prioritizr.net/" target="_blank">1. prioritizr: </a>
        <div class="tool-desc">ystematic Conservation Prioritization in R to build & solve conservation planning problems.</div>
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
        <img src="assets/images/cp_image2.png" alt="Carbon Stocks">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/cp_image3.png" alt="Habitat / ecosystem extent">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
        <img src="assets/images/cp_image4.png" alt="Habitat condition">
        <div class="img-credit">Image credit:<br>UNEP-WCMC
        </div></div>
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
</div
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

      <img src="assets/images/section4.png" alt="Illustration">

  <div class="section-text">
     Question -> Tool pathways
    </div>

    </div>

  </div>
`
},

/* ========= SLIDE 6b (section 4 slides  - ) ========= */

{
  id:"pathways1",
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

<div class="step-icon green">1</div>

<h2>Policy Question</h2>

<p>
What decision needs to be made?<br>
What conservation problem are you trying to solve?
</p>

</div>

<div class="workflow-arrow">➜</div>

<div class="workflow-card">

<div class="step-icon yellow">2</div>

<h2>PSBR Framework</h2>

<p>
Which components of the Pressure–State–Benefit–Response framework are relevant?
</p>

</div>

<div class="workflow-arrow">➜</div>

<div class="workflow-card">

<div class="step-icon orange">3</div>

<h2>Tool Typology</h2>

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

          <div class="step-number">1</div>

          <div class="step-content">

              <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
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

          <div class="step-number">2</div>

          <div class="step-content">

              <div class="step-heading">
                  CONSIDER THE STATE AND DISTRIBUTION OF NATURAL CAPITAL
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

          <div class="step-number">3</div>

          <div class="step-content">

              <div class="step-heading">
                  EXPLORE
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

          <div class="step-number">1</div>

          <div class="step-content">

              <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>

              <div class="step-title">
                  (g) Conservation planning
              </div>

              <div class="step-text">
                  Identify priority areas for protection.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">2</div>

          <div class="step-content">

              <div class="step-heading">
                  ALSO EXPLORE
              </div>

              <div class="step-title">
                  (b) Species & Habitat Trends (e) Ecosystem services & valuation
              </div>

              <div class="step-text">
                  Understand state and distribution of natural capital and which ecosystem services these provide
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">3</div>

          <div class="step-content">

              <div class="step-heading">
                  CONSIDER WHAT METRICS AND INDICATORS ARE RELEVANT
              </div>

              <div class="step-title">
                  (c) Indicators and metrics
              </div>

              <div class="step-text">
                  Use to inform conservation planning analysis and track progress towards conservation goals.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>,<strong>Benefit</strong>  and <strong>Response</strong> areas of the
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

          <div class="step-number">1</div>

          <div class="step-content">

              <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>

              <div class="step-title">
                  (a) Biodiversity and ecosystem sensitivity
              </div>

              <div class="step-text">
                  Understand the location of sensitive species and impacts on biodiversity .
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">2</div>

          <div class="step-content">

              <div class="step-heading">
                  ALSO EXPLORE
              </div>

              <div class="step-title">
                  (b) Species & Habitat Trends (e) Ecosystem services & valuation
              </div>

              <div class="step-text">
                  Understand state and distribution of natural capital and impacts on ecosystem services.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">3</div>

          <div class="step-content">

              <div class="step-heading">
                  CONSIDER MODELLING OR MONITORING POTENTIAL IMPACTS
              </div>

              <div class="step-title">
                  (d) Change Monitoring and Modelling
              </div>

              <div class="step-text">
                  Look at data collection and analysis as part of an environmental impact assessment.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>,<strong>Benefit</strong>  and <strong>Response</strong> areas of the
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

          <div class="step-number">1</div>

          <div class="step-content">

              <div class="step-title">
                  (b) Species & Habitat Trends (e) Ecosystem services & valuation
              </div>

              <div class="step-text">
                  Understand state and distribution of natural capital and the ecosystem services they provide.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">2</div>

          <div class="step-content">

              <div class="step-heading">
                  ALSO EXPLORE
              </div>

              <div class="step-title">
                  (g) Conservation Planning
              </div>

              <div class="step-text">
                  To Identify priority areas for sustainable managementent of forests.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">3</div>

          <div class="step-content">

              <div class="step-heading">
                  CONSIDER BIODIVERSITY AND ECOSYSTEM SENSITIVITY
              </div>

              <div class="step-title">
                  (a) Biodiversity & Ecosystem Sensitivity
              </div>

              <div class="step-text">
                  To help understand pressures that may be a barrier to sustainable management .
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong>,<strong>Benefit</strong>  and <strong>Response</strong> areas of the
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

          <div class="step-number">1</div>

          <div class="step-content">

              <div class="step-heading">
                  START BY EXPLORING TOOLS FOR
              </div>

              <div class="step-title">
                  (b) Species & Habitat Trends
              </div>

              <div class="step-text">
                  Explore tools that help with understanding the distribution of species and natural capital.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">2</div>

          <div class="step-content">

              <div class="step-heading">
                  ALSO EXPLORE TOOLS FOR MODELLING OR MONITORING POTENTIAL IMPACTS
              </div>

              <div class="step-title">
                  (c) Indicators and metrics
              </div>

              <div class="step-text">
                  Use to help understand the drivers of change.
              </div>

          </div>

      </div>

      <div class="example-step">

          <div class="step-number">3</div>

          <div class="step-content">

              <div class="step-heading">
                  CONSIDER TOOLS FOR MONITORING CHANGE
              </div>

              <div class="step-title">
                  (d) Change Monitoring and Modelling
              </div>

              <div class="step-text">
                  Environmental Impact Assessment and Monitoring of habitat change and pressures.
              </div>

          </div>

      </div>

  </div>

  <div class="example-footer">
      → Find these tool types in the <strong>Pressure</strong>,
      <strong>State</strong and <strong>Response</strong> areas of the
      PSBR Framework.
  </div>

</div>

`
},
/* ========= SLIDE 7a (section 5 slides  - ) ========= */
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
     Best practice -> Definitions
    </div>

    </div>

  </div>
`
},

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
         <img src="assets/images/F.png" alt="FINDABLE">
      </div>
      <h2>FINDABLE</h2>
              <button onclick="flip('card-FINDABLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>FINDABLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data and metadata are easy to find for both humans and computers, with persistent identifiers (PIDs)</div>
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
         <img src="assets/images/A.png" alt="ACCESSIBLE">
      </div>
      <h2>ACCESSIBLE</h2>
              <button onclick="flip('card-ACCESSIBLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>ACCESSIBLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Protocols exist to retrieve data, defining how it can be accessed</div>
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
         <img src="assets/images/I.png" alt="INTEROPERABLE">
      </div>
      <h2>INTEROPERABLE</h2>
              <button onclick="flip('card-INTEROPERABLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>INTEROPERABLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data integrates with other data for analysis, using standard formats</div>
        </li>
              </ul>
              <button onclick="flip('card-INTEROPERABLE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">

        <div class="flipcard">
          <div class="card-inner" id="card-REUSABLE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/R.png" alt="REUSABLE">
      </div>
      <h2>REUSABLE</h2>
              <button onclick="flip('card-REUSABLE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>REUSABLE</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data is well documented to be replicated in different settings</div>
        </li>
              </ul>
              <button onclick="flip('card-REUSABLE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">

      </section>

    </div>
</div
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

  <div class="medium-slide-heading">
  For Indigenous Data Governance
  </div>

      <section class="flipcard-row">

        <div class="flipcard">
          <div class="card-inner" id="card-COLLECTIVE">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/C.png" alt="COLLECTIVE">
      </div>
      <h2>COLLECTIVE BENEFIT</h2>
              <button onclick="flip('card-COLLECTIVE')">Flip</button>
            </div>
            <div class="card-back">
              <h4>COLLECTIVE BENEFIT</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data ecosystems should enable indigenous peoples to derive value, innovation and benefit from the data.</div>
        </li>
              </ul>
              <button onclick="flip('card-COLLECTIVE')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-AUTHORITY">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/A.png" alt="AUTHORITY">
      </div>
      <h2>AUTHORITY TO CONTROL</h2>
              <button onclick="flip('card-AUTHORITY')">Flip</button>
            </div>
            <div class="card-back">
              <h4>AUTHORITY TO CONTROL</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Indigenous peoples' rights to data sovereignity must be respected, allowing them to control how their data is used.</div>
        </li>
              </ul>
              <button onclick="flip('card-AUTHORITY')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">
          <div class="card-inner" id="card-RESPONSIBILITY">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/R.png" alt="RESPONSIBILITY">
      </div>
      <h2>RESPONSIBILITY</h2>
              <button onclick="flip('card-RESPONSIBILITY')">Flip</button>
            </div>
            <div class="card-back">
              <h4>RESPONSIBILITY</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Researchers and institutions have a responsibility to reuse data to support indigenous self-determination and well-being.</div>
        </li>
              </ul>
              <button onclick="flip('card-RESPONSIBILITY')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">

        <div class="flipcard">
          <div class="card-inner" id="card-ETHICS">
            <div class="card-front">
      <div class="card-image">
         <img src="assets/images/E.png" alt="ETHICS">
      </div>
      <h2>ETHICS</h2>
              <button onclick="flip('card-ETHICS')">Flip</button>
            </div>
            <div class="card-back">
              <h4>ETHICS</h4>
              <ul>
        <li class="tool-item">
        <div class="res-desc">Data must align with indigenous worldviews, with rights and well-being considered at all stages of the data lifecycle. </div>
        </li>
              </ul>
              <button onclick="flip('card-ETHICS')">Flip back</button>
            </div>
          </div>
        </div>

        <div class="flipcard">

      </section>

    </div>
</div
  `
},

/* ================================
===============FLIP CARDS 8d Gender and human rights===============*/

{
  id: "careflip1",
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
         <img src="assets/images/gender.png" alt="gender">
      </div>
      <h1>Guidelines and frameworks for understanding how to apply gender considerations in spatial analysis and planning</h1>
              <button onclick="flip('card-gender')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc">1. The UN-Habitat Guidelines for Gender Mainstreaming in Spatial Planning provide recommentations and best practice guidance on integrating gender equality into urban planning<br><br>
2. The Marine Spatial Planning (MSP) Gender and Poverty Framework focuses on ensuring that gender equality and poverty reduction are integrated into the marine spatial planning process.</div>
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
         <img src="assets/images/servir.png" alt="servir">
      </div>
      <h1>Gender analysis tools that guides service design and programming to ensure both women and men benefit equally from geospatial services.</h1>
              <button onclick="flip('card-servir')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc">SERVIR’s Gender Analysis Tool identifies gender-specific vulnerabilities to climate change and maps access to resources like water and land. It integrates with GIS for spatial analysis and visualises data to highlight disparities, supporting gender-sensitive climate adaptation and policy-making. Ideal for practitioners focused on gender equity and environmental resilience.</div>
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
         <img src="assets/images/g3.png" alt="g3">
      </div>
      <h1>THEORETICAL-METHODOLOGICAL
FRAMEWORK FOR GEOSPATIAL
ANALYSIS AND GENDER STATISTICS
Approach for integrating gender statistics into geospatial analysis,and guide the design of policies and programs addressing gender issues.</h1>
              <button onclick="flip('card-g3')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc">A framework that combines theoretical concepts and methodological approaches to incorporate gender analysis in spatial data. It supports data-driven policy design by using gender statistics and geospatial tools to identify disparities and inform gender-responsive programming. </div>
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
         <img src="assets/images/g4.png" alt="g4">
      </div>
      <h1>Ethical considerations in data collection, analysis, and decision-making</h1>
              <button onclick="flip('card-g4')">Flip</button>
            </div>
            <div class="card-back">
              <h4>Key Features</h4>
              <ul>
        <li class="tool-item">
        <div class="tool-desc">Ethical Considerations
When Using Geospatial Technologies
for Evidence Generation.
Includes a checklist for ethical use of geospatial technologies for evidence generation</div>
        </li>
              </ul>
              <button onclick="flip('card-g4')">Flip back</button>
            </div>
          </div>
        </div>

      </section>

    </div>
</div
  `
},

/* ============== SLIDE 8a ================ */
{
id:"bestpractice1",
footer:"full",

html:`

<div class="slide-frame top">

<div class="medium2-slide-heading">
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

</ul>

<div class="bp-resource">
Further guidance:<br>

<a href="https://datascience.codata.org/articles/10.5334/dsj-2026-003"
target="_blank">
Implementing the FAIR and CARE Principles Simultaneously: Emerging Insights from IPBES
</a>

</div>

</div>

</div>

`
},

/*=================side 8b ======================*/
/* ========= SLIDE 9 – Maintaining Good Spatial Analysis Practice ========= */
{
id:"bestpractice2",
footer:"full",

html:`

<div class="slide-frame top">

<div class="medium2-slide-heading">
Maintaining Good Spatial Analysis Practice
</div>

<div class="practice-flow">

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
      </div>
  </div>

</div>

<div class="practice-footer">

Build time into projects to test, validate, refine and document your analyses.<br><br>
</div>
<div class="practice-footer2">
<h4>We hope you have found this interactive guide useful in building your understanding of the spatial tools and analyses available to support nature-related mapping and decision-making. This guide has provided an introductory overview and examples of some of the tools that can be used to address biodiversity conservation and environmental challenges. We encourage you to continue exploring additional tools, methods, and resources beyond those presented here.<h4>

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

function flip(id) {
  document.getElementById(id).classList.toggle("flipped");
}

const slide = document.getElementById("slide");
const footer = document.getElementById("footer");

function render(){
  slide.innerHTML = slides[current].html;
  renderFooter();
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

function next(){ if(current < slides.length-1){ current++; render(); } }
function back(){ if(current > 0){ current--; render(); } }
function goHome(){ current = 0; render(); }
function jump(id){ current = slides.findIndex(s=>s.id===id); render(); }

render();
