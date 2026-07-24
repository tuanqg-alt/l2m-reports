const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.defineLayout({ name: 'SQUARE', width: 7.5, height: 7.5 });
pres.layout = 'SQUARE';

const BG='F5F4F0',ZONE_BG='EBEBEB',ZONE_DK='D8D5CC',BORDER='999999';
const LABEL='444444',LABEL_S='888888',ACCENT='333333';
const RED_URG='CC2010',GREEN_PO='2A6018',WHITE='FFFFFF';
const TIER_LEG='8040C0',TIER_EPI='C02020';

const s = pres.addSlide();
function zl(t,y){ s.addText(t,{x:0.06,y:y+0.02,w:1.8,h:0.12,fontSize:5,color:'CCCCCC',fontFace:'Calibri',align:'left'}); }
function rect(x,y,w,h,fill,bc,bw){ s.addShape(pres.ShapeType.rect,{x,y,w,h,fill:{color:fill},line:{color:bc||fill,width:bw||0}}); }

// BG
rect(0,0,7.5,7.5,BG,BG,0);

// TOP BAR y=0.00 h=0.28
rect(0,0,7.5,0.28,ZONE_DK,BORDER,0.5); zl('TOP BAR',0);
rect(0.15,0.04,1.50,0.20,WHITE,BORDER,0.5);
s.addText('[Logo Lineage2M]',{x:0.15,y:0.04,w:1.50,h:0.20,fontSize:7,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});
rect(5.80,0.04,1.55,0.20,WHITE,BORDER,0.5);
s.addText('[NCV Games x NC]',{x:5.80,y:0.04,w:1.55,h:0.20,fontSize:7,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});

// TITLE y=0.32 h=0.60
rect(0,0.32,7.5,0.60,ZONE_BG,BORDER,0.5); zl('TITLE',0.32);
s.addText('ĐẤU TRƯỚNG BĂNG TUYẾT',{x:0.20,y:0.40,w:7.10,h:0.44,fontSize:26,bold:true,color:ACCENT,fontFace:'Calibri',align:'center',valign:'middle'});

// DATE BAR y=0.96 h=0.30
rect(0,0.96,7.5,0.30,ZONE_DK,BORDER,0.5); zl('DATE BAR',0.96);
rect(0.20,1.02,2.20,0.20,RED_URG,RED_URG,0);
s.addText('05/05 – 19/05',{x:0.20,y:1.02,w:2.20,h:0.20,fontSize:11,bold:true,color:WHITE,fontFace:'Calibri',align:'center',valign:'middle'});
s.addText('Y\xeau cầu: Nh\xe2n vật Lv.70+',{x:3.40,y:1.02,w:3.90,h:0.20,fontSize:10,color:LABEL,fontFace:'Calibri',align:'right',valign:'middle'});

// FLOW STEPS y=1.30 h=1.94  (card y_end=3.16 < zone_end 3.24)
rect(0,1.30,7.5,1.94,ZONE_BG,BORDER,0.5); zl('FLOW STEPS',1.30);

const CARD_Y=1.44,CARD_H=1.72,CARD_W=2.12;
const steps=[
  {num:'01',title:'ĐĂNG KÝ',b1:'Đăng k\xfd qua NPC',b2:'tại th\xe0nh phố ch\xednh',x:0.18},
  {num:'02',title:'CHIẾN ĐẤU',b1:'Tối đa 5 trận/ng\xe0y',b2:'Thu thập Ice Token',x:2.54},
  {num:'03',title:'ĐỔI THƯỞNG',b1:'D\xf9ng Ice Token',b2:'tại Merchant',x:4.90},
];
steps.forEach((step,i)=>{
  rect(step.x,CARD_Y,CARD_W,CARD_H,WHITE,BORDER,0.6);
  // badge (centered)
  const bx=step.x+(CARD_W-0.54)/2;
  rect(bx,CARD_Y+0.10,0.54,0.26,ACCENT,ACCENT,0);
  s.addText(step.num,{x:bx,y:CARD_Y+0.10,w:0.54,h:0.26,fontSize:10,bold:true,color:WHITE,fontFace:'Calibri',align:'center',valign:'middle'});
  // icon
  rect(step.x+0.46,CARD_Y+0.44,1.20,0.52,ZONE_BG,BORDER,0.5);
  s.addText('[Icon]',{x:step.x+0.46,y:CARD_Y+0.44,w:1.20,h:0.52,fontSize:8,italic:true,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});
  // title  y_start=CARD_Y+1.04
  s.addText(step.title,{x:step.x+0.08,y:CARD_Y+1.04,w:CARD_W-0.16,h:0.28,fontSize:11,bold:true,color:ACCENT,fontFace:'Calibri',align:'center',valign:'middle'});
  // body line 1  y=CARD_Y+1.38
  s.addText(step.b1,{x:step.x+0.08,y:CARD_Y+1.38,w:CARD_W-0.16,h:0.17,fontSize:8.5,color:LABEL,fontFace:'Calibri',align:'center',valign:'middle'});
  // body line 2  y=CARD_Y+1.55  (end=1.72=CARD_H, tight but no overflow)
  s.addText(step.b2,{x:step.x+0.08,y:CARD_Y+1.55,w:CARD_W-0.16,h:0.14,fontSize:8.5,color:LABEL,fontFace:'Calibri',align:'center',valign:'top'});
  // arrow (single > in wider box)
  if(i<2){
    s.addText('>',{x:step.x+CARD_W+0.05,y:CARD_Y+0.58,w:0.17,h:0.30,fontSize:16,bold:true,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});
  }
});

