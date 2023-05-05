import{S as Y,i as X,s as _,k as m,a as u,q as j,Y as M,e as f,V as T,l as x,m as v,h as r,c as b,r as y,Z as E,n as S,D as g,b as l,B as p}from"../../../../chunks/index-2ce92430.js";const k=`<html>\r
\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
\r
<style>\r
    canvas {\r
        margin: auto;\r
        width: 30vw;\r
        border: 1px solid black;\r
        background-color: lightgreen;\r
    }\r
\r
    @media only screen and (max-width: 600px){\r
    canvas{\r
        width: 90vw;\r
    }\r
    }\r
</style>\r
\r
\r
<body>\r
    <canvas id="canvas" width="1000" height="1200"> </canvas>\r
\r
    <script>\r
        let canvas = document.getElementById("canvas");\r
        let context = canvas.getContext("2d");\r
\r
        const rect = canvas.getBoundingClientRect()\r
        const scaleX = canvas.width / rect.width;\r
        const scaleY = canvas.height / rect.height;\r
\r
        const sprites = ['\u{1F42E}', '\u{1F42D}', '\u{1F430}', '\u{1F431}', '\u{1F434}', '\u{1F436}', '\u{1F437}', '\u{1F439}', '\u{1F424}', '\u{1F370}', '\u{1F382}', '\u{1F370}', '\u{1F382}', '\u{1F370}', '\u{1F382}']\r
\r
        const enemies = ['\u{1F370}', '\u{1F382}']\r
        let baseSpeed = 3\r
        let maxMobs = 3\r
        const rotSpeed = Math.PI / 64\r
\r
        let objects = []\r
        let score = 0\r
\r
        let state = 0\r
        let counter = 10\r
\r
        context.font = "80px Dosis";\r
\r
        function init() {\r
            objects.push(new_obj())\r
        }\r
\r
        function new_obj() {\r
            return {\r
                sprite: sprites[Math.floor(Math.random() * sprites.length)],\r
                posX: Math.floor(Math.random() * canvas.width),\r
                posY: canvas.height + 64,\r
                spX: baseSpeed * ((Math.random() * 2) - 1),\r
                spY: baseSpeed * ((Math.random() * 2) - 1),\r
                rot: rotSpeed * ((Math.random() * 2) - 1),\r
            }\r
        }\r
\r
        function update() {\r
            switch (state) {\r
                case 0:\r
                    context.clearRect(0, 0, canvas.width, canvas.height);\r
                    context.textAlign = "center";\r
                    context.textBaseline = "middle";\r
                    context.fillText("Come las tartas (\u{1F382})", 500, 250)\r
                    context.fillText("Evita los animales (\u{1F436})", 500, 350)\r
                    context.fillText(counter, 500, 750)\r
                    if (counter < 0 ) state = 1\r
                    break;\r
\r
                case 1:\r
                    context.clearRect(0, 0, canvas.width, canvas.height);\r
                    objects.forEach(e => {\r
                        context.save();\r
                        context.textAlign = "center";\r
                        context.textBaseline = "middle";\r
                        move_sprite(e);\r
                        rotate_sprite(e);\r
                        context.fillText(e.sprite, 0, 0)\r
                        context.restore();\r
                    });\r
\r
                    context.fillText("Puntos: " + score, 800, 70)\r
\r
                    objects = objects.filter(e =>\r
                        e.posX > -80 &&\r
                        e.posX < canvas.width + 80 &&\r
                        e.posY > -80 &&\r
                        e.posY < canvas.height + 80)\r
\r
                    if (objects.length < maxMobs) {\r
                        objects.push(new_obj())\r
                    }\r
\r
                    if (score >= 10) {\r
                        state = 2\r
                    }\r
                    break;\r
                case 2:\r
                    context.font = "64px Dosis";\r
                    context.clearRect(0, 0, canvas.width, canvas.height);\r
                    context.fillText("\u{1F389}\u{1F38A}Feliz Cumplea\xF1os Pau \u{1F38A}\u{1F389}", 500, 333)\r
                    context.fillText("Recarga para jugar de nuevo", 500, 666)\r
                    break;\r
            }\r
\r
        }\r
\r
        function rotate_sprite(sprite) {\r
\r
            sprite.rot += rotSpeed\r
            context.rotate(sprite.rot)\r
\r
        }\r
\r
        function move_sprite(sprite) {\r
            sprite.posX += sprite.spX\r
            sprite.posY += sprite.spY\r
\r
            context.translate(sprite.posX, sprite.posY)\r
\r
        }\r
\r
        function mouse(e){\r
            if (e.buttons == 1) {\r
                listen_input(e.clientX, e.clientY)\r
                console.log(e)\r
            }\r
        }\r
\r
        function touch(e){\r
            listen_input(e.touches[0].clientX, e.touches[0].clientY)\r
        }\r
        \r
        function listen_input(clientX, clientY) {\r
\r
                const lowX = (clientX - rect.left - 20) * scaleX\r
                const highX = (clientX - rect.left + 20) * scaleX\r
                const lowY = (clientY - rect.top - 20) * scaleY\r
                const highY = (clientY - rect.top + 20) * scaleY\r
                deleted = objects.filter(o => (o.posX > lowX && o.posX < highX) && (o.posY > lowY && o.posY < highY))\r
                objects = objects.filter(o => (o.posX < lowX || o.posX > highX) || (o.posY < lowY || o.posY > highY))\r
\r
                deleted.forEach(e => {\r
                    if (enemies.includes(e.sprite)) {\r
                        score += 1\r
                        baseSpeed += 1\r
                        maxMobs += 1\r
                    } else {\r
                        score -= 1\r
                    }\r
                });\r
        }\r
\r
        function countDown(){\r
            counter--;\r
        }\r
\r
        init()\r
        addEventListener("mousemove", mouse);\r
        addEventListener("touchmove", touch);\r
\r
        setInterval(update, 16)\r
        setInterval(countDown, 1000)\r
        console.log(objects)\r
    <\/script>\r
</body>\r
\r
</html>`;function C(w){let e,c,s,h,i,o,a;return{c(){e=m("html"),c=u(),s=m("h1"),h=j("Tartas en Alpartir"),i=u(),o=new M(!1),a=f(),this.h()},l(n){const t=T("svelte-1blhmr3",document.head);e=x(t,"HTML",{lang:!0}),v(e).forEach(r),t.forEach(r),c=b(n),s=x(n,"H1",{});var d=v(s);h=y(d,"Tartas en Alpartir"),d.forEach(r),i=b(n),o=E(n,!1),a=f(),this.h()},h(){document.title="Feliz Cumple, Pau",S(e,"lang","en"),o.a=a},m(n,t){g(document.head,e),l(n,c,t),l(n,s,t),g(s,h),l(n,i,t),o.m(k,n,t),l(n,a,t)},p,i:p,o:p,d(n){r(e),n&&r(c),n&&r(s),n&&r(i),n&&r(a),n&&o.d()}}}class D extends Y{constructor(e){super(),X(this,e,null,C,_,{})}}export{D as default};
