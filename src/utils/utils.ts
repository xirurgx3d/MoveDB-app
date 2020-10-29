export function debounse(timer:number) {
    let tik:any
    return function (fn:Function,event:any) {
      
      tik && clearTimeout(tik)
      tik = setTimeout(()=>{
        tik = null
        fn(event)
      },timer)
      //clearTimeout(tik -1)
    }
  }