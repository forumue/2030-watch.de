webpackJsonp([1],{"+Eyh":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".sdg-vis[data-v-f6a90acc]{width:20px;height:30px;margin-right:10px}.sdg-vis .diff[data-v-f6a90acc]{stroke-width:2px}",""])},"/A4W":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".intro[data-v-3e66333a]{position:relative}.intro footer[data-v-3e66333a],.intro header[data-v-3e66333a],.intro section[data-v-3e66333a]{width:100%}.intro .container[data-v-3e66333a]{position:relative}.intro .container .slide[data-v-3e66333a]{position:absolute;opacity:0;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-delay:0s;transition-delay:0s;width:100%}.intro .container .slide.active[data-v-3e66333a]{opacity:1;-webkit-transition-delay:.2s;transition-delay:.2s}.intro .caption[data-v-3e66333a]{margin-bottom:8px;margin-bottom:.5rem}.intro .dns[data-v-3e66333a]{color:#f1b31c}.intro .okf[data-v-3e66333a]{color:#6599ff}.intro .indicators .legendProgress[data-v-3e66333a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.intro .indicators .sdg-comparison-wrapper[data-v-3e66333a]{display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:2em}.intro .indicators .sdg-comparison-wrapper .number-big[data-v-3e66333a]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;font-size:3em;font-weight:700}.intro .indicators .sdg-comparison-wrapper .number-big.arrow[data-v-3e66333a]{color:#8c8b85;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.intro .indicators .indicator-list[data-v-3e66333a]{padding:16px 0;padding:1rem 0;display:inline}.intro .indicators .indicator-list li[data-v-3e66333a]{display:inline-block}.intro footer[data-v-3e66333a]{text-align:right}.intro footer .progress[data-v-3e66333a]{text-align:center}.intro footer .progress .icon[data-v-3e66333a]{cursor:pointer;display:inline-block;border-radius:100%;width:13px;height:13px;margin-right:10px}.intro footer .progress .icon.past[data-v-3e66333a]{background-color:#8c8b85}.intro footer .progress .icon.future[data-v-3e66333a]{background-color:rgba(0,0,0,.1)}.intro footer .btn[data-v-3e66333a]{margin:0 16px;margin:0 1rem}.intro footer .btn[data-v-3e66333a]:last-of-type{margin-right:64px;margin-right:4rem}.intro .margin-legend[data-v-3e66333a]{margin:8px 0;margin:.5rem 0;height:60px}.intro .opener[data-v-3e66333a]{display:inline-block;width:100%}.intro .carousel-header[data-v-3e66333a]{color:#e65100;text-decoration:underline}.intro .carousel-prompt[data-v-3e66333a]{font-weight:700;font-size:22.4px;font-size:1.4rem;margin-top:32px;margin-top:2rem;text-transform:uppercase;color:#6599ff;text-align:center}",""])},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Uw9W"),a=i("rGQh"),n=!1;var r=function(t){n||i("4r9K")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-2a183b29",null);o.options.__file="pages/index.vue",e.default=o.exports},"17jH":function(t,e,i){"use strict";var s=i("kcmq");e.a={props:["diff"],computed:{rotation:function(){return this.diff<0?(new s.a).domain([-100,0]).range([0,90]).map(this.diff):this.diff>0?(new s.a).domain([0,100]).range([90,180]).map(this.diff):void 0}}}},"4n10":function(t,e,i){"use strict";var s=i("NKrC"),a=i("Uxg9"),n=!1;var r=function(t){n||i("r5xM")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-de852dac",null);o.options.__file="components/VisIndicator.vue",e.a=o.exports},"4r9K":function(t,e,i){var s=i("avh5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("2bfa1941",s,!1,{sourceMap:!1})},"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},"6KFu":function(t,e,i){var s=i("Io04");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("66b0694e",s,!1,{sourceMap:!1})},AKmP:function(t,e,i){"use strict";var s=i("Dd8w"),a=i.n(s),n=i("NYxO"),r=i("wIqx"),o=i("X4N7"),l=i("DsVn"),d=i("M4fF"),c=i.n(d);e.a={data:function(){return{sorting:"number",reverse:!1}},computed:a()({},Object(n.mapState)(["sdgs"]),{sdgListe:function(){var t=c.a.sortBy(this.sdgs,this.sorting);return this.reverse?c.a.reverse(t):t}}),components:{VisProgress:r.a,SortIcon:o.a,VisDirection:l.a},methods:{sort:function(t){this.sorting!==t?(this.sorting=t,this.reverse=!1):this.reverse=!this.reverse}}}},Cv67:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{ref:"vis",class:{"sdg-vis":!0,visible:t.iVisible}},[i("line",{staticClass:"range",attrs:{x1:t.scaleX.map(0)+"px",y1:t.height/2+"px",x2:t.scaleX.map(100)+"px",y2:t.height/2+"px"}}),i("g",{staticClass:"ticks"},[t.vTickLabels?i("g",{staticClass:"tickLabels"},[i("text",{staticClass:"sdg-label sdg-label-tick",attrs:{"alignment-baseline":"hanging","dominant-baseline":"hanging","text-anchor":"start",x:t.scaleX.map(0)+"px",y:"0"},domProps:{innerHTML:t._s(t.format(0))}}),i("text",{staticClass:"sdg-label sdg-label-tick",attrs:{"alignment-baseline":"hanging","dominant-baseline":"hanging","text-anchor":"end",x:t.scaleX.map(100)+"px",y:"0"},domProps:{innerHTML:t._s(t.format(100))}})]):t._e(),t.vTicks?i("g",{staticClass:"tickLines"},t._l([0,20,40,60,80,100],function(e){return i("line",{staticClass:"tick",attrs:{"stroke-linecap":"round",x1:t.scaleX.map(e)+"px",y1:t.height/2-5+"px",x2:t.scaleX.map(e)+"px",y2:t.height/2+5+"px"}})})):t._e()]),i("line",{staticClass:"diff",attrs:{stroke:"#aaa",x1:t.xOKF,y1:t.height/2+"px",x2:t.xDNS,y2:t.height/2+"px"}}),i("circle",{class:{"sdg-marker":!0,"sdg-marker-total":!0,disabled:t.disabled},style:{stroke:t.cBackground},attrs:{cx:t.xOKF,cy:t.height/2+"px",r:t.markerR}}),i("circle",{class:{"sdg-marker":!0,"sdg-marker-dns":!0,disabled:t.disabled},style:{stroke:t.cBackground},attrs:{cx:t.xDNS,cy:t.height/2+"px",r:t.markerR}}),i("g",{class:{markerLabels:!0,invisible:t.vMarkerLabels}},[i("text",{ref:"okf",class:{"sdg-label":!0,"sdg-label-total":!0,invert:t.invert},style:{"font-size":t.compact?"0.8rem":"1.2rem"},attrs:{"alignment-baseline":"hanging","dominant-baseline":"hanging","text-anchor":t.labels[0].l,x:t.labels[0].x,y:"0%"},domProps:{innerHTML:t._s((t.vMarkerLabelsNames?"2030Watch: ":"")+t.format(t.okf))}}),i("text",{ref:"dns",class:{"sdg-label":!0,"sdg-label-dns":!0,invert:t.invert},style:{"font-size":t.compact?"0.8rem":"1.2rem"},attrs:{"text-anchor":t.labels[1].l,x:t.labels[1].x,y:"100%"},domProps:{innerHTML:t._s((t.vMarkerLabelsNames?"DNS: ":"")+t.format(t.dns))}})]),t.vLegend?i("g",[i("polyline",{staticClass:"legendLine",attrs:{points:t.xOKF+","+(t.height-t.legendLabeldnsHeight)+" "+t.xOKF+","+(t.height-t.legendLabeldnsHeight-2*t.legendLabelSteps)}}),i("polyline",{staticClass:"legendLine",attrs:{points:t.xDNS+","+(t.height-t.legendLabeldnsHeight)+" "+t.xDNS+","+(t.height-t.legendLabeldnsHeight-2*t.legendLabelSteps)}}),i("text",{ref:"okfLabelLegend",staticClass:"legendLabel okf",attrs:{"text-anchor":"middle",x:t.xOKF,y:t.height}},[t._v("2030Watch")]),i("text",{ref:"dnsLabelLegend",staticClass:"legendLabel dns",attrs:{"text-anchor":"middle",x:t.xDNS,y:t.height}},[t._v("Daten DNS")])]):t._e()])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},DoYn:function(t,e,i){"use strict";var s=i("tPzM"),a=i("fOoa"),n=!1;var r=function(t){n||i("vJI0")},o=i("VU/8")(s.a,a.a,!1,r,null,null);o.options.__file="components/KeyFindings.vue",e.a=o.exports},DsVn:function(t,e,i){"use strict";var s=i("17jH"),a=i("Opgi"),n=!1;var r=function(t){n||i("LmsG")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-f6a90acc",null);o.options.__file="components/VisDirection.vue",e.a=o.exports},FMrg:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vis-piechart"},[i("span",{class:{"vis-number":!0,tiny:t.tiny},style:{color:"#"+t.fill,"font-size":t.size},domProps:{innerHTML:t._s(t.format(t.value))}}),i("svg",{staticClass:"vis-process",attrs:{viewBox:"-1 -1 2 2"}},[i("circle",{attrs:{cx:"0",cy:"0",r:"1",fill:"rgba(0, 0, 0, .1)"}}),i("g",{staticStyle:{transform:"rotate(-0.25turn)"}},[i("path",{attrs:{d:t.path,fill:"#"+t.fill}})]),i("circle",{attrs:{cx:"0",cy:"0",r:"0.7",fill:"#"+t.background}})])])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},Gu7T:function(t,e,i){"use strict";e.__esModule=!0;var s,a=i("c/Tr"),n=(s=a)&&s.__esModule?s:{default:s};e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,n.default)(t)}},Io04:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".vis-piechart[data-v-ca2c9a32]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:8px 16px 0;margin:.5rem 1rem 0}.vis-piechart .vis-number[data-v-ca2c9a32]{position:absolute;text-align:center;width:100%;font-weight:700;font-size:25.6px;font-size:1.6rem}.vis-piechart .vis-number.tiny[data-v-ca2c9a32]{font-size:12.8px!important;font-size:.8rem!important}.vis-piechart .vis-process[data-v-ca2c9a32]{width:100%}",""])},LmsG:function(t,e,i){var s=i("+Eyh");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("f2c76f90",s,!1,{sourceMap:!1})},NKrC:function(t,e,i){"use strict";var s=i("Dd8w"),a=i.n(s),n=i("NYxO"),r=i("rRIb"),o=i("i3la"),l=i.n(o);e.a={props:{i:{type:Object,required:!0},color:{type:[String,Number],default:"04A6F0"},colorScale:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},tiny:{type:Boolean,default:!1}},computed:a()({},Object(n.mapGetters)(["stepsColors"]),{colorChart:function(){if(this.colorScale){var t=100/this.stepsColors.length,e=Math.min(Math.max(0,this.i.progress),100),i=Math.round(e/t),s=this.stepsColors[i<1?0:i-1];return void 0!==s?s.substr(1):this.color}return this.color}}),methods:{format:l.a},components:{VisPieChart:r.a}}},NPo6:function(t,e,i){"use strict";var s=i("Gu7T"),a=i.n(s),n=i("Dd8w"),r=i.n(n),o=i("NYxO"),l=i("i3la"),d=i.n(l),c=i("4n10"),h=i("wIqx");e.a={data:function(){return{slide:1,slideHeight:0,introSDG:{values:{okf:48,dns:89}},officialSDG:{values:{okf:0,dns:34}},visibility:"hidden",display:"",present:!1,initialHeight:"0px"}},methods:{format:d.a,toggle:function(){this.present?(this.display="none",this.visibility="hidden",this.present=!1):(this.initialHeight=void 0,this.visibility="visible",this.display="block",this.present=!0)}},computed:r()({},Object(o.mapState)(["data"]),{indicators_dns:function(){var t=this.data;return[t["dns-verdienstabstand-zwischen-frauen-und-maennern"],t["dns-frauen-wirtschaft-dns"],t["dns-frauen-bildung-eza"]]},indicators_okf_1:function(){return[this.data["okf-frauen-parlamente"]]},indicators_okf_2:function(){var t=this.data;return[t["okf-verteilung-hausarbeit"],t["okf-gewalt-gegen-frauen"],t["okf-gendergap-renten"]]}}),components:{VisIndicator:c.a,VisProgress:h.a},mounted:function(){var t=[].concat(a()(this.$refs.slidesImages.getElementsByClassName("slide")),a()(this.$refs.slidesText.getElementsByClassName("slide"))).map(function(t){return t.clientHeight});this.slideHeight=Math.max.apply(Math,a()(t))}}},Opgi:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"sdg-vis",attrs:{title:this.rotation}},[e("line",{staticClass:"diff",attrs:{transform:"rotate("+(this.rotation-90)+" 1 15)",stroke:this.diff>0?"#D22F27":"#5C9E31",x1:1,y1:15,x2:19,y2:15}})])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},SPMN:function(t,e,i){"use strict";var s=i("AKmP"),a=i("riv5"),n=!1;var r=function(t){n||i("eDWw")},o=i("VU/8")(s.a,a.a,!1,r,null,null);o.options.__file="components/VisListe.vue",e.a=o.exports},SoRF:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{class:{icon:!0,"icon-sort":!0,active:this.active}},[e("polyline",{attrs:{points:"0,8 5,1 10,8",transform:"translate(0,"+(this.reverse&&this.active?10:0)+") scale(1, "+(this.reverse&&this.active?-1:1)+")"}})])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},Uw9W:function(t,e,i){"use strict";var s=i("SPMN"),a=i("lipt"),n=i("DoYn"),r=i("wIqx");e.a={data:function(){return{sampleSDG:{values:{okf:25,dns:75}}}},components:{VisListe:s.a,Slideshow:a.a,KeyFindings:n.a,VisProgress:r.a}}},Uxg9:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nuxt-link",{attrs:{to:"../indicator/"+t.i.slug,title:t.i.label}},[i("div",{ref:"vis",class:{"vis-indicator":!0,extended:!t.compact,tiny:t.tiny},attrs:{title:"»"+t.i.label+"« zu "+t.format.apply(void 0,[t.i.progress].concat([,,],[!0]))+" erreicht."}},[i("VisPieChart",{attrs:{value:t.i.progress,fill:t.colorChart,background:"ffffff",tiny:t.tiny}}),i("ul",{staticClass:"labels"},["dns"===t.i.author&&t.i.dnsIconUebernommen?i("li",{attrs:{title:"Übernommen"}},[i("i",{staticClass:"icon-ok-circled"})]):t._e(),"dns"===t.i.author&&t.i.dnsIconUngeeignet?i("li",{attrs:{title:"Ungeeignet"}},[i("i",{staticClass:"icon-cancel-circled"})]):t._e(),"dns"===t.i.author&&t.i.dnsIconNichtBewertbar?i("li",{attrs:{title:"Nicht bewertbarer Zielwert"}},[i("i",{staticClass:"icon-minus-circled"})]):t._e(),"dns"===t.i.author&&t.i.dnsIconNichtBerechenbar?i("li",{attrs:{title:"Nicht berechenbar"}},[i("i",{staticClass:"icon-help-circled"})]):t._e(),"dns"===t.i.author&&t.i.dnsIconInternationaleAuswirkungen?i("li",{attrs:{title:"Internationale Auswirkungen"}},[i("i",{staticClass:"icon-star-circled"})]):t._e(),"okf"===t.i.author&&t.i.okfIconNeuesThema?i("li",{attrs:{title:"Neues Thema"}},[i("i",{staticClass:"icon-plus-circled"})]):t._e(),"okf"===t.i.author&&t.i.okfIconModifiziert?i("li",{attrs:{title:"Modifizierter Zielwert"}},[i("i",{staticClass:"icon-cog-circled"})]):t._e(),"okf"===t.i.author&&t.i.okfIconInternationaleAuswirkungen?i("li",{attrs:{title:"Internationale Auswirkungen"}},[i("i",{staticClass:"icon-star-circled"})]):t._e()]),i("h5",[t._v(t._s(t.i.label))])],1)])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},X4N7:function(t,e,i){"use strict";var s=i("iSLf"),a=i("SoRF"),n=!1;var r=function(t){n||i("kuWr")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-7d687c12",null);o.options.__file="components/SortIcon.vue",e.a=o.exports},Ypf7:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".vis-liste{margin:32px 0;margin:2rem 0}.vis-liste:hover .sdg-item:not(:hover) .sdg-marker{fill:#a5a49f}.sdg-item{display:-webkit-box;display:-ms-flexbox;display:flex}.sdg-item:first-child{pointer-events:none}.sdg-item .sdg-header{margin-bottom:16px;margin-bottom:1rem}.sdg-item .sdg-header-label{margin-left:calc(1rem + 16px)}.sdg-item .sdg-header-label,.sdg-item .sdg-header-vis{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#9b9b9a}.sdg-item .sdg-header-label .active,.sdg-item .sdg-header-vis .active{font-weight:700;color:#222}.sdg-item .sdg-header-label .sdg-legend,.sdg-item .sdg-header-vis .sdg-legend{text-align:right}.sdg-item .sdg-header-label .sdg-legend span,.sdg-item .sdg-header-vis .sdg-legend span{margin-left:10px}.sdg-item .sdg-header-label .sdg-legend .dns,.sdg-item .sdg-header-vis .sdg-legend .dns{color:#f1b31c}.sdg-item .sdg-header-label .sdg-legend .okf,.sdg-item .sdg-header-vis .sdg-legend .okf{color:#6599ff}.sdg-item .sdg-link{color:var(--color);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;margin:0}.sdg-item .sdg-link .sdg-vis{margin:5.333px 0 32px;margin:.33333rem 0 2rem;height:50px}.sdg-item .sdg-link.disabled{cursor:default;color:#a5a49f}@media screen and (min-width:1200px){.sdg-item .sdg-link{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:3.52941vh;max-height:2.5rem;min-height:2.4rem}.sdg-item .sdg-link .sdg-vis{margin:0;height:100%}}.sdg-item .sdg-link .sdg-label{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition-duration:.1s;transition-duration:.1s}.sdg-item .sdg-link .sdg-label .sdg-number{width:16px;width:1rem;margin-right:16px;margin-right:1rem;text-align:right;line-height:19.2px;line-height:1.2rem;display:inline-block;color:var(--color);font-size:12.8px;font-size:.8rem}.sdg-item .sdg-link .sdg-label .sdg-text{line-height:19.2px;line-height:1.2rem;display:inline-block;font-weight:700;font-size:14.4px;font-size:.9rem}.sdg-item .sdg-link .sdg-direction{margin-right:16px}.sdg-item .sdg-link .sdg-vis{-webkit-box-flex:1;-ms-flex:1;flex:1}.sdg-item .sdg-link:hover:not(.disabled) .sdg-label{opacity:1!important;color:var(--color)}.sdg-item .sdg-link:hover:not(.disabled) .sdg-label-tick{opacity:0!important}",""])},"Z+B6":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".icon-sort[data-v-7d687c12]{width:10px;height:10px;fill:#d0cfce}.icon-sort.active[data-v-7d687c12]{fill:#9b9b9a}.icon-sort [data-v-7d687c12]{-webkit-transition-duration:.3s;transition-duration:.3s}",""])},ZFcw:function(t,e,i){var s=i("/A4W");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("2d560c63",s,!1,{sourceMap:!1})},Zrlr:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},avh5:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".info-message[data-v-2a183b29]{color:#6599ff;padding-top:16px;padding-top:1rem;padding-bottom:16px;padding-bottom:1rem}.info-message-bold[data-v-2a183b29]{font-weight:700}.inpage-header[data-v-2a183b29]{padding:10vh 0 3vh}",""])},bZEd:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".vis-indicator[data-v-de852dac]{width:100%;font-size:11.2px;font-size:.7rem;background-color:#fff;width:140px;line-height:16px;line-height:1rem}.vis-indicator:hover h5[data-v-de852dac]{color:#222}.vis-indicator:hover.extended[data-v-de852dac]{-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.24);box-shadow:0 1px 4px 0 rgba(0,0,0,.24)}.vis-indicator:hover .labels[data-v-de852dac]{opacity:1}.vis-indicator.extended[data-v-de852dac]{padding:6.4px;padding:.4rem;border-radius:2px;-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.14)}.vis-indicator.tiny[data-v-de852dac]{width:85px;margin:4.8px;margin:.3rem}.vis-indicator h5[data-v-de852dac]{overflow:hidden;text-overflow:ellipsis;font-size:12px;font-size:.75rem;text-align:center;font-weight:400;height:48px;height:3rem;margin-bottom:8px;margin-bottom:.5rem;color:rgba(0,0,0,.7)}.vis-indicator .labels[data-v-de852dac]{margin:-1.6px 0 1.6px;margin:-.1rem 0 .1rem;width:100%;text-align:right;min-height:16px;color:#a5a49f;opacity:.8}.vis-indicator .labels li[data-v-de852dac]{margin:0 1.6px;margin:0 .1rem;display:inline-block}.vis-indicator .labels li[data-v-de852dac]:last-child{margin-right:0}",""])},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},eDWw:function(t,e,i){var s=i("Ypf7");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("a22af5ac",s,!1,{sourceMap:!1})},eXoC:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"@media screen and (min-width:1200px){.findings table{margin:2rem}}.findings table th{padding:5px 0}.findings table td{vertical-align:top;padding:5px 0;font-family:Roboto Mono,Lucida Console,Monaco,monospace}.findings table td .icon{display:inline-block;border-radius:100%;width:13px;height:13px;margin-right:10px}.findings table td .icon.dns{background-color:#f1b31c}.findings table td .icon.okf{background-color:#6599ff}",""])},fBQ2:function(t,e,i){"use strict";var s=i("evD5"),a=i("X8DO");t.exports=function(t,e,i){e in t?s.f(t,e,a(0,i)):t[e]=i}},fOoa:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"findings"},[i("h2",[t._v("Ein erweitertes Nachhaltigkeitsbild")]),i("p",[t._v("\n    Vergleicht man die offiziellen Daten der Bundes­regierung (Deutsche Nachhaltigkeitstrategie (DNS))\n    mit dem von uns vorgeschlagenen erweiterten Indikatoren­katalog zeigt sich, dass der\n    Handlungsbedarf viel größer ist als was die DNS Indikatoren sagen. Insgesamt ergibt sich\n    folgende Gegenüberstellung:\n  ")]),i("table",[t._m(0),i("tbody",[i("tr",[i("td",[i("span",{staticClass:"icon mobile-invisible",style:{"background-color":t.stepsColors[4]}}),t._v(" sehr hoch")]),i("td",{staticClass:"mobile-invisible",domProps:{innerHTML:t._s(t.format(80)+"&#8239;&mdash;&#8239;"+t.format(100))}}),i("td",t._l(t.countingsDNS["sehr hohe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon dns"})})),i("td",t._l(t.countingsOKF["sehr hohe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon okf"})}))]),i("tr",[i("td",[i("span",{staticClass:"icon mobile-invisible",style:{"background-color":t.stepsColors[3]}}),t._v(" hoch")]),i("td",{staticClass:"mobile-invisible",domProps:{innerHTML:t._s(t.format(60)+"&#8239;&mdash;&#8239;"+t.format(80))}}),i("td",t._l(t.countingsDNS["hohe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon dns"})})),i("td",t._l(t.countingsOKF["hohe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon okf"})}))]),i("tr",[i("td",[i("span",{staticClass:"icon mobile-invisible",style:{"background-color":t.stepsColors[2]}}),t._v(" mittel")]),i("td",{staticClass:"mobile-invisible",domProps:{innerHTML:t._s(t.format(40)+"&#8239;&mdash;&#8239;"+t.format(60))}}),i("td",t._l(t.countingsDNS["mittlere Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon dns"})})),i("td",t._l(t.countingsOKF["mittlere Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon okf"})}))]),i("tr",[i("td",[i("span",{staticClass:"icon mobile-invisible",style:{"background-color":t.stepsColors[1]}}),t._v(" niedrig")]),i("td",{staticClass:"mobile-invisible",domProps:{innerHTML:t._s(t.format(20)+"&#8239;&mdash;&#8239;"+t.format(40))}}),i("td",t._l(t.countingsDNS["geringe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon dns"})})),i("td",t._l(t.countingsOKF["geringe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon okf"})}))]),i("tr",[i("td",[i("span",{staticClass:"icon mobile-invisible",style:{"background-color":t.stepsColors[0]}}),t._v(" sehr niedrig")]),i("td",{staticClass:"mobile-invisible",domProps:{innerHTML:t._s("&ensp;"+t.format(0)+"&#8239;&mdash;&#8239;"+t.format(20))}}),i("td",t._l(t.countingsDNS["sehr geringe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon dns"})})),i("td",t._l(t.countingsOKF["sehr geringe Nachhaltigkeit"],function(t){return i("span",{staticClass:"icon okf"})}))])])])])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Nachhaltigkeit"),e("span",{staticClass:"mobile-invisible"},[this._v("sstufe")])]),e("th",{staticClass:"mobile-invisible"},[this._v("SDG-Ziel erreicht zu")]),e("th",[e("span",{staticClass:"mobile-invisible"},[this._v("Anzahl – ")]),this._v("DNS")]),e("th",[e("span",{staticClass:"mobile-invisible"},[this._v("Anzahl – ")]),this._v("2030Watch")])])])}]};e.a=a},i3la:function(t,e,i){"use strict";t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"%",s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return null===t||void 0===t?"&mdash;":(0===e?parseInt(t):t.toFixed(e)).toString().replace("-","–").replace(".",",")+(s?"":"&#8239;")+i}},iAFo:function(t,e,i){"use strict";var s=i("Dd8w"),a=i.n(s),n=i("NYxO"),r=i("i3la"),o=i.n(r),l=i("kcmq");e.a={props:{sdg:{type:Object,required:!0},vLegend:{type:Boolean,required:!1},vTickLabels:{type:Boolean,default:!1},cBackground:{type:String,default:"#f9f9f9"},vMarkerLabels:{type:Boolean,default:!0},vMarkerLabelsNames:{type:Boolean,default:!1},compact:{type:Boolean,default:!0},invert:{type:Boolean,default:!1},vTicks:{type:Boolean,default:!0},disabled:{type:Boolean,required:!1}},data:function(){return{iVisible:!1,width:0,height:0,okfLabel:0,dnsLabel:0,markerR:8,legendLabelokfWidth:0,legendLabelokfHeight:20,legendLabeldnsWidth:0,legendLabeldnsHeight:20,legendLabelSteps:0,legendLabelDistance:3,scaleX:(new l.a).domain([0,100]).range([0,0])}},mounted:function(){this.calcSizes(),window.addEventListener("resize",this.calcSizes,!1)},methods:{format:o.a,valueInRange:function(t){return Math.max(0,Math.min(100,t))},calcSizes:function(){this.width=(this.$refs.vis.clientWidth||this.$refs.vis.parentNode.clientWidth)-this.markerR,this.scaleX.range([this.markerR,this.width]),this.height=this.$refs.vis.clientHeight||this.$refs.vis.parentNode.clientHeight,void 0!==this.$refs.okfLabelLegend&&(this.legendLabelokfWidth=this.$refs.okfLabelLegend.clientWidth,this.legendLabeldnsWidth=this.$refs.dnsLabelLegend.clientWidth,this.legendLabelSteps=(this.height/2-this.markerR/2-this.legendLabelokfHeight-2*this.legendLabelDistance)/2),this.okfWidth=this.$refs.okf.clientWidth,this.dnsWidth=this.$refs.dns.clientWidth,this.iVisible=!0}},computed:a()({},Object(n.mapState)(["steps"]),Object(n.mapGetters)(["stepsColors"]),{dns:function(){return this.sdg.values.dns},okf:function(){return this.sdg.values.okf},xDNS:function(){return this.scaleX.map(this.valueInRange(this.dns))},xOKF:function(){return this.scaleX.map(this.valueInRange(this.okf))},labels:function(){if(!this.width)return[{x:"0px",l:"start"},{x:"0px",l:"start"}];var t=this.markerR/2,e=this.xDNS,i=this.xOKF,s="start",a="end";return this.okfWidth&&this.dnsWidth?e<i?(e-=t,s="end",a="start",(i+=t)+this.okfWidth>this.width&&(i-=t,a="end"),e-this.dnsWidth<0&&(e+=t,s="start")):(i-=t,(e+=t)+this.dnsWidth>this.width&&(e-=t,s="end"),i-this.okfWidth<0&&(i+=t,a="start")):(e>this.width/2?(e-=t,s="end"):(e+=t,s="start"),i>this.width/2?(i-=t,a="end"):(i+=t,a="start")),[{x:i+"px",l:a},{x:e+"px",l:s}]}})}},iSLf:function(t,e,i){"use strict";e.a={props:["active","reverse"]}},kcmq:function(t,e,i){"use strict";var s=i("Zrlr"),a=i.n(s),n=i("wxAW"),r=i.n(n),o=function(){function t(){return a()(this,t),this}return r()(t,[{key:"domain",value:function(t){return this.minD=t[0],this.maxD=t[1],this}},{key:"range",value:function(t){return this.minR=t[0],this.maxR=t[1],this}},{key:"map",value:function(t){var e=this.minD,i=this.maxD,s=this.minR,a=this.maxR;if(e<=i){if(t<=e)return s;if(t>=i)return a}else{if(t>=e)return s;if(t<=i)return a}return(t-e)/(i-e)*(a-s)+s}}]),t}();e.a=o},kuWr:function(t,e,i){var s=i("Z+B6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("9849a4ea",s,!1,{sourceMap:!1})},lipt:function(t,e,i){"use strict";var s=i("NPo6"),a=i("owlU"),n=!1;var r=function(t){n||i("ZFcw")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-3e66333a",null);o.options.__file="components/Slideshow.vue",e.a=o.exports},owlU:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"intro box"},[i("a",{staticClass:"opener",on:{click:t.toggle}},[t._m(0)]),i("div",{style:{display:t.display,visibility:t.visibility,height:t.initialHeight}},[i("section",{staticClass:"columns columns-gutter"},[i("ul",{ref:"slidesText",staticClass:"container",style:{height:t.slideHeight+"px"}},[i("li",{class:{slide:!0,active:1===t.slide}},[t._m(1)]),i("li",{class:{slide:!0,active:2===t.slide}},[i("h5",{staticClass:"caption"},[t._v("Ein Beispiel: SDG 5 – Geschlechtergerechtigkeit")]),i("p",[t._v("\n            Die Bundes­regierung hat sich unter Geschlechter­gerechtigkeit\n            zum Ziel gesetzt, bis 2030 30% Frauen­anteil in den Aufsichts­räten zu erreichen.\n            Aus Sicht von 2030Watch ist das Ziel von 30% der Deutschen Nachhaltigkeits­strategie\n            (DNS) nicht ambitioniert genug und fordert im Einklang mit SDG 5 einen Frauenanteil von\n            50% in Aufsichts­räten und anderen Führungsebenen.\n          ")])]),i("li",{class:{slide:!0,active:3===t.slide}},[i("p",[t._v("\n            Ergänzend zur Wirtschaft ist 2030Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungs­bedarf Deutschlands offensichtlich.\n          ")])]),i("li",{class:{slide:!0,active:4===t.slide}},[i("p",[t._v("\n            Zudem weist 2030Watch mit Indikatoren zur ungleichen Verteilung\n            von Hausarbeit, Gewalt gegen Frauen und dem Unterschied in Renten­einkommen\n            auf wichtige Themen die in der DNS vernachlässigt werden.\n            ")]),i("p",[t._v("\n              Viele weitere spannende Stories und Ergänzungen finden sich in den weiteren SDGs.\n              ")]),i("div",{staticClass:"carousel-prompt"},[t._v("Go Explore!")]),i("p"),i("p")])]),i("ul",{ref:"slidesImages",staticClass:"indicators container",style:{height:t.slideHeight+"px"}},[i("li",{class:{slide:!0,active:1===t.slide}},[i("div",{staticClass:"sdg-process-wrapper"},[i("p",[t._v("\n               Wie weit sind wir vom Ziel entfernt eine nachhaltige Transformation bis 2030 zu erreichen?\n            ")]),i("div",{staticClass:"margin-legend"},[i("VisProgress",{attrs:{vTickLabels:!0,sdg:t.introSDG,vLegend:!0,compact:!0}})],1)])]),i("li",{class:{slide:!0,active:2===t.slide}},[i("h5",{staticClass:"caption"},[t._v("Zwei Perspektiven: die Deutsche Nachhaltigkeitsstrategie (DNS) und 2030Watch")]),i("div",{staticClass:"sdg-comparison-wrapper"},[i("span",{staticClass:"number-big dns",domProps:{innerHTML:t._s(t.format(30))}}),t._m(2),i("span",{staticClass:"number-big okf",domProps:{innerHTML:t._s(t.format(50))}})])]),i("li",{class:{slide:!0,active:3===t.slide}},[i("h5",{staticClass:"caption"},[t._v("Neuer Indikator 2030Watch: Frauen in Parlamenten")]),i("ul",{staticClass:"indicator-list"},t._l(t.indicators_dns,function(t){return i("li",[i("VisIndicator",{attrs:{i:t,compact:!0,tiny:!0,color:"F8B300"}})],1)})),i("ul",{staticClass:"indicator-list"},t._l(t.indicators_okf_1,function(t){return i("li",[i("VisIndicator",{attrs:{i:t,compact:!0,tiny:!0,color:"04A6F0"}})],1)}))]),i("li",{class:{slide:!0,active:4===t.slide}},[i("h5",{staticClass:"caption"},[t._v("Zusätzliche 2030Watch Indikatoren")]),i("ul",{staticClass:"indicator-list"},t._l(t.indicators_okf_2,function(t){return i("li",[i("VisIndicator",{attrs:{i:t,compact:!0,tiny:!0,color:"04A6F0"}})],1)}))])])]),i("footer",[i("span",{class:{btn:!0,disabled:t.slide<=1},on:{click:function(e){t.slide<=1?t.slide=t.slide:t.slide-=1}}},[t._v("Zurück")]),i("span",{class:{btn:!0,disabled:t.slide>3},on:{click:function(e){t.slide>3?t.slide=t.slide:t.slide+=1}}},[t._v("Weiter")]),i("div",{staticClass:"progress"},t._l(4,function(e){return i("span",{class:{icon:!0,past:e<=t.slide,future:e>t.slide},on:{click:function(i){t.slide=e}}})}))])])])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",{staticClass:"carousel-header"},[this._v("\n        Warum brauchen wir andere Indikatoren um Nachhaltigkeit zu messen?\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n            Die Bundesregierung hat mit der "),e("a",{staticClass:"dns",attrs:{href:"https://www.bundesregierung.de/Content/DE/_Anlagen/Nachhaltigkeit-wiederhergestellt/2017-01-11-nachhaltigkeitsstrategie.pdf;jsessionid=4698A132C6FCD96F5DFADD2C6DE6FF28.s7t1?__blob=publicationFile&v=22",target:"_blank"}},[this._v("„Deutschen Nachhaltig­keits­strategie“ (DNS)")]),this._v(" die SDGs in nationale Ziele übersetzt. 2030Watch diskutiert anhand von alternativen Indikatoren wie ambitioniert Deutschland die SDGs umsetzt und weist auf fehlende Themen, bessere Zielwerte und mehr Verantwortung hin.\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"number-big arrow"},[e("i",{staticClass:"icon-up-big"})])}]};e.a=a},qyJz:function(t,e,i){"use strict";var s=i("+ZMJ"),a=i("kM2E"),n=i("sB3e"),r=i("msXi"),o=i("Mhyx"),l=i("QRG4"),d=i("fBQ2"),c=i("3fs2");a(a.S+a.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,h,g=n(t),f="function"==typeof this?this:Array,u=arguments.length,p=u>1?arguments[1]:void 0,v=void 0!==p,m=0,b=c(g);if(v&&(p=s(p,u>2?arguments[2]:void 0,2)),void 0==b||f==Array&&o(b))for(i=new f(e=l(g.length));e>m;m++)d(i,m,v?p(g[m],m):g[m]);else for(h=b.call(g),i=new f;!(a=h.next()).done;m++)d(i,m,v?r(h,p,[a.value,m],!0):a.value);return i.length=m,i}})},r5xM:function(t,e,i){var s=i("bZEd");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("24b01e5e",s,!1,{sourceMap:!1})},rGQh:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-container"},[this._m(0),this._m(1),e("section",{staticClass:"intro-container"},[e("div",{staticClass:"wrapper"},[e("Slideshow")],1)]),e("section",[e("div",{staticClass:"wrapper",attrs:{id:"keyfindings"}},[e("h2",[this._v("\n        Wie weit sind wir von einem nachhaltigeren Deutschland in 2030 entfernt?\n      ")]),e("div",{staticClass:"columns columns-gutter"}),e("VisListe")],1)]),e("section",[e("div",{staticClass:"wrapper"},[e("KeyFindings")],1)])])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper info-message"},[e("span",{staticClass:"info-message-bold"},[this._v("ⓘ Relaunch light:")]),this._v(" Alle Inhalte gibt es bis 1. September\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"inpage-header"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"message"},[e("h1",[this._v("Wie nachhaltig ist Deutschland?")]),e("p",[this._v("Der Zustand der Welt erfordert eine Transformation zu mehr Gerechtig­keit und Nachhaltiger Entwicklung. Mit der Agenda 2030 haben sich alle UN-Staaten verpflichtet, für die Realisierung dieser Trans­formation siebzehn Nachhaltig­keitsziele - den sogenannten „Sustainable Development Goals (SDGs)“- bis zum Jahr 2030 umzusetzen. Der damit verbundene globale Indikatoren­katalog dient zur Fortschritts­messung.")]),e("p",[this._v("2030Watch diskutiert wie ambitioniert Deutschland die SDGs umsetzt")])])])])}]};e.a=a},rRIb:function(t,e,i){"use strict";var s=i("rRnw"),a=i("FMrg"),n=!1;var r=function(t){n||i("6KFu")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-ca2c9a32",null);o.options.__file="components/VisPieChart.vue",e.a=o.exports},rRnw:function(t,e,i){"use strict";var s=i("i3la"),a=i.n(s);function n(t){return[Math.cos(2*Math.PI*t),Math.sin(2*Math.PI*t)]}e.a={props:{value:{type:Number},fill:{type:String},background:{type:String},tiny:{type:Boolean,default:!1}},computed:{path:function(){return function(t){var e=t,i=n(0)[0],s=n(0)[1],a=n(e)[0],r=n(e)[1];return["M "+i+" "+s,"A 1 1 0 "+(e>.5?1:0)+" 1 "+a+" "+r,"L 0 0"].join(" ")}((t=this.value/100)<=0?0:t>=1?1:t);var t},size:function(){var t=this.format(this.value).toString().split("&")[0].length;return t<=2?"1.6rem":3===t?"1.2rem":"1rem"}},methods:{format:a.a}}},riv5:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"vis-liste"},[t._m(0),t._l(t.sdgListe,function(e,s){return i("li",{staticClass:"sdg-item"},["coming soon"!==e.textIntro?i("nuxt-link",{staticClass:"sdg-link",style:{"--color":"#"+e.color},attrs:{to:"sdg/"+e.slug}},[i("div",{staticClass:"sdg-label"},[i("span",{staticClass:"sdg-number"},[t._v(t._s(e.number))]),i("span",{staticClass:"sdg-text",attrs:{title:e.labelLong}},[t._v(t._s(e.labelShort))])]),i("div",{staticClass:"sdg-vis"},[i("VisProgress",{attrs:{sdg:e,vTickLabels:0===s}})],1)]):i("a",{staticClass:"sdg-link disabled",attrs:{title:"Coming soon"}},[i("div",{staticClass:"sdg-label disabled"},[i("span",{staticClass:"sdg-number"},[t._v(t._s(e.number))]),i("span",{staticClass:"sdg-text"},[t._v(t._s(e.labelShort))])]),i("div",{staticClass:"sdg-vis"},[i("VisProgress",{attrs:{disabled:!0,sdg:e,vTickLabels:0===s}})],1)])],1)})],2)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"sdg-item"},[e("div",{staticClass:"sdg-header sdg-header-label"},[e("span",[this._v("Sustainable Development Goals")])]),e("div",{staticClass:"sdg-header sdg-header-vis columns"},[e("section",{staticClass:"sdg-legend"},[e("span",{staticClass:"dns"},[this._v("DNS")]),e("span",{staticClass:"okf"},[this._v("2030Watch")])])])])}]};e.a=a},tPzM:function(t,e,i){"use strict";var s=i("Dd8w"),a=i.n(s),n=i("NYxO"),r=i("4n10"),o=i("M4fF"),l=i.n(o),d=i("i3la"),c=i.n(d);e.a={computed:a()({},Object(n.mapState)(["sdgs"]),Object(n.mapGetters)(["stepsColors"]),{difference:function(){var t=l.a.map(this.sdgs,function(t){return{label:t.labelShort,diff:t.values.dns-t.values.okf}});return l.a.sortBy(t,"diff")},first:function(){return this.difference[0]},last:function(){return this.difference[this.difference.length-1]},ratingsOKF:function(){return l.a.map(this.sdgs,"rating.okf")},ratingsDNS:function(){return l.a.map(this.sdgs,"rating.dns")},countingsOKF:function(){return l.a.countBy(this.ratingsOKF)},countingsDNS:function(){return l.a.countBy(this.ratingsDNS)}}),methods:{format:c.a},components:{VisIndicator:r.a}}},vJI0:function(t,e,i){var s=i("eXoC");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("38b431ee",s,!1,{sourceMap:!1})},vQBO:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".sdg-vis[data-v-1f7d71e2]{width:100%;height:100%;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.sdg-vis.visible[data-v-1f7d71e2]{opacity:1}.sdg-vis .legendLine[data-v-1f7d71e2]{stroke:rgba(0,0,0,.2);fill:none}.sdg-vis .range[data-v-1f7d71e2]{stroke:#ebecf1;stroke-width:3px}.sdg-vis .tick[data-v-1f7d71e2]{stroke:#d3d4d9;stroke-width:1px}.sdg-vis .ticksLegendLabels[data-v-1f7d71e2]{font-size:14.4px;font-size:.9rem}.sdg-vis .legendLabel[data-v-1f7d71e2]{font-weight:700;font-size:12.8px;font-size:.8rem}.sdg-vis .legendLabel.okf[data-v-1f7d71e2]{fill:#6599ff}.sdg-vis .legendLabel.dns[data-v-1f7d71e2]{fill:#f1b31c}.sdg-vis .tickLegend[data-v-1f7d71e2]{stroke:#aaa;stroke-width:3px}.sdg-vis .diff[data-v-1f7d71e2]{stroke-width:1px}.sdg-vis .sdg-marker[data-v-1f7d71e2]{stroke-width:2px}.sdg-vis .sdg-marker.sdg-marker-total[data-v-1f7d71e2]{fill:#6599ff}.sdg-vis .sdg-marker.sdg-marker-dns[data-v-1f7d71e2]{fill:#f1b31c}.sdg-vis .sdg-marker.disabled[data-v-1f7d71e2]{fill:#a5a49f}.sdg-vis .markerLabels.invisible .sdg-label[data-v-1f7d71e2]{opacity:0}.sdg-vis .sdg-label[data-v-1f7d71e2]{-webkit-transition-duration:.2s;transition-duration:.2s}.sdg-vis .sdg-label.sdg-label-tick[data-v-1f7d71e2]{fill:#222;opacity:1;font-size:11.2px;font-size:.7rem}.sdg-vis .sdg-label.sdg-label-total[data-v-1f7d71e2]{fill:#6599ff}.sdg-vis .sdg-label.sdg-label-total.invert[data-v-1f7d71e2]{fill:#fff}.sdg-vis .sdg-label.sdg-label-dns[data-v-1f7d71e2]{fill:#f1b31c}.sdg-vis .sdg-label.sdg-label-dns.invert[data-v-1f7d71e2]{fill:#fff}",""])},wIqx:function(t,e,i){"use strict";var s=i("iAFo"),a=i("Cv67"),n=!1;var r=function(t){n||i("xsbC")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-1f7d71e2",null);o.options.__file="components/VisProgress.vue",e.a=o.exports},wxAW:function(t,e,i){"use strict";e.__esModule=!0;var s,a=i("C4MV"),n=(s=a)&&s.__esModule?s:{default:s};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,n.default)(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}()},xsbC:function(t,e,i){var s=i("vQBO");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("3be6a3ec",s,!1,{sourceMap:!1})}});