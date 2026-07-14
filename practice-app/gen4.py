# -*- coding: utf-8 -*-
import math
W=1440
SER="Cormorant Garamond Light"; SANS="Jost"
CREAM="#efece6"; INK="#2c271f"; DARK="#17140f"; ACC="#b06a3c"; MUT="#928879"; LINE="#dcd6cb"
A="assets/images/"
def esc(t): return t.replace("&","&amp;")
def img(s,x,y,w,h,href,clip):
    s.append(f'<clipPath id="{clip}"><rect x="{x}" y="{y}" width="{w}" height="{h}"/></clipPath>')
    s.append(f'<image x="{x}" y="{y}" width="{w}" height="{h}" href="{href}" '
             f'preserveAspectRatio="xMidYMid slice" clip-path="url(#{clip})"/>')
def track(s,x,y,txt,size=12,fill=MUT,ls=3.0,anchor="start"):
    s.append(f'<text x="{x}" y="{y}" font-family="{SANS}" font-size="{size}" fill="{fill}" letter-spacing="{ls}" text-anchor="{anchor}">{esc(txt)}</text>')
def serif(s,x,y,txt,size,fill=INK,style="normal",weight="400",anchor="start",ls=0):
    s.append(f'<text x="{x}" y="{y}" font-family="{SER}" font-size="{size}" fill="{fill}" font-style="{style}" font-weight="{weight}" text-anchor="{anchor}" letter-spacing="{ls}">{esc(txt)}</text>')
def pill(s,cx,y,w_,h_,label):
    s.append(f'<rect x="{cx-w_/2}" y="{y}" width="{w_}" height="{h_}" rx="{h_/2}" fill="{ACC}"/>')
    serif(s,cx,y+h_/2+8,label,21,"#f7f2ea",anchor="middle")
def play(s,cx,cy,r,c="#f7f2ea"):
    pts=f"{cx-r*0.3},{cy-r*0.48} {cx-r*0.3},{cy+r*0.48} {cx+r*0.52},{cy}"
    s.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{c}" stroke-width="1.3"/><polygon points="{pts}" fill="{c}"/>')
def wrap(s,txt,x,y,size,fill,maxc,lh,anchor="start",style="normal"):
    line="";yy=y
    for wd in txt.split():
        if len(line)+len(wd)>maxc: serif(s,x,yy,line.strip(),size,fill,style=style,anchor=anchor);line=wd+" ";yy+=lh
        else:line+=wd+" "
    serif(s,x,yy,line.strip(),size,fill,style=style,anchor=anchor);return yy

