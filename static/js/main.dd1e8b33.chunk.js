(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{23:function(e,t,a){e.exports=a(69)},29:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=a(10),i=a(3),s=a.n(i),u=a(9),m=a(4),g=a(5),h=a(7),p=a(6),d=a(8),f=(a(29),a(21)),y=a.n(f),b=function(){return r.a.createElement(y.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},v=(a(51),function(e){var t=e.item,a=e.onImgClick;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t.webformatURL,alt:"sorry",className:"ImageGalleryItem-image",onClick:function(){return a(t.largeImageURL)}}))}),E=function(e){var t=e.gallery,a=e.onImgClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(v,{item:e,key:e.id,onImgClick:a})}))))},k=function(e){var t=e.handleChange,a=e.handleOnSubmit;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:a},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{onChange:t,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))},S=a(22),O=a.n(S),C=function(e){var t=e.loadMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"Button",type:"button",onClick:t},"LOAD MORE"))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleKeyDown=function(e){"Escape"===e.key&&a.props.onClose()},a.closeOnClick=function(e){e.target!==e.currentTarget&&a.props.onClose()},a}return Object(d.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.url;return console.log("this.props",this.props),r.a.createElement("div",{className:"Overlay"},r.a.createElement("div",{onClick:this.closeOnClick,className:"Modal"},r.a.createElement("img",{src:e,alt:"not available"})))}}]),t}(n.Component),I="15302072-a81be31270c5e4995077a81d4",M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",isLoading:!1,gallery:[],page:1,largeImageURL:"",openModal:!1},a.handleChange=function(e){a.state.query!==e.target.value&&a.setState({page:1}),a.setState({query:e.target.value})},a.handleOnSubmit=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({gallery:[]});case 3:return e.next=5,a.handleSubmit();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(){var e=a.state,t=e.query,n=e.page;a.setState({isLoading:!0}),O.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(n,"&per_page=12&key=").concat(I)).then((function(e){return a.setState((function(t){return{gallery:[].concat(Object(c.a)(t.gallery),Object(c.a)(e.data.hits)),largeImageUrl:e.data.hits.largeImageURL}}))})).finally((function(){return a.setState({isLoading:!1})}))},a.loadMore=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1,e.next=3,a.setState((function(e){return{page:e.page+1}}));case 3:return e.next=5,a.handleSubmit();case 5:case"end":return e.stop()}}),e)}))),a.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},a.onImgClick=function(e){a.setState({largeImageURL:e}),a.toggleModal()},a.toggleModal=function(){a.setState((function(e){return{openModal:!e.openModal}}))},a}return Object(d.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){console.log("this.largeImgURL",this.state.largeImageURL);var e=this.state,t=e.gallery,a=e.isLoading,n=e.page,o=e.largeImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{handleChange:this.handleChange,handleOnSubmit:this.handleOnSubmit}),a&&r.a.createElement(b,null),r.a.createElement(E,{gallery:t,onImgClick:this.onImgClick}),r.a.createElement(C,{loadMore:this.loadMore}),1!==n&&this.scroll(),this.state.openModal&&r.a.createElement(w,{url:o,onClose:this.toggleModal}))}}]),t}(n.Component);l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.dd1e8b33.chunk.js.map