import React,{useState,useEffect,useMemo} from "react";
const h=React.createElement;
const CATS=["Home Utility","Kitchen Accessories","Cleaning Essentials","Storage & Organization","Everyday Home Products"];
const STAT=["Order Placed","Confirmed","Processing","Shipped","Out for Delivery","Delivered","Cancelled"];
const rs=n=>"₹"+Number(n).toLocaleString("en-IN");
const TINT=["#DCE5DB","#F1EDE6","#EFE3DA"];
const SaleC=React.createContext(null);
function Mini({big}){const sale=React.useContext(SaleC),[n,setN]=useState(Date.now());useEffect(()=>{const t=setInterval(()=>setN(Date.now()),1000);return()=>clearInterval(t)},[]);
 if(!sale||!sale.active||!sale.start)return null;const l=new Date(sale.start).getTime()+72*3600e3-n;
 if(l<=0)return h("div",{className:"mini"},"Sale ended");
 const d=Math.floor(l/864e5),hr=Math.floor(l/36e5)%24,m=Math.floor(l/6e4)%60,sc=Math.floor(l/1e3)%60,p=x=>String(x).padStart(2,"0");
 return big?h("div",{className:"mb"},h("small",null,"Sale ends in"),h("div",{className:"cd2"},[[d,"Days"],[hr,"Hrs"],[m,"Min"],[sc,"Sec"]].map(([v,t])=>h("div",{key:t},h("b",null,p(v)),h("span",null,t))))):h("div",{className:"mini"},"⏱ "+d+"d "+p(hr)+"h "+p(m)+"m "+p(sc)+"s left")}
