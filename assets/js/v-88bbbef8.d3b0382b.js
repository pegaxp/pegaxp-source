"use strict";(self.webpackChunkpegaxp=self.webpackChunkpegaxp||[]).push([[461],{1735:(t,e,a)=>{a.r(e),a.d(e,{data:()=>d});const d={key:"v-88bbbef8",path:"/reference/data-page.html",title:"Data Page",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"D_Range[stop: Integer]",slug:"d-range-stop-integer",children:[{level:3,title:"Example",slug:"example",children:[]},{level:3,title:"Source",slug:"source",children:[]}]}],filePathRelative:"reference/data-page.md",git:{updatedTime:1636921434e3,contributors:[{name:"Ian Lucas",email:"ianlucas_ferreira@hotmail.com",commits:1}]}}},3939:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const d=(0,a(6252).uE)('<h1 id="data-page" tabindex="-1"><a class="header-anchor" href="#data-page" aria-hidden="true">#</a> Data Page</h1><h2 id="d-range-stop-integer" tabindex="-1"><a class="header-anchor" href="#d-range-stop-integer" aria-hidden="true">#</a> <code>D_Range[stop: Integer]</code></h2><p>O Data Page <code>D_Range</code> é útil para criar listas de iteração sequenciais, o parâmetro <code>stop</code> representa o número de Pages que serão inseridas na Page List <code>.pxResults</code> do Data Page. Cada Page possuirá uma propriedade <code>.pyLineNumber</code> correspondente ao índice atual de cada Page.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><table><thead><tr><th></th><th>Action</th><th>Target</th><th>Relation</th><th>Source</th></tr></thead><tbody><tr><td>1</td><td>For Each Page In</td><td>D_Range[stop: 3].pxResults</td><td></td><td><input type="checkbox" disabled checked> Also use each page as source context</td></tr><tr><td>1.1</td><td>Set</td><td>Param.message</td><td>equal to</td><td>&quot;Index: &quot; + .pyLineNumber</td></tr></tbody></table><h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h3><p>Crie as regras abaixo para utilizar o Data Page <code>D_Range</code>.</p><h4 id="data-transform-create-range" tabindex="-1"><a class="header-anchor" href="#data-transform-create-range" aria-hidden="true">#</a> Data Transform: Create Range</h4><p><strong>CL:</strong> Code-Pega-List · <strong>ID:</strong> CreateRange</p><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th>Name</th><th>Data type</th><th>Required</th><th>In/Out</th></tr></thead><tbody><tr><td>stop</td><td>Integer</td><td>Yes</td><td>In</td></tr><tr><td>current</td><td>Integer</td><td>No</td><td>In</td></tr></tbody></table><h5 id="definition" tabindex="-1"><a class="header-anchor" href="#definition" aria-hidden="true">#</a> Definition</h5><table><thead><tr><th></th><th>Action</th><th>Target</th><th>Relation</th><th>Source</th></tr></thead><tbody><tr><td>1</td><td>When</td><td>Param.stop &lt; 1</td><td></td><td></td></tr><tr><td>1.1</td><td>Exit Data Transform</td><td></td><td></td><td></td></tr><tr><td>2</td><td>Append and Map to</td><td>Primary.pxResults</td><td>a new page</td><td></td></tr><tr><td>2.1</td><td>Set</td><td>.pyLineNumber</td><td>equal to</td><td>Param.current</td></tr><tr><td>3</td><td>Set</td><td>Param.current</td><td>equal to</td><td>Param.current + 1</td></tr><tr><td>4</td><td>When</td><td>Param.current &lt;= Param.stop</td><td></td><td></td></tr><tr><td>4.1</td><td>Apply Data Transform</td><td>CreateRange</td><td><input type="checkbox" disabled checked> Pass Current Parameter Page</td><td></td></tr></tbody></table><h4 id="data-page-d-range" tabindex="-1"><a class="header-anchor" href="#data-page-d-range" aria-hidden="true">#</a> Data Page: D_Range</h4><p><strong>ID:</strong> D_Range</p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th>Name</th><th>Data type</th><th>Required</th><th>In/Out</th></tr></thead><tbody><tr><td>stop</td><td>Integer</td><td>Yes</td><td>In</td></tr></tbody></table><h5 id="definition-1" tabindex="-1"><a class="header-anchor" href="#definition-1" aria-hidden="true">#</a> Definition</h5><table><thead><tr><th>Definition</th><th>Value</th></tr></thead><tbody><tr><td>Structure</td><td>List</td></tr><tr><td>Object type</td><td>@baseclass</td></tr><tr><td>Mode</td><td>Read-Only</td></tr><tr><td>Scope</td><td>Thread</td></tr></tbody></table><h5 id="load-management" tabindex="-1"><a class="header-anchor" href="#load-management" aria-hidden="true">#</a> Load management</h5><p><input type="checkbox" disabled checked> Reload once per interaction</p><h5 id="data-sources" tabindex="-1"><a class="header-anchor" href="#data-sources" aria-hidden="true">#</a> Data Sources</h5><table><thead><tr><th>No.</th><th>Source</th><th>Rule name</th></tr></thead><tbody><tr><td>1</td><td>Data Transform</td><td>CreateRange</td></tr></tbody></table>',23),r={},n=(0,a(3744).Z)(r,[["render",function(t,e){return d}]])},3744:(t,e)=>{e.Z=(t,e)=>{for(const[a,d]of e)t[a]=d;return t}}}]);