def build():
    H=4300
    s=[f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H}" viewBox="0 0 {W} {H}">','<defs>']
    s.append('<linearGradient id="vg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.55"/></linearGradient>')
    s.append('</defs>')
    s.append(f'<rect width="{W}" height="{H}" fill="{CREAM}"/>')
    # NAV
    x=80
    for n in ["WORK","FILMS","PHOTOGRAPHY"]:
        track(s,x,60,n,12,INK,2.2); x+=len(n)*(12*0.86+2.2)+50
    serif(s,W/2,66,"anmol",30,INK,anchor="middle",ls=1)
    rx=W-80
    for n in ["CONTACT","JOURNAL","ABOUT"]:
        track(s,rx,60,n,12,INK,2.2,anchor="end"); rx-=len(n)*(12*0.86+2.2)+50
    s.append(f'<line x1="80" y1="96" x2="{W-80}" y2="96" stroke="{LINE}"/>')
    # HERO
    track(s,80,222,"CALIFORNIA WEDDING & EVENT FILMS   —   EST. 2014",12,MUT,3)
    serif(s,74,362,"Moments made",120,INK,weight="500")
    serif(s,74,486,"to be",120,INK,weight="500")
    serif(s,74+283,486,"felt.",120,ACC,style="italic",weight="500")
    wrap(s,"A California video production studio crafting cinematic films for luxury weddings, landmark events and the moments that deserve to be remembered.",80,566,25,MUT,66,34)
    track(s,W-80,706,"( SCROLL TO EXPLORE )",12,MUT,3,anchor="end")
    # SHOWREEL (video poster)
    y=770;h=620
    img(s,0,y,W,h,A+"poster-hero.jpg","c_hero")
    s.append(f'<rect x="0" y="{y}" width="{W}" height="{h}" fill="#140f08" opacity="0.34"/>')
    play(s,W/2,y+h/2,46)
    track(s,W/2,y+h/2+96,"WATCH THE 2026 SHOWREEL",12,"#f7f2ea",3.2,anchor="middle")
    track(s,80,y+h-38,"NAPA VALLEY  ·  FILM",11,"#f2ece2",2.6)
    s.append(f'<rect x="{W-210}" y="{y+h-64}" width="130" height="34" rx="17" fill="none" stroke="#f2ece2" opacity="0.6"/>')
    track(s,W-145,y+h-42,"SOUND OFF",10,"#f2ece2",2,anchor="middle")
    # TWO-UP
    ty=1450;th=560;gap=24;cw=(W-160-gap)/2
    img(s,80,ty,cw,th,A+"films-poster.jpg","c_films")
    s.append(f'<rect x="80" y="{ty}" width="{cw}" height="{th}" fill="url(#vg1)"/>')
    play(s,80+cw/2,ty+th/2-34,34,"#f2ece2")
    serif(s,80+cw/2,ty+th-72,"Films",72,"#f4efe6",anchor="middle")
    track(s,80+cw/2,ty+th-40,"CINEMATIC WEDDING & EVENT FILMS",11,"#e7ddcd",2.8,anchor="middle")
    px=80+cw+gap
    img(s,px,ty,cw,th,A+"photo-tile.jpg","c_photo")
    s.append(f'<rect x="{px}" y="{ty}" width="{cw}" height="{th}" fill="url(#vg1)"/>')
    serif(s,px+cw/2,ty+th-72,"Photography",72,"#f4efe6",anchor="middle")
    track(s,px+cw/2,ty+th-40,"EDITORIAL STILLS & PORTRAITURE",11,"#efe6d8",2.8,anchor="middle")
    # APPROACH
    ay=2090;ah=620
    img(s,0,ay,W,ah,A+"approach.jpg","c_appro")
    s.append(f'<rect x="0" y="{ay}" width="{W}" height="{ah}" fill="#140f08" opacity="0.5"/>')
    track(s,W/2,ay+112,"OUR APPROACH",12,"#e9ddc9",3.4,anchor="middle")
    wrap(s,"Documentary at heart. We blend candid moments with thoughtful direction — letting your day breathe and capturing the emotion, movement and quiet in-between moments that make the story uniquely yours.",W/2,ay+184,35,"#f6f0e6",58,48,anchor="middle")
    pill(s,W/2,ay+ah-150,330,58,"View Investment & Packages")
    # WORK
    wy=2820
    track(s,80,wy,"SELECTED WORK",12,MUT,3.4)
    serif(s,80,wy+58,"Recent stories",48,INK,weight="500")
    track(s,W-80,wy+42,"VIEW ALL   →",12,INK,2.6,anchor="end")
    cells=[("work1.jpg","The Napa Estate","Wedding Film"),("work2.jpg","Aurora Gala","Event Film"),("work3.jpg","Coastal Elopement","Film & Photo")]
    gy=wy+94;gw=(W-160-48)/3;gx=80;i=0
    for fn,t,tag in cells:
        img(s,gx,gy,gw,360,A+fn,f"c_w{i}")
        s.append(f'<rect x="{gx}" y="{gy}" width="{gw}" height="360" fill="#000" opacity="0.12"/>')
        play(s,gx+gw/2,gy+180,26,"#f4efe6")
        serif(s,gx,gy+402,t,30,INK); track(s,gx,gy+430,tag.upper(),10,MUT,2.6)
        gx+=gw+24;i+=1
    # KIND WORDS
    ky=3400;kh=560;lw=W*0.52
    s.append(f'<rect x="0" y="{ky}" width="{lw}" height="{kh}" fill="{DARK}"/>')
    img(s,lw,ky,W-lw,kh,A+"testimonial.jpg","c_kw")
    track(s,90,ky+80,"KIND WORDS",12,ACC,3.4)
    wrap(s,"They turned our wedding into a film we will treasure forever. Calm, discreet and utterly world-class — every frame feels like us.",90,ky+168,31,"#efe7d9",42,46,style="italic")
    serif(s,90,ky+kh-92,"Priya & Arjun",27,"#e7dcc9",style="italic")
    track(s,90,ky+kh-64,"NAPA VALLEY WEDDING",10,"#8c8172",2.8)
    for cx,ar in [(120,"←"),(180,"→")]:
        s.append(f'<circle cx="{cx}" cy="{ky+kh-30}" r="20" fill="none" stroke="#4a4238"/>')
        s.append(f'<text x="{cx}" y="{ky+kh-24}" font-family="{SANS}" font-size="16" fill="#d8ccb8" text-anchor="middle">{ar}</text>')
    # CTA
    cty=4080
    track(s,W/2,cty-70,"BOOKING 2026 & 2027",12,MUT,3.4,anchor="middle")
    serif(s,W/2,cty,"Let’s tell the story",66,INK,weight="500",anchor="middle")
    serif(s,W/2,cty+74,"of your day.",66,ACC,style="italic",weight="500",anchor="middle")
    pill(s,W/2,cty+120,240,60,"Make an Inquiry")
    # FOOTER
    fy=H-96
    s.append(f'<line x1="80" y1="{fy-40}" x2="{W-80}" y2="{fy-40}" stroke="{LINE}"/>')
    serif(s,80,fy,"anmol",26,INK,ls=2)
    track(s,80,fy+26,"LOS ANGELES · SAN FRANCISCO · WORLDWIDE",10,MUT,2.4)
    track(s,W-80,fy-6,"INSTAGRAM    VIMEO    YOUTUBE",11,INK,2.4,anchor="end")
    track(s,W-80,fy+22,"HELLO@ANMOLVP.COM   ·   +1 (415) 555-0100",10,MUT,2.2,anchor="end")
    s.append('</svg>')
    return "".join(s)
open("preview.svg","w").write(build()); print("ok")
