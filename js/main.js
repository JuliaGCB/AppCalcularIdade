function calcularIdade(){
   const anoNascimento = document.getElementById('input-ano').value;
   const mesNascimento = document.getElementById('input-mes').value;
   const diaNascimento = document.getElementById('input-dia').value;

   const dataNascimento = new Date(anoNascimento, mesNascimento, diaNascimento);


  /* if(anoNascimento || mesNascimento || diaNascimento === ''){ 
        alert("Por Favor, coloque uma data de nascimento \ Please enter a date of birth");
   }else{
    
   if(anoNascimento || mesNascimento|| diaNascimento === ""){
      alert("Por Favor, coloque uma data de nascimento \\ Please enter a date of birth");
   }*/
   

   const dataAtual = new Date();
   
   const idadeEmAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
   const mesesRestantes = dataAtual.getMonth() - dataNascimento.getMonth();
   const diasRestantes = dataAtual.getDate() - dataNascimento.getDate();

   const resultado = `${idadeEmAnos}`;
   const result = `${mesesRestantes}`;
   const res = `${diasRestantes}`;
   

   document.getElementById('ano').textContent = resultado;
   document.getElementById('meses').textContent = result;
   document.getElementById('dias').textContent = res;

}