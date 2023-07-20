import{_ as s,c as a,o as n,U as l}from"./chunks/framework.16419c52.js";const b=JSON.parse('{"title":"Medication Request Table","description":"","frontmatter":{},"headers":[],"relativePath":"ui-components/medication-request/medication-request-table.md","filePath":"ui-components/medication-request/medication-request-table.md"}'),e={name:"ui-components/medication-request/medication-request-table.md"},p=l(`<h1 id="medication-request-table" tabindex="-1">Medication Request Table <a class="header-anchor" href="#medication-request-table" aria-label="Permalink to &quot;Medication Request Table&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Medication Request Table contains content about a list of medication request resource instances.</p><p>It displays and highlights the information that could be obtained from the FHIR Medication Request resource data according to the US core implementation guide.</p><p><strong>US Core Implementation Guide (Medication Request Resource)</strong><br><a href="https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html" target="_blank" rel="noreferrer">https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html</a></p><p>The component can show the items including:</p><ul><li>Row and Columns – Medication Reference, Medication Codeable Concept, Status, Authored On, Dosage Instruction</li><li>Columns Header</li><li>Table Title</li><li>Search Field</li><li>Pagination</li><li>Sorted Rows</li></ul><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h2><h3 id="basic-medication-request-table" tabindex="-1">Basic Medication Request Table <a class="header-anchor" href="#basic-medication-request-table" aria-label="Permalink to &quot;Basic Medication Request Table&quot;">​</a></h3><p>A simple example for the patient table with no extra configuration.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">medication-request-table</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#998418;">medication-request-table</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>![Image]</p><h3 id="medication-request-table-fields-props" tabindex="-1">Medication Request Table (Fields Props) <a class="header-anchor" href="#medication-request-table-fields-props" aria-label="Permalink to &quot;Medication Request Table (Fields Props)&quot;">​</a></h3><p>There are few configurations that could be done on the specific fields by passing in the “fields” props.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">export default </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">   return </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">     </span><span style="color:#80A665;">fields</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">       </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#B8A965;">title</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">Year</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">         </span><span style="color:#758575DD;">// Define how the value is rendered</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#80A665;">value</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#666666;">.</span><span style="color:#BD976A;">authoredOn</span><span style="color:#666666;">.</span><span style="color:#80A665;">slice</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">,</span><span style="color:#4C9A91;">4</span><span style="color:#666666;">),</span></span>
<span class="line"><span style="color:#666666;">         </span><span style="color:#758575DD;">// Disable the sorting function for this field</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#B8A965;">sortable</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">       </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">       </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#B8A965;">title</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">Status</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#80A665;">value</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">data</span><span style="color:#666666;">.</span><span style="color:#BD976A;">status</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">         </span><span style="color:#758575DD;">// Exclude this field in the searching operation</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#B8A965;">searchable</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">       </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">       </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#B8A965;">title</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">Medication</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">         </span><span style="color:#758575DD;">// Render the field based on config file</span></span>
<span class="line"><span style="color:#DBD7CAEE;">         </span><span style="color:#B8A965;">field</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">medicationCodeableConcept</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">       </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">medication-request-table</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:fields=&quot;fields&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">export default </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">   return </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">     </span><span style="color:#59873A;">fields</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#998418;">title</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">Year</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">         </span><span style="color:#A0ADA0;">// Define how the value is rendered</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#59873A;">value</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#999999;">.</span><span style="color:#B07D48;">authoredOn</span><span style="color:#999999;">.</span><span style="color:#59873A;">slice</span><span style="color:#999999;">(</span><span style="color:#2F798A;">0</span><span style="color:#999999;">,</span><span style="color:#2F798A;">4</span><span style="color:#999999;">),</span></span>
<span class="line"><span style="color:#999999;">         </span><span style="color:#A0ADA0;">// Disable the sorting function for this field</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#998418;">sortable</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#998418;">title</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">Status</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#59873A;">value</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">data</span><span style="color:#999999;">.</span><span style="color:#B07D48;">status</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">         </span><span style="color:#A0ADA0;">// Exclude this field in the searching operation</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#998418;">searchable</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#998418;">title</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">Medication</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">         </span><span style="color:#A0ADA0;">// Render the field based on config file</span></span>
<span class="line"><span style="color:#393A34;">         </span><span style="color:#998418;">field</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">medicationCodeableConcept</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">       </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">medication-request-table</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:fields=&quot;fields&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>![Image]</p><h3 id="medication-request-table-table-component" tabindex="-1">Medication Request Table (Table Component) <a class="header-anchor" href="#medication-request-table-table-component" aria-label="Permalink to &quot;Medication Request Table (Table Component)&quot;">​</a></h3><p>For the other usage of Medication Request Table that is applicable to all the table components, may refer to [Table Archetype].</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li>[Medication Request Table API]</li></ul>`,20),o=[p];function t(c,r,i,y,d,u){return n(),a("div",null,o)}const D=s(e,[["render",t]]);export{b as __pageData,D as default};