const SEED=[{"id": "S1", "title": "Stackable Food Storage Containers with Lids", "desc": "Clear, stackable storage boxes with lids for keeping vegetables, fruit and leftovers organised in the fridge or pantry.", "price": 199, "mrp": null, "cat": "Storage & Organization", "img": "/products/1.jpg", "stock": 20, "url": "", "verified": true, "est": true},{"id": "S2", "title": "CARMESI Facial Razor for Women (Pack of 3)", "desc": "Pack of 3 painless facial razors with a zigzag blade and an anti-slip grip.", "price": 129, "mrp": null, "cat": "Everyday Home Products", "img": "/products/2.jpg", "stock": 20, "url": "https://amzn.in/d/0dPBqRYR", "verified": true, "est": true},{"id": "S3", "title": "SoftSpun Microfiber Cleaning Cloths", "desc": "Soft multi-colour microfiber cloths for wiping kitchen counters, appliances and surfaces.", "price": 199, "mrp": null, "cat": "Cleaning Essentials", "img": "/products/3.jpg", "stock": 20, "url": "", "verified": true, "est": true},{"id": "S4", "title": "Corner Wall Shelf Set – Black Metal", "desc": "Set of 2 black metal corner shelves with self-adhesive mounting for bathroom or kitchen storage.", "price": 229, "mrp": null, "cat": "Storage & Organization", "img": "/products/4.jpg", "stock": 20, "url": "", "verified": true, "est": true},{"id": "S5", "title": "2-in-1 Soap Dispenser with Sponge Holder", "desc": "Sink-side liquid soap dispenser with a built-in sponge holder to keep your counter tidy.", "price": 179, "mrp": null, "cat": "Kitchen Accessories", "img": "/products/5.jpg", "stock": 20, "url": "", "verified": true, "est": true},{"id": "S6", "title": "Self-Adhesive Transparent Wall Hooks", "desc": "Transparent adhesive wall hooks for kitchen, bathroom and wardrobe use, with no drilling needed.", "price": 119, "mrp": null, "cat": "Home Utility", "img": "/products/6.jpg", "stock": 20, "url": "", "verified": true, "est": true},{"id": "S7", "title": "12 Pcs Cotton Dishcloths, 12×16 Inches", "desc": "100% cotton multipurpose kitchen cleaning and scrubbing cloths, 12×16 inches, set of 12 in multicolour.", "price": 206, "mrp": 700, "cat": "Cleaning Essentials", "img": "/products/7.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S8", "title": "RILION Fridge Door Storage Organizer", "desc": "Compact fridge-door storage bins for fruit, vegetables and eggs, keeping shelves neat.", "price": 199, "mrp": null, "cat": "Storage & Organization", "img": "/products/8.jpg", "stock": 20, "url": "", "verified": true, "est": true},{"id": "S9", "title": "Scotch-Brite Small Wiper for Kitchen & Bathroom", "desc": "Small wiper with a TPE blade and moulded handle for kitchen counters, bathroom surfaces and windows.", "price": 150, "mrp": null, "cat": "Cleaning Essentials", "img": "/products/9.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S10", "title": "Microfiber Duster with 40-54 Inch Extension Pole, 3.3 Inch Width, Gray – Bendable", "desc": "Bendable microfiber duster on an extendable 40–54 inch pole for reaching under furniture and tight gaps.", "price": 189, "mrp": 499, "cat": "Cleaning Essentials", "img": "/products/10.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S11", "title": "Gap Dust Cleaner Under Appliance Microfiber Duster Dust Brush with Extension Pole", "desc": "Microfiber duster brush on an extension pole for cleaning under appliances and furniture.", "price": 199, "mrp": 899, "cat": "Cleaning Essentials", "img": "/products/11.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S12", "title": "Multi-Function Bathroom Plastic Cleaning Brush, Tiles Cleaning Brush, Hard Bristle", "desc": "Hard-bristle multi-function brush for scrubbing bathroom tiles and corners.", "price": 235, "mrp": 600, "cat": "Cleaning Essentials", "img": "/products/12.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S13", "title": "Gap Dust Cleaner Under Appliance Microfiber Duster Dust Brush with Extension Pole (Style 2)", "desc": "Extendable microfiber duster with replaceable-style pads for dusting hard-to-reach gaps.", "price": 199, "mrp": 499, "cat": "Cleaning Essentials", "img": "/products/13.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S14", "title": "Happi Planet Kitchen Cleaner Spray – Foaming Formulation", "desc": "Foaming kitchen cleaner spray, listed as a non-toxic formulation for kitchen surfaces.", "price": 199, "mrp": 299, "cat": "Cleaning Essentials", "img": "/products/14.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S15", "title": "Gala 151810 Scrubber with Long Handle (Multicolour)", "desc": "Scrubber with a long handle for cleaning floors and bathroom surfaces without bending.", "price": 169, "mrp": 200, "cat": "Cleaning Essentials", "img": "/products/15.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S16", "title": "Hand Blender Wire Whisk, Stainless Steel Balloon Shaped Egg Beater", "desc": "Stainless steel balloon whisk for beating eggs, whipping and mixing.", "price": 99, "mrp": 499, "cat": "Kitchen Accessories", "img": "/products/16.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S17", "title": "Printed Elephant Cushion Covers", "desc": "Decorative printed cushion covers with colourful elephant designs.", "price": 132.05, "mrp": 999, "cat": "Everyday Home Products", "img": "/products/17.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S18", "title": "CASA-NEST Thick PVC Printed Center Rectangular Table Cover", "desc": "Thick printed PVC table cover with lace edge for rectangular dining tables.", "price": 220.4, "mrp": 599, "cat": "Everyday Home Products", "img": "/products/18.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S19", "title": "RATAN PLASTICWARE Euro Clean Table Top Small Mini Bin", "desc": "Small table-top bin with a swing lid for desks and counters.", "price": 149, "mrp": 499, "cat": "Home Utility", "img": "/products/19.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S20", "title": "TIED RIBBONS Set of 2 Santa Claus Sparkle Caps (Red)", "desc": "Set of 2 red sparkle Santa caps for Christmas celebrations.", "price": 249, "mrp": 1299, "cat": "Everyday Home Products", "img": "/products/20.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S21", "title": "Sehaz Artworks Mason Jar Kitchen Decoration Items", "desc": "Mason-jar shaped wall decor pieces with kitchen quotes.", "price": 236, "mrp": 799, "cat": "Kitchen Accessories", "img": "/products/21.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S22", "title": "wipro Garnet 5W E14 Frosted Candle LED Filament Bulb", "desc": "5W E14 frosted candle-shaped LED bulb.", "price": 147, "mrp": 300, "cat": "Home Utility", "img": "/products/22.jpg", "stock": 20, "url": "", "verified": true, "est": false},{"id": "S23", "title": "PANCA Lotus Wall Hanging with Jhumki – Set of 6", "desc": "Set of 6 lotus wall hangings with jhumki for festive home decor.", "price": 189, "mrp": 699, "cat": "Everyday Home Products", "img": "/products/23.jpg", "stock": 20, "url": "", "verified": true, "est": false},...[["B0CXM5DT52","https://amzn.in/d/00mQO6Io"],["B09SHN6916","https://amzn.in/d/0bWQ6ZTs"]].map(([a,u])=>({id:a,asin:a,url:u,title:"",desc:"",price:null,mrp:null,cat:CATS[0],img:"",stock:0,verified:false}))];
function useLS(k,d){const[v,s]=useState(()=>{try{const r=localStorage.getItem("hz_"+k);return r?JSON.parse(r):d}catch(e){return d}});useEffect(()=>{try{localStorage.setItem("hz_"+k,JSON.stringify(v))}catch(e){}},[k,v]);return[v,s]}
const ok=p=>p.verified&&p.title&&p.price>=99&&p.price<=250;
const Logo=({go})=>h("div",{className:"logo",onClick:()=>go("home")},h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"#B98567","stroke-width":1.8},h("path",{d:"M3 11l9-7 9 7v9a1 1 0 01-1 1H4a1 1 0 01-1-1z"}),h("path",{d:"M9 21v-6h6v6"})),"HOMEZY DEALS");

