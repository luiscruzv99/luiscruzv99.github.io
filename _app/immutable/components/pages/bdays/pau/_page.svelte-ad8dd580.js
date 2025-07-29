import{S as g,i as b,s as w,e as d,a as m,H as X,B as u,h as Y,b as x,d as _,f as s,g as f,k as j,C as M,l as T,m as y,n as l,x as h}from"../../../../chunks/index-eeccefe1.js";const C=`<html>\r
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
        const sprites = ['🐮', '🐭', '🐰', '🐱', '🐴', '🐶', '🐷', '🐹', '🐤', '🍰', '🎂', '🍰', '🎂', '🍰', '🎂']\r
\r
        const enemies = ['🍰', '🎂']\r
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
                    context.fillText("Arrastra el dedo por la pantalla", 500, 200)\r
                    context.fillText("Come las tartas (🎂)", 500, 400)\r
                    context.fillText("Evita los animales (🐶)", 500, 500)\r
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
                    context.fillText("🎉🎊Feliz Cumpleaños Pau 🎊🎉", 500, 333)\r
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
</html>`;function S(v){let e,c,r,p="Tartas en Alpartir",i,o,a;return{c(){e=d("html"),c=m(),r=d("h1"),r.textContent=p,i=m(),o=new X(!1),a=u(),this.h()},l(n){const t=Y("svelte-1blhmr3",document.head);e=x(t,"HTML",{lang:!0}),_(e).forEach(s),t.forEach(s),c=f(n),r=x(n,"H1",{"data-svelte-h":!0}),j(r)!=="svelte-1o7e35v"&&(r.textContent=p),i=f(n),o=M(n,!1),a=u(),this.h()},h(){document.title="Feliz Cumple, Pau",T(e,"lang","en"),o.a=a},m(n,t){y(document.head,e),l(n,c,t),l(n,r,t),l(n,i,t),o.m(C,n,t),l(n,a,t)},p:h,i:h,o:h,d(n){n&&(s(c),s(r),s(i),s(a),o.d()),s(e)}}}class k extends g{constructor(e){super(),b(this,e,null,S,w,{})}}export{k as default};
