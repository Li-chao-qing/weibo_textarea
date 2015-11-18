window.onload=function(){
var textarea=document.getElementById('textarea');
var publish=document.getElementById('publish');
var shuzi=document.getElementById('shuzi');
var zishu=document.getElementById('zishu');
var content=document.getElementById('content');

// var liang=true;
var LM=140;
var chaochu='已超出';
var  keyi='还可输入';
textarea.onfocus=function(){
	zishu.innerHTML=keyi+LM+'字';
	if(!textarea.hasAttribute('hasLetter')){
		textarea.setAttribute('hasLetter',true);
		this.value='';
		// liang=false;
	}
	this.style.color='black';
	this.style.border='1px solid #BB7122';
};
textarea.onblur=function(){
	if(this.value==''){zishu.innerHTML='热门微博';
	this.style.color='#ccc';this.value='输入内容';
	textarea.removeAttribute('hasLetter');
	}
	this.style.border='1px solid #B7B7B7';
};
var geshu;

var panduan=function(e){
	geshu=LM-this.value.length;
	if(geshu<0){geshu=Math.abs(geshu);zishu.innerHTML=chaochu+geshu+'字';}
	
	else{zishu.innerHTML=keyi+geshu+'字';}
	if(this.value.length>0&&this.value.length<=140){
		publish.style.opacity='0.8';
		publish.style.cursor='pointer';
	}else{
		publish.style.opacity='0.5';
		publish.style.cursor='text';
	}
	// if(){}
		// if(this.value.length>0&&this.value.length<=140){
		
		// geshu=140-this.value.length;
		// console.log(geshu);
		// zishu.innerHTML=keyi+geshu+'字';
		// publish.style.opacity='0.8';
		// // mmm=0;
	
		// }
		// else if(this.value.length==0){
			
		// 	zishu.innerHTML=keyi+140+'字';
		// 	textarea.value='';

		// 	publish.style.opacity='0.5'
			
		// }
		// else if(this.value.length>140){
		// 	// if(e.keyCode==8){mmm--;
		// 	// 	console.log(mmm);
		// 	// }else{
		// 	// 	mmm++;
		// 	// 	console.log(mmm);
		// 	// }
		// 	zishu.innerHTML=chaochu+geshu+'字';
			
			
		// }


		console.log(this.value);


};
textarea.onkeyup=panduan;
textarea.onkeydown=panduan;
// var kaik=true;
content.onclick=function(e){

		
		//没有id
			
			if(e.target.getAttribute('class')=='zan'){
				e.target.style.webkitTransform='scale(1.2)';
				e.target.style.color='#FF7000';
				e.target.style.background=' url("./images/icon_05.png") no-repeat 0 2px';
				e.target.style.webkitTransition='all 0.5s ease';
				if(!e.target.hasAttribute('data')){
					e.target.setAttribute('data',1);
				e.target.innerHTML=Number(e.target.innerHTML)+1;
			
				}
				else{
					e.target.removeAttribute('data');
					e.target.innerHTML=Number(e.target.innerHTML)-1;
				}
				setTimeout(function(){
					e.target.style.color='black';
					e.target.style.background=' url("./images/icon_03.gif") no-repeat 0 2px';
					e.target.style.webkitTransform='scale(1)';
				},500);
			}
		// else{
			
		// 	if(e.target.getAttribute('class')=='zan'){
		// 		e.target.removeAttribute('data');
		// 	e.target.innerHTML=Number(e.target.innerHTML)-1;
			
		// 	}
		// }
	
	

}



publish.onclick=function(){
	if(this.style.opacity=='0.8'&&textarea.value.length<=140){
		var div=document.createElement('div');
		div.setAttribute('class','con');
		// div.setAttribute('id','con');

		content.insertBefore(div,content.firstElementChild);
		div.innerHTML='<div class="neir">'+textarea.value+'</div><div class="yuan list" ></div><div class="zan">0</div>'
		// var nnn=document.createElement('div');
		// nnn.setAttribute('class','neir');
		// nnn.innerHTML=textarea.value;
		// div.appendChild(nnn);
		// var zzz=document.createElement('div');
		// zzz.setAttribute('class','zan');
		// zzz.innerHTML=0;
		// div.appendChild(zzz);
	
		textarea.value='';
		};
		this.style.opacity='0.5';
		this.style.cursor='text';
	}
	var zuzhi=function(e){
		if(e.target.getAttribute('class')!=='neir'){e.preventDefault();}
		
	};
	content.onmousedown=zuzhi;
	publish.onmousedown=zuzhi;

};//最后