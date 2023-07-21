import{_ as s,c as n,o as a,U as l}from"./chunks/framework.edeb7b8f.js";const A=JSON.parse('{"title":"Condition Card","description":"","frontmatter":{},"headers":[],"relativePath":"ui-components/condition/condition-card.md","filePath":"ui-components/condition/condition-card.md"}'),o={name:"ui-components/condition/condition-card.md"},p=l(`<h1 id="condition-card" tabindex="-1">Condition Card <a class="header-anchor" href="#condition-card" aria-label="Permalink to &quot;Condition Card&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Condition Card contains content about a condition resource instance.</p><p>It displays and highlights the information that could be obtained from the FHIR Condition resource data.</p><p><strong>Condition Resource</strong><br><a href="https://hl7.org/fhir/R4/condition.html" target="_blank" rel="noreferrer">https://hl7.org/fhir/R4/condition.html</a></p><p>The component can show the items including:</p><ul><li>Avatar Image – Image or visual that illustrates the allergy or intolerance</li><li>Header Content – Name of the condition</li><li>Line 1 Content – Abatement information e.g., Date and time of abatement</li><li>Line 2 Content – Clinic status, verification status and onset information e.g., Date and time of onset</li><li>Optional Toolbar – Nothing is shown by default</li><li>Optional Icon Button – Nothing is shown by default</li><li>Custom HTML Content Title – Nothing is shown by default</li><li>Custom HTML Content – Subject and category of the condition</li></ul><p>!!!note</p><pre><code>The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)
</code></pre><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h2><h3 id="basic-condition-card" tabindex="-1">Basic Condition Card <a class="header-anchor" href="#basic-condition-card" aria-label="Permalink to &quot;Basic Condition Card&quot;">​</a></h3><p>A simple example for the condition card with no extra configuration.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">condition-card</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">/&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#998418;">condition-card</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#999999;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>![Image]</p><h3 id="condition-card-fields-props" tabindex="-1">Condition Card (Fields Props) <a class="header-anchor" href="#condition-card-fields-props" aria-label="Permalink to &quot;Condition Card (Fields Props)&quot;">​</a></h3><p>The example of passing in the “fields” props to the condition card. It overrides the ways it displays the “clinicalStatus” field and makes the “verificationStatus” field to be invisible.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#666666;">&lt;</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">data</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// assign the FHIR JSON data to the variable fhirJson</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#B8A965;">fields</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">verificationStatus</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#B8A965;">display</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">false</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#B8A965;">clinicalStatus</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">          </span><span style="color:#80A665;">value</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#80A665;">String</span><span style="color:#666666;">(</span><span style="color:#BD976A;">data</span><span style="color:#666666;">?.</span><span style="color:#BD976A;">clinicalStatus</span><span style="color:#666666;">?.</span><span style="color:#BD976A;">coding</span><span style="color:#666666;">?.[</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">]?.</span><span style="color:#BD976A;">code</span><span style="color:#666666;">).</span><span style="color:#80A665;">toUpperCase</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#666666;">};</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">condition-card</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">:fields=&quot;fields&quot;/&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#999999;">&lt;</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">data</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// assign the FHIR JSON data to the variable fhirJson</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#998418;">fields</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">verificationStatus</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#998418;">display</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">false</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#998418;">clinicalStatus</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">          </span><span style="color:#59873A;">value</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#59873A;">String</span><span style="color:#999999;">(</span><span style="color:#B07D48;">data</span><span style="color:#999999;">?.</span><span style="color:#B07D48;">clinicalStatus</span><span style="color:#999999;">?.</span><span style="color:#B07D48;">coding</span><span style="color:#999999;">?.[</span><span style="color:#2F798A;">0</span><span style="color:#999999;">]?.</span><span style="color:#B07D48;">code</span><span style="color:#999999;">).</span><span style="color:#59873A;">toUpperCase</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#999999;">};</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#998418;">condition-card</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:data=&quot;fhirJson&quot;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">:fields=&quot;fields&quot;/&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>![Image]</p><h3 id="condition-card-card-component" tabindex="-1">Condition Card (Card Component) <a class="header-anchor" href="#condition-card-card-component" aria-label="Permalink to &quot;Condition Card (Card Component)&quot;">​</a></h3><p>For the other usage of Condition Card that is applicable to all the card components, may refer to [Card Archetype].</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><ul><li>[Condition Card API]</li></ul>`,22),e=[p];function t(c,r,i,y,d,h){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{A as __pageData,m as default};