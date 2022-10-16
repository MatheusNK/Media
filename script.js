function Calcular(){
   var n1 = document.getElementById('n1').value
   var n2 = document.getElementById('n2').value
   var n3 = document.getElementById('n3').value
   var res = document.getElementById('res')
  
   var media = (Number(n1) + Number(n2) + Number(n3)) / 3

   if (media >= 7){
       res.innerHTML = `Parabens voce foi aprovado com media: ${media}`
   }else if (media <= 6 && media > 0){
       res.innerHTML = `Voce reprovou com média: ${media}, estude mais!`   
   }else{
       window.alert("Digite sua média")
   }
}
    
 

