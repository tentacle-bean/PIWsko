"use strict"

var counter = 0;
var list = document.getElementById("tasks-list");
var dates = document.getElementById("dates-list");
var Xs = document.getElementById("x-list");
var oldId = '';



const adder = () => {
    counter += 1;
    var task = document.getElementById("task").value;
    


    if(task === "") {
        console.warn("pole jest puste");
        return;
    }

    

    const newTask = document.createElement("p");
    newTask.innerHTML = task;
    newTask.setAttribute('id','task_' + counter);

    const newDate = document.createElement("p");
    newDate.innerHTML = '.';
    newDate.setAttribute('id',counter);

    const newX = document.createElement("p"); 
    newX.innerHTML = 'X';
    newX.setAttribute('id', 'remove_' + counter);
    newX.setAttribute('class', "red-x")

    list.append(newTask);
    dates.append(newDate);
    Xs.append(newX);



    document.getElementById("task").value = "";



    newTask.addEventListener('click', function(ev) {
        
        newTask.classList.toggle('checked')
        var row = newTask.getAttribute('id').substring(5,6)

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        
        var change = document.getElementById(row);
        if(change.innerHTML === "."){
            
            change.innerHTML = dateTime;
        }
        else{
            change.innerHTML = "."
        }

    }, false);

    
    $(".red-x").unbind().click(function(e){
        $(".modal").show();
        $("#Tak").unbind().click(()=>{
            $(".modal").hide();
            if(oldId !== ''){
                console.log("usunieto zadanie " + oldId)
                $('#' + 'remove_' + oldId).remove();
                $('#' + 'task_' + oldId).remove();
                $('#' + oldId).remove();
            }
            
            
    
            oldId = $(this).attr('id').substring(7,8)
    
            $('#' + 'remove_' + oldId).hide();
            $('#' + 'task_' + oldId).hide();
            $('#' + oldId).hide();
        });
        $("#Nie").unbind().click(()=>{
            $(".modal").hide();
            return false;    
        });

        

    });

    $('#restore').unbind().click(function(e){
        if(oldId !== ''){
            console.log('przywrocono zadanie ' + oldId);
            $('#' + 'remove_' + oldId).show();
            $('#' + 'task_' + oldId).show();
            $('#' + oldId).show();
            oldId = ''
        }

        return false;
    });
}



    