function Card({p,wl,tw,add,qv}){return h("div",{className:"card"},
 h("div",{className:"im",style:{cursor:"pointer"},onClick:()=>qv(p)},p.img?h("img",{src:p.img,alt:p.title,loading:"lazy"}):"Homezy",p.mrp>p.price&&h("span",{className:"bdgd"},Math.round(100-p.price/p.mrp*100)+"% OFF"),
  h("button",{className:"wl",onClick:e=>{e.stopPropagation();tw(p.id)},"aria-label":"Wishlist"},wl.includes(p.id)?"♥":"♡")),
 h("div",{className:"cb"},h("div",{className:"ct"},p.cat),h("b",null,p.title),h("p",null,p.desc),
  h("div",{className:"pr"},rs(p.price),p.mrp>p.price&&h("s",null,rs(p.mrp)),p.mrp>p.price&&h("em",null,Math.round(100-p.price/p.mrp*100)+"% off")),
  h("div",{className:"ac"},h("button",{className:"btn s",disabled:!p.stock,onClick:()=>add(p.id)},p.stock?"Add to Cart":"Sold out"),h("button",{className:"btn o s",onClick:()=>qv(p)},"Quick View")),h(Mini,null)))}

function Countdown({sale,go}){
 const[n,setN]=useState(Date.now());useEffect(()=>{const t=setInterval(()=>setN(Date.now()),1000);return()=>clearInterval(t)},[]);
 const end=sale.active&&sale.start?new Date(sale.start).getTime()+72*3600e3:0,left=end-n,begun=sale.start&&new Date(sale.start).getTime()<=n;
 let body;if(!sale.active||!sale.start)body=h("p",{style:{color:"var(--tx2)"}},"No sale is scheduled right now. Check back soon.");
 else if(left<=0)body=h("h3",{style:{fontSize:32}},"Sale Ended");
 else{const d=Math.floor(left/864e5),hr=Math.floor(left/36e5)%24,m=Math.floor(left/6e4)%60,s=Math.floor(left/1e3)%60;
  body=h("div",null,h("div",{className:"cd"},[["Days",d],["Hours",hr],["Minutes",m],["Seconds",s]].map(([l,v])=>h("div",{key:l},h("b",null,String(v).padStart(2,"0")),h("span",null,l)))),
  h("button",{className:"btn",onClick:()=>go("shop")},"Shop Sale"))}
 return h("section",{className:"sale"},h("div",{className:"eb"},"Limited time · 3 days"),h("h2",null,"Good Things Come at Great Prices."),h("p",{style:{color:"var(--tx2)"}},"Discover everyday essentials at prices worth grabbing."),body)}

