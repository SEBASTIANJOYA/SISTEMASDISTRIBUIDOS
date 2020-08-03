  
deja  userScore =  0 ;
deja  compScore =  0 ;
const  userScore_span =  documento . getElementById ( 'puntuación de usuario' ) ;

const  compScore_span =  documento . getElementById ( 'comp-score' ) ;

const  scoreBoard_div =  documento . querySelector ( 'marcador' ) ;
const  result_div =  documento . querySelector ( '.result p' ) ;
const  piedra_div =  documento . getElementById ( 'r' ) ;
const  papel_div =  documento . getElementById ( 'p' ) ;
const  tijera_div =  documento . getElementById ( 't' ) ;

función  movidaComp ( ) {
  const  opciones =  [ 'r' , 'p' , 't' ] ;
  const  random =  Math . piso ( Math . random ( ) * 3 ) ;
  const  movida =  opciones [ aleatorio ] ;
  
  volver  ( movida ) ;
}

función  convertirLetra ( opción ) {
  if  ( opción  ==  'r' ) {
    volver  "Piedra ✊" ;
  } else  if  ( opción  ==  'p' )  {
    volver  "Papel 🤚" ;
  } más  {
    volver  "Tijeras ✌" ;
  }
}

función  ganar ( opcionUser ,  opcionPc ) {
  userScore ++ ;
  userScore_span . innerHTML =  userScore ;
  const  smallUser =  "(USUARIO)" . tamaño de fuente ( 2 ) ;
  const  smallPc =  "(PC)" . tamaño de fuente ( 2 ) ;
  result_div . innerHTML =  convertirLetra ( opcionUser ) + smallUser + "le gana a" + convertirLetra ( opcionPc ) + smallPc + ". <br> Tu ganaste !!" ;
  const  userChoice_div =  documento . getElementById ( opcionUser ) ;
  const  pcChoice_div =  documento . getElementById ( opcionPc ) ;
  userChoice_div . classList . agregar ( 'verde' ) ;
  pcChoice_div . classList . agregar ( 'rojo' ) ;
  setTimeout ( function ( ) {
    userChoice_div . classList . eliminar ( "verde" ) ;
    pcChoice_div . classList . quitar ( "rojo" ) ;
  } ,  2000 ) ;
}

función  pierda ( opcionUser ,  opcionPc ) {
  compScore ++ ;
  compScore_span . innerHTML =  compScore ;
  const  smallUser =  "(USUARIO)" . tamaño de fuente ( 2 ) ;
  const  smallPc =  "(PC)" . tamaño de fuente ( 2 ) ;
  result_div . innerHTML =  convertirLetra ( opcionPc ) + smallPc + "le gana a" + convertirLetra ( opcionUser ) + smallUser + ". <br> Tu perdiste" ;
  const  userChoice_div =  documento . getElementById ( opcionUser ) ;
  const  pcChoice_div =  documento . getElementById ( opcionPc ) ;
  userChoice_div . classList . agregar ( 'rojo' ) ;
  pcChoice_div . classList . agregar ( 'verde' ) ;
  setTimeout ( function ( ) {
    userChoice_div . classList . quitar ( "rojo" ) ;
    pcChoice_div . classList . eliminar ( "verde" ) ;
  } ,  2000 ) ;
}

función  empate ( opcionUser ) {

  result_div . innerHTML =  "Ambos eligierón" + convertirLetra ( opcionUser ) + ". <br> Es un empate !!" ;
  const  opcion_div =  documento . getElementById ( opcionUser ) ;
  opcion_div . classList . agregar ( 'gris' ) ;
  setTimeout ( function ( ) {
  
    opcion_div . classList . eliminar ( "gris" ) ;
  } ,  2000 ) ;
}

 juego de funciones ( opción ) {
  const  movidaPc =  movidaComp ( ) ;
  const  movidaUser =  opcion ;
  switch  ( movidaUser + movidaPc )  {
    caso  'rt' :
    caso  'pr' :
    caso  'tp' :
      ganar ( movidaUser ,  movidaPc ) ;
    romper ;
    caso  'rp' :
    caso  'pt' :
    caso  'tr' :
      pierda ( movidaUser ,  movidaPc ) ;
    romper ;
    caso  'rr' :
    caso  'pp' :
    caso  'tt' :
      empate ( movidaUser ) ;
    romper ;
  }
}

función  main ( ) {

  piedra_div . addEventListener ( 'click' ,  ( )  =>  game ( "r" ) ) ;
  papel_div . addEventListener ( 'click' ,  ( )  =>  juego ( "p" ) ) ;
  tijera_div . addEventListener ( 'click' ,  ( )  =>  juego ( "t" ) ) ;
}
main ( ) ;
