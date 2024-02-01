import React from 'react'
//  

const First = () => {
  return (
    <>

<div className="pura">
<div className="first">
        <section>
            <h1>candidate information</h1>
        </section>
        <section>
            <ul>
                {/* <li><a href="#">Home</a></li> */}
                <button type="submit" className='btn1'>Hire Candidate</button>
                <button type="submit" className='btn2'>Reject</button>
                {/* <li><a href="#">About</a></li> */}
                
            </ul>
        </section>
    </div>
  <div id="all">

  <div class="left">

  <i class="fa-solid fa-user"></i>
  <p style={{textAlign:"center", marginTop:"10px"}}>Vishal Kumar</p>

  <div id="para3">

    <div id="firstpara">
    <p>Position</p>
    <h4>React Developer</h4><br></br>
    <hr></hr>
    </div>

    <div id="secpara">
    <p>Location</p>
    <h4>Mumbai</h4><br></br>
    <hr></hr>
    </div>

    <div id="thirdpara">
    <p>Qualification</p>
    <h4>M.Tech</h4><br></br>
    <hr></hr>
    </div>

    <div id="fourthpara">
    <p>Expected Salary</p>
    <h4>$400</h4><br></br>
    <hr></hr>
    </div>

    <div id="fifthpara">
    <p>Job Preferance</p>
    <h4>Remote</h4>

    </div>

  </div>

</div>
  

  <div class="right">

   

    <div className="secound">
        <fieldset id="third">
            <legend>Overview:</legend>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus distinctio modi illum harum officia sint, sapiente sit sunt explicabo!lorem100
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa voluptatum vitae inventore expedita? Est quas non repellendus aliquam doloribus amet omnis, placeat laborum tenetur, praesentium assumenda voluptate voluptatibus quam at. Aspernatur enim, corporis earum perspiciatis hic voluptates nam sequi cum impedit deleniti, totam labore molestias dolores animi perferendis autem fugit!
        </fieldset>

        <fieldset id="secound">
            <legend>Experience:</legend>
           <div id="para1">
           <p>30/01/24-10/02/24</p>
           </div>
          <div className="para1">
          <ul>
           <h2>React Developer,[Delloite]</h2>
            <li>Developed and maintained key features of the company's flagship web application</li>
            <li>Collaborated with cross-functional teams to implement new features and enhancements.</li>
            <li>Conducted code reviews and provided mentorship to junior developers.</li>
           </ul>
          </div>

          <div id="para2">
           <p>20/01/24-12/02/24</p>
           </div>
          <div className="para2">
          <ul>
            <h2>Frontend Developer,[Google]</h2>
            <li>Contributed to the design and implementation of responsive user interfaces</li>
            <li>Worked closely with UI/UX designers to bring design concepts to life.</li>
           </ul>
          </div>
        </fieldset>

        <fieldset id="fourth" style={{padding:"10px 10px 10px 20px"}}>
            <legend>Skills</legend>
            <li>Reactjs</li>0
            <li>Redux</li>
            <li>Responsive Design</li>
            <li>HTML5&CSS3</li>
            <li>RestfulApi</li>
            <li>git</li>
        </fieldset>
        
        <fieldset id="fifth"style={{padding:"10px 10px 10px 20px"}} >
            <legend>Education</legend>
            <div id="dot1">
            <p>Unversity Name</p>
            <h2>M.Tech</h2>
            </div>
            <div id="dot2">
            <p>Unversity Name</p>
            <h2>B.Tech</h2>
            </div>
        </fieldset>
    </div>

   </div>
   

  </div>
</div>

    
    </>
  )
}

export default First