// VISUAL BREAK y=3.28 h=0.52
rect(0,3.28,7.5,0.52,ZONE_DK,BORDER,0.5); zl('VISUAL BREAK',3.28);
s.addText('[Artwork: Cảnh đấu trường băng tuyết — tone xanh tối, hiệu ứng băng, kh\xf4ng kh\xed chiến đấu]',{x:0.20,y:3.36,w:7.10,h:0.36,fontSize:9,italic:true,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});

// REWARD HEADER y=3.84 h=0.26
rect(0,3.84,7.5,0.26,GREEN_PO,GREEN_PO,0);
s.addText('REWARD HDR',{x:0.06,y:3.84,w:1.8,h:0.12,fontSize:5,color:'88CC88',fontFace:'Calibri',align:'left'});
s.addText('PHẦN THƯỜNG NỔI BẬT',{x:0.20,y:3.87,w:7.10,h:0.20,fontSize:12,bold:true,color:WHITE,fontFace:'Calibri',align:'center',valign:'middle'});

// REWARD ITEMS y=4.14 h=1.80
rect(0,4.14,7.5,1.80,ZONE_BG,BORDER,0.5); zl('REWARD ITEMS',4.14);
const ITEM_Y=4.24,ITEM_H=1.62,ITEM_W=3.00;
// ITEM_Y+ITEM_H=5.86 < zone_end 5.94  OK
// contents: badge(0.26)+gap(0.06)+img(0.76)+gap(0.06)+name(0.28)+gap(0.04)+bonus(0.16)=1.62  OK

const items=[
  {tier:'LEGEND',tc:TIER_LEG,
   img:'[Artwork: Gi\xe1p Băng Tuyết\nitem render, tier t\xedm]',
   name:'Gi\xe1p Băng Tuyết',bonus:'+10 chỉ số bonus stats',x:0.50},
  {tier:'EPIC',tc:TIER_EPI,
   img:'[Artwork: Vũ kh\xed Băng Tuyết\nitem render, tier đỏ]',
   name:'Vũ kh\xed Băng Tuyết',bonus:'Mỗi class c\xf3 1 loại ri\xeang',x:4.00},
];
items.forEach(item=>{
  rect(item.x,ITEM_Y,ITEM_W,ITEM_H,WHITE,item.tc,2.0);
  rect(item.x,ITEM_Y,ITEM_W,0.26,item.tc,item.tc,0);
  s.addText(item.tier,{x:item.x,y:ITEM_Y,w:ITEM_W,h:0.26,fontSize:10,bold:true,color:WHITE,fontFace:'Calibri',align:'center',valign:'middle'});
  // image placeholder
  rect(item.x+0.20,ITEM_Y+0.32,ITEM_W-0.40,0.76,ZONE_BG,BORDER,0.5);
  s.addText(item.img,{x:item.x+0.20,y:ITEM_Y+0.32,w:ITEM_W-0.40,h:0.76,fontSize:8,italic:true,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});
  // name  y=ITEM_Y+1.14
  s.addText(item.name,{x:item.x+0.10,y:ITEM_Y+1.14,w:ITEM_W-0.20,h:0.28,fontSize:11,bold:true,color:ACCENT,fontFace:'Calibri',align:'center',valign:'middle'});
  // bonus  y=ITEM_Y+1.46  (gap 0.04 from name bottom 1.42)
  s.addText(item.bonus,{x:item.x+0.10,y:ITEM_Y+1.46,w:ITEM_W-0.20,h:0.14,fontSize:8.5,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});
  // bonus y_end = ITEM_Y+1.60 < ITEM_H 1.62  OK
});

// TAGLINE y=5.98 h=0.38
rect(0,5.98,7.5,0.38,ZONE_BG,BORDER,0.5); zl('TAGLINE',5.98);
s.addText('Chiến đấu để gi\xe0nh vật phẩm huyền thoại — Chỉ c\xf3 trong 14 ng\xe0y!',{x:0.20,y:6.04,w:7.10,h:0.26,fontSize:11,color:LABEL,fontFace:'Calibri',align:'center',valign:'middle'});

// FOOTER y=6.40 h=1.10
rect(0,6.40,7.5,1.10,ZONE_DK,BORDER,0.5); zl('FOOTER',6.40);
rect(2.55,6.62,2.40,0.62,WHITE,BORDER,0.5);
s.addText('[Logo Lineage2M ch\xednh thức\nHigh-res PNG]',{x:2.55,y:6.62,w:2.40,h:0.62,fontSize:8,italic:true,color:LABEL_S,fontFace:'Calibri',align:'center',valign:'middle'});

pres.writeFile({fileName:'/sessions/admiring-awesome-wozniak/mnt/outputs/DauTruongBangTuyet_LAYOUT_v3.pptx'})
  .then(()=>console.log('DONE')).catch(e=>console.error(e));
