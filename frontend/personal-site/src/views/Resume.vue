<template>
    <div id="resumeNameJobBox">
      <h1 id="resumeNameJob">
        <span id="name">Anthony Premo</span>
      <br>
        <span id="resumeJobTitle">Software Developer</span>
      </h1>
    </div>
    <div id="resumeContactInfo">
    <h6 id="resumeLinkedinLink">
      <a href="linkedin.com/in/anthony-premo">Linkedin</a>
    </h6>
    <h6 id="resumeEmail">
      <a href="mailto:ajaipremo@gmail.com"> ajaipremo@gmail.com</a>
    </h6>
    <h6 id="resumeNumber">(518) 481-4204</h6>
    <h6 id="resumeAddress">
      <a href="https://earth.google.com/web/search/North+Bangor,+NY/@44.84203225,-74.4008638,201.82182539a,3656.22238491d,35y,0h,45t,0r/data=CnsaURJLCiUweDRjY2JmMzU5NmFlZjFhNWQ6MHgzMjY2NjY5ZTU1NjFmN2U5GWQUFbvHa0ZAIZ7Jo8CnmVLAKhBOb3J0aCBCYW5nb3IsIE5ZGAIgASImCiQJTfiHSCE0Q0ARTfiHSCE0Q8AZbr_ho_hBSEAhUBBtkQ-6UMAoAg"> North Bangor, NY</a>
    </h6>
    </div>
  <div class="divLine"></div>
  <div id="resumeSummaryBox">
    <h2 id="resumeSummaryTitle">Summary</h2>
    <p id="resumeSummary">
      Energetic and driven entry-level software engineer, equipped with a robust computer science foundation
      and a deep enthusiasm for crafting effective and inventive solutions. Through immersive participation in
      UpNCoding's rigorous 12-week bootcamp, I have honed my coding skills, refined my problem-solving
      abilities, and cultivated a collaborative mindset. Proficiency in Golang, along with Java and Python,
      underscores my commitment to mastering diverse languages. My adeptness at rapid assimilation,
      coupled with strong communication skills, positions me to surmount challenges and deliver top-notch
      contributions as part of a dynamic software engineering team.
    </p>
  </div>
  <div id="resumeExperienceBox">
      <h2 id="experienceTitle">Experience</h2>
      <h4 id="itEngineer">IT Engineer July 2022 - September 2022</h4>
      <ul id="itBullets">
        <li>
        Replaced/maintained/installed/troubleshooted PCs, networks, mobile devices, security cameras,
        software, OS’ and various networked devices.
        </li>
        <li>
        Completed routine and complex software installations, assisting users of various levels of
        computer sophistication in operating new and existing software.
        </li>
        <li>
        Oversaw equipment inventory to maintain on-hand availability of necessary replacement parts
        and consumable goods.
        </li>
        <li>
        Executed technology implementation projects in a fast-paced environment with minimal
        downtime and business disruptions.
        </li>
      </ul>
  </div>
  <div id="resumeEducationBox">
    <h2 id="educationTitle">Education</h2>
    <div id="UpNCodingEducation">
    <h3 id="upNCoding">UpNCoding's Software Bootcamp May 2023 - Aug 2023</h3>
    <h6 id="nccc">North Country Community College (SUNY)</h6>
    <ul id="UpNCodingBullets">
      <li>
        12-week intensive Golang bootcamp
      </li>
      <li>
        In-depth SDLC, tooling and programming
      </li>
      <li>
        Go, Git, docker, Linux, SQL, AWS, test driven development
      </li>
    </ul>
    </div>
    <div id="snhuEducation">
      <h3 id="snhuDegree">BS, Computer Science Aug 2020 - Oct 2024</h3>
      <h6 id="snhu">Southern New Hampshire University</h6>
      <ul id="snhuBullets">
        <li>
          Part-Time, on-track for Oct 2024 graduation
        </li>
        <li>
          Data Structures, Algorithms, Python, Java, C++, OpenGL
        </li>
      </ul>
    </div>
  </div>
  <div class="divLine"></div>
  <div id="resumeSkills">
    <h2 id="skills">Skills</h2>
    <table id="resumeSkillsTable">
      <tr>
        <th>Git</th>
        <th>Golang</th>
        <th>Docker</th>
        <th>Linux</th>
      </tr>
      <tr>
        <th>SQL</th>
        <th>SDLC</th>
        <th>C++</th>
        <th>Java</th>
      </tr>
      <tr>
        <th>Python</th>
        <th>OpenGL</th>
        <th>Test Automation</th>
        <th>TDD</th>
      </tr>
      <tr>
        <th>Data Structures</th>
        <th>Algorithms</th>
        <th>AWS</th>
        <th>JUnit</th>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import '../assets/Resume.css'
</script>