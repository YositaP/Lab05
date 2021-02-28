document.querySelector('input').addEventListener('keydown', AddList);;


function AddList(a){
    if(a.keyCode === 13){
        var input = document.getElementById('text').value;
        var icon = document.createElement('icon');
        icon.className = "fa fa-trash";
        var ul = document.createElement('ul');

        ul.appendChild(document.createTextNode(input+' '));
        ul.appendChild(icon);
    
        document.body.appendChild(ul).classList.add('selected');
        document.getElementById('text').value='';
    
        icon.addEventListener('click', function() { 
            icon.parentElement.remove();
            ul.classList.remove('selected'); 
        });
        
        ul.addEventListener('click', function(){
            ul.classList.add('done');
        });
    }
}