function Shop({prods,cat,setCat,wl,tw,add,qv}){
 const[q,setQ]=useState(""),[pr,setPr]=useState(""),[so,setSo]=useState("");
 const list=useMemo(()=>{let l=prods.filter(p=>(!cat||p.cat===cat)&&p.title.toLowerCase().includes(q.toLowerCase()));
  if(pr){const[a,b]=pr.split("-").map(Number);l=l.filter(p=>p.price>=a&&p.price<=b)}
  if(so==="lo")l=[...l].sort((a,b)=>a.price-b.price);if(so==="hi")l=[...l].sort((a,b)=>b.price-a.price);if(so==="new")l=[...l].reverse();return l},[prods,cat,q,pr,so]);
 const sug=q&&prods.filter(p=>p.title.toLowerCase().includes(q.toLowerCase())).slice(0,4);
 return h("div",{className:"w sec"},h("h2",null,cat||"Shop All"),h("p",{style:{color:"var(--tx2)",margin:"-8px 0 14px"}},list.length+" products"),h("div",{className:"chips"},["",...CATS].map(c=>h("button",{key:c,className:"chip"+(cat===c?" on":""),onClick:()=>setCat(c)},c||"All"))),
  h("div",{className:"bar"},h("input",{placeholder:"Search products…",value:q,onChange:e=>setQ(e.target.value),list:"sg"}),h("datalist",{id:"sg"},(sug||[]).map(p=>h("option",{key:p.id,value:p.title}))),
   h("select",{value:cat,onChange:e=>setCat(e.target.value)},h("option",{value:""},"All categories"),CATS.map(c=>h("option",{key:c},c))),
   h("select",{value:pr,onChange:e=>setPr(e.target.value)},h("option",{value:""},"Any price"),h("option",{value:"99-150"},"₹99–₹150"),h("option",{value:"150-200"},"₹150–₹200"),h("option",{value:"200-250"},"₹200–₹250")),
   h("select",{value:so,onChange:e=>setSo(e.target.value)},h("option",{value:""},"Popular"),h("option",{value:"new"},"New arrivals"),h("option",{value:"lo"},"Price: low to high"),h("option",{value:"hi"},"Price: high to low"))),
  list.length?h("div",{className:"grid"},list.map(p=>h(Card,{key:p.id,p,wl,tw,add,qv}))):
  h("div",{className:"emp"},h("h3",null,"No verified products yet"),h("p",null,"Only products with a verified price between ₹99 and ₹250 are shown. Add and verify products in the Admin panel.")))}

function Quick({p,close,add,tw,wl}){const[q,setQ]=useState(1);
 return h("div",{className:"ov c",onClick:close},h("div",{className:"md",onClick:e=>e.stopPropagation()},
  h("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20}},
   h("div",{className:"im",style:{borderRadius:16}},p.img?h("img",{src:p.img,alt:p.title}):"Homezy"),
   h("div",{style:{display:"grid",gap:10,alignContent:"start"}},h("h2",{style:{fontSize:30}},p.title),h("div",{className:"pr"},rs(p.price),p.mrp>p.price&&h("s",null,rs(p.mrp))),
    h("p",{style:{color:"var(--tx2)",margin:0}},p.desc||"No description provided."),h("small",null,p.stock?p.stock+" in stock":"Out of stock"),h(Mini,{big:true}),
    h("div",{className:"q"},h("button",{onClick:()=>setQ(Math.max(1,q-1))},"−"),q,h("button",{onClick:()=>setQ(q+1)},"+")),
    h("button",{className:"btn",disabled:!p.stock,onClick:()=>{add(p.id,q);close()}},"Add to Cart"),
    h("button",{className:"btn o",onClick:()=>tw(p.id)},wl.includes(p.id)?"♥ Saved":"♡ Wishlist"),
    p.url&&h("a",{href:p.url,target:"_blank",rel:"noopener",style:{fontSize:13,color:"var(--acc)"}},"View source listing ↗")))))}

function Cart({cart,prods,setCart,close,go,sale,coup,setCoup}){
 const lines=cart.map(l=>({...l,p:prods.find(p=>p.id===l.id)})).filter(l=>l.p),sub=lines.reduce((s,l)=>s+l.p.price*l.q,0);
 const cp=sale.coupon&&coup.toUpperCase()===sale.coupon.code&&sale.active?sale.coupon:null,dis=cp?Math.round(sub*cp.pct/100):0,ship=sub&&sub<499?40:0;
 const upd=(id,d)=>setCart(cart.map(l=>l.id===id?{...l,q:l.q+d}:l).filter(l=>l.q>0));
 return h("div",{className:"ov",onClick:close},h("div",{className:"dr",onClick:e=>e.stopPropagation()},
  h("div",{style:{display:"flex",justifyContent:"space-between"}},h("h2",{style:{fontSize:28}},"Your Cart"),h("button",{className:"ib",onClick:close},"✕")),
  !lines.length?h("div",{className:"emp"},h("h3",null,"Your cart is empty"),h("p",null,"Add something lovely from the shop."),h("button",{className:"btn",onClick:()=>{close();go("shop")}},"Browse products")):
  [lines.map(l=>h("div",{className:"ln",key:l.id},h("div",{className:"im"},l.p.img?h("img",{src:l.p.img}):"H"),h("div",{style:{flex:1}},h("b",{style:{fontSize:13}},l.p.title),h("div",{className:"pr"},rs(l.p.price))),
   h("div",{className:"q"},h("button",{onClick:()=>upd(l.id,-1)},"−"),l.q,h("button",{onClick:()=>upd(l.id,1)},"+")))),
  h("input",{placeholder:"Coupon code",value:coup,onChange:e=>setCoup(e.target.value),style:{border:"1px solid var(--bd)",borderRadius:12,padding:10}}),
  h("div",{className:"tbl"},[["Subtotal",rs(sub)],["Shipping",ship?rs(ship):"Free"],["Coupon"+(cp?" ("+cp.code+")":""),"−"+rs(dis)]].map(([a,b])=>h("div",{className:"row",key:a},h("span",null,a),h("span",null,b))),h("div",{className:"row"},h("b",null,"Total"),h("b",null,rs(sub-dis+ship)))),
  h("button",{className:"btn",onClick:()=>{close();go("checkout")}},"Checkout")]))}

