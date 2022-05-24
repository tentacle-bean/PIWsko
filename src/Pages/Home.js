import { useEffect, useState } from 'react';
import React from 'react';


const Home = (props) => {
    const {names, setNames, desc, setDesc, tags, setTags, courses, setCourses} = props;

    const [student, setStudent] = useState({
        namesS: names,
        descS: desc,
        tagsS: tags,
        coursesS: courses,
    })



    const [query1, setQuery1] = useState("");

    //const [newStudent, setNewStudent] = useState("");
    const namesHTML = names.map((it, i)=>{
        return <div key={i}>{it}  </div>
    });

    const descHTML = desc.map((it, i)=>{
        return <div key={i}>{it}  </div>
    });

    const tagsHTML = tags.map((it, i)=>{
        return <div key={i}>{it}  </div>
    });

    const coursesHTML = courses.map((it, i)=>{
        return <div key={i}>{it}  </div>
    });

    //const handleNewInput = (event) => {
    //    setNewStudent(event.target.value);
    //}

    //const handleNewStudent = () => {
    //    setStudents(students.concat([newStudent]));
    //    setNewStudent("");S
    //}

    const searchHTML = student.descS.filter((it) => 
        it.includes(query1)).map((it, i)=>{ 
            return <p id={i} key={i}>{student.namesS}</p>
        });
    
    const search = (student) => {
        return <p>aaaaaaa</p>
        /*var input, filter, table, tr, td, i, txtValue;
        input = query1.value;
        filter = input.value.toUpperCase();
        table = document.getElementsByClassName("student");
        //tr = table.getElementById();

        for (i = 0; i < names.length(); i++) {
            //td = tr[i].getElementsByTagName("td")[0];
            td = table.getElementById(i);
            
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }*/
    }
        
    return (
        <div>
            <input 
            type="text" 
            placeholder="Wyszukaj po opisie"
            onChange={(event) => {
                setQuery1(event.target.value);
            }}
            />


            <div className="student">
                <div className="one">
                    {namesHTML}
                </div>
                <div className="two">
                    {descHTML}
                </div>
                <div className="three">
                    {tagsHTML}
                </div>
                <div className="four">
                    {coursesHTML}
                </div>
            </div>

            {search}

        </div>

        
    )
}


export default Home;

//{descHTML}
//{tagsHTML}
//{coursesHTML}
//<input value={newStudent} onChange={handleNewInput} />
//<button onClick={handleNewStudent} type="button">Add </button>