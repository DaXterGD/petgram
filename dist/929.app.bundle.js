"use strict";(self.webpackChunkcurso_platzi_react_avanzado=self.webpackChunkcurso_platzi_react_avanzado||[]).push([[929],{6926:(e,n,t)=>{t.d(n,{a:()=>i});var r=t(7294),a=t(4593),i=function(e){var n=e.children,t=e.title,i=e.description;return r.createElement(r.Fragment,null,r.createElement(a.q,null,t&&r.createElement("title",null,"Petgram 🦊 | ",t),i&&r.createElement("meta",{name:"description",content:i})),n)}},7117:(e,n,t)=>{t.d(n,{V:()=>l});var r,a=t(7294),i=t(168),o=t(8804).ZP.h1(r||(r=(0,i.Z)(["\n  width: 80%;\n  margin: 0 auto .5rem;\n"]))),l=function(e){var n=e.content;return a.createElement(o,null,n)}},8929:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var r,a,i,o,l,u,c,d,s=t(8152),p=t(7294),g=t(6974),m=t(168),f=t(9098),v=t(319),b=(0,f.Ps)(r||(r=(0,m.Z)(["\n  mutation signup($input: UserCredentials!) {\n    signup(input: $input)\n  }\n"]))),h=(0,f.Ps)(a||(a=(0,m.Z)(["\n  mutation login($input: UserCredentials!) {\n    login(input: $input)\n  }\n"]))),E=t(6926),x=t(5769),Z=t(7462),w=function(e){var n=(0,p.useState)(e),t=(0,s.Z)(n,2),r=t[0],a=t[1];return{value:r,onChange:function(e){return a(e.target.value)}}},k=t(8804),y=k.ZP.form(i||(i=(0,m.Z)(["\n  width: 80%;\n  padding: 16px 0;\n  margin: 2rem auto;\n"]))),C=k.ZP.input(o||(o=(0,m.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 50px;\n  margin-bottom: 8px;\n  padding: 8px 4px;\n  display: block;\n  width: 100%;\n  &[disabled] {\n    opacity: 0.5;\n  }\n"]))),P=k.ZP.button(l||(l=(0,m.Z)(["\n  background-image: linear-gradient(to right, #e900c8, #00e8ff, #00ffc5);\n  border-radius: 50px;\n  color: #fff;\n  width: 100%;\n  height: 32px;\n  display: block;\n  text-align: center;\n"]))),M=k.ZP.button(u||(u=(0,m.Z)(["\n  background-image: linear-gradient(to right, #e900c8, #00e8ff, #00ffc5);\n  border-radius: 50px;\n  color: #fff;\n  width: 100%;\n  height: 32px;\n  display: block;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  &[disabled] {\n    opacity: 0.5;\n  }\n"]))),S=k.ZP.h2(c||(c=(0,m.Z)(["\n  /* width: 80%; */\n  /* margin: 0 auto; */\n  font-size: 1rem;\n  font-weight: 500;\n  padding: 8px 0;\n"]))),z=k.ZP.p(d||(d=(0,m.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 8px 0;\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  border-radius: 50px;\n  font-weight: bold;\n  background-color: ",";\n"])),(function(e){return"error"===e.type?"#e900c8":"#59FFB9"})),_=function(e){var n=e.onSubmit,t=e.title,r=e.error,a=e.loading,i=e.success,o=w(""),l=w("");return p.createElement(p.Fragment,null,p.createElement(y,{disabled:a,onSubmit:function(e){e.preventDefault(),n({email:o.value,password:l.value})}},r&&p.createElement(z,{type:"error"},r),i&&p.createElement(z,{type:"success"},i),p.createElement(S,null,t),p.createElement(C,(0,Z.Z)({disabled:a,type:"email",placeholder:"est@example.com"},o)),p.createElement(C,(0,Z.Z)({disabled:a,type:"password",placeholder:"Password"},l)),a?p.createElement(M,{disabled:a},"..."):p.createElement(P,null,t)))},D=p.memo(_),I=t(7117),R=function(){var e=(0,p.useState)(""),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,g.s0)(),i=(0,p.useContext)(x.I).activateAuth,o=function(){var e=(0,v.D)(b),n=(0,s.Z)(e,2),t=n[0],r=n[1];return{registerMutation:t,loading:r.loading,error:r.error}}(),l=o.registerMutation,u=o.loading,c=o.error,d=function(){var e=(0,v.D)(h),n=(0,s.Z)(e,2),t=n[0],r=n[1];return{loginMutation:t,loading:r.loading,error:r.error}}(),m=d.loginMutation,f=d.loading,Z=c&&"El usuario ya existe o hay algún problema :(",w=d.error&&"Credenciales invalidas";return p.createElement(E.a,{title:"Regístrate",description:"En esta sección podrás registrarte e iniciar sesión. Animate, ¡no cuesta nada!"},p.createElement(I.V,{content:"¡Regístrate para disfrutar de todo nuestro contenido!"}),p.createElement(D,{error:Z,loading:u,success:t,onSubmit:function(e){var n=e.email,t=e.password;l({variables:{input:{email:n,password:t}}}).then((function(e){var n=e.data.register;console.log(n),i(n),r("Usuario registrado con éxito")}))},title:"Regístrate"}),p.createElement(D,{error:w,loading:f,onSubmit:function(e){var n=e.email,t=e.password;m({variables:{input:{email:n,password:t}}}).then((function(e){var n=e.data.login;console.log(n),i(n),a("/")}))},title:"Iniciar Sesión"}))};const F=p.memo(R)},319:(e,n,t)=>{t.d(n,{D:()=>d});var r=t(655),a=t(7294),i=t(8330),o=t(2152),l=t(4692),u=t(990),c=t(6252);function d(e,n){var t=(0,c.x)(null==n?void 0:n.client);(0,l.Vp)(e,l.n_.Mutation);var d=(0,a.useState)({called:!1,loading:!1,client:t}),s=d[0],p=d[1],g=(0,a.useRef)({result:s,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(g.current,{client:t,options:n,mutation:e});var m=(0,a.useCallback)((function(e){void 0===e&&(e={});var n=g.current,t=n.client,a=n.options,l=n.mutation,c=(0,r.pi)((0,r.pi)({},a),{mutation:l});g.current.result.loading||c.ignoreResults||p(g.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var d=++g.current.mutationId,s=(0,i.J)(c,e);return t.mutate(s).then((function(n){var r,a,i=n.data,l=n.errors,m=l&&l.length>0?new u.c({graphQLErrors:l}):void 0;if(d===g.current.mutationId&&!s.ignoreResults){var f={called:!0,loading:!1,data:i,error:m,client:t};g.current.isMounted&&!(0,o.D)(g.current.result,f)&&p(g.current.result=f)}return null===(r=c.onCompleted)||void 0===r||r.call(c,n.data),null===(a=e.onCompleted)||void 0===a||a.call(e,n.data),n})).catch((function(n){var r,a;if(d===g.current.mutationId&&g.current.isMounted){var i={loading:!1,error:n,data:void 0,called:!0,client:t};(0,o.D)(g.current.result,i)||p(g.current.result=i)}if(c.onError||s.onError)return null===(r=c.onError)||void 0===r||r.call(c,n),null===(a=e.onError)||void 0===a||a.call(e,n),{data:void 0,errors:n};throw n}))}),[]),f=(0,a.useCallback)((function(){p({called:!1,loading:!1,client:t})}),[]);return(0,a.useEffect)((function(){return function(){g.current.isMounted=!1}}),[]),[m,(0,r.pi)({reset:f},s)]}}}]);
//# sourceMappingURL=929.app.bundle.js.map