function Checkout({cart,prods,sale,coup,onDone,go}){
 const[f,setF]=useState({name:"",email:"",mobile:"",addr:"",city:"",state:"",pin:""}),[err,setErr]=useState("");
 const lines=cart.map(l=>({...l,p:prods.find(p=>p.id===l.id)})).filter(l=>l.p),sub=lines.reduce((s,l)=>s+l.p.price*l.q,0);
 const cp=sale.coupon&&coup.toUpperCase()===sale.coupon.code&&sale.active?sale.coupon:null,dis=cp?Math.round(sub*cp.pct/100):0,total=sub-dis+(sub<499?40:0);
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const sub_=()=>{if(!f.name||!/^\S+@\S+\.\S+$/.test(f.email)||!/^[6-9]\d{9}$/.test(f.mobile)||!f.addr||!f.city||!f.state||!/^\d{6}$/.test(f.pin))return setErr("Please complete all fields with a valid email, 10-digit mobile and 6-digit PIN.");
  onDone({id:"HZ"+Date.now().toString().slice(-8),date:new Date().toISOString(),cust:f,items:lines.map(l=>({id:l.id,t:l.p.title,q:l.q,pr:l.p.price})),total,pay:"Cash on Delivery",status:0})};
 if(!lines.length)return h("div",{className:"w sec"},h("div",{className:"emp"},h("h3",null,"Nothing to check out"),h("button",{className:"btn",onClick:()=>go("shop")},"Shop now")));
 return h("div",{className:"w sec",style:{maxWidth:700}},h("h2",null,"Checkout"),
  h("div",{className:"tbl f g2"},[["name","Full name"],["email","Email"],["mobile","Mobile"],["city","City"],["state","State"],["pin","PIN code"]].map(([k,l])=>h("label",{key:k},l,h("input",{value:f[k],onChange:set(k)}))),h("label",{style:{gridColumn:"1/-1"}},"Delivery address",h("textarea",{rows:2,value:f.addr,onChange:set("addr")}))),
  h("div",{className:"tbl"},h("div",{className:"row"},h("label",null,h("span",null,h("input",{type:"radio",checked:true,readOnly:true})," Cash on Delivery"))),
   h("div",{className:"row",style:{color:"var(--tx2)"}},"Razorpay · UPI · Cards — need the payment backend with server-side verification, so they are disabled here."),
   h("div",{className:"row"},h("b",null,"Total payable"),h("b",null,rs(total)))),
  err&&h("p",{style:{color:"#a4452c"}},err),h("button",{className:"btn",onClick:sub_},"Place Order"))}

function Orders({orders}){return h("div",{className:"w sec"},h("h2",null,"My Orders"),!orders.length?h("div",{className:"emp"},h("h3",null,"No orders yet")):orders.map(o=>h("div",{className:"tbl",key:o.id},
 h("div",{className:"row"},h("b",null,"#"+o.id),h("span",null,new Date(o.date).toLocaleDateString("en-IN")),h("b",null,rs(o.total))),
 o.items.map(i=>h("div",{key:i.id,style:{fontSize:13,color:"var(--tx2)"}},i.q+" × "+i.t)),
 o.status===6?h("p",{style:{color:"#a4452c"}},"Cancelled"):h("div",null,h("div",{className:"tr"},STAT.slice(0,6).map((s,i)=>h("i",{key:s,className:i<=o.status?"on":""}))),h("small",null,STAT[o.status])))))}

