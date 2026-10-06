// Reveal on scroll
(function(){var els=document.querySelectorAll('.rv');
 if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
 els.forEach(function(e){io.observe(e)});})();
// Slow, light snow
(function(){
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 var c=document.getElementById('snow'),x=c.getContext('2d'),w,h,f=[],n=55;
 function size(){var d=Math.min(window.devicePixelRatio||1,2);w=c.width=innerWidth*d;h=c.height=innerHeight*d;x.setTransform(1,0,0,1,0,0);x.scale(d,d);w/=d;h/=d}
 size();addEventListener('resize',size);
 for(var i=0;i<n;i++)f.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+.6,s:Math.random()*.35+.15,d:Math.random()*Math.PI*2});
 var run=true;document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run)tick()});
 function tick(){if(!run)return;x.clearRect(0,0,w,h);x.fillStyle='rgba(255,255,255,.55)';
  f.forEach(function(p){p.y+=p.s;p.d+=.008;p.x+=Math.sin(p.d)*.25;if(p.y>h+5){p.y=-5;p.x=Math.random()*w}
   x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill()});requestAnimationFrame(tick)}
 tick();})();
