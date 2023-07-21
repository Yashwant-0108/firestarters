import{_ as s,c as a,o as n,U as l}from"./chunks/framework.edeb7b8f.js";const A=JSON.parse('{"title":"Patient Card","description":"","frontmatter":{},"headers":[],"relativePath":"ui-components/patient/patient-card.md","filePath":"ui-components/patient/patient-card.md"}'),e={name:"ui-components/patient/patient-card.md"},p=l(`<h1 id="patient-card" tabindex="-1">Patient Card <a class="header-anchor" href="#patient-card" aria-label="Permalink to &quot;Patient Card&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Patient Card contains content and actions about a patient resource instance.</p><p>It displays and highlights the information that could be obtained from the FHIR Patient resource data according to the US core implementation guide.</p><p><strong>US Core Implementation Guide (Patient Resource)</strong><br><a href="https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html" target="_blank" rel="noreferrer">https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html</a></p><p>The component can show the items including:</p><ul><li>Avatar Image - Patient Image according to the gender</li><li>Header Content - Patient’s Name</li><li>Line 1 Content - Patient’s Birthdate (Patient’s Age) Patient’s Gender</li><li>Line 2 Content - Patient’s Contact</li><li>Optional Toolbar - Nothing is shown by default</li><li>Optional Icon Button - Nothing is shown by default</li><li>Custom HTML Content Title - Nothing is shown by default</li><li>Custom HTML Content - Patient’s Identifier, Patient’s Language and Patient’s Address</li></ul><p>!!!note</p><pre><code>The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)
</code></pre><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h2><h3 id="basic-patient-card" tabindex="-1">Basic Patient Card <a class="header-anchor" href="#basic-patient-card" aria-label="Permalink to &quot;Basic Patient Card&quot;">​</a></h3><p>A simple example for the patient card with no extra configuration.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">patient-card</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/patient-card&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#998418;">patient-card</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/patient-card&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>![Image]</p><h3 id="patient-card-fields-props" tabindex="-1">Patient Card (Fields Props) <a class="header-anchor" href="#patient-card-fields-props" aria-label="Permalink to &quot;Patient Card (Fields Props)&quot;">​</a></h3><p>The example of passing in the “fields” props to the patient card. It overrides the ways it displays the gender field and makes the “age” field to be invisible.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">export default </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    return </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#80A665;">fields</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">gender</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">// overrides the way to display “gender” field</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">value</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">(</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#666666;">?.</span><span style="color:#BD976A;">gender</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">+</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">)</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#80A665;">age</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">          </span><span style="color:#758575DD;">// hide the “age” field</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">display</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">     </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">patient-card</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:fields=&quot;fields&quot;/&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">export default </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    return </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#59873A;">fields</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">gender</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// overrides the way to display “gender” field</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">value</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">(</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#999999;">?.</span><span style="color:#B07D48;">gender</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">+</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">)</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;">    </span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#59873A;">age</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">          </span><span style="color:#A0ADA0;">// hide the “age” field</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">display</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">     </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">patient-card</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:fields=&quot;fields&quot;/&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>![Image]</p><h3 id="patient-card-card-component" tabindex="-1">Patient Card (Card Component) <a class="header-anchor" href="#patient-card-card-component" aria-label="Permalink to &quot;Patient Card (Card Component)&quot;">​</a></h3><p>For the other usage of Patient Card that is applicable to all the card components, may refer to [Card Archetype].</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li>[Patient Card API]</li></ul>`,22),t=[p];function o(r,c,i,y,d,h){return n(),a("div",null,t)}const D=s(e,[["render",o]]);export{A as __pageData,D as default};