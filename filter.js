const searchFun = ()=>{
    let filter = document.querySelector('#input-btn').value.toUpperCase();
    let mytabel = document.querySelector('.blogs');

    let tr = mytabel.getElementsByTagName('span');

    for(var i = 0 ; i < tr.length ; i++){
        let td = tr[i].getElementsByTagName('h1')[0];
        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(filter)> -1){
tr[i].style.display = '';
            }else{
                tr[i].style.display  = 'none'
            }
        }
    }
}