function Admin({prods,setProds,sale,setSale,orders,setOrders,toast}){
 const blank={id:"",title:"",desc:"",price:"",mrp:"",cat:CATS[0],img:"",stock:0,url:"",verified:false};
 const[f,setF]=useState(blank);const set=k=>e=>setF({...f,[k]:e.target.type==="checkbox"?e.target.checked:e.target.value});
 const save=()=>{const price=Number(f.price);if(!f.title)return toast("Title required");if(f.verified&&!(price>=99&&price<=250))return toast("Verified products need a price of ₹99–₹250");
  const p={...f,est:false,price:price||null,mrp:Number(f.mrp)||null,stock:Number(f.stock)||0,id:f.id||"P"+Date.now()};
  setProds(prods.some(x=>x.id===p.id)?prods.map(x=>x.id===p.id?p:x):[...prods,p]);setF(blank);toast("Saved")};
 const file=e=>{const r=new FileReader(),fl=e.target.files[0];if(!fl)return;if(fl.size>400e3)return toast("Image must be under 400 KB");r.onload=()=>setF({...f,img:r.result});r.readAsDataURL(fl)};
 const rev=orders.filter(o=>o.status<6).reduce((s,o)=>s+o.total,0);
 return h("div",{className:"w sec"},h("h2",null,"Admin"),
  h("div",{className:"tbl row"},[["Sales",rs(rev)],["Orders",orders.length],["Pending",orders.filter(o=>o.status<1).length],["Products",prods.length]].map(([a,b])=>h("div",{key:a},h("small",{style:{color:"var(--tx2)"}},a),h("div",{className:"serif",style:{fontSize:28}},b)))),
  h("div",{className:"tbl"},h("h3",{style:{fontSize:24,marginBottom:10}},"Products"),
   prods.map(p=>h("div",{className:"row",key:p.id},h("span",null,p.title||"ASIN "+p.asin," ",h("span",{className:"tag "+(ok(p)?"":"p")},ok(p)?(p.est?"price to confirm":"verified"):"pending review")),
    h("span",null,h("button",{className:"btn o s",onClick:()=>setF({...blank,...p,price:p.price||"",mrp:p.mrp||""})},"Edit")," ",h("button",{className:"btn o s",onClick:()=>setProds(prods.filter(x=>x.id!==p.id))},"Delete")))),
   h("h3",{style:{fontSize:20,margin:"16px 0 8px"}},f.id?"Edit product":"Add product"),
   h("div",{className:"f g2"},[["title","Title (from source)"],["price","Price ₹"],["mrp","Original price ₹ (if verified)"],["stock","Stock"],["url","Product / affiliate URL"]].map(([k,l])=>h("label",{key:k},l,h("input",{value:f[k],onChange:set(k)}))),
    h("label",null,"Category",h("select",{value:f.cat,onChange:set("cat")},CATS.map(c=>h("option",{key:c},c)))),
    h("label",{style:{gridColumn:"1/-1"}},"Description",h("textarea",{rows:2,value:f.desc,onChange:set("desc")})),
    h("label",null,"Image upload",h("input",{type:"file",accept:"image/*",onChange:file})),
    h("label",null,h("span",null,h("input",{type:"checkbox",checked:f.verified,onChange:set("verified")})," I verified price & details on an authorized source"))),
   h("p",null,h("button",{className:"btn",onClick:save},"Save product"))),
  h("div",{className:"tbl f g2"},h("h3",{style:{fontSize:24,gridColumn:"1/-1"}},"Sale (runs exactly 3 days from start)"),
   h("label",null,"Start",h("input",{type:"datetime-local",value:sale.start?sale.start.slice(0,16):"",onChange:e=>setSale({...sale,start:e.target.value?new Date(e.target.value).toISOString():""})})),
   h("label",null,h("span",null,h("input",{type:"checkbox",checked:sale.active,onChange:e=>setSale({...sale,active:e.target.checked})})," Active")),
   h("label",null,"Coupon code",h("input",{value:sale.coupon?.code||"",onChange:e=>setSale({...sale,coupon:{code:e.target.value.toUpperCase(),pct:sale.coupon?.pct||10}})})),
   h("label",null,"Coupon %",h("input",{type:"number",value:sale.coupon?.pct||10,onChange:e=>setSale({...sale,coupon:{code:sale.coupon?.code||"",pct:Number(e.target.value)}})}))),
  h("div",{className:"tbl"},h("h3",{style:{fontSize:24,marginBottom:8}},"Orders"),!orders.length&&h("small",null,"No orders yet."),orders.map(o=>h("div",{className:"row",key:o.id},h("span",null,"#"+o.id+" · "+o.cust.name+" · "+rs(o.total)),
   h("select",{value:o.status,onChange:e=>setOrders(orders.map(x=>x.id===o.id?{...x,status:+e.target.value}:x))},STAT.map((s,i)=>h("option",{key:s,value:i},s)))))))}

