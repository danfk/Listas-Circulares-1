  class Proceso{
    constructor(ciclos){
      this.ciclos=ciclos;
      this.sig=null;
      this.ant=null;
    }
  }
  class ListaCircular{
  	constructor(){
      this.primero=null;
    }
    agregar(nuevo){
    	if (this.primero==null){
        this.primero=nuevo;
        nuevo.sig=nuevo;
        nuevo.ant=nuevo;
      }else{
        nuevo.sig = this.primero;
        nuevo.ant = this.primero.ant;
        this.primero.ant.sig=nuevo;
        this.primero.ant=nuevo;
      }
    }
    actual(){
      return this.primero;
    }
    pasaAlSiguiente(){
      this.primero=this.primero.next;
    }
    extraerActual(){
      let aux=this.primero;
      if (this.primero==null)
        return null;
      if (this.primero.sig==this.primero){
        this.primero=null;
      } else {
  	    this.primero.sig.ant=this.primero.ant;
    	  this.primero.ant.sig=this.primero.sig;
      	this.primero=this.primero.sig;
      }
      return aux;
    }
    
  }
  
  let misProcesos=new ListaCircular();
  let ciclosVacios=0;
  let procesosAtendidos=0;
  for (let i=1; i<=300; i++){
    let probabilidad=Math.floor(Math.random()*100)+1;
    if (probabilidad<=39){
      let ciclos=Math.floor(Math.random()*11)+4;
      let nuevo=new Proceso(ciclos);
      misProcesos.agregar(nuevo);
    }
    if (misProcesos.actual()==null){
      ciclosVacios++;
    }else{
      misProcesos.actual().ciclos--;
      if (misProcesos.actual().ciclos==0){
        misProcesos.extraerActual();
        procesosAtendidos++;
      }else
        misProcesos.pasaAlSiguiente();
    }
  }