function App(){
 const[view,setView]=useState(()=>{const x=location.hash.slice(1);return["shop","wishlist","orders","admin"].includes(x)?x:"home"});
 const[prods,setProds]=useLS("prods2",SEED);useEffect(()=>{setProds(p=>{const ids=new Set(p.map(x=>x.id)),a=SEED.filter(x=>!x.asin&&!ids.has(x.id));return a.length?[...p,...a]:p})},[]);const[cart,setCart]=useLS("cart",[]),[wl,setWl]=useLS("wl",[]),[orders,setOrders]=useLS("orders",[]),[sale,setSale]=useLS("sale2",{start:new Date().toISOString(),active:true,coupon:null});
 const[cat,setCat]=useState(""),[cartOpen,setCO]=useState(false),[qv,setQv]=useState(null),[drawer,setDr]=useState(false),[coup,setCoup]=useState(""),[tt,setTt]=useState(""),[done,setDone]=useState(null),[sc,setSc]=useState(false);
 const toast=m=>{setTt(m);setTimeout(()=>setTt(""),2200)};
 useEffect(()=>{const f=()=>setSc(scrollY>600);addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
 const go=(v,c)=>{setView(v);setDr(false);if(c!==undefined)setCat(c);else if(v==="shop")setCat("");try{location.hash=v==="home"?"":v}catch(e){}scrollTo(0,0)};
 const live=prods.filter(ok),hp=["S1","S5","S8","S19"].map(i=>live.find(p=>p.id===i)).filter(Boolean);
 const add=(id,q=1)=>{setCart(c=>c.some(l=>l.id===id)?c.map(l=>l.id===id?{...l,q:l.q+q}:l):[...c,{id,q}]);toast("Added to cart")};
 const tw=id=>{setWl(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id])};
 const cnt=cart.reduce((s,l)=>s+l.q,0);
 const L=[["Home","home"],["Shop All","shop"],["Kitchen","shop","Kitchen Accessories"],["Home Essentials","shop","Home Utility"],["Cleaning","shop","Cleaning Essentials"],["Best Deals","shop"]];
 const nav=L.map(([t,v,c])=>h("a",{key:t,onClick:()=>go(v,c)},t));
 let page;
 if(view==="home")page=h("div",{className:"w"},
  h("section",{className:"hero"},h("div",{style:{display:"grid",gap:20}},h("div",{className:"eb"},"Smart Shopping. Happier Living."),h("h1",null,"Make Everyday Living Beautifully Simple."),h("p",null,"Discover smart home essentials and everyday kitchen favourites at prices you’ll love. Upgrade your home without stretching your budget."),
   h("div",{className:"bt"},h("button",{className:"btn",onClick:()=>go("shop")},"Explore Products"),h("button",{className:"btn o",onClick:()=>go("shop")},"Shop Best Deals"))),
   (hp.length===4?h("div",{className:"tiles"},hp.map((p,i)=>h("div",{key:p.id,className:"pt",style:{animationDelay:i*.12+"s"},onClick:()=>setQv(p)},h("img",{src:p.img,alt:p.title}),h("span",null,rs(p.price))))):null)||h("div",{className:"tiles"},[["₹99–₹250","Every product priced for everyday budgets","#DCE5DB"],["Verified","Only products with verified prices are listed","#F1EDE6"],["COD","Cash on Delivery available at checkout","#F1EDE6"],["Free shipping","On orders above ₹499","#EFE3DA"]].map(([a,b,c],i)=>h("div",{key:a,className:"tile",style:{background:c,animationDelay:i*.12+"s"}},h("b",null,a),h("span",null,b))))),
  h(Countdown,{sale,go}),
  h("section",{className:"sec"},h("h2",null,"Shop by Category"),h("div",{className:"cats"},CATS.map((c,i)=>h("button",{key:c,className:"cat",style:{background:TINT[i%3]},onClick:()=>go("shop",c)},(f=>f&&h("img",{className:"ci",src:f.img,alt:""}))(live.find(p=>p.cat===c&&p.img)),h("b",null,c),h("small",null,live.filter(p=>p.cat===c).length+" products"))))),
  h("section",{className:"sec"},h("h2",null,"Why Homezy Deals"),h("div",{className:"why"},[["🏠","Made for your home","Kitchen tools, storage, cleaning and everyday utilities in one place."],["₹","Prices that stay simple","Everything we list is priced between ₹99 and ₹250."],["✓","Easy ordering","Add to cart, enter your address and pay on delivery."]].map(([i,t,d])=>h("div",{key:t},h("i",null,i),h("h3",null,t),h("p",null,d)))),h("div",{className:"cta"},h("h2",null,"Smart Shopping. Happier Living."),h("button",{className:"btn",onClick:()=>go("shop")},"Start Shopping"))),
  live.length>0&&h("section",{className:"sec"},h("div",{className:"sh"},h("h2",null,"Best Deals"),h("a",{onClick:()=>go("shop")},"View all →")),h("div",{className:"grid"},[...live].sort((a,b)=>(b.mrp?1-b.price/b.mrp:0)-(a.mrp?1-a.price/a.mrp:0)).slice(0,8).map(p=>h(Card,{key:p.id,p,wl,tw,add,qv:setQv})))));
 else if(view==="shop")page=h(Shop,{prods:live,cat,setCat,wl,tw,add,qv:setQv});
 else if(view==="wishlist"){const l=live.filter(p=>wl.includes(p.id));page=h("div",{className:"w sec"},h("h2",null,"Wishlist"),l.length?h("div",{className:"grid"},l.map(p=>h(Card,{key:p.id,p,wl,tw,add,qv:setQv}))):h("div",{className:"emp"},h("h3",null,"Nothing saved yet"),h("p",null,"Tap the heart on any product to save it.")))}
 else if(view==="orders")page=h(Orders,{orders});
 else if(view==="checkout")page=h(Checkout,{cart,prods,sale,coup,go,onDone:o=>{setOrders([o,...orders]);setCart([]);setDone(o);go("orders")}});
 else page=h(Admin,{prods,setProds,sale,setSale,orders,setOrders,toast});
 return h(SaleC.Provider,{value:sale},h("div",null,
  h("div",{className:"ann"},"Free shipping above ₹499 · Cash on Delivery available · Everything ₹99–₹250"),h("header",null,h("div",{className:"w nav"},h("button",{className:"ib menu",onClick:()=>setDr(true)},"☰"),h(Logo,{go}),h("nav",{className:"links"},nav),
   h("div",{className:"sp"},h("button",{className:"ib",onClick:()=>go("shop")},"⌕"),h("button",{className:"ib",onClick:()=>go("wishlist")},"♡",wl.length>0&&h("span",{className:"bdg"},wl.length)),h("button",{className:"ib",onClick:()=>go("orders")},"👤"),h("button",{className:"ib",onClick:()=>setCO(true)},"🛍",cnt>0&&h("span",{className:"bdg"},cnt))))),
  drawer&&h("div",{className:"ov",onClick:()=>setDr(false)},h("div",{className:"dr",onClick:e=>e.stopPropagation(),style:{gap:18}},nav)),
  h("main",null,done&&h("div",{className:"w",style:{paddingTop:16}},h("div",{className:"tbl",style:{background:"var(--sage)"}},"Order #"+done.id+" placed. Thank you, "+done.cust.name+"! (Confirmation emails need the email backend.)",h("button",{className:"ib",onClick:()=>setDone(null)}," ✕"))),page),
  h("footer",null,h("div",{className:"w gr"},h("div",null,h(Logo,{go}),h("p",null,"Smart Shopping. Happier Living."),h("p",null,"Affordable home & kitchen products for Indian homes.")),
   h("div",null,h("b",null,"Shop"),CATS.slice(0,4).map(c=>h("a",{key:c,onClick:()=>go("shop",c),style:{cursor:"pointer"}},c))),
   h("div",null,h("b",null,"Account"),h("a",{onClick:()=>go("orders"),style:{cursor:"pointer"}},"My Orders"),h("a",{onClick:()=>go("admin"),style:{cursor:"pointer"}},"Admin")))),
  sc&&h("button",{className:"top",onClick:()=>scrollTo(0,0),"aria-label":"Back to top"},"↑"),
  cartOpen&&h(Cart,{cart,prods,setCart,close:()=>setCO(false),go,sale,coup,setCoup}),
  qv&&h(Quick,{p:qv,close:()=>setQv(null),add,tw,wl}),tt&&h("div",{className:"toast"},tt)))}
